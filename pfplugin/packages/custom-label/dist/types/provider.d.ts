import { CTX, IControlProvider } from '@ibiz-template/runtime';
import { IDEChart } from '@ibiz/model-core';
import { CustomLabelController } from './custom-label-controller';
export declare class CustomLabelProvider implements IControlProvider {
    component: string;
    createController(modelData: IDEChart, context: IContext, param: IParams, ctx: CTX): CustomLabelController;
}
