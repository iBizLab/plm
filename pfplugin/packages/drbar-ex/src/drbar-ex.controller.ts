import {
  ControlController,
  IDRBarController,
  IDRBarEvent,
  IDRBarState,
  IDRBarItemsState,
  IEditFormController,
  calcNavParams,
  Srfuf,
  IPanelItemNavPosController,
  hasSubRoute,
} from '@ibiz-template/runtime';
import { route2routePath } from '@ibiz-template/vue3-util';
import { IDEDRBar, IDEDRBarItem } from '@ibiz/model-core';
import { Router } from 'vue-router';

/**
 * 数据关系栏控制器
 *
 * @export
 * @class DRBarExController
 * @extends {ControlController<IDEDRBar, IDRBarState, IDRBarEvent>}
 * @implements {IDRBarExController}
 */
export class DRBarExController
  extends ControlController<IDEDRBar, IDRBarState, IDRBarEvent>
  implements IDRBarController
{
  /**
   * 导航占位控制器
   *
   * @readonly
   * @memberof DRBarExController
   */
  get navPos(): IPanelItemNavPosController {
    return this.view.layoutPanel?.panelItems
      .nav_pos as IPanelItemNavPosController;
  }

  /**
   * 表单部件
   *
   * @readonly
   * @memberof DRBarExController
   */
  get form(): IEditFormController {
    return this.view.getController('form') as IEditFormController;
  }

  /**
   * 是否是新建
   * @author lxm
   * @date 2023-12-11 06:32:04
   * @readonly
   * @type {boolean}
   */
  get isCreate(): boolean {
    return this.getData()[0].srfuf !== Srfuf.UPDATE;
  }

  /**
   * 获取数据
   *
   * @return {*}  {IData[]}
   * @memberof DRBarExController
   */
  getData(): IData[] {
    return this.form?.getData() || [{}];
  }

  /**
   * Router 对象
   *
   * @type {Router}
   * @memberof DRTabController
   */
  router!: Router;

  /**
   * 设置 Router 对象
   *
   * @param {Router} router
   * @memberof DRTabController
   */
  setRouter(router: Router): void {
    this.router = router;
  }

  /**
   * 路由层级
   *
   * @readonly
   * @type {(number | undefined)}
   * @memberof DRBarExController
   */
  get routeDepth(): number | undefined {
    return this.view.modal.routeDepth;
  }

  /**
   * 初始化state的属性
   *
   * @protected
   * @memberof DRBarExController
   */
  protected initState(): void {
    super.initState();
    this.state.drBarItems = [];
    this.state.srfnav = '';
    this.state.hideEditItem = !!this.model.hideEditItem;
  }

  /**
   * 创建完成
   *
   * @return {*}  {Promise<void>}
   * @memberof DRBarExController
   */
  async onCreated(): Promise<void> {
    await super.onCreated();
    this.initDRBarItems();
  }

  /**
   * 加载完成
   *
   * @return {*}  {Promise<void>}
   * @memberof DRBarExController
   */
  async onMounted(): Promise<void> {
    await super.onMounted();
    if (this.form) {
      this.form.evt.on('onLoadSuccess', () => {
        this.doDefaultSelect();
      });
      // this.form.evt.on('onLoadDraftSuccess', () => {
      // });
      // this.form.evt.on('onSaveSuccess', () => {
      // });
    }

    // 表单已经加载完成执行默认选中，否则加载完成事件里执行
    if (this.form.state.isLoaded) {
      this.doDefaultSelect();
    }
  }

  /**
   * 初始化关系项数据
   *
   * @memberof DRBarExController
   */
  initDRBarItems(): void {
    const { dedrctrlItems, dedrbarGroups } = this.model;
    const drBarItems: IDRBarItemsState[] = [];

    // 分组和关系项
    if (dedrbarGroups && dedrctrlItems) {
      dedrbarGroups.forEach(group => {
        const groupItems = dedrctrlItems.filter(
          item => (item as IDEDRBarItem).dedrbarGroupId === group.id,
        );
        if (groupItems.length > 0) {
          let itemCaption = group.caption;
          if (group.capLanguageRes) {
            itemCaption = ibiz.i18n.t(
              group.capLanguageRes.lanResTag!,
              group.caption,
            );
          }
          drBarItems.push({
            tag: group.id!,
            caption: itemCaption,
            sysImage: group.sysImage,
          });
        }
      });
    }
    this.state.drBarItems = drBarItems;
  }

  /**
   * 处理选中改变
   *
   * @param {string} key
   * @memberof DRBarExController
   */
  handleSelectChange(key: string, isRoutePushed = false): void {
    const drBarGroup = this.state.drBarItems.find(item => item.tag === key);
    if (!drBarGroup) {
      return;
    }
    const drBarItem = this.model.dedrctrlItems?.find(
      item => (item as IData).dedrbarGroupId === key,
    );
    if (drBarItem) {
      this.setVisible('navPos');
      this.openNavPosView(drBarItem, isRoutePushed);
    } else {
      this.setVisible('form');
      if (this.routeDepth) {
        this.router.push(this.state.drBarItems[0].fullPath!);
      }
    }
    this.state.selectedItem = key;
  }

  /**
   * 设置显示状态
   *
   * @param {('form' | 'navPos')} ctrlName 显示的部件名称
   * @memberof DRBarExController
   */
  setVisible(ctrlName: 'form' | 'navPos'): void {
    if (this.state.hideEditItem) {
      // 不显示编辑项的时候不需要控制显示隐藏
      return;
    }
    const viewForm = this.view.layoutPanel?.panelItems.view_form;
    if (ctrlName === 'form') {
      if (viewForm) {
        viewForm.state.visible = true;
        viewForm.state.keepAlive = true;
      }
      if (this.navPos) {
        this.navPos.state.visible = false;
        this.navPos.state.keepAlive = true;
      }
    } else {
      if (viewForm) {
        viewForm.state.visible = false;
        viewForm.state.keepAlive = true;
      }
      if (this.navPos) {
        this.navPos.state.visible = true;
        this.navPos.state.keepAlive = true;
      }
    }
  }

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
  } {
    const { navigateContexts, navigateParams } = drBarItem;
    const model = {
      navContexts: navigateContexts,
      navParams: navigateParams,
    };
    const originParams = {
      context: this.context,
      params: this.params,
      data: this.getData()[0],
    };
    const { resultContext, resultParams } = calcNavParams(model, originParams);
    const context = Object.assign(this.context.clone(), resultContext);
    const params = { ...this.params, ...resultParams };
    return { context, params };
  }

  /**
   * 打开导航占位视图
   *
   * @param {IDEDRBarItem} drBarItem 关系项
   * @memberof DRBarExController
   */
  async openNavPosView(
    drBarItem: IDEDRBarItem,
    isRoutePushed = false,
  ): Promise<void> {
    const { context, params } = this.prepareParams(drBarItem);
    Object.assign(context, {
      srfdefaulttoroutedepth: (this.routeDepth as number) + 1,
    });
    // 合并SrfNav
    context.currentSrfNav = drBarItem.dedrbarGroupId!;
    this.state.srfnav = drBarItem.dedrbarGroupId!;
    this.navPos?.openView({
      key: drBarItem.id!,
      context,
      params,
      viewId: drBarItem.appViewId,
      isRoutePushed,
    });
  }

  /**
   * 处理第一次的默认选中
   * @author lxm
   * @date 2023-12-11 05:38:30
   * @return {*}  {void}
   */
  doDefaultSelect(): void {
    // 显示编辑项的时候如果没有srfnav需要回显则不处理
    if (!this.state.hideEditItem && !this.state.srfnav) {
      return;
    }

    // 新建数据的时候不用选中默认分页
    if (this.isCreate) {
      this.state.defaultItem = this.model.uniqueTag!;
      return;
    }

    // 默认选中第一个项或第一个分组的第一个项
    const { drBarItems } = this.state;
    let key = drBarItems[0].children?.[0].tag || drBarItems[0].tag;
    // 路由中存在导航项则按照导航项为准
    const routePath = route2routePath(this.router.currentRoute.value);
    if (this.routeDepth && routePath.pathNodes[this.routeDepth - 1]) {
      const curRouteParam = routePath.pathNodes[this.routeDepth - 1] as IData;
      if (curRouteParam && curRouteParam.srfnav) {
        key = curRouteParam.srfnav;
      }
    }
    if (key) {
      // 路由模式下，且有子路由的时候不需要navpos跳转路由，只要做呈现
      const isRoutePushed = !!this.routeDepth && hasSubRoute(this.routeDepth);
      this.handleSelectChange(key, isRoutePushed);
      this.state.defaultItem = key;
    }
  }

  /**
   * 路由变更处理回调
   * @param {{ srfnav?: string; path: string }} info 当前系统的路由的从一级到最后一级的所有路径。
   */
  async onRouterChange(info: { srfnav: string; path: string }): Promise<void> {
    if (this.state.srfnav !== info.srfnav && info.srfnav) {
      this.state.srfnav = info.srfnav;
      // 路由模式下，且有子路由的时候不需要navpos跳转路由，只要做呈现
      const isRoutePushed = !!this.routeDepth && hasSubRoute(this.routeDepth);
      this.handleSelectChange(info.srfnav, isRoutePushed);
      this.force(() => {
        this.state.defaultItem = info.srfnav;
      });
    }
  }
}
