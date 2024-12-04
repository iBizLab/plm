import {
  IEditorContainerController,
  IEditorProvider,
} from '@ibiz-template/runtime';
import { ISpan } from '@ibiz/model-core';
import { MobPersonalInfoEditorController } from './mob-personal-info.controller';

export class MobPersonalInfoEditorProvider implements IEditorProvider {
  formEditor: string = 'IBizMobPersonalInfo';

  gridEditor: string = 'IBizMobPersonalInfo';

  async createController(
    editorModel: ISpan,
    parentController: IEditorContainerController,
  ): Promise<MobPersonalInfoEditorController> {
    const c = new MobPersonalInfoEditorController(
      editorModel,
      parentController,
    );
    await c.init();
    return c;
  }
}
