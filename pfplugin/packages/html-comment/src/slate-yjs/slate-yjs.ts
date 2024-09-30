/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Y from 'yjs';
import { Ref, reactive, ref } from 'vue';
import { IDomEditor } from '@wangeditor/editor';
import {
  withYjs,
  YjsEditor,
  withCursors,
  withMarkdown,
  withNormalize,
  withYHistory,
  CursorEditor,
  CursorState,
  RemoteCursorChangeEventListener,
  slateNodesToInsertDelta,
} from './core';
import { getCursorData, getDefaultView } from './cursor';
import { CollaborateManager, WebsocketProvider } from './y-websocket';

interface ISlateYjsOption {
  /**
   * 房间名称
   *
   * @type {string}
   * @memberof ISlateYjsOption
   */
  roomname: string;

  /**
   * wangEditor 编辑器实例
   *
   * @type {IDomEditor}
   * @memberof ISlateYjsOption
   */
  editor: IDomEditor;

  /**
   * 上下文
   *
   * @type {IContext}
   * @memberof ISlateYjsOption
   */
  context: IContext;

  /**
   * 视图参数
   *
   * @type {IParams}
   * @memberof ISlateYjsOption
   */
  params: IParams;

  /**
   * 富文本编辑器Ref
   *
   * @type {*}
   * @memberof ISlateYjsOption
   */
  htmlRef?: any;
}

/**
 * SlateYjs
 *
 * @export
 * @class SlateYjs
 */
export class SlateYjs {
  /**
   * Yjs 文档
   *
   * @private
   * @type {Y.Doc}
   * @memberof Yjs
   */
  private yDoc: Y.Doc = new Y.Doc();

  /**
   * 协同编辑管理器
   *
   * @private
   * @memberof SlateYjs
   */
  private collaborateManager = new CollaborateManager();

  /**
   * Yjs ws 适配器
   *
   * @type {WebsocketProvider | undefined}
   * @memberof Yjs
   */
  private wsProvider: WebsocketProvider | undefined;

  /**
   * 是否初始化完成
   *
   * @private
   * @type {Ref<boolean>}
   * @memberof Yjs
   */
  public inited: Ref<boolean> = ref(false);

  /**
   * yjs 编辑器实例
   *
   * @type {YjsEditor | undefined}
   * @memberof Yjs
   */
  public yjsEditor: YjsEditor | undefined;

  /**
   * 光标状态信息
   *
   * @memberof Yjs
   */
  public cursorStates: Record<string, CursorState> = reactive({});

  /**
   * 光标处理
   *
   * @private
   * @type {(RemoteCursorChangeEventListener | null)}
   * @memberof Yjs
   */
  private cursorHandler: RemoteCursorChangeEventListener | null = null;

  /**
   * Creates an instance of SlateYjs.
   * @memberof SlateYjs
   */
  constructor(private enableRealtime: boolean) {
    this.inited.value = !enableRealtime;
  }

  /**
   * 初始化YJS 必须调用
   *
   * @param {ISlateYjsOption} opt
   * @return {*}  {Promise<void>}
   * @memberof Yjs
   */
  async initYjs(opt: ISlateYjsOption): Promise<void> {
    if (!this.inited.value) {
      const initValue = [...opt.editor.children];
      const shared = this.yDoc.get('content', Y.XmlText);
      const collaborateRoom = await this.collaborateManager.create(
        opt.context,
        opt.params,
        opt.roomname,
        this.yDoc,
      );
      this.wsProvider = collaborateRoom.connectionProvider;
      // TODO 初始化共享值 目前有2秒左右延时，后续通过loading优化空白问题
      this.wsProvider.on('status', (event: any): void => {
        if (event.status === 'connected' && !this.inited.value) {
          setTimeout(() => {
            this.inited.value = true;
            if (!shared.toJSON() && initValue.length > 0) {
              shared.applyDelta(slateNodesToInsertDelta(initValue));
            }
          }, 1000);
        }
      });
      // 使用SlateYjs包装编辑器实例
      this.yjsEditor = withMarkdown(
        withNormalize(
          withYHistory(
            withCursors(
              withYjs(opt.editor, shared, getDefaultView(opt.htmlRef?.$el)!, {
                autoConnect: true,
              }),
              this.wsProvider!.awareness,
              {
                data: getCursorData(opt.context.srfusername),
              },
            ),
          ),
        ),
      );
      this.initCursorHandler();
    }
  }

  /**
   * 初始化光标处理
   *
   * @private
   * @memberof Yjs
   */
  private initCursorHandler(): void {
    if (!this.cursorHandler && this.yjsEditor) {
      // 链接标识集合
      const clientIds = new Set<number>();
      this.cursorHandler = (event): void => {
        event.added.forEach(id => clientIds.add(id));
        event.removed.forEach(id => clientIds.add(id));
        event.updated.forEach(id => clientIds.add(id));
        clientIds.forEach(clientId => {
          const state = CursorEditor.cursorState(
            this.yjsEditor as CursorEditor,
            clientId,
          );
          if (state === null) {
            delete this.cursorStates[clientId.toString()];
          } else {
            this.cursorStates[clientId] = state;
          }
        });
      };
      CursorEditor.on(
        this.yjsEditor as CursorEditor,
        'change',
        this.cursorHandler,
      );
    }
  }

  /**
   * 销毁
   *
   * @memberof Yjs
   */
  destroy(): void {
    // 关闭编辑器连接
    this.yjsEditor?.disconnect();
    this.wsProvider!.disconnect();
    if (this.cursorHandler) {
      CursorEditor.off(
        this.yjsEditor as CursorEditor,
        'change',
        this.cursorHandler,
      );
      this.cursorHandler = null;
    }
    this.yjsEditor?.destroy();
  }
}
