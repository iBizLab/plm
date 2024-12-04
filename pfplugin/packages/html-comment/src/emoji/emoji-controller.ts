/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  ControllerEvent,
  EventBase,
  IModal,
  IModalData,
  IOverlayPopoverContainer,
  ScriptFactory,
} from '@ibiz-template/runtime';
import { h } from 'vue';
import { Boot, DomEditor, IDomEditor } from '@wangeditor/editor';
import { NOOP, listenJSEvent, strToBase64 } from '@ibiz-template/core';
import emojiModule from './emoji-node-module';
import { Emoji } from '../component';
import { commentEvent } from '../html-comment.event';

/**
 * 用户列表适配器
 *
 * @export
 * @class EmojiController
 * @extends {EditorController}
 */
export class EmojiController {
  /**
   * 编辑器示例
   *
   * @type {IDomEditor}
   * @memberof EmojiController
   */
  public editor!: IDomEditor;

  /**
   * 气泡容器
   *
   * @type {IOverlayPopoverContainer}
   * @memberof EmojiController
   */
  public overlay: IOverlayPopoverContainer | null = null;

  /**
   * 预定义阻止捕获事件code
   *
   * @type {number[]}
   * @memberof EmojiController
   */
  public presetPreventEvents: number[] = [13, 38, 40];

  /**
   * 预定义阻止冒泡事件code
   *
   * @type {number[]}
   * @memberof EmojiController
   */
  public presetPreventPropEvents: number[] = [27];

  /**
   * 编辑器事件
   *
   * @type {ControllerEvent<commentEvent>}
   * @memberof EmojiController
   */
  public evt!: ControllerEvent<commentEvent>;

  /**
   * 删除回调
   *
   * @type {NOOP}
   * @memberof EmojiController
   */
  public cleanup = NOOP;

  /**
   * 声明' :'插件
   *
   * @template T
   * @param {T} editor
   * @return {*}
   * @memberof EmojiController
   */
  public emojiPlugin<T extends IDomEditor>(editor: T): IDomEditor {
    const { isInline, isVoid } = editor;

    /**
     * 根据节点类型定义是否为行内元素
     * @param elem
     * @returns
     */
    editor.isInline = elem => {
      const type = DomEditor.getNodeType(elem);
      if (type === 'emoji') {
        return true;
      }
      return isInline(elem);
    };

    /**
     * 根据节点类型定义是否为 void 节点
     * @param elem
     * @returns
     */
    editor.isVoid = elem => {
      const type = DomEditor.getNodeType(elem);
      if (type === 'emoji') {
        return true;
      }
      return isVoid(elem);
    };

    return editor;
  }

  /**
   * Creates an instance of EmojiController.
   * @param {IData} option
   * @memberof EmojiController
   */
  constructor() {
    this.registerNode();
  }

  public registerNode(): void {
    if (!(window as IData).emojiIsRegiter) {
      Boot.registerModule(emojiModule);
      (window as IData).emojiIsRegiter = true;
    }
    Boot.registerPlugin(this.emojiPlugin.bind(this) as any);
  }

  /**
   * 初始化
   *
   * @param {IDomEditor} editor
   * @memberof EmojiController
   */
  public async init(editor: IDomEditor, option: IData): Promise<void> {
    this.editor = editor;
    this.evt = option.evt;
    this.listenEvent();
  }

  /**
   * 监听事件
   *
   * @private
   * @memberof EmojiController
   */
  private listenEvent() {
    const container = this.editor.getEditableContainer();
    this.editor.on('openEmojiSelect', () => this.openEmojiSelect());
    this.cleanup = listenJSEvent(container, 'keydown', event => {
      if (this.overlay && this.presetPreventEvents.includes(event.keyCode)) {
        event.preventDefault();
      }
      // 监听esc按键，销毁弹框
      if (
        this.overlay &&
        this.presetPreventPropEvents.includes(event.keyCode)
      ) {
        event.stopPropagation();
        this.overlay?.dismiss();
      }
    });
    this.evt.on('onChange', (event: EventBase) => {
      const { eventArg } = event;
      const regx =
        /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu;
      if (eventArg && eventArg.match(regx)?.length) {
        const result = eventArg.replaceAll(regx, value => {
          return `<span data-w-e-type="emoji" class='emoji'>${strToBase64(
            value,
          )}</span>`;
        });
        this.editor.setHtml(result);
      }
    });
  }

  /**
   * 打开表情选择
   *
   * @memberof EmojiController
   */
  private async openEmojiSelect(): Promise<void> {
    const domSelection = document.getSelection()!;
    const { focusNode } = domSelection;
    if (focusNode) {
      this.overlay = ibiz.overlay.createPopover(
        (modal: IModal) => {
          return h(Emoji, {
            controller: this,
            modal,
          });
        },
        undefined,
        {
          width: 'auto',
          noArrow: true,
          autoClose: true,
          placement: 'bottom-start',
        },
      );
      await this.overlay.present(focusNode.parentNode as HTMLElement);
      this.overlay.onWillDismiss().then(result => {
        const _result = result as IModalData;
        const item = _result.data?.[0];
        if (_result.ok && item) {
          this.addEmojiNode(item);
        }
        this.overlay = null;
      });
    }
  }

  /**
   * 添加表情
   *
   * @param {string} data
   * @memberof EmojiController
   */
  private addEmojiNode(data: IData): void {
    const emojiNode = {
      data,
      type: 'emoji',
      children: [{ text: '' }],
    };
    this.editor.restoreSelection();
    this.editor.insertNode(emojiNode);
    this.editor.move(1);
  }

  /**
   * 解析emoji节点
   *
   * @param {string} value
   * @return {*}
   * @memberof EmojiController
   */
  public parseNode(value: string): string {
    return ScriptFactory.execScriptFn(
      { value, controller: this },
      `value.replaceAll(/\\{\\"\\emoji\\":\\"(.+?)\\"\\}/g,(x, emoji) => {return '<span data-w-e-type="emoji" class="emoji">'+emoji+'</span>'})`,
      {
        singleRowReturn: true,
        isAsync: false,
      },
    ) as string;
  }

  public onDestroyed(): void {
    if (this.cleanup !== NOOP) {
      this.cleanup();
    }
    if (this.overlay) {
      this.overlay.dismiss();
    }
  }
}
