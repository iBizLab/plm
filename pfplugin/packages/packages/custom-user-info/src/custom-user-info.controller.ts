/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Router } from 'vue-router';
import {
  CTX,
  IModal,
  IModalData,
  IOverlayPopoverContainer,
  IViewConfig,
  PanelItemController,
} from '@ibiz-template/runtime';
import { listenJSEvent, NOOP, RuntimeError } from '@ibiz-template/core';
import { h, inject } from 'vue';
import { isArray } from 'lodash-es';
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
   * 弹框内导航视图名称
   *
   * @private
   * @memberof CustomUserInfoController
   */
  private navViewName: string = '';

  /**
   * 头像属性
   *
   * @type {string}
   * @memberof CustomUserInfoController
   */
  public avatarField: string = '';

  /**
   * 标题属性
   *
   * @type {string}
   * @memberof CustomUserInfoController
   */
  public titlField: string = '';

  /**
   * 子标题属性
   *
   * @type {string}
   * @memberof CustomUserInfoController
   */
  public subTitleField: string = '';

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
    this.initRawItemParams();
    try {
      const appContext = ibiz.appData?.context || {};
      const { srfusername = '游客', srfpersonname } = appContext;
      this.userInfo = { srfusername, srfpersonname };
      if (this.avatarField && appContext[this.avatarField]) {
        Object.assign(this.userInfo, {
          avatar: this.parseAvatar(appContext[this.avatarField]),
        });
      }
      if (this.titlField && appContext[this.titlField]) {
        Object.assign(this.userInfo, {
          srfusername: appContext[this.titlField],
        });
      }
      if (this.subTitleField && appContext[this.subTitleField]) {
        Object.assign(this.userInfo, {
          srfpersonname: appContext[this.subTitleField],
        });
      }
      this.userInfoView = await ibiz.hub.config.view.get(this.navViewName);
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
   * 解析头像数据
   *
   * @param {string} avatar
   * @return {*}
   * @memberof CustomUserInfoController
   */
  public parseAvatar(avatar: string) {
    try {
      const res = JSON.parse(avatar);
      if (res) {
        const data = isArray(res) ? res[0] : res;
        const urls = ibiz.util.file.calcFileUpDownUrl(
          this.panel.context,
          this.panel.params,
        );
        return urls.downloadUrl.replace('%fileId%', data.id);
      }
    } catch (error) {
      throw new RuntimeError('头像数据解析异常');
    }
  }

  /**
   * 初始化面板项高级参数
   *
   * @memberof CustomUserInfoController
   */
  initRawItemParams(): void {
    const rawItem = (this.model as IParams)?.rawItem;
    if (isArray(rawItem?.rawItemParams)) {
      rawItem?.rawItemParams.forEach((item: IParams) => {
        const { key, value } = item;
        if (key === 'NAVVIEWNAME') {
          this.navViewName = value;
        }
        if (key === 'AVATAR') {
          this.avatarField = value.toLowerCase();
        }
        if (key === 'TITLE') {
          this.titlField = value.toLowerCase();
        }
        if (key === 'SUBTITLE') {
          this.subTitleField = value.toLowerCase();
        }
      });
    }
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
