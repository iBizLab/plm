import { IUILogicParams, IUIActionResult, IViewController, FrontUIActionProvider } from '@ibiz-template/runtime';
import { IAppDEUIAction } from '@ibiz/model-core';
export declare class AssembleSelectedDataProvider extends FrontUIActionProvider {
    execAction(action: IAppDEUIAction, args: IUILogicParams): Promise<IUIActionResult>;
    /**
     * 处理选中数据
     *
     * @memberof AssembleSelectedDataProvider
     */
    handleSelectedData(view?: IViewController): IData[];
}
