import { ControlController, IDRBarController, IDRBarEvent, IDRBarState, IDRBarItemsState, IEditFormController, IPanelItemNavPosController, AppCounter, IPanelItemController } from '@ibiz-template/runtime';
import { IDEDRBar, IDEDRBarItem } from '@ibiz/model-core';
import { Router } from 'vue-router';
/**
 * 数据关系栏控制器
 *
 * @export
 * @class DRBarController
 * @extends {ControlController<IDEDRBar, IDRBarState, IDRBarEvent>}
 * @implements {IDRBarController}
 */
export declare class DRBarController extends ControlController<IDEDRBar, IDRBarState, IDRBarEvent> implements IDRBarController {
    /**
     * 计数器对象
     * @author lxm
     * @date 2024-01-18 05:12:35
     * @type {AppCounter}
     */
    counter?: AppCounter;
    /**
     * 导航占位控制器
     *
     * @readonly
     * @memberof DRBarController
     */
    get navPos(): IPanelItemNavPosController;
    /**
     * 导航视图容器控制器
     * @return {*}
     * @author: zhujiamin
     * @Date: 2024-01-25 16:03:00
     */
    get viewNavPos(): IPanelItemController | undefined;
    /**
     * 表单部件
     *
     * @readonly
     * @memberof DRBarController
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
     * @memberof DRBarController
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
     * @memberof DRBarController
     */
    get routeDepth(): number | undefined;
    /**
     * 初始化state的属性
     *
     * @protected
     * @memberof DRBarController
     */
    protected initState(): void;
    /**
     * 路由跳转项
     *
     * @protected
     * @memberof DRBarController
     */
    routeItems: string[];
    /**
     * 是否启用返回按钮
     *
     * @protected
     * @memberof DRBarController
     */
    enableBack: boolean;
    /**
     * 返回的视图id
     *
     * @author zhanghengfeng
     * @date 2024-05-11 17:05:05
     * @type {string}
     */
    viewId: string;
    /**
     * 创建完成
     *
     * @return {*}  {Promise<void>}
     * @memberof DRBarController
     */
    onCreated(): Promise<void>;
    /**
     * 通过计数器数据，计算项状态
     *
     * @author zhanghengfeng
     * @date 2024-05-16 18:05:14
     * @param {IData} [_data]
     * @param {boolean} [reset=true]
     */
    calcItemStateByCounter(_data?: IData, reset?: boolean): void;
    /**
     * 获取对应项的显示状态
     *
     * @author zhanghengfeng
     * @date 2024-05-16 17:05:15
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
     * @param {IDRBarItemsState} item 关系组成员
     * @memberof DRBarController
     */
    calcPermitted(item: IDRBarItemsState): Promise<void>;
    /**
     * 计算是否展示
     *
     * @param {IData} item 关系组成员
     * @memberof DRBarController
     */
    calcDrBarItemsState(): Promise<void>;
    /**
     * 加载完成
     *
     * @return {*}  {Promise<void>}
     * @memberof DRBarController
     */
    onMounted(): Promise<void>;
    /**
     * 处理表单数据变更
     *
     * @memberof DRBarController
     */
    handleFormChange(): void;
    /**
     * 设置关系项状态
     *
     * @param {IDRBarItemsState[]} drBarItems 关系项
     * @param {boolean} disabled 禁用状态
     * @memberof DRBarController
     */
    setDRBarItemsState(drBarItems: IDRBarItemsState[], disabled: boolean): void;
    /**
     * 初始化关系项数据
     *
     * @memberof DRBarController
     */
    initDRBarItems(): void;
    /**
     * 处理返回按钮点击
     *
     * @param {string} key
     * @memberof DRBarController
     */
    handleBack(): void;
    /**
     * 处理选中改变
     *
     * @param {string} key
     * @memberof DRBarController
     */
    handleSelectChange(key?: string, isRoutePushed?: boolean): void;
    /**
     * 设置显示状态
     *
     * @param {('form' | 'navPos')} ctrlName 显示的部件名称
     * @memberof DRBarController
     */
    setVisible(ctrlName: 'form' | 'navPos'): void;
    /**
     * 准备参数
     *
     * @param {IDEDRBarItem} drBarItem 关系项
     * @return {*}
     * @memberof DRBarController
     */
    prepareParams(drBarItem: IDEDRBarItem): {
        context: IContext;
        params: IParams;
    };
    /**
     * 打开导航占位视图
     *
     * @param {IDEDRBarItem} drBarItem 关系项
     * @memberof DRBarController
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
     * 初始化计数器
     * @author lxm
     * @date 2024-01-18 05:12:02
     * @protected
     * @return {*}  {Promise<void>}
     */
    protected initCounter(): Promise<void>;
    /**
     * 监听组件销毁
     *
     * @author zhanghengfeng
     * @date 2024-04-10 19:04:43
     * @protected
     * @return {*}  {Promise<void>}
     */
    protected onDestroyed(): Promise<void>;
}
