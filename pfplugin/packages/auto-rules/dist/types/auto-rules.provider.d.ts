import { IEditorContainerController, IEditorProvider } from '@ibiz-template/runtime';
import { IDropDownList } from '@ibiz/model-core';
import { AutoRulesController } from './auto-rules.controller';
export declare class AutoRulesProvider implements IEditorProvider {
    formEditor: string;
    gridEditor: string;
    createController(editorModel: IDropDownList, parentController: IEditorContainerController): Promise<AutoRulesController>;
}
