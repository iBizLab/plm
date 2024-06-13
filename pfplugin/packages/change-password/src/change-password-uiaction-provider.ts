/* eslint-disable no-await-in-loop */
import { IAppDEUIAction } from '@ibiz/model-core';
import {
  IUIActionResult,
  IUILogicParams,
  UIActionProviderBase,
  convertNavData,
  formatMultiData,
} from '@ibiz-template/runtime';
import { HttpError } from '@ibiz-template/core';

/**
 * 修改密码界面行为插件
 *
 * @export
 * @class ChangePasswordUIActionProvider
 * @extends {UIActionProviderBase}
 */
export class ChangePasswordUIActionProvider extends UIActionProviderBase {
  async execAction(
    action: IAppDEUIAction,
    args: IUILogicParams,
  ): Promise<IUIActionResult> {
    // 处理参数
    const { context, params, data } = args;
    const { resultParams } = await this.handleParams(
      action,
      context,
      data,
      params,
    );
    const bol = this.validate(resultParams);
    if (!bol) {
      return { refresh: false };
    }
    const res = await this.changePass(resultParams);
    if (res) {
      return {
        refresh: true,
        refreshMode: action.refreshMode,
      };
    }
    return { refresh: false };
  }

  async changePass(params: IData): Promise<boolean> {
    try {
      await ibiz.net.post('/uaa/changepwd', {
        oldPwd: params.oldpassword,
        newPwd: params.newpassword,
      });
      ibiz.message.success('修改密码成功');
      return true;
    } catch (err: unknown) {
      ibiz.message.error(`修改密码失败,${(err as HttpError).message || ''}`);
      return false;
    }
  }

  protected validate(params: IData): boolean {
    const { newpassword, oldpassword, surepassword } = params;
    if (!newpassword) {
      ibiz.message.error('原密码不能为空');
      return false;
    }
    if (!oldpassword) {
      ibiz.message.error('新密码不能为空');
      return false;
    }
    if (!surepassword) {
      ibiz.message.error('确认密码不能为空');
      return false;
    }
    if (oldpassword === newpassword) {
      ibiz.message.error('新密码不能与旧密码一致');
      return false;
    }
    if (newpassword !== surepassword) {
      ibiz.message.error('两次密码不一致');
      return false;
    }
    return true;
  }

  protected async handleParams(
    action: IAppDEUIAction,
    context: IContext,
    data: IData[],
    params: IParams,
  ): Promise<{
    resultContext: IContext;
    resultData: IData[];
    resultParams: IParams;
  }> {
    const resultData: IData[] = [];

    // 处理上下文导航参数
    const resultContext = context.clone();
    const navContexts = [...(action.navigateContexts || [])];

    // 是否是多数据
    const isMultiData =
      ['MULTIKEY', 'MULTIDATA'].includes(action.actionTarget!) &&
      data.length > 0;

    // 处理自定义导航上下文
    const tempContext = convertNavData(
      navContexts,
      isMultiData ? formatMultiData(navContexts, data) : data[0] || {},
      params,
      context,
    );
    Object.assign(resultContext, tempContext);

    // 处理自定义导航视图参数
    const navParams = action.navigateParams;
    const resultParams = convertNavData(
      navParams,
      isMultiData ? formatMultiData(navParams, data) : data[0] || {},
      params,
      resultContext,
    );
    return { resultContext, resultData, resultParams };
  }
}
