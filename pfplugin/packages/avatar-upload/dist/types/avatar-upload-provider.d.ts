import { IEditorContainerController, IEditorProvider } from '@ibiz-template/runtime';
import { IFileUploader } from '@ibiz/model-core';
import { AvatarUploadController } from './avatar-upload-controller';
export declare class AvatarUploadProvider implements IEditorProvider {
    formEditor: string;
    gridEditor: string;
    createController(editorModel: IFileUploader, parentController: IEditorContainerController): Promise<AvatarUploadController>;
}
