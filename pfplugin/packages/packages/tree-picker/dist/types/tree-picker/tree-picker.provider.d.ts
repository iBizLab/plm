import { CodeListEditorController, IEditorContainerController, IEditorProvider } from '@ibiz-template/runtime';
import { IDropDownList } from '@ibiz/model-core';
export declare class TreePickerProvider implements IEditorProvider {
    formEditor: string;
    gridEditor: string;
    createController(editorModel: IDropDownList, parentController: IEditorContainerController): Promise<CodeListEditorController>;
}
