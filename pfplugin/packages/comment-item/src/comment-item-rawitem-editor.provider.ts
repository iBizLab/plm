/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  IEditorContainerController,
  IEditorProvider,
} from '@ibiz-template/runtime';
import { IRaw } from '@ibiz/model-core';
import { CommentItemRawItemEditorController } from './comment-item-rawitem-editor.controller';

/**
 * 直接内容编辑器适配器
 *
 * @export
 * @class CommentItemRawItemEditorController
 * @implements {EditorProvider}
 */
export class CommentItemRawItemEditorProvider implements IEditorProvider {
  formEditor: string = 'CommentItemRawItem';

  gridEditor: string = 'CommentItemRawItem';

  async createController(
    editorModel: IRaw,
    parentController: IEditorContainerController,
  ): Promise<CommentItemRawItemEditorController> {
    const c = new CommentItemRawItemEditorController(
      editorModel,
      parentController,
    );
    await c.init();
    return c;
  }
}
