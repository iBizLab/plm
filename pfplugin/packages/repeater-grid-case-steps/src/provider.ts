import {
  FormController,
  IFormDetailContainerController,
  IFormDetailProvider,
} from '@ibiz-template/runtime';
import { IDEFormMDCtrl } from '@ibiz/model-core';
import { RepeaterGridCaseStepsController } from './repeater-grid-case-steps-controller';

export class RepeaterGridCaseStepsProvider implements IFormDetailProvider {
  component: string = 'IBizRepeaterGridCaseSteps';

  async createController(
    detailModel: IDEFormMDCtrl,
    form: FormController,
    parent: IFormDetailContainerController | undefined,
  ): Promise<RepeaterGridCaseStepsController> {
    const c = new RepeaterGridCaseStepsController(detailModel, form, parent);
    await c.init();
    return c;
  }
}
