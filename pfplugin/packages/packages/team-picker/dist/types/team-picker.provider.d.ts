import { IEditorContainerController, IEditorProvider } from '@ibiz-template/runtime';
import { IPicker } from '@ibiz/model-core';
import { TeamPickerController } from './team-picker.controller';
export declare class TeamPickerProvider implements IEditorProvider {
    formEditor: string;
    gridEditor: string;
    createController(editorModel: IPicker, parentController: IEditorContainerController): Promise<TeamPickerController>;
}
