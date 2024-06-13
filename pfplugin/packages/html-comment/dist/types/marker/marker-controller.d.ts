import { CodeListItem, ControllerEvent, IModal, IOverlayPopoverContainer } from '@ibiz-template/runtime';
import { IEditor } from '@ibiz/model-core';
import { VNode } from 'vue';
import { IDomEditor } from '@wangeditor/editor';
import { commentEvent } from '../html-comment.event';
/**
 * 用户列表适配器
 *
 * @export
 * @class MarkerController
 * @extends {EditorController}
 */
export declare class MarkerController {
    /**
     * 模型
     *
     * @type {IEditor}
     * @memberof MarkerController
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
     * @memberof MarkerController
     */
    data: IData;
    /**
     * 编辑器示例
     *
     * @type {IDomEditor}
     * @memberof MarkerController
     */
    editor: IDomEditor;
    /**
     * 引用请求url
     *
     * @type {string}
     * @memberof MarkerController
     */
    quoteUrl: string;
    /**
     * 人员UI转化
     */
    quoteFieldMap: IData;
    /**
     * 代码表map
     *
     * @type {IData}
     * @memberof MarkerController
     */
    quoteCodelistMap: Map<string, IData>;
    /**
     * 请求方法
     *
     * @type {('post' | 'get')}
     * @memberof MarkerController
     */
    quoteMethod: 'post' | 'get';
    /**
     * 请求参数
     *
     * @type {IData}
     * @memberof MarkerController
     */
    quoteParams: IData;
    /**
     * 转换脚本
     *
     * @type {string}
     * @memberof MenTionController
     */
    quoteScript: string;
    /**
     * 逆转换脚本
     *
     * @type {string}
     * @memberof MenTionController
     */
    quoteInScript: string;
    /**
     * 编辑器参数
     *
     * @type {IData}
     * @memberof MarkerController
     */
    editorParams: IData | undefined;
    /**
     * 用户数据
     *
     * @type {IData[]}
     * @memberof MarkerController
     */
    items: IData[];
    /**
     * 气泡容器
     *
     * @type {IOverlayPopoverContainer}
     * @memberof MarkerController
     */
    overlay: IOverlayPopoverContainer | null;
    /**
     * 编辑器事件
     *
     * @type {ControllerEvent<commentEvent>}
     * @memberof MarkerController
     */
    evt: ControllerEvent<commentEvent>;
    /**
     * 是否正在执行
     *
     * @private
     * @type {boolean}
     * @memberof MarkerController
     */
    execting: boolean;
    /**
     * 搜索字段
     *
     * @type {string}
     * @memberof MarkerController
     */
    query: string;
    /**
     * 当前页
     *
     * @type {number}
     * @memberof MarkerController
     */
    curPage: number;
    /**
     * 分页条数
     *
     * @type {number}
     * @memberof MarkerController
     */
    size: number;
    /**
     * 预定义阻止捕获事件code
     *
     * @type {number[]}
     * @memberof MarkerController
     */
    presetPreventEvents: number[];
    /**
     * 预定义阻止冒泡事件code
     *
     * @type {number[]}
     * @memberof MarkerController
     */
    presetPreventPropEvents: number[];
    /**
     * 删除回调
     *
     * @type {NOOP}
     * @memberof MarkerController
     */
    cleanup: () => void;
    /**
     * 声明'@'插件
     *
     * @template T
     * @param {T} editor
     * @return {*}
     * @memberof MarkerController
     */
    markerPlugin<T extends IDomEditor>(editor: T): T;
    /**
     * Creates an instance of MarkerController.
     * @param {IData} option
     * @memberof MarkerController
     */
    constructor();
    registerNode(): void;
    /**
     * 初始化
     *
     * @param {IDomEditor} editor
     * @memberof MarkerController
     */
    init(editor: IDomEditor, option: IData): Promise<void>;
    onDestroyed(): void;
    setCodeListMap(items: IData): Promise<void>;
    showModal(): void;
    findCodeListItem(codelist: CodeListItem[] | undefined, value: string | number): CodeListItem | undefined;
    /**
     * 插入@
     *
     * @param {IDomEditor} editor
     * @memberof MarkerController
     */
    insertNode(data: IData): void;
    /**
     * 获取节点信息
     *
     * @param {IData} data
     * @memberof MenTionController
     */
    getNodeInfo(data: IData): string;
    /**
     * 解析marker节点
     *
     * @param {string} value
     * @return {*}
     * @memberof MarkerController
     */
    parseNode(value: string): string;
    /**
     * 处理公共参数
     *
     * @param {IData} data
     * @param {IContext} context
     * @param {IParams} params
     * @return {*}  {{ context: IContext; params: IParams }}
     * @memberof MarkerController
     */
    handlePublicParams(data: IData, context: IContext, params: IParams): {
        context: IContext;
        params: IParams;
    };
    /**
     * 获取工作项信息
     *
     * @param {IData} data
     * @return {*}  {Promise<IData[]>}
     * @memberof MarkerController
     */
    load(args?: IData): Promise<IData>;
    /**
     * 转换ui数据
     *
     * @param {IData[]} data
     * @return {*}  {IData[]}
     * @memberof MarkerController
     */
    toUIData(data: IData[]): IData[];
    /**
     * 打开用户列表气泡框
     *
     * @param {HTMLElement} event
     * @memberof MarkerController
     */
    openPopover(event: HTMLElement): Promise<IData[]>;
    createOverlayView(): (modal: IModal) => VNode;
    /**
     * 加载代码表
     *
     * @param {string} appCodeListId
     * @return {*}  {(Promise<IData | undefined>)}
     * @memberof MarkerController
     */
    loadCodeList(appCodeListId: string): Promise<IData | undefined>;
}
