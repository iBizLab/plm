import {
  IEditorContainerController,
  IEditorProvider,
} from '@ibiz-template/runtime';
import { ITextBox } from '@ibiz/model-core';
import { SearchBarFilterConditionController } from './search-bar-filter-condition.controller';

export class SearchBarFilterConditionProvider implements IEditorProvider {
  formEditor: string = 'IBizSearchBarFilterCondition';

  gridEditor: string = 'IBizSearchBarFilterCondition';

  async createController(
    editorModel: ITextBox,
    parentController: IEditorContainerController,
  ): Promise<SearchBarFilterConditionController> {
    const c = new SearchBarFilterConditionController(
      editorModel,
      parentController,
    );
    await c.init();
    return c;
  }
}
