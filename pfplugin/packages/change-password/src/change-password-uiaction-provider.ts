/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-await-in-loop */
import { IAppDEUIAction } from '@ibiz/model-core';
import {
  IModal,
  IModalData,
  IOverlayPopoverContainer,
  IUIActionResult,
  IUILogicParams,
  UIActionProviderBase,
} from '@ibiz-template/runtime';
import { HttpError } from '@ibiz-template/core';
import { VNode, h } from 'vue';
import { ChangePassword } from './change-password';

/**
 * 修改密码界面行为插件
 *
 * @export
 * @class ChangePasswordUIActionProvider
 * @extends {UIActionProviderBase}
 */
export class ChangePasswordUIActionProvider extends UIActionProviderBase {
  /**
   * 气泡容器
   *
   * @type {IOverlayPopoverContainer}
   * @memberof ChangePasswordUIActionProvider
   */
  public overlay: IOverlayPopoverContainer | null = null;

  /**
   * 执行界面行为
   *
   * @param {IAppDEUIAction} _action
   * @param {IUILogicParams} _params
   * @return {*}  {Promise<IUIActionResult>}
   * @memberof ChangePasswordUIActionProvider
   */
  async execAction(
    _action: IAppDEUIAction,
    _params: IUILogicParams,
  ): Promise<IUIActionResult> {
    const data = await this.openModal();
    if (data.length > 0) {
      await this.changePass(data[0]);
    }
    return {};
  }

  /**
   * 打开模态
   *
   * @return {*}
   * @memberof ChangePasswordUIActionProvider
   */
  async openModal() {
    const opts = {
      width: '600px',
    };
    this.overlay = ibiz.overlay.createModal(
      this.createOverlayView(),
      undefined,
      opts,
    );
    await this.overlay.present();
    const result: IModalData = await this.overlay.onWillDismiss();
    return result.data || [];
  }

  /**
   * 创建overlay
   *
   * @return {*}  {(modal: IModal) => VNode}
   * @memberof ChangePasswordUIActionProvider
   */
  createOverlayView(): (modal: IModal) => VNode {
    return (modal: IModal) => {
      return h(ChangePassword, {
        modal,
      });
    };
  }

  /**
   * 修改密码
   *
   * @param {IData} data
   * @return {*}  {Promise<boolean>}
   * @memberof ChangePasswordUIActionProvider
   */
  async changePass(data: IData): Promise<boolean> {
    try {
      await ibiz.net.post('/uaa/changepwd', {
        oldPwd: data.oldPassword,
        newPwd: data.newPassword,
      });
      ibiz.message.success('修改密码成功');
      return true;
    } catch (err: unknown) {
      ibiz.notification.error({
        title: '修改密码失败',
        desc: (err as HttpError).message || '',
      });
    }
    return false;
  }
}
