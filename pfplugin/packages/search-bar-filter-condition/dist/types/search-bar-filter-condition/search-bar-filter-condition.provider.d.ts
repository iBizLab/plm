import { IEditorContainerController, IEditorProvider } from '@ibiz-template/runtime';
import { ITextBox } from '@ibiz/model-core';
import { SearchBarFilterConditionController } from './search-bar-filter-condition.controller';
export declare class SearchBarFilterConditionProvider implements IEditorProvider {
    formEditor: string;
    gridEditor: string;
    createController(editorModel: ITextBox, parentController: IEditorContainerController): Promise<SearchBarFilterConditionController>;
}
