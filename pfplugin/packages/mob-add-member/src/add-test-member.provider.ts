/* eslint-disable no-param-reassign */
import {
  BackendUIActionProvider,
  IUILogicParams,
  IUIActionResult,
  IModalData,
  OpenAppViewCommand,
  IViewController,
  MDCtrlController,
} from '@ibiz-template/runtime';
import { RuntimeModelError } from '@ibiz-template/core';
import { isArray } from 'qx-util';
import { IAppDEUIAction } from '@ibiz/model-core';

export class AddTestMemberProvider extends BackendUIActionProvider {
  async execAction(
    action: IAppDEUIAction,
    args: IUILogicParams,
  ): Promise<IUIActionResult> {
    const { context, params, data, event, view } = args;
    const actionResult: IUIActionResult = {};
    const entityName = action.appDataEntityId;
    const methodName = action.appDEMethodId;
    if (!entityName || !methodName) {
      throw new RuntimeModelError(
        action,
        ibiz.i18n.t('runtime.uiAction.noEntityOrBehavior'),
      );
    }
    // 处理参数
    const { resultContext, resultParams, resultData } = await this.handleParams(
      action,
      context,
      data,
      params,
    );
    const tempParams = { ...resultParams };

    // 如果有打开视图，打开视图，并把返回的数据作为子实体数据
    const frontPSAppView = action.frontAppViewId;
    if (frontPSAppView) {
      //  解析自定义 视图 option 参数
      const options = this.handleViewOptionParams(resultParams);
      const selects = this.handleSelectedData(view);
      if (selects && selects.length) {
        resultParams.selecteddata = JSON.stringify(selects);
      }
      const res: IModalData | undefined = await ibiz.commands.execute(
        OpenAppViewCommand.TAG,
        frontPSAppView,
        resultContext,
        resultParams,
        { event, ...options },
      );
      if (!res?.ok) {
        actionResult.cancel = true;
        return actionResult;
      }
      if (res?.ok && res.data) {
        // 空数据补充一个数据
        if (resultData.length === 0) {
          resultData.push({});
        }
        // srfactionparam只传选中数据的后台属性
        const actionData = res.data.map(
          item => item.getOrigin?.() || item._deData || item || {},
        );
        resultData.forEach(item => {
          item.srfactionparam = actionData;
        });
      }
    }

    const app = ibiz.hub.getApp(context?.srfappid);
    const _data = resultData
      .map(item => item.getOrigin?.() || item || {})
      .map(item => Object.assign(item, tempParams)); // 界面行为视图参数和data合并一起传给后台
    const isMultiData = ['MULTIKEY', 'MULTIDATA'].includes(
      action.actionTarget!,
    );

    const res = await app.deService.exec(
      entityName!,
      methodName,
      resultContext,
      isMultiData ? _data : _data[0],
      tempParams,
    );

    // 适配界面行为成功提示信息
    if (res.ok) {
      const successMsg = this.calcMessage('success', action, args);
      if (successMsg) {
        ibiz.message.success(successMsg);
      }
    }
    Object.assign(actionResult, {
      data: isArray(res.data) ? res.data : [res.data],
      nextContext: resultContext,
      nextParams: tempParams,
    });

    return actionResult;
  }

  /**
   * 组装选中数据
   *
   * @param {IViewController} [view]
   * @return {*}  {IData[]}
   * @memberof AddTestMemberProvider
   */
  public handleSelectedData(view?: IViewController): IData[] {
    let selects: IData = [];
    if (view) {
      const list = view.getController('mdctrl');
      if (list) {
        selects = (list as MDCtrlController).state.items || [];
      }
    }
    return selects.map((item: IData) => {
      return {
        ...item,
        _id: item.user_id || item[item.srfkeyfield],
        srfkey: item.user_id || item[item.srfkeyfield],
        srfmajortext: item.srfmajortext || item[item.srfmajorfield],
      };
    });
  }
}
