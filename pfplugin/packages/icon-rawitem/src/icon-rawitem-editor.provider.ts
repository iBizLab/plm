/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  IEditorContainerController,
  IEditorProvider,
} from '@ibiz-template/runtime';
import { IRaw } from '@ibiz/model-core';
import { IconRawItemEditorController } from './icon-rawitem-editor.controller';

/**
 * 直接内容编辑器适配器
 *
 * @export
 * @class IconRawItemEditorController
 * @implements {EditorProvider}
 */
export class IconRawItemEditorProvider implements IEditorProvider {
  formEditor: string = 'IBizIconRawItem';

  gridEditor: string = 'IBizIconRawItem';

  async createController(
    editorModel: IRaw,
    parentController: IEditorContainerController,
  ): Promise<IconRawItemEditorController> {
    const c = new IconRawItemEditorController(editorModel, parentController);
    await c.init();
    return c;
  }
}
