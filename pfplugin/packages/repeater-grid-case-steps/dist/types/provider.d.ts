import { FormController, IFormDetailContainerController, IFormDetailProvider } from '@ibiz-template/runtime';
import { IDEFormMDCtrl } from '@ibiz/model-core';
import { RepeaterGridCaseStepsController } from './repeater-grid-case-steps-controller';
export declare class RepeaterGridCaseStepsProvider implements IFormDetailProvider {
    component: string;
    createController(detailModel: IDEFormMDCtrl, form: FormController, parent: IFormDetailContainerController | undefined): Promise<RepeaterGridCaseStepsController>;
}
