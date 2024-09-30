import { CTX, IControlProvider } from '@ibiz-template/runtime';
import { IDEChart } from '@ibiz/model-core';
import { CustomLabelController } from './custom-label-controller';

export class CustomLabelProvider implements IControlProvider {
  component: string = 'IBizChartControl';

  createController(
    modelData: IDEChart,
    context: IContext,
    param: IParams,
    ctx: CTX,
  ): CustomLabelController {
    const c = new CustomLabelController(modelData, context, param, ctx);
    return c;
  }
}
