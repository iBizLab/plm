/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import {
  IUILogicParams,
  IUIActionResult,
  IModalData,
  OpenAppViewCommand,
  MDCtrlController,
  IViewController,
  FrontUIActionProvider,
} from '@ibiz-template/runtime';
import { ModelError, RuntimeModelError, StringUtil } from '@ibiz-template/core';
import { IAppDEUIAction } from '@ibiz/model-core';

export class AssembleSelectedDataProvider extends FrontUIActionProvider {
  async execAction(
    action: IAppDEUIAction,
    args: IUILogicParams,
  ): Promise<IUIActionResult> {
    const { context, params, data, event, noWaitRoute, view } = args;
    let actionResult: IUIActionResult = {};
    switch (action.frontProcessType) {
      case 'OPENHTMLPAGE': {
        const url = StringUtil.fill(action.htmlPageUrl!, context, data?.[0]);
        window.open(url, '_blank');
        break;
      }
      case 'TOP':
      case 'WIZARD': {
        const frontPSAppView = action.frontAppViewId;
        if (!frontPSAppView) {
          throw new RuntimeModelError(
            action,
            ibiz.i18n.t('runtime.uiAction.noConfiguredopenView'),
          );
        }
        // 处理参数
        const { resultContext, resultParams } = await this.handleParams(
          action,
          context,
          data,
          params,
        );
        const selects = this.handleSelectedData(view);
        if (selects && selects.length) {
          resultParams.selecteddata = JSON.stringify(selects);
        }

        //  解析自定义 视图 option 参数
        const options = this.handleViewOptionParams(resultParams);
        const res: IModalData | undefined = await ibiz.commands.execute(
          OpenAppViewCommand.TAG,
          frontPSAppView,
          resultContext,
          resultParams,
          { event, noWaitRoute, ...options },
        );
        // 打开视图取消操作
        if (!res?.ok) {
          actionResult.cancel = true;
        }

        if (res?.ok && res.data) {
          if (Array.isArray(res.data)) {
            actionResult.data = res.data.map((item: any) => {
              if (typeof item === 'object') {
                return item.getOrigin?.() || item._deData || item;
              }
              return item;
            });
          } else {
            actionResult.data = res.data;
          }
          actionResult.nextContext = resultContext;
          actionResult.nextParams = { ...params, ...resultParams };
        }

        break;
      }
      case 'PRINT':
        await this.executePrint(action, args);
        break;
      case 'DATAIMP':
        actionResult = await this.executeDataImport(action, args);
        break;
      case 'DATAEXP':
        await this.executeDataExport(action, args);
        break;
      case 'OTHER':
        actionResult = await this.doOther(action, args);
        break;
      case 'EDITFORM':
        actionResult = await this.openEditForm(action, args);
        break;
      case 'QUICKEDIT':
        actionResult = await this.openQuickEdit(action, args);
        break;
      default:
        throw new ModelError(
          action,
          ibiz.i18n.t('runtime.uiAction.frontProcessingModes', {
            frontProcessType: action.frontProcessType,
          }),
        );
    }
    return actionResult;
  }

  /**
   * 处理选中数据
   *
   * @memberof AssembleSelectedDataProvider
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
        srfkey: item.user_id || item[item.srfkeyfield],
        _id: item.user_id || item[item.srfkeyfield], // 传给树的时候需要这个字段
        srfmajortext: item[item.srfmajorfield],
      };
    });
  }
}
