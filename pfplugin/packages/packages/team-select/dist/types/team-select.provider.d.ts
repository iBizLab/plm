import { IEditorContainerController, IEditorProvider } from '@ibiz-template/runtime';
import { IPicker } from '@ibiz/model-core';
import { TeamSelectController } from './team-select.controller';
export declare class TeamSelectProvider implements IEditorProvider {
    formEditor: string;
    gridEditor: string;
    createController(editorModel: IPicker, parentController: IEditorContainerController): Promise<TeamSelectController>;
}
