import { IEditorContainerController, IEditorProvider } from '@ibiz-template/runtime';
import { IPicker } from '@ibiz/model-core';
import { AttentionController } from './attention-controller';
export declare class AttentionProvider implements IEditorProvider {
    component: string;
    formEditor: string;
    gridEditor: string;
    createController(editorModel: IPicker, parentController: IEditorContainerController): Promise<AttentionController>;
}
