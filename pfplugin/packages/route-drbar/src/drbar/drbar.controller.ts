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
  AppCounter,
  CounterService,
  IPanelItemController,
  OpenAppViewCommand,
  calcItemVisible,
  calcItemVisibleByCounter,
} from '@ibiz-template/runtime';
import {
  getNestedRoutePath,
  route2routePath,
  routePath2string,
} from '@ibiz-template/vue3-util';
import { IDEDRBar, IDEDRBarItem, IDEDRCtrlItem } from '@ibiz/model-core';
import { Router } from 'vue-router';

/**
 * 数据关系栏控制器
 *
 * @export
 * @class DRBarController
 * @extends {ControlController<IDEDRBar, IDRBarState, IDRBarEvent>}
 * @implements {IDRBarController}
 */
export class DRBarController
  extends ControlController<IDEDRBar, IDRBarState, IDRBarEvent>
  implements IDRBarController
{
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
  get navPos(): IPanelItemNavPosController {
    return this.view.layoutPanel?.panelItems
      .nav_pos as IPanelItemNavPosController;
  }

  /**
   * 导航视图容器控制器
   * @return {*}
   * @author: zhujiamin
   * @Date: 2024-01-25 16:03:00
   */
  get viewNavPos(): IPanelItemController | undefined {
    return this.view.layoutPanel?.panelItems.view_nav_pos;
  }

  /**
   * 表单部件
   *
   * @readonly
   * @memberof DRBarController
   */
  get form(): IEditFormController {
    return this.view?.getController('form') as IEditFormController;
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
   * @memberof DRBarController
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
   * @memberof DRBarController
   */
  get routeDepth(): number | undefined {
    return this.view.modal.routeDepth;
  }

  /**
   * 初始化state的属性
   *
   * @protected
   * @memberof DRBarController
   */
  protected initState(): void {
    super.initState();
    this.state.drBarItems = [];
    this.state.srfnav = '';
    this.state.hideEditItem = !!this.model.hideEditItem;
  }

  /**
   * 路由跳转项
   *
   * @protected
   * @memberof DRBarController
   */
  routeItems: string[] = [];

  /**
   * 是否启用返回按钮
   *
   * @protected
   * @memberof DRBarController
   */
  enableBack: boolean = false;

  /**
   * 返回的视图id
   *
   * @author zhanghengfeng
   * @date 2024-05-11 17:05:05
   * @type {string}
   */
  viewId: string = '';

  /**
   * 创建完成
   *
   * @return {*}  {Promise<void>}
   * @memberof DRBarController
   */
  async onCreated(): Promise<void> {
    await super.onCreated();
    this.initDRBarItems();
    if (this.controlParams.route_items) {
      this.routeItems = JSON.parse(this.controlParams.route_items);
    }
    if (this.controlParams.enable_back) {
      this.enableBack = !!JSON.parse(this.controlParams.enable_back);
    }
    if (this.controlParams.view_id) {
      this.viewId = this.controlParams.view_id;
    }
    await this.initCounter();
  }

  /**
   * 通过计数器数据，计算项状态
   *
   * @author zhanghengfeng
   * @date 2024-05-16 18:05:14
   * @param {IData} [_data]
   * @param {boolean} [reset=true]
   */
  calcItemStateByCounter(_data?: IData, reset: boolean = true): void {
    this.state.drBarItems.forEach(item => {
      if (item.children?.length) {
        item.children.forEach(childItem => {
          const visible = calcItemVisibleByCounter(childItem, this.counter);
          if (visible !== undefined) {
            childItem.visible = visible;
          }
        });
        // 有一个子显示的时候分组就是显示的
        item.visible = item.children.some(childItem => childItem.visible);
      } else {
        // 不是分组的时候直接计算
        const visible = calcItemVisibleByCounter(item, this.counter);
        if (visible !== undefined) {
          item.visible = visible;
        }
      }
    });
    if (this.state.selectedItem && reset) {
      const { visible, defaultVisibleItem } = this.getItemVisibleState(
        this.state.selectedItem,
      );
      if (!visible && defaultVisibleItem) {
        this.handleSelectChange(defaultVisibleItem.tag);
      }
    }
  }

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
  } {
    let visible = true;
    let defaultVisibleItem: IDRBarItemsState | undefined;
    this.state.drBarItems.forEach(item => {
      if (item.children) {
        if (!defaultVisibleItem) {
          defaultVisibleItem = item.children.find(child => child.visible);
        }
        const drBarItem = item.children.find(child => child.tag === key);
        if (drBarItem) {
          visible = !!drBarItem.visible;
        }
      } else {
        if (!defaultVisibleItem && item.visible) {
          defaultVisibleItem = item;
        }
        if (item.tag === key) {
          visible = !!item.visible;
        }
      }
    });

    return {
      visible,
      defaultVisibleItem,
    };
  }

  /**
   * 计算关系界面组权限
   *
   * @param {IDRBarItemsState} item 关系组成员
   * @memberof DRBarController
   */
  async calcPermitted(item: IDRBarItemsState): Promise<void> {
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
    item.visible = permitted;
  }

  /**
   * 计算是否展示
   *
   * @param {IData} item 关系组成员
   * @memberof DRBarController
   */
  async calcDrBarItemsState(): Promise<void> {
    await Promise.all(
      this.state.drBarItems.map(async item => {
        if (item.children?.length) {
          await Promise.all(
            item.children.map(async childItem => {
              await this.calcPermitted(childItem);
            }),
          );
          // 有一个子显示的时候分组就是显示的
          item.visible = item.children.some(childItem => childItem.visible);
        } else {
          // 不是分组的时候直接计算权限
          await this.calcPermitted(item);
        }
      }),
    );
    this.calcItemStateByCounter({}, false);
    this.state.isCalculatedPermission = true;
  }

  /**
   * 加载完成
   *
   * @return {*}  {Promise<void>}
   * @memberof DRBarController
   */
  async onMounted(): Promise<void> {
    await super.onMounted();
    if (this.form) {
      this.form.evt.on('onLoadSuccess', async event => {
        // 更新视图作用域数据和srfreadonly数据
        const data = event.data?.[0];
        this.view.state.srfactiveviewdata = data;
        if (data && data.srfreadonly) {
          this.view.context.srfreadonly = true;
        }
        await this.calcDrBarItemsState();
        // this.handleFormChange();
        this.doDefaultSelect();
      });
      this.form.evt.on('onLoadDraftSuccess', async () => {
        await this.calcDrBarItemsState();
        this.doDefaultSelect();
        // this.handleFormChange();
      });
      // this.form.evt.on('onSaveSuccess', () => {
      //   this.handleFormChange();
      // });
    } else {
      // 不显示表单的时候直接计算
      await this.calcDrBarItemsState();
      this.doDefaultSelect();
    }

    // 表单已经加载完成执行默认选中，否则加载完成事件里执行
    if (this.form?.state.isLoaded) {
      this.doDefaultSelect();
    }
  }

  /**
   * 处理表单数据变更
   *
   * @memberof DRBarController
   */
  handleFormChange(): void {
    const disabled = this.isCreate;
    this.setDRBarItemsState(this.state.drBarItems, disabled);
  }

  /**
   * 设置关系项状态
   *
   * @param {IDRBarItemsState[]} drBarItems 关系项
   * @param {boolean} disabled 禁用状态
   * @memberof DRBarController
   */
  setDRBarItemsState(drBarItems: IDRBarItemsState[], disabled: boolean): void {
    drBarItems.forEach(item => {
      // 排除首项
      if (item.tag !== this.model.uniqueTag) {
        item.disabled = disabled;
      }
      if (item.children) {
        this.setDRBarItemsState(item.children, disabled);
      }
    });
  }

  /**
   * 初始化关系项数据
   *
   * @memberof DRBarController
   */
  initDRBarItems(): void {
    const { dedrctrlItems, dedrbarGroups } = this.model;
    const drBarItems: IDRBarItemsState[] = [];

    // 绘制编辑项
    if (!this.state.hideEditItem) {
      const {
        editItemCaption,
        editItemCapLanguageRes,
        editItemSysImage,
        uniqueTag,
      } = this.model;
      let caption = editItemCaption;
      if (editItemCapLanguageRes) {
        caption = ibiz.i18n.t(
          editItemCapLanguageRes.lanResTag!,
          editItemCaption,
        );
      }
      // 编辑项
      drBarItems.push({
        tag: uniqueTag!,
        caption,
        disabled: false,
        sysImage: editItemSysImage,
        fullPath: this.router.currentRoute.value.fullPath,
      });
      // 默认显示编辑项
      this.state.defaultItem = uniqueTag!;
    }

    // 单个关系项的状态
    const getItemState = (item: IDEDRCtrlItem) => {
      let itemCaption = item.caption;
      if (item.capLanguageRes) {
        itemCaption = ibiz.i18n.t(item.capLanguageRes.lanResTag!, item.caption);
      }
      const { enableMode, testAppDELogicId, testScriptCode, counterMode } =
        item;
      return {
        tag: item.id!,
        caption: itemCaption,
        sysImage: item.sysImage,
        disabled: false,
        counterId: item.counterId,
        visible: false, // 默认不显示
        dataAccessAction: item.dataAccessAction || undefined,
        enableMode,
        testAppDELogicId,
        testScriptCode,
        counterMode,
      };
    };

    // 分组和关系项
    if (dedrbarGroups && dedrctrlItems) {
      if (dedrbarGroups.length === 1) {
        // 只有一个分组的时候，全展开不存在二级
        dedrctrlItems.forEach(item => {
          drBarItems.push(getItemState(item));
        });
      } else {
        dedrbarGroups.forEach(group => {
          const groupItems = dedrctrlItems.filter(
            item => (item as IDEDRBarItem).dedrbarGroupId === group.id,
          );
          if (
            groupItems.length > 1 ||
            (this.controlParams?.singleitemgroup === 'true' &&
              groupItems.length === 1)
          ) {
            // 超过两个显示分组项
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
              visible: false, // 默认不显示
              children: groupItems.map(item => getItemState(item)),
            });
          } else if (groupItems.length === 1) {
            drBarItems.push(getItemState(groupItems[0]));
          }
        });
      }
    }

    this.state.drBarItems = drBarItems;
  }

  /**
   * 处理返回按钮点击
   *
   * @param {string} key
   * @memberof DRBarController
   */
  handleBack() {
    if (!this.viewId) {
      return;
    }
    const context = this.context.clone();
    const params = { ...this.params };
    ibiz.commands.execute(OpenAppViewCommand.TAG, this.viewId, context, params);
  }

  /**
   * 处理选中改变
   *
   * @param {string} key
   * @memberof DRBarController
   */
  handleSelectChange(
    key: string = this.state.defaultItem,
    isRoutePushed = false,
  ): void {
    if (this.state.selectedItem === key) {
      return;
    }
    const drBarItem = this.model.dedrctrlItems?.find(item => item.id === key);
    if (drBarItem && this.routeItems.includes(key)) {
      const { context, params } = this.prepareParams(drBarItem);

      Object.assign(context, {
        srfdefaulttoroutedepth: this.routeDepth,
      });

      ibiz.commands.execute(
        OpenAppViewCommand.TAG,
        drBarItem.appViewId,
        context,
        params,
      );
      return;
    }
    if (drBarItem) {
      this.setVisible('navPos');
      this.openNavPosView(drBarItem, isRoutePushed);
    } else {
      this.setVisible('form');
      if (this.routeDepth) {
        const currentKey = getNestedRoutePath(
          this.router.currentRoute.value,
          this.routeDepth,
        );
        this.router.push(currentKey);
      }
    }
    this.state.selectedItem = key;
  }

  /**
   * 设置显示状态
   *
   * @param {('form' | 'navPos')} ctrlName 显示的部件名称
   * @memberof DRBarController
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
      if (this.viewNavPos) {
        this.viewNavPos.state.visible = false;
        this.viewNavPos.state.keepAlive = true;
      }
    } else {
      if (viewForm) {
        viewForm.state.visible = false;
        viewForm.state.keepAlive = true;
      }
      if (this.viewNavPos) {
        this.viewNavPos.state.visible = true;
        this.viewNavPos.state.keepAlive = true;
      }
    }
  }

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
   * @memberof DRBarController
   */
  async openNavPosView(
    drBarItem: IDEDRBarItem,
    isRoutePushed = false,
  ): Promise<void> {
    const { context, params } = this.prepareParams(drBarItem);
    // 合并SrfNav
    context.currentSrfNav = drBarItem.id!;
    this.state.srfnav = drBarItem.id!;
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
    const viewForm = this.view.layoutPanel?.panelItems.view_form;
    if (viewForm) {
      viewForm.state.visible = false;
      viewForm.state.keepAlive = false;
    }

    // 显示编辑项的时候如果没有srfnav需要回显则不处理
    if (!this.state.hideEditItem && !this.state.srfnav) {
      this.setVisible('form');
      return;
    }

    // 新建数据的时候不用选中默认分页
    if (this.isCreate && !this.state.hideEditItem) {
      this.state.defaultItem = this.model.uniqueTag!;
      return;
    }

    // 默认选中第一个项或第一个分组的第一个项
    const { drBarItems } = this.state;
    let key = drBarItems[0].children?.[0].tag || drBarItems[0].tag;
    if (this.routeDepth && this.state.srfnav) {
      key = this.state.srfnav;
    }
    if (key) {
      // 路由模式下，且有子路由的时候不需要navpos跳转路由，只要做呈现
      const isRoutePushed = !!this.routeDepth && hasSubRoute(this.routeDepth);
      const { visible, defaultVisibleItem } = this.getItemVisibleState(key);
      if (!visible && defaultVisibleItem) {
        key = defaultVisibleItem.tag;
        this.handleSelectChange(key);
      } else {
        this.handleSelectChange(key, isRoutePushed);
      }
    }
  }

  /**
   * 初始化计数器
   * @author lxm
   * @date 2024-01-18 05:12:02
   * @protected
   * @return {*}  {Promise<void>}
   */
  protected async initCounter(): Promise<void> {
    const { appCounterRefs } = this.model;
    const appCounterRef = appCounterRefs?.[0];
    if (appCounterRef) {
      const routePath = route2routePath(this.router.currentRoute.value);
      if (this.routeDepth) {
        routePath.pathNodes = routePath.pathNodes.slice(0, this.routeDepth - 1);
      }
      const dataKey = routePath2string(routePath);
      this.counter = await CounterService.getCounterByRef(
        appCounterRef,
        this.context,
        dataKey
          ? { srfcustomtag: dataKey, ...this.params }
          : { ...this.params },
      );
      this.calcItemStateByCounter = this.calcItemStateByCounter.bind(this);
      this.counter.onChange(this.calcItemStateByCounter);
    }
  }

  /**
   * 监听组件销毁
   *
   * @author zhanghengfeng
   * @date 2024-04-10 19:04:43
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
