import { ITreeExpBar } from '@ibiz/model-core';
import {
  CTX,
  IControlProvider,
  ITreeExpBarController,
} from '@ibiz-template/runtime';
import { DefaultExpandTreeExpBarController } from './default-expand-tree-exp-bar.controller';

/**
 * 树导航栏适配器
 *
 * @export
 * @class DefaultExpandTreeExpBarProvider
 * @implements {IControlProvider}
 */
export class DefaultExpandTreeExpBarProvider implements IControlProvider {
  component: string = 'IBizTreeExpBarControl';

  createController(
    model: ITreeExpBar,
    context: IContext,
    params: IParams,
    ctx: CTX,
  ): ITreeExpBarController {
    return new DefaultExpandTreeExpBarController(model, context, params, ctx);
  }
}
