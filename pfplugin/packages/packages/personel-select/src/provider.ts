import {
  IEditorContainerController,
  IEditorProvider,
} from '@ibiz-template/runtime';
import { IPicker } from '@ibiz/model-core';
import { PersonelSelectController } from './personel-select-controller';

export class PersonelSelectProvider implements IEditorProvider {
  component: string = 'PersonelSelect';

  formEditor: string = 'PersonelSelect';

  gridEditor: string = 'PersonelSelect';

  async createController(
    editorModel: IPicker,
    parentController: IEditorContainerController,
  ): Promise<PersonelSelectController> {
    const c = new PersonelSelectController(editorModel, parentController);
    await c.init();
    return c;
  }
}
