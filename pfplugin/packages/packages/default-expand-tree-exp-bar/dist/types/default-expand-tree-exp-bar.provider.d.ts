import { ITreeExpBar } from '@ibiz/model-core';
import { CTX, IControlProvider, ITreeExpBarController } from '@ibiz-template/runtime';
/**
 * 树导航栏适配器
 *
 * @export
 * @class DefaultExpandTreeExpBarProvider
 * @implements {IControlProvider}
 */
export declare class DefaultExpandTreeExpBarProvider implements IControlProvider {
    component: string;
    createController(model: ITreeExpBar, context: IContext, params: IParams, ctx: CTX): ITreeExpBarController;
}
