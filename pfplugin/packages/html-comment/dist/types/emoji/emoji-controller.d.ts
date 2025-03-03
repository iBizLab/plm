import { ControllerEvent, IOverlayPopoverContainer } from '@ibiz-template/runtime';
import { IDomEditor } from '@wangeditor/editor';
import { commentEvent } from '../html-comment.event';
/**
 * 用户列表适配器
 *
 * @export
 * @class EmojiController
 * @extends {EditorController}
 */
export declare class EmojiController {
    /**
     * 编辑器示例
     *
     * @type {IDomEditor}
     * @memberof EmojiController
     */
    editor: IDomEditor;
    /**
     * 气泡容器
     *
     * @type {IOverlayPopoverContainer}
     * @memberof EmojiController
     */
    overlay: IOverlayPopoverContainer | null;
    /**
     * 预定义阻止捕获事件code
     *
     * @type {number[]}
     * @memberof EmojiController
     */
    presetPreventEvents: number[];
    /**
     * 预定义阻止冒泡事件code
     *
     * @type {number[]}
     * @memberof EmojiController
     */
    presetPreventPropEvents: number[];
    /**
     * 编辑器事件
     *
     * @type {ControllerEvent<commentEvent>}
     * @memberof EmojiController
     */
    evt: ControllerEvent<commentEvent>;
    /**
     * 删除回调
     *
     * @type {NOOP}
     * @memberof EmojiController
     */
    cleanup: () => void;
    /**
     * 声明' :'插件
     *
     * @template T
     * @param {T} editor
     * @return {*}
     * @memberof EmojiController
     */
    emojiPlugin<T extends IDomEditor>(editor: T): IDomEditor;
    /**
     * Creates an instance of EmojiController.
     * @param {IData} option
     * @memberof EmojiController
     */
    constructor();
    registerNode(): void;
    /**
     * 初始化
     *
     * @param {IDomEditor} editor
     * @memberof EmojiController
     */
    init(editor: IDomEditor, option: IData): Promise<void>;
    /**
     * 监听事件
     *
     * @private
     * @memberof EmojiController
     */
    private listenEvent;
    /**
     * 打开表情选择
     *
     * @memberof EmojiController
     */
    private openEmojiSelect;
    /**
     * 添加表情
     *
     * @param {string} data
     * @memberof EmojiController
     */
    private addEmojiNode;
    /**
     * 解析emoji节点
     *
     * @param {string} value
     * @return {*}
     * @memberof EmojiController
     */
    parseNode(value: string): string;
    onDestroyed(): void;
}
