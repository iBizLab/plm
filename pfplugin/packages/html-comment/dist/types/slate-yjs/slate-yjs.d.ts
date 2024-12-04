import { Ref } from 'vue';
import { IDomEditor } from '@wangeditor/editor';
import { YjsEditor, CursorState } from './core';
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
export declare class SlateYjs {
    private enableRealtime;
    /**
     * Yjs 文档
     *
     * @private
     * @type {Y.Doc}
     * @memberof Yjs
     */
    private yDoc;
    /**
     * 协同编辑管理器
     *
     * @private
     * @memberof SlateYjs
     */
    private collaborateManager;
    /**
     * Yjs ws 适配器
     *
     * @type {WebsocketProvider | undefined}
     * @memberof Yjs
     */
    private wsProvider;
    /**
     * 是否初始化完成
     *
     * @private
     * @type {Ref<boolean>}
     * @memberof Yjs
     */
    inited: Ref<boolean>;
    /**
     * yjs 编辑器实例
     *
     * @type {YjsEditor | undefined}
     * @memberof Yjs
     */
    yjsEditor: YjsEditor | undefined;
    /**
     * 光标状态信息
     *
     * @memberof Yjs
     */
    cursorStates: Record<string, CursorState>;
    /**
     * 光标处理
     *
     * @private
     * @type {(RemoteCursorChangeEventListener | null)}
     * @memberof Yjs
     */
    private cursorHandler;
    /**
     * Creates an instance of SlateYjs.
     * @memberof SlateYjs
     */
    constructor(enableRealtime: boolean);
    /**
     * 初始化YJS 必须调用
     *
     * @param {ISlateYjsOption} opt
     * @return {*}  {Promise<void>}
     * @memberof Yjs
     */
    initYjs(opt: ISlateYjsOption): Promise<void>;
    /**
     * 初始化光标处理
     *
     * @private
     * @memberof Yjs
     */
    private initCursorHandler;
    /**
     * 销毁
     *
     * @memberof Yjs
     */
    destroy(): void;
}
export {};
