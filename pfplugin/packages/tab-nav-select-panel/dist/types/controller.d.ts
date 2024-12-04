import { ControlController, IDRTabController, IDRTabEvent, IDRTabState, IDRTabPagesState, IEditFormController, AppCounter, IViewController, IPickupGridViewState, IPickupGridViewEvent, INavViewMsg, EventBase } from '@ibiz-template/runtime';
import { IAppDEGridView, IDEDRCtrlItem, IDEDRTab } from '@ibiz/model-core';
import { Router } from 'vue-router';
interface ITabNavSelectPanelState extends IDRTabState {
    /**
     * 导航视图详细信息
     */
    navViewMsgs: INavViewMsg | undefined;
    /**
     * 是否启用缓存
     */
    cache: boolean;
    /**
     * 缓存的视图标识
     */
    cacheKeys: string[];
    /**
     * 当前导航视图标识
     */
    currentKey: string;
}
interface ITabNavSelectPanelEvent extends IDRTabEvent {
    /**
     * 数据激活事件
     */
    onDataActive: {
        event: EventBase;
        emitArgs: {
            data: IData[];
        };
    };
    /**
     * 选中数据变更事件
     */
    onSelectionChange: {
        event: EventBase;
        emitArgs: {
            data: IData[];
        };
    };
}
/**
 * 分页导航选择面板控制器
 *
 * @export
 * @class TabNavSelectPanelController
 * @extends {ControlController<IDEDRTab, ITabNavSelectPanelState, ITabNavSelectPanelEvent>}
 * @implements {ITabNavSelectPanelController}
 */
export declare class TabNavSelectPanelController extends ControlController<IDEDRTab, ITabNavSelectPanelState, ITabNavSelectPanelEvent> implements IDRTabController {
    /**
     * 状态对象
     *
     * @type {ITabNavSelectPanelState}
     * @memberof TabNavSelectPanelController
     */
    state: ITabNavSelectPanelState;
    /**
     * 嵌入视图控制器
     *
     * @type {IViewController}
     * @memberof TabNavSelectPanelController
     */
    embedView: IViewController<IAppDEGridView, IPickupGridViewState, IPickupGridViewEvent>;
    /**
     * 计数器对象
     *
     * @type {AppCounter}
     */
    counter?: AppCounter;
    /**
     * 表单部件
     *
     * @readonly
     * @memberof TabNavSelectPanelController
     */
    get form(): IEditFormController;
    /**
     * 路由层级
     *
     * @readonly
     * @type {(number | undefined)}
     * @memberof TabNavSelectPanelController
     */
    get routeDepth(): number | undefined;
    /**
     * Router 对象
     *
     * @type {Router}
     * @memberof TabNavSelectPanelController
     */
    router: Router;
    /**
     * 设置 Router 对象
     *
     * @param {Router} router
     * @memberof TabNavSelectPanelController
     */
    setRouter(router: Router): void;
    /**
     * 获取数据
     *
     * @return {*}  {IData[]}
     * @memberof TabNavSelectPanelController
     */
    getData(): IData[];
    /**
     * 初始化state的属性
     *
     * @protected
     * @memberof TabNavSelectPanelController
     */
    protected initState(): void;
    /**
     * 创建完成
     *
     * @return {*}  {Promise<void>}
     * @memberof TabNavSelectPanelController
     */
    onCreated(): Promise<void>;
    /**
     * 部件参数解析
     *
     * @protected
     * @memberof ControlController
     */
    protected handleControlParams(): void;
    /**
     * 通过计数器数据，计算项状态
     *
     * @protected
     * @memberof ControlController
     */
    calcItemStateByCounter(): void;
    /**
     * 获取对应项的显示状态
     *
     * @param {string} key
     * @return {*}  {{
     *     visible: boolean;
     *     defaultVisibleItem?: IDRTabPagesState;
     *   }}
     */
    getItemVisibleState(key: string): {
        visible: boolean;
        defaultVisibleItem?: IDRTabPagesState;
    };
    /**
     * 计算项权限
     *
     * @param {IDRTabPagesState} item
     * @return {*}  {Promise<void>}
     */
    calcPermitted(item: IDRTabPagesState): Promise<void>;
    /**
     * 计算项状态
     *
     * @return {*}  {Promise<void>}
     */
    calcDrTabPagesState(): Promise<void>;
    /**
     * 加载完成
     *
     * @return {*}  {Promise<void>}
     * @memberof TabNavSelectPanelController
     */
    onMounted(): Promise<void>;
    /**
     * 处理表单数据变更
     *
     * @memberof TabNavSelectPanelController
     */
    handleFormChange(): void;
    /**
     * 设置关系分页状态
     *
     * @param {IDRTabPagesState[]} drTabPages 关系分页
     * @param {boolean} disabled 禁用状态
     * @memberof TabNavSelectPanelController
     */
    setDRTabPagesState(drTabPages: IDRTabPagesState[], disabled: boolean): void;
    /**
     * 初始化关系分页数据
     *
     * @memberof TabNavSelectPanelController
     */
    initDRTabPages(): void;
    /**
     * 处理分页改变
     *
     * @param {boolean} [isRoutePushed=false] 是否是路由已经跳转过了
     */
    handleTabChange(isRoutePushed?: boolean): void;
    /**
     * 切换时清空父多项选择视图简单列表内容
     *
     * @protected
     * @memberof ControlController
     */
    handleClearSelectData(): void;
    /**
     * 设置显示状态
     *
     * @param {('form' | 'navPos')} ctrlName 显示的部件名称
     * @memberof TabNavSelectPanelController
     */
    setVisible(ctrlName: 'form' | 'navPos'): void;
    /**
     * 准备参数
     *
     * @param {IDEDRCtrlItem} drTabPages 关系分页
     * @return {*}
     * @memberof TabNavSelectPanelController
     */
    prepareParams(drTabPages: IDEDRCtrlItem): {
        context: IContext;
        params: IParams;
    };
    /**
     * 打开导航占位视图
     *
     * @param {IDEDRCtrlItem} drTabPages
     * @param {boolean} [isRoutePushed=false]
     * @return {*}  {Promise<void>}
     */
    openNavPosView(drTabPages: IDEDRCtrlItem, isRoutePushed?: boolean): Promise<void>;
    /**
     * 计算缓存 key 标识
     */
    protected calcCacheKey(msg: INavViewMsg): string;
    /**
     * 设置嵌入视图
     *
     * @param {IViewController} view
     * @memberof TabNavSelectPanelController
     */
    setEmbedView(view: IViewController<IAppDEGridView, IPickupGridViewState, IPickupGridViewEvent>): void;
    /**
     * 处理event数据抛值为实体数据
     *
     * @param {IParams} event
     * @return {*}  {IData[]}
     * @memberof TabNavSelectPanelController
     */
    handleEventData(data?: IParams): IData[];
    /**
     * 初始化计数器
     *
     * @protected
     * @return {*}  {Promise<void>}
     */
    protected initCounter(): Promise<void>;
    /**
     * 监听组件销毁
     *
     * @protected
     * @return {*}  {Promise<void>}
     */
    protected onDestroyed(): Promise<void>;
    /**
     * 获取选中数据
     *
     * @return {*}  {Promise<IData[]>}
     * @memberof TabNavSelectPanelController
     */
    getSelectedData(): Promise<IData[]>;
    /**
     * 获取全部数据
     *
     * @return {*}  {Promise<IData[]>}
     * @memberof TabNavSelectPanelController
     */
    getAllData(): Promise<IData[]>;
}
export {};
