import { VNode } from 'vue';
import { IDomEditor } from '@wangeditor/editor';
import { IModal, IModalData, IOverlayPopoverContainer } from '@ibiz-template/runtime';
import { IEditor } from '@ibiz/model-core';
/**
 * 用户列表适配器
 *
 * @export
 * @class InsertController
 * @extends {InsertController}
 */
export declare class InsertController {
    /**
     * 模型
     *
     * @type {IEditor}
     * @memberof MenTionController
     */
    model: IEditor;
    /**
     * 上下文
     *
     * @type {IContext}
     */
    context: IContext;
    /**
     * 视图参数
     *
     * @type {IParams}
     */
    params: IParams;
    /**
     * 表单数据
     *
     * @type {IData}
     * @memberof MenTionController
     */
    data: IData;
    /**
     * 编辑器示例
     *
     * @type {IDomEditor}
     * @memberof MenTionController
     */
    editor: IDomEditor;
    /**
     * 编辑器参数
     *
     * @type {IData}
     * @memberof MenTionController
     */
    editorParams: IData | undefined;
    /**
     * 编辑器示例
     *
     * @type {IDomEditor}
     * @memberof InsertController
     */
    wangEditor: IDomEditor;
    /**
     * 编辑内容区
     */
    container: any;
    /**
     * 气泡容器
     *
     * @type {IOverlayPopoverContainer}
     * @memberof InsertController
     */
    overlay: IOverlayPopoverContainer | null;
    /**
     * 预定义阻止捕获事件code
     *
     * @type {number[]}
     * @memberof InsertController
     */
    presetPreventEvents: number[];
    /**
     * 预定义阻止冒泡事件code
     *
     * @type {number[]}
     * @memberof InsertController
     */
    presetPreventPropEvents: number[];
    /**
     * 插入项
     *
     * @type {number[]}
     * @memberof InsertController
     */
    insertMap: import("../component/insert/insert-select/interface").IInsertItem[];
    /**
     * 删除回调
     *
     * @type {NOOP}
     * @memberof InsertController
     */
    cleanup: () => void;
    /**
     * 声明插件
     *
     * @template T
     * @param {T} editor
     * @return {*}
     * @memberof InsertController
     */
    insertPlugin<T extends IDomEditor>(editor: T): IDomEditor;
    /**
     * Creates an instance of InsertController.
     * @memberof InsertController
     */
    constructor();
    registerNode(): void;
    /**
     * 初始化
     *
     * @param {IDomEditor} editor
     * @memberof InsertController
     */
    init(wangEditor: IDomEditor, option: IData): Promise<void>;
    /**
     * 监听事件
     *
     * @private
     * @memberof InsertController
     */
    listenEvent(): void;
    /**
     * 处理按键抬起
     */
    handleKeyup(event: any): void;
    /**
     * 处理鼠标抬起
     */
    handleMouseup(): void;
    /**
     * 处理移动
     * 37, 38, 39, 40 上下左右键
     */
    handleMove(keyCode: number): void;
    /**
     * 处理插入项值改变
     */
    handleInsertChange(e: IParams): void;
    /**
     * 获取自定义元素path
     *
     * @param {Element} element 自定义元素节点
     * @memberof InsertController
     * @returns {number[]}
     */
    getCustomNodePath(element: Element): number[];
    /**
     * 打开插入选择
     *
     * @memberof InsertController
     */
    openInsertSelect(): Promise<void>;
    /**
     * 打开文件上传
     *
     * @memberof InsertController
     */
    openFilesUpload(): Promise<void>;
    /**
     * 添加节点
     *
     * @param {IData} data
     * @param {string} type
     * @memberof InsertController
     */
    addNode(data: IData, type: string): void;
    /**
     * 打开弹窗
     *
     * @param {HTMLElement} target
     * @returns {Promise<IModalData>}
     */
    openPopover(target: HTMLElement, params?: IParams): Promise<IModalData>;
    /**
     * 创建弹窗内元素
     *
     * @param {JSX.Element | string} component
     * @returns {VNode}
     */
    createOverlayView(): (modal: IModal) => VNode;
    /**
     * 解析emoji节点
     *
     * @param {string} value
     * @return {*}
     * @memberof InsertController
     * @memberof InsertController
     */
    parseNode(value: string): string;
    /**
     * 销毁
     *
     * @memberof InsertController
     */
    onDestroyed(): void;
}
