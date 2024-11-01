import { BackendUIActionProvider, IUILogicParams, IUIActionResult } from '@ibiz-template/runtime';
import { IAppDEUIAction } from '@ibiz/model-core';
export declare class AddTestMemberProvider extends BackendUIActionProvider {
    execAction(action: IAppDEUIAction, args: IUILogicParams): Promise<IUIActionResult>;
}
