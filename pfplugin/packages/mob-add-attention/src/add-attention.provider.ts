/* eslint-disable no-param-reassign */
import {
  BackendUIActionProvider,
  IUILogicParams,
  IUIActionResult,
  IModalData,
  OpenAppViewCommand,
} from '@ibiz-template/runtime';
import { RuntimeModelError } from '@ibiz-template/core';
import { isArray } from 'qx-util';
import { IAppDEUIAction } from '@ibiz/model-core';

export class AddAttentionProvider extends BackendUIActionProvider {
  async execAction(
    action: IAppDEUIAction,
    args: IUILogicParams,
  ): Promise<IUIActionResult> {
    const { context, params, data, event } = args;
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

    // 获取关注人数据
    const { ctx } = args.view as IData;
    const selectedData: { srfkey: string; srfmajortext: string }[] = [];
    if (ctx && ctx.controllersMap) {
      const mdCtrl = ctx.controllersMap.get('mdctrl');
      const items = mdCtrl.state.items || [];
      items?.forEach((item: IData) => {
        const srfkey = item.user_id || item._value;
        const srfmajortext = item.name || item._text;
        selectedData.push({ srfkey, srfmajortext });
      });
    }
    const tempParams = {
      ...resultParams,
    };

    // 如果有打开视图，打开视图，并把返回的数据作为子实体数据
    const frontPSAppView = action.frontAppViewId;
    if (frontPSAppView) {
      //  解析自定义 视图 option 参数
      const options = this.handleViewOptionParams(resultParams);
      const res: IModalData | undefined = await ibiz.commands.execute(
        OpenAppViewCommand.TAG,
        frontPSAppView,
        resultContext,
        // selectedData用于回显关注人集合
        { ...resultParams, selecteddata: JSON.stringify(selectedData) },
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
        // 更新缓存
        await this.UpdateLocalData(args, res.data);
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
   * 更新缓存数据
   *
   * @memberof AddAttentionProvider
   */
  public async UpdateLocalData(args: IData, _data: IData[]): Promise<void> {
    const { context, view } = args;
    const { service } = view.layoutPanel.panelItems.mdctrl.control;
    if (service) {
      Promise.all(
        _data.map(async (item: IData) => {
          const temp = service.toUIData(item);
          await service.create(context, temp);
        }),
      );
    }
  }
}
