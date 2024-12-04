/* eslint-disable no-param-reassign */
import {
  ControlController,
  IDRTabController,
  IDRTabEvent,
  IDRTabState,
  IDRTabPagesState,
  IEditFormController,
  calcNavParams,
  Srfuf,
  IPanelItemNavPosController,
  hasSubRoute,
  AppCounter,
  CounterService,
  calcItemVisibleByCounter,
  calcItemVisible,
} from '@ibiz-template/runtime';
import { getNestedRoutePath } from '@ibiz-template/vue3-util';
import { IDEDRCtrlItem, IDEDRTab } from '@ibiz/model-core';
import { Router } from 'vue-router';

/**
 * 数据关系栏控制器
 *
 * @export
 * @class DRTabController
 * @extends {ControlController<IDEDRTab, IDRTabState, IDRTabEvent>}
 * @implements {IDRTabController}
 */
export class TabExpSelectController
  extends ControlController<IDEDRTab, IDRTabState, IDRTabEvent>
  implements IDRTabController
{
  /**
   * 分组关系分页数据
   */
  public groupTabPages: IData[] = [];

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
   * @memberof DRTabController
   */
  get navPos(): IPanelItemNavPosController {
    return this.view.layoutPanel?.panelItems
      .nav_pos as IPanelItemNavPosController;
  }

  /**
   * 表单部件
   *
   * @readonly
   * @memberof DRTabController
   */
  get form(): IEditFormController {
    return this.view?.getController('form') as IEditFormController;
  }

  /**
   * 路由层级
   *
   * @readonly
   * @type {(number | undefined)}
   * @memberof DRTabController
   */
  get routeDepth(): number | undefined {
    return this.view.modal.routeDepth;
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
   * 获取数据
   *
   * @return {*}  {IData[]}
   * @memberof DRTabController
   */
  getData(): IData[] {
    return this.form?.getData() || [{}];
  }

  /**
   * 初始化state的属性
   *
   * @protected
   * @memberof DRTabController
   */
  protected initState(): void {
    super.initState();
    this.state.drTabPages = [];
    this.state.showMore = false;
  }

  /**
   * 创建完成
   *
   * @return {*}  {Promise<void>}
   * @memberof DRTabController
   */
  async onCreated(): Promise<void> {
    await super.onCreated();
    await this.initCounter();
  }

  /**
   * 部件参数解析
   *
   * @protected
   * @memberof ControlController
   */
  protected handleControlParams(): void {
    super.handleControlParams();
    if (this.controlParams.showmore) {
      this.state.showMore = this.controlParams.showmore === 'true';
    }
  }

  /**
   * 通过计数器数据，计算项状态
   *
   * @author zhanghengfeng
   * @date 2024-05-16 17:05:01
   */
  calcItemStateByCounter(): void {
    this.state.drTabPages.forEach(item => {
      const visible = calcItemVisibleByCounter(item, this.counter);
      if (visible !== undefined) {
        item.hidden = !visible;
      }
    });

    if (this.state.activeName) {
      const { visible, defaultVisibleItem } = this.getItemVisibleState(
        this.state.activeName,
      );
      if (!visible && defaultVisibleItem) {
        this.state.activeName = defaultVisibleItem.tag;
        this.handleTabChange();
      }
    }
  }

  /**
   * 获取对应项的显示状态
   *
   * @author zhanghengfeng
   * @date 2024-05-16 17:05:18
   * @param {string} key
   * @return {*}  {{
   *     visible: boolean;
   *     defaultVisibleItem?: IDRTabPagesState;
   *   }}
   */
  getItemVisibleState(key: string): {
    visible: boolean;
    defaultVisibleItem?: IDRTabPagesState;
  } {
    let visible = true;
    let defaultVisibleItem: IDRTabPagesState | undefined;
    this.state.drTabPages.forEach(item => {
      if (!defaultVisibleItem && !item.hidden) {
        defaultVisibleItem = item;
      }
      if (item.tag === key) {
        visible = !item.hidden;
      }
    });

    return {
      visible,
      defaultVisibleItem,
    };
  }

  /**
   * 计算项权限
   *
   * @author zhanghengfeng
   * @date 2024-05-16 17:05:40
   * @param {IDRTabPagesState} item
   * @return {*}  {Promise<void>}
   */
  async calcPermitted(item: IDRTabPagesState): Promise<void> {
    let permitted = true;
    const data = this.getData()?.length ? this.getData()[0] : undefined;
    const visible = await calcItemVisible(
      item,
      this.context,
      this.params,
      this.model.appDataEntityId!,
      this.model.appId,
      data,
    );
    if (visible !== undefined) {
      permitted = visible;
    }
    item.hidden = !permitted;
  }

  /**
   * 计算项状态
   *
   * @author zhanghengfeng
   * @date 2024-05-16 17:05:05
   * @return {*}  {Promise<void>}
   */
  async calcDrTabPagesState(): Promise<void> {
    await Promise.all(
      this.state.drTabPages.map(async item => {
        await this.calcPermitted(item);
      }),
    );
    this.calcItemStateByCounter();
    this.state.isCalculatedPermission = true;
  }

  /**
   * 加载完成
   *
   * @return {*}  {Promise<void>}
   * @memberof DRTabController
   */
  async onMounted(): Promise<void> {
    await super.onMounted();
    if (this.form) {
      this.form.evt.on('onLoadSuccess', async event => {
        // 更新视图作用域数据和srfreadonly数据
        const data = event.data[0];
        this.view.state.srfactiveviewdata = data;
        if (Object.prototype.hasOwnProperty.call(data, 'srfreadonly')) {
          this.view.context.srfreadonly = data.srfreadonly;
        }
        await this.calcDrTabPagesState();
        this.handleFormChange();
      });
      this.form.evt.on('onLoadDraftSuccess', () => {
        this.handleFormChange();
      });
      this.form.evt.on('onSaveSuccess', () => {
        this.handleFormChange();
      });
    }
    this.initDRTabPages();
    if (!this.form) {
      await this.calcDrTabPagesState();
    }
  }

  /**
   * 处理表单数据变更
   *
   * @memberof DRTabController
   */
  handleFormChange(): void {
    const disabled = this.getData()[0].srfuf !== Srfuf.UPDATE;
    this.setDRTabPagesState(this.state.drTabPages, disabled);
  }

  /**
   * 设置关系分页状态
   *
   * @param {IDRTabPagesState[]} drTabPages 关系分页
   * @param {boolean} disabled 禁用状态
   * @memberof DRTabController
   */
  setDRTabPagesState(drTabPages: IDRTabPagesState[], disabled: boolean): void {
    drTabPages.forEach(item => {
      // 排除首项
      if (item.tag !== this.model.uniqueTag) {
        item.disabled = disabled;
      }
    });
  }

  /**
   * 初始化关系分页数据
   *
   * @memberof DRTabController
   */
  initDRTabPages(): void {
    const {
      editItemCaption,
      editItemCapLanguageRes,
      hideEditItem,
      editItemSysImage,
      uniqueTag,
      dedrtabPages,
    } = this.model;
    const drTabPages: IDRTabPagesState[] = [];
    const groupTabPages: IData[] = [];
    let caption = editItemCaption;
    if (editItemCapLanguageRes) {
      caption = ibiz.i18n.t(editItemCapLanguageRes.lanResTag!, editItemCaption);
    }
    if (!hideEditItem) {
      // 首项
      drTabPages.push({
        tag: uniqueTag!,
        caption,
        hidden: !!hideEditItem,
        disabled: false,
        sysImage: editItemSysImage,
        fullPath: this.routeDepth
          ? getNestedRoutePath(this.router.currentRoute.value, this.routeDepth!)
          : '',
      });
      this.state.defaultName = '';
    } else {
      this.state.defaultName = dedrtabPages?.[0].id || '';
    }
    // 关系项
    dedrtabPages?.forEach((item: IData) => {
      let itemCaption = item.caption;
      if (item.capLanguageRes) {
        itemCaption = ibiz.i18n.t(item.capLanguageRes.lanResTag!, item.caption);
      }
      const {
        enableMode,
        dataAccessAction,
        testAppDELogicId,
        testScriptCode,
        counterMode,
      } = item;
      const tempItem = {
        tag: item.id!,
        caption: itemCaption,
        sysImage: item.sysImage,
        hidden: false,
        disabled: false,
        counterId: item.counterId,
        pid: item.group_name,
        dataAccessAction,
        enableMode,
        testAppDELogicId,
        testScriptCode,
        counterMode,
      };
      // 有分组属性的情况
      if (item.itemTag) {
        Object.assign(tempItem, { pid: item.itemTag });
        const index = groupTabPages.findIndex(
          (item2: IData) => item2.tag === item.itemTag,
        );
        if (index === -1) {
          const panel = {
            tag: item.itemTag,
            caption: item.itemTag,
            children: [tempItem],
          };
          groupTabPages.push(panel);
        } else {
          groupTabPages[index].children.push(tempItem);
        }
      } else {
        groupTabPages.push(tempItem);
      }
      drTabPages.push(tempItem);
    });
    this.state.drTabPages = drTabPages;
    this.groupTabPages = groupTabPages;
    if ((this.view.state as IData).srfnav) {
      this.state.activeName = (this.view.state as IData).srfnav!;
    } else {
      this.state.activeName = drTabPages[0].tag;
    }
    // 路由模式下，且有子路由的时候不需要navpos跳转路由，只要做呈现
    const isRoutePushed = !!this.routeDepth && hasSubRoute(this.routeDepth);
    this.handleTabChange(isRoutePushed);
  }

  /**
   * 处理分页改变
   *
   * @author lxm
   * @date 2023-12-21 05:31:59
   * @param {boolean} [isRoutePushed=false] 是否是路由已经跳转过了
   */
  handleTabChange(isRoutePushed: boolean = false): void {
    const { activeName } = this.state;
    const drBarItem = this.model.dedrtabPages?.find(
      item => item.id === activeName,
    );

    if (drBarItem) {
      this.setVisible('navPos');
      this.openNavPosView(drBarItem, isRoutePushed);
    } else {
      this.setVisible('form');
      if (this.routeDepth && this.state.drTabPages[0]) {
        this.router.push(this.state.drTabPages[0].fullPath!);
      }
    }
  }

  /**
   * 设置显示状态
   *
   * @param {('form' | 'navPos')} ctrlName 显示的部件名称
   * @memberof DRTabController
   */
  setVisible(ctrlName: 'form' | 'navPos'): void {
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
   * @param {IDEDRCtrlItem} drTabPages 关系分页
   * @return {*}
   * @memberof DRTabController
   */
  prepareParams(drTabPages: IDEDRCtrlItem): {
    context: IContext;
    params: IParams;
  } {
    const { navigateContexts, navigateParams } = drTabPages;
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
    const context = Object.assign(this.context.clone(), resultContext, {
      currentSrfNav: drTabPages.id,
    });
    const params = { ...this.params, ...resultParams };
    return { context, params };
  }

  /**
   * 打开导航占位视图
   *
   * @author lxm
   * @date 2023-12-21 05:40:07
   * @param {IDEDRCtrlItem} drTabPages
   * @param {boolean} [isRoutePushed=false]
   * @return {*}  {Promise<void>}
   */
  async openNavPosView(
    drTabPages: IDEDRCtrlItem,
    isRoutePushed = false,
  ): Promise<void> {
    const { context, params } = this.prepareParams(drTabPages);
    this.navPos?.openView({
      key: drTabPages.id!,
      context,
      params,
      viewId: drTabPages.appViewId,
      isRoutePushed,
    });
  }

  /**
   * 初始化计数器
   * @author lxm
   * @date 2024-01-18 05:12:02
   * @protected
   * @return {*}  {Promise<void>}
   */
  protected async initCounter(): Promise<void> {
    // todo 接口更新后换
    const { appCounterRefs } = this.model as IData;
    const appCounterRef = appCounterRefs?.[0];
    if (appCounterRef) {
      this.counter = await CounterService.getCounterByRef(
        appCounterRef,
        this.context,
        { ...this.params },
      );
      this.calcItemStateByCounter = this.calcItemStateByCounter.bind(this);
      this.counter.onChange(this.calcItemStateByCounter);
    }
  }

  /**
   * 监听组件销毁
   *
   * @author zhanghengfeng
   * @date 2024-04-10 19:04:40
   * @protected
   * @return {*}  {Promise<void>}
   */
  protected async onDestroyed(): Promise<void> {
    await super.onDestroyed();
    if (this.counter) {
      this.counter.offChange(this.calcItemStateByCounter);
      this.counter.destroy();
    }
  }
}
