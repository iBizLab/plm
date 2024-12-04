import { BackendUIActionProvider, IUILogicParams, IUIActionResult, IViewController } from '@ibiz-template/runtime';
import { IAppDEUIAction } from '@ibiz/model-core';
export declare class AddTestMemberProvider extends BackendUIActionProvider {
    execAction(action: IAppDEUIAction, args: IUILogicParams): Promise<IUIActionResult>;
    /**
     * 组装选中数据
     *
     * @param {IViewController} [view]
     * @return {*}  {IData[]}
     * @memberof AddTestMemberProvider
     */
    handleSelectedData(view?: IViewController): IData[];
}
