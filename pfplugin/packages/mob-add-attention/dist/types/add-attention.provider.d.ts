import { BackendUIActionProvider, IUILogicParams, IUIActionResult } from '@ibiz-template/runtime';
import { IAppDEUIAction } from '@ibiz/model-core';
export declare class AddAttentionProvider extends BackendUIActionProvider {
    execAction(action: IAppDEUIAction, args: IUILogicParams): Promise<IUIActionResult>;
    /**
     * 更新缓存数据
     *
     * @memberof AddAttentionProvider
     */
    UpdateLocalData(args: IData, _data: IData[]): Promise<void>;
}
