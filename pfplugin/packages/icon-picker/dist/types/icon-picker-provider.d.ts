import { IEditorContainerController, IEditorProvider } from '@ibiz-template/runtime';
import { ITextBox } from '@ibiz/model-core';
import { IconPickerControlller } from './icon-picker-controller';
export declare class IconPickerProvider implements IEditorProvider {
    component: string;
    formEditor: string;
    gridEditor: string;
    createController(editorModel: ITextBox, parentController: IEditorContainerController): Promise<IconPickerControlller>;
}
