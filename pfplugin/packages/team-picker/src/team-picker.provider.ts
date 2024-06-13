import {
  IEditorContainerController,
  IEditorProvider,
} from '@ibiz-template/runtime';
import { IPicker } from '@ibiz/model-core';
import { TeamPickerController } from './team-picker.controller';

export class TeamPickerProvider implements IEditorProvider {
  formEditor: string = 'TeamPicker';

  gridEditor: string = 'TeamPicker';

  async createController(
    editorModel: IPicker,
    parentController: IEditorContainerController,
  ): Promise<TeamPickerController> {
    const c = new TeamPickerController(editorModel, parentController);
    await c.init();
    return c;
  }
}
