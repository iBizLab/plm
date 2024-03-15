import {
  IEditorContainerController,
  IEditorProvider,
} from '@ibiz-template/runtime';
import { IPicker } from '@ibiz/model-core';
import { AttentionController } from './attention-controller';

export class AttentionProvider implements IEditorProvider {
  component: string = 'IBizAttention';

  formEditor: string = 'IBizAttention';

  gridEditor: string = 'IBizAttention';

  async createController(
    editorModel: IPicker,
    parentController: IEditorContainerController,
  ): Promise<AttentionController> {
    const c = new AttentionController(editorModel, parentController);
    await c.init();
    return c;
  }
}
