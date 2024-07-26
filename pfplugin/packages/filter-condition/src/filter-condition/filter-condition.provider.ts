import {
  IEditorContainerController,
  IEditorProvider,
} from '@ibiz-template/runtime';
import { ITextBox } from '@ibiz/model-core';
import { FilterConditionController } from './filter-condition.controller';

export class FilterConditionProvider implements IEditorProvider {
  formEditor: string = 'IBizFilterCondition';

  gridEditor: string = 'IBizFilterCondition';

  async createController(
    editorModel: ITextBox,
    parentController: IEditorContainerController,
  ): Promise<FilterConditionController> {
    const c = new FilterConditionController(editorModel, parentController);
    await c.init();
    return c;
  }
}
