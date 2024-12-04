import {
  IEditorContainerController,
  IEditorProvider,
} from '@ibiz-template/runtime';
import { IDropDownList } from '@ibiz/model-core';
import { AutoRulesController } from './auto-rules.controller';

export class AutoRulesProvider implements IEditorProvider {
  formEditor: string = 'AutoRules';

  gridEditor: string = 'AutoRules';

  async createController(
    editorModel: IDropDownList,
    parentController: IEditorContainerController,
  ): Promise<AutoRulesController> {
    const c = new AutoRulesController(editorModel, parentController);
    await c.init();
    return c;
  }
}
