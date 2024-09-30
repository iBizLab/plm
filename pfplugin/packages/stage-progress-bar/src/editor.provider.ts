import { ISpan } from '@ibiz/model-core';
import {
  IEditorContainerController,
  IEditorProvider,
} from '@ibiz-template/runtime';
import { EditorController } from './editor.controller';

/**
 * 标签编辑器适配器
 *
 * @export
 * @class SpanEditorProvider
 * @implements {EditorProvider}
 */
export class EditorProvider implements IEditorProvider {
  formEditor: string = 'IBizStageProgressBar';

  gridEditor: string = 'IBizStageProgressBar';

  async createController(
    editorModel: ISpan,
    parentController: IEditorContainerController,
  ): Promise<EditorController> {
    const c = new EditorController(editorModel, parentController);
    await c.init();
    return c;
  }
}
