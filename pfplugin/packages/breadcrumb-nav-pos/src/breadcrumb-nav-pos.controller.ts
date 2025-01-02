/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-param-reassign */
import { RouteLocationNormalizedLoaded as Route } from 'vue-router';
import { NavPosController, route2routePath } from '@ibiz-template/vue3-util';
import {
  EventBase,
  INavViewMsg,
  calcDeCodeNameById,
} from '@ibiz-template/runtime';
import { IBizContext } from '@ibiz-template/core';
import { BreadcrumbNavPosState } from './breadcrumb-nav-pos.state';
import { IBreadcrumb } from './interface';

/**
 * 面包屑导航占位控制器
 *
 * @export
 * @class BreadcrumbNavPosController
 * @extends {PanelItemController}
 */
export class BreadcrumbNavPosController extends NavPosController {
  /**
   * 导航占位状态
   *
   * @type {BreadcrumbNavPosState}
   * @memberof BreadcrumbNavPosController
   */
  declare state: BreadcrumbNavPosState;

  /**
   * 缓存识别码
   *
   * @protected
   * @type {string}
   * @memberof BreadcrumbNavPosController
   */
  protected localStorageKey: string = `${this.panel.view.model.codeName?.toLowerCase()}@breadcrumb-nav-pos`;

  /**
   * 创建导航占位状态对象
   *
   * @protected
   * @return {*}  {BreadcrumbNavPosState}
   * @memberof BreadcrumbNavPosController
   */
  protected createState(): BreadcrumbNavPosState {
    return new BreadcrumbNavPosState(this.parent?.state);
  }

  /**
   * 查找指定面包屑
   *
   * @param {string} key 缓存key
   * @return {*}  {(IBreadcrumb | undefined)}
   * @memberof BreadcrumbNavPosController
   */
  findBreadcrumb(key: string): IBreadcrumb | undefined {
    return this.state.breadcrumb.find(item => this.calcCacheKey(item) === key);
  }

  /**
   * 初始化
   *
   * @protected
   * @return {*}  {Promise<void>}
   * @memberof BreadcrumbNavPosController
   */
  protected async onInit(): Promise<void> {
    await super.onInit();
    if (this.rawItemParams.show_breadcrumb === 'false') {
      this.state.showBreadcrumd = false;
    }
    this.state.breadcrumb = this.getBreadcrumb();
  }

  /**
   * 根据路由计算面包屑数据
   *
   * @protected
   * @param {Route} route
   * @return {*}  {Promise<void>}
   * @memberof BreadcrumbNavPosController
   */
  protected async calcBreadcrumbByRoute(route: Route): Promise<void> {
    let { pathNodes } = route2routePath(route);
    pathNodes = pathNodes.slice(this.routeDepth!);
    this.state.breadcrumb = await Promise.all(
      pathNodes.map(async (node, index) => {
        const { context, params, viewName } = node;
        const appView = await ibiz.hub.config.view.get(viewName);
        let key: string = 'undefined';
        if (appView.appDataEntityId) {
          const codeName = calcDeCodeNameById(appView.appDataEntityId);
          key = node.context?.[codeName.toLowerCase()];
        }
        const cacheKey = this.calcCacheKey({
          key,
          viewId: viewName,
        });
        const cache = this.findBreadcrumb(cacheKey);
        return (
          cache || {
            key,
            params,
            context: IBizContext.create(
              {
                ...context,
                srfdefaulttoroutedepth: this.routeDepth! + 2 + index,
              },
              this.panel.context,
            ),
            viewId: viewName,
          }
        );
      }),
    );
  }

  /**
   * 处理面包屑跳转
   *
   * @param {IBreadcrumb} item
   * @memberof BreadcrumbNavPosController
   */
  handleBreadcrumbSkip(item: IBreadcrumb): void {
    if (item.fullPath) {
      this.router.push(item.fullPath);
    }
  }

  /**
   * 路由变化
   *
   * @param {Route} route
   * @memberof BreadcrumbNavPosController
   */
  async onRouteChange(route: Route): Promise<void> {
    await this.calcBreadcrumbByRoute(route);
    this.state.breadcrumb.forEach(item => {
      const cacheKey = this.calcCacheKey(item);
      this.state.navViewMsgs[cacheKey] = item;
    });
    this.curNavViewMsg =
      this.state.breadcrumb[this.state.breadcrumb.length - 1];
    super.onRouteChange(route);
  }

  /**
   * 打开视图
   *
   * @param {INavViewMsg} openViewMsg
   * @memberof BreadcrumbNavPosController
   */
  openView(openViewMsg: INavViewMsg): void {
    if (openViewMsg.viewId) {
      super.openView(openViewMsg);
    }
  }

  /**
   * 视图创建
   *
   * @param {EventBase} event
   * @memberof BreadcrumbNavPosController
   */
  onViewCreated(event: EventBase): void {
    super.onViewCreated(event);
    (this.curNavViewMsg as IBreadcrumb).caption = event.view.model.caption;
    event.view.evt.on('onViewInfoChange', ({ dataInfo }) => {
      (this.curNavViewMsg as IBreadcrumb).caption = dataInfo;
    });
    this.saveBreadcrumb();
  }

  /**
   * 保存面包屑
   *
   * @memberof BreadcrumbNavPosController
   */
  saveBreadcrumb(): void {
    const cacheBreadcrumb: IData[] = [];
    // 处理上下文
    this.state.breadcrumb.forEach(b => {
      const item = { ...b };
      item.context = b.context?.getOwnContext();
      cacheBreadcrumb.push(item);
    });
    localStorage.setItem(this.localStorageKey, JSON.stringify(cacheBreadcrumb));
  }

  /**
   * 获取面包屑
   *
   * @return {*}  {IBreadcrumb[]}
   * @memberof BreadcrumbNavPosController
   */
  getBreadcrumb(): IBreadcrumb[] {
    const items = localStorage.getItem(this.localStorageKey);
    try {
      if (items) {
        const breadcrumb = JSON.parse(items);
        if (Array.isArray(breadcrumb)) {
          // 处理上下文
          breadcrumb.forEach(b => {
            b.context = IBizContext.create(b.context, this.panel.context);
          });
          return breadcrumb;
        }
        return [];
      }
    } catch (err) {
      ibiz.log.error(err);
    }
    return [];
  }

  /**
   * 清除面包屑
   *
   * @memberof BreadcrumbNavPosController
   */
  clearBreadcrumb(): void {
    localStorage.removeItem(this.localStorageKey);
  }
}
