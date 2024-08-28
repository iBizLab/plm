import { ControlController, IDRBarController, IDRBarEvent, IDRBarState, IDRBarItemsState, IEditFormController, IPanelItemNavPosController, AppCounter } from '@ibiz-template/runtime';
import { IDEDRBar, IDEDRBarItem } from '@ibiz/model-core';
import { Router } from 'vue-router';
interface IDRBarExState extends IDRBarState {
    /**
     * 是否显示更多
     * @type {boolean}
     */
    showMore: boolean;
}
/**
 * 数据关系栏控制器
 *
 * @export
 * @class DRBarExController
 * @extends {ControlController<IDEDRBar, IDRBarExState, IDRBarEvent>}
 * @implements {IDRBarExController}
 */
export declare class DRBarExController extends ControlController<IDEDRBar, IDRBarExState, IDRBarEvent> implements IDRBarController {
    /**
     * 导航占位控制器
     *
     * @readonly
     * @memberof DRBarExController
     */
    get navPos(): IPanelItemNavPosController;
    /**
     * 表单部件
     *
     * @readonly
     * @memberof DRBarExController
     */
    get form(): IEditFormController;
    /**
     * 是否是新建
     * @author lxm
     * @date 2023-12-11 06:32:04
     * @readonly
     * @type {boolean}
     */
    get isCreate(): boolean;
    /**
     * 获取数据
     *
     * @return {*}  {IData[]}
     * @memberof DRBarExController
     */
    getData(): IData[];
    /**
     * Router 对象
     *
     * @type {Router}
     * @memberof DRTabController
     */
    router: Router;
    /**
     * 设置 Router 对象
     *
     * @param {Router} router
     * @memberof DRTabController
     */
    setRouter(router: Router): void;
    /**
     * 路由层级
     *
     * @readonly
     * @type {(number | undefined)}
     * @memberof DRBarExController
     */
    get routeDepth(): number | undefined;
    /**
     * 存储key前缀
     *
     * @author zhanghengfeng
     * @date 2024-05-22 18:05:13
     * @type {string}
     */
    storagePrefix: string;
    /**
     * 初始化state的属性
     *
     * @protected
     * @memberof DRBarExController
     */
    protected initState(): void;
    /**
     * 创建完成
     *
     * @return {*}  {Promise<void>}
     * @memberof DRBarExController
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
     * 计数器对象
     *
     * @author zhanghengfeng
     * @date 2024-05-20 11:05:16
     * @type {AppCounter}
     */
    counter?: AppCounter;
    /**
     * 通过计数器数据，计算项状态
     *
     * @author zhanghengfeng
     * @date 2024-05-20 11:05:21
     * @param {IData} [_data]
     * @param {boolean} [reset=true]
     */
    calcItemStateByCounter(_data?: IData, reset?: boolean): void;
    /**
     * 获取对应项的显示状态
     *
     * @author zhanghengfeng
     * @date 2024-05-20 11:05:41
     * @param {string} key
     * @return {*}  {{
     *     visible: boolean;
     *     defaultVisibleItem?: IDRBarItemsState;
     *   }}
     */
    getItemVisibleState(key: string): {
        visible: boolean;
        defaultVisibleItem?: IDRBarItemsState;
    };
    /**
     * 计算关系界面组权限
     *
     * @author zhanghengfeng
     * @date 2024-05-20 11:05:54
     * @param {IDRBarItemsState} item
     * @return {*}  {Promise<void>}
     */
    calcPermitted(item: IDRBarItemsState): Promise<void>;
    /**
     * 计算是否展示
     *
     * @author zhanghengfeng
     * @date 2024-05-20 11:05:59
     * @return {*}  {Promise<void>}
     */
    calcDrBarItemsState(): Promise<void>;
    /**
     * 加载完成
     *
     * @return {*}  {Promise<void>}
     * @memberof DRBarExController
     */
    onMounted(): Promise<void>;
    /**
     * 初始化关系项数据
     *
     * @memberof DRBarExController
     */
    initDRBarItems(): void;
    /**
     * 处理选中改变
     *
     * @param {string} key
     * @memberof DRBarExController
     */
    handleSelectChange(key: string, isRoutePushed?: boolean): void;
    /**
     * 设置显示状态
     *
     * @param {('form' | 'navPos')} ctrlName 显示的部件名称
     * @memberof DRBarExController
     */
    setVisible(ctrlName: 'form' | 'navPos'): void;
    /**
     * 准备参数
     *
     * @param {IDEDRBarItem} drBarItem 关系项
     * @return {*}
     * @memberof DRBarExController
     */
    prepareParams(drBarItem: IDEDRBarItem): {
        context: IContext;
        params: IParams;
    };
    /**
     * 打开导航占位视图
     *
     * @param {IDEDRBarItem} drBarItem 关系项
     * @memberof DRBarExController
     */
    openNavPosView(drBarItem: IDEDRBarItem, isRoutePushed?: boolean): Promise<void>;
    /**
     * 处理第一次的默认选中
     * @author lxm
     * @date 2023-12-11 05:38:30
     * @return {*}  {void}
     */
    doDefaultSelect(): void;
    /**
     * 路由变更处理回调
     * @param {{ srfnav?: string; path: string }} info 当前系统的路由的从一级到最后一级的所有路径。
     */
    onRouterChange(info: {
        srfnav: string;
        path: string;
    }): Promise<void>;
    /**
     * 初始化计数器
     *
     * @author zhanghengfeng
     * @date 2024-05-20 11:05:28
     * @protected
     * @return {*}  {Promise<void>}
     */
    protected initCounter(): Promise<void>;
    /**
     * 监听组件销毁
     *
     * @author zhanghengfeng
     * @date 2024-05-20 11:05:37
     * @protected
     * @return {*}  {Promise<void>}
     */
    protected onDestroyed(): Promise<void>;
}
export {};
