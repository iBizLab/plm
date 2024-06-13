import {
  IEditorContainerController,
  IEditorProvider,
} from '@ibiz-template/runtime';
import { IFileUploader } from '@ibiz/model-core';
import { AvatarUploadController } from './avatar-upload-controller';

export class AvatarUploadProvider implements IEditorProvider {
  formEditor: string = 'AvatarUpload';

  gridEditor: string = 'AvatarUpload';

  async createController(
    editorModel: IFileUploader,
    parentController: IEditorContainerController,
  ): Promise<AvatarUploadController> {
    const c = new AvatarUploadController(editorModel, parentController);
    await c.init();
    return c;
  }
}
