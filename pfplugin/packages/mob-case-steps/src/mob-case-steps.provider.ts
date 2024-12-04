import {
  FormController,
  IFormDetailContainerController,
  IFormDetailProvider,
} from '@ibiz-template/runtime';
import { IDEFormMDCtrl } from '@ibiz/model-core';
import { MobCaseStepsController } from './mob-case-steps.controller';

export class MobCaseStepsProvider implements IFormDetailProvider {
  component: string = 'IBizMobCaseSteps';

  async createController(
    detailModel: IDEFormMDCtrl,
    form: FormController,
    parent: IFormDetailContainerController | undefined,
  ): Promise<MobCaseStepsController> {
    const c = new MobCaseStepsController(detailModel, form, parent);
    await c.init();
    return c;
  }
}
