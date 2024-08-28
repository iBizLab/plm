import {
  IEditorContainerController,
  IEditorProvider,
} from '@ibiz-template/runtime';
import { IPicker } from '@ibiz/model-core';
import { TeamSelectController } from './team-select.controller';

export class TeamSelectProvider implements IEditorProvider {
  formEditor: string = 'TeamSelect';

  gridEditor: string = 'TeamSelect';

  async createController(
    editorModel: IPicker,
    parentController: IEditorContainerController,
  ): Promise<TeamSelectController> {
    const c = new TeamSelectController(editorModel, parentController);
    await c.init();
    return c;
  }
}
