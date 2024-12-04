import { IEditorContainerController, IEditorProvider } from '@ibiz-template/runtime';
import { ISpan } from '@ibiz/model-core';
import { MobPersonalInfoEditorController } from './mob-personal-info.controller';
export declare class MobPersonalInfoEditorProvider implements IEditorProvider {
    formEditor: string;
    gridEditor: string;
    createController(editorModel: ISpan, parentController: IEditorContainerController): Promise<MobPersonalInfoEditorController>;
}
