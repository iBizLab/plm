import { ControllerEvent, IModal, IOverlayPopoverContainer } from '@ibiz-template/runtime';
import { IEditor } from '@ibiz/model-core';
import { VNode } from 'vue';
import { IDomEditor } from '@wangeditor/editor';
import { commentEvent } from '../html-comment.event';
/**
 * 用户列表适配器
 *
 * @export
 * @class MenTionController
 * @extends {EditorController}
 */
export declare class MenTionController {
    /**
     *云系统操作者Map
     *
     * @memberof MenTionController
     */
    operatorMap: Map<any, any>;
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
     * 用户请求url
     *
     * @type {string}
     * @memberof MenTionController
     */
    userUrl: string;
    /**
     * 人员UI转化
     */
    userFieldMap: IData;
    /**
     * 请求方法
     *
     * @type {('post' | 'get')}
     * @memberof MenTionController
     */
    userMethod: 'post' | 'get';
    /**
     * 转换脚本
     *
     * @type {string}
     * @memberof MenTionController
     */
    userScript: string;
    /**
     * 逆转换脚本
     *
     * @type {string}
     * @memberof MenTionController
     */
    userInScript: string;
    /**
     * 编辑器参数
     *
     * @type {IData}
     * @memberof MenTionController
     */
    editorParams: IData | undefined;
    /**
     * 用户数据
     *
     * @type {IData[]}
     * @memberof MenTionController
     */
    items: IData[];
    /**
     * 气泡容器
     *
     * @type {IOverlayPopoverContainer}
     * @memberof MenTionController
     */
    overlay: IOverlayPopoverContainer | null;
    /**
     * 编辑器事件
     *
     * @type {ControllerEvent<commentEvent>}
     * @memberof MenTionController
     */
    evt: ControllerEvent<commentEvent>;
    /**
     * 是否正在执行
     *
     * @private
     * @type {boolean}
     * @memberof MenTionController
     */
    execting: boolean;
    /**
     * 搜索字段
     *
     * @type {string}
     * @memberof MenTionController
     */
    query: string;
    /**
     * 当前页
     *
     * @type {number}
     * @memberof MenTionController
     */
    curPage: number;
    /**
     * 分页条数
     *
     * @type {number}
     * @memberof MenTionController
     */
    size: number;
    /**
     * 预定义阻止捕获事件code
     *
     * @type {number[]}
     * @memberof MenTionController
     */
    presetPreventEvents: number[];
    /**
     * 预定义阻止冒泡事件code
     *
     * @type {number[]}
     * @memberof MenTionController
     */
    presetPreventPropEvents: number[];
    /**
     * 删除回调
     *
     * @type {NOOP}
     * @memberof MenTionController
     */
    cleanup: () => void;
    /**
     * 声明'@'插件
     *
     * @template T
     * @param {T} editor
     * @return {*}
     * @memberof MenTionController
     */
    mentionPlugin<T extends IDomEditor>(editor: T): T;
    /**
     * Creates an instance of MenTionController.
     * @param {IData} option
     * @memberof MenTionController
     */
    constructor();
    registerNode(): void;
    /**
     * 初始化
     *
     * @param {IDomEditor} editor
     * @memberof MenTionController
     */
    init(editor: IDomEditor, option: IData): Promise<void>;
    /**
     * 获取云系统操作者
     *
     * @memberof MenTionController
     */
    getOperatorUserList(): Promise<void>;
    onDestroyed(): void;
    showModal(): void;
    /**
     * 插入@
     *
     * @param {IDomEditor} editor
     * @memberof MenTionController
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
     * 解析mention节点
     *
     * @param {string} value
     * @return {*}
     * @memberof MenTionController
     */
    parseNode(value: string): string;
    /**
     * 处理公共参数
     *
     * @param {IData} data
     * @param {IContext} context
     * @param {IParams} params
     * @return {*}  {{ context: IContext; params: IParams }}
     * @memberof MenTionController
     */
    handlePublicParams(data: IData, context: IContext, params: IParams): {
        context: IContext;
        params: IParams;
    };
    /**
     * 获取用户信息
     *
     * @param {IData} data
     * @return {*}  {Promise<IData[]>}
     * @memberof MenTionController
     */
    getUsers(args?: IData): Promise<IData>;
    /**
     * 转换ui数据
     *
     * @param {IData[]} data
     * @return {*}  {IData[]}
     * @memberof MenTionController
     */
    toUIData(data: IData[]): IData[];
    /**
     * 打开用户列表气泡框
     *
     * @param {HTMLElement} event
     * @memberof MenTionController
     */
    openUserPopover(event: HTMLElement): Promise<IData[]>;
    createOverlayView(): (modal: IModal) => VNode;
}
