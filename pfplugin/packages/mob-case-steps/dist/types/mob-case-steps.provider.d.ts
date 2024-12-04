import { FormController, IFormDetailContainerController, IFormDetailProvider } from '@ibiz-template/runtime';
import { IDEFormMDCtrl } from '@ibiz/model-core';
import { MobCaseStepsController } from './mob-case-steps.controller';
export declare class MobCaseStepsProvider implements IFormDetailProvider {
    component: string;
    createController(detailModel: IDEFormMDCtrl, form: FormController, parent: IFormDetailContainerController | undefined): Promise<MobCaseStepsController>;
}
