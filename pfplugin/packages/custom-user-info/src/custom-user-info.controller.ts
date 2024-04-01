import { Router } from 'vue-router';
import {
  CTX,
  IModal,
  IModalData,
  IOverlayPopoverContainer,
  IViewConfig,
  PanelItemController,
} from '@ibiz-template/runtime';
import { listenJSEvent, NOOP } from '@ibiz-template/core';
import { h, inject } from 'vue';
import { UserInfoPopover } from './user-info-popover/user-info-popover';

/**
 * 用户信息控制器
 *
 * @export
 * @class CustomUserInfoController
 * @extends {PanelItemController}
 */
export class CustomUserInfoController extends PanelItemController {
  /**
   * 路由
   *
   * @private
   * @memberof CustomUserInfoController
   */
  private router!: Router;

  /**
   * 气泡弹窗容器
   *
   * @private
   * @type {(IOverlayPopoverContainer | null)}
   * @memberof CustomUserInfoController
   */
  private overlay: IOverlayPopoverContainer | null = null;

  /**
   * ctx
   *
   * @memberof CustomUserInfoController
   */
  private ctx = inject<CTX | undefined>('ctx', undefined);

  /**
   * 用户信息视图
   *
   * @private
   * @type {IViewConfig}
   * @memberof CustomUserInfoController
   */
  private userInfoView?: IViewConfig;

  /**
   * 用户信息
   *
   * @public
   * @type {IData}
   * @memberof CustomUserInfoController
   */
  public userInfo!: IData;

  /**
   * 监听函数
   *
   * @memberof CustomUserInfoController
   */
  public cleanup = NOOP;

  /**
   * 是否折叠
   *
   * @readonly
   * @memberof CustomUserInfoController
   */
  get isCollapse(): boolean {
    return (this.panel.view.state as IData).isCollapse;
  }

  /**
   * 菜单方向
   *
   * @readonly
   * @memberof CustomUserInfoController
   */
  get menuAlign(): string {
    if (this.ctx?.view) {
      return this.ctx.view.model.mainMenuAlign || 'LEFT';
    }
    return 'LEFT';
  }

  /**
   * 初始化
   *
   * @protected
   * @return {*}  {Promise<void>}
   * @memberof CustomUserInfoController
   */
  protected async onInit(): Promise<void> {
    await super.onInit();
    try {
      const { srfusername = '游客', srfpersonname } =
        ibiz.appData?.context || {};
      this.userInfo = { srfusername, srfpersonname };
      this.userInfoView = await ibiz.hub.config.view.get('userinfocustomview');
    } catch (error) {
      ibiz.log.error(error);
    }
    this.cleanup = listenJSEvent(window, 'keydown', event => {
      if (event.keyCode === 27) {
        this.overlay?.dismiss();
      }
    });
  }

  /**
   * 设置路由对象
   *
   * @param {Router} router
   * @memberof CustomUserInfoController
   */
  setRouter(router: Router): void {
    this.router = router;
  }

  /**
   * 登出
   *
   * @memberof CustomUserInfoController
   */
  async onLogOut(): Promise<void> {
    this.overlay?.dismiss();
    const confirm = await ibiz.confirm.info({
      title: '退出登录',
      desc: '您确定要退出登录吗？',
    });
    if (confirm) {
      const bol = await ibiz.hub.controller.logout();
      if (bol) {
        await this.router.push(
          `/login?ru=${encodeURIComponent(
            window.location.hash.replace('#/', '/'),
          )}`,
        );
        ibiz.util.showAppLoading();
        window.location.reload();
      }
    }
  }

  /**
   * 打开用户信息Popover
   *
   * @param {EventTarget} target
   * @memberof CustomUserInfoController
   */
  async openUserInfoPopover(target: HTMLElement): Promise<IModalData> {
    this.overlay = ibiz.overlay.createPopover(
      (modal: IModal) =>
        h(UserInfoPopover, {
          context: this.panel.context.clone(),
          params: this.panel.params,
          modal,
          controller: this,
          viewId: this.userInfoView?.id,
        }),
      undefined,
      {
        placement: this.menuAlign === 'LEFT' ? 'right-start' : 'bottom',
        autoClose: true,
        noArrow: true,
        width: this.userInfoView?.width || 320,
        height: this.userInfoView?.height,
      } as IParams,
    );
    await this.overlay.present(target);
    // eslint-disable-next-line no-return-await
    return await this.overlay.onWillDismiss();
  }

  public onDestroyed(): void {
    if (this.cleanup !== NOOP) {
      this.cleanup();
    }
    this.overlay?.dismiss();
  }
}
