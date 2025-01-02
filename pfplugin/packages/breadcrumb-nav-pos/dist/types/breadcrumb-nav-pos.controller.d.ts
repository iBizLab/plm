import { RouteLocationNormalizedLoaded as Route } from 'vue-router';
import { NavPosController } from '@ibiz-template/vue3-util';
import { EventBase, INavViewMsg } from '@ibiz-template/runtime';
import { BreadcrumbNavPosState } from './breadcrumb-nav-pos.state';
import { IBreadcrumb } from './interface';
/**
 * 面包屑导航占位控制器
 *
 * @export
 * @class BreadcrumbNavPosController
 * @extends {PanelItemController}
 */
export declare class BreadcrumbNavPosController extends NavPosController {
    /**
     * 导航占位状态
     *
     * @type {BreadcrumbNavPosState}
     * @memberof BreadcrumbNavPosController
     */
    state: BreadcrumbNavPosState;
    /**
     * 缓存识别码
     *
     * @protected
     * @type {string}
     * @memberof BreadcrumbNavPosController
     */
    protected localStorageKey: string;
    /**
     * 创建导航占位状态对象
     *
     * @protected
     * @return {*}  {BreadcrumbNavPosState}
     * @memberof BreadcrumbNavPosController
     */
    protected createState(): BreadcrumbNavPosState;
    /**
     * 查找指定面包屑
     *
     * @param {string} key 缓存key
     * @return {*}  {(IBreadcrumb | undefined)}
     * @memberof BreadcrumbNavPosController
     */
    findBreadcrumb(key: string): IBreadcrumb | undefined;
    /**
     * 初始化
     *
     * @protected
     * @return {*}  {Promise<void>}
     * @memberof BreadcrumbNavPosController
     */
    protected onInit(): Promise<void>;
    /**
     * 根据路由计算面包屑数据
     *
     * @protected
     * @param {Route} route
     * @return {*}  {Promise<void>}
     * @memberof BreadcrumbNavPosController
     */
    protected calcBreadcrumbByRoute(route: Route): Promise<void>;
    /**
     * 处理面包屑跳转
     *
     * @param {IBreadcrumb} item
     * @memberof BreadcrumbNavPosController
     */
    handleBreadcrumbSkip(item: IBreadcrumb): void;
    /**
     * 路由变化
     *
     * @param {Route} route
     * @memberof BreadcrumbNavPosController
     */
    onRouteChange(route: Route): Promise<void>;
    /**
     * 打开视图
     *
     * @param {INavViewMsg} openViewMsg
     * @memberof BreadcrumbNavPosController
     */
    openView(openViewMsg: INavViewMsg): void;
    /**
     * 视图创建
     *
     * @param {EventBase} event
     * @memberof BreadcrumbNavPosController
     */
    onViewCreated(event: EventBase): void;
    /**
     * 保存面包屑
     *
     * @memberof BreadcrumbNavPosController
     */
    saveBreadcrumb(): void;
    /**
     * 获取面包屑
     *
     * @return {*}  {IBreadcrumb[]}
     * @memberof BreadcrumbNavPosController
     */
    getBreadcrumb(): IBreadcrumb[];
    /**
     * 清除面包屑
     *
     * @memberof BreadcrumbNavPosController
     */
    clearBreadcrumb(): void;
}
