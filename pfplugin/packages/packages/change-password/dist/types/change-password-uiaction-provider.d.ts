import { IAppDEUIAction } from '@ibiz/model-core';
import { IUIActionResult, IUILogicParams, UIActionProviderBase } from '@ibiz-template/runtime';
/**
 * 修改密码界面行为插件
 *
 * @export
 * @class ChangePasswordUIActionProvider
 * @extends {UIActionProviderBase}
 */
export declare class ChangePasswordUIActionProvider extends UIActionProviderBase {
    execAction(action: IAppDEUIAction, args: IUILogicParams): Promise<IUIActionResult>;
    changePass(params: IData): Promise<boolean>;
    protected validate(params: IData): boolean;
    protected handleParams(action: IAppDEUIAction, context: IContext, data: IData[], params: IParams): Promise<{
        resultContext: IContext;
        resultData: IData[];
        resultParams: IParams;
    }>;
}
