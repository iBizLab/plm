/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  IEditorContainerController,
  IEditorProvider,
} from '@ibiz-template/runtime';
import { IHtml } from '@ibiz/model-core';
import { HtmlCommentController } from './html-comment.controller';

/**
 * html框编辑器适配器
 *
 * @author lxm
 * @date 2022-09-19 22:09:03
 * @export
 * @class HtmlCommentProvider
 * @implements {EditorProvider}
 */
export class HtmlCommentProvider implements IEditorProvider {
  formEditor: string = 'HtmlComment';

  gridEditor: string = 'HtmlComment';

  async createController(
    editorModel: IHtml,
    parentController: IEditorContainerController,
  ): Promise<HtmlCommentController> {
    const c = new HtmlCommentController(editorModel, parentController);
    await c.init();
    return c;
  }
}
