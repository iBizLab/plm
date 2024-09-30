/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  IEditorContainerController,
  IEditorProvider,
} from '@ibiz-template/runtime';
import { IRaw } from '@ibiz/model-core';
import { RawEditorController } from './controller';

/**
 * 直接内容编辑器适配器
 *
 * @export
 * @class RawEditorProvider
 * @implements {EditorProvider}
 */
export class AnchoHtmlProvider implements IEditorProvider {
  formEditor: string = 'AnchoHtml';

  gridEditor: string = 'AnchoHtml';

  async createController(
    editorModel: IRaw,
    parentController: IEditorContainerController,
  ): Promise<RawEditorController> {
    const c = new RawEditorController(editorModel, parentController);
    await c.init();
    return c;
  }
}
