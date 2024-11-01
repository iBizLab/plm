/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  IEditorContainerController,
  IEditorProvider,
} from '@ibiz-template/runtime';
import { IHtml } from '@ibiz/model-core';
import { MobCommentController } from './mob-comment.controller';

/**
 * @description 评论框
 * @export
 * @class MobCommentProvider
 * @implements {IEditorProvider}
 */
export class MobCommentProvider implements IEditorProvider {
  formEditor: string = 'IBizMobComment';

  gridEditor: string = 'IBizMobComment';

  async createController(
    editorModel: IHtml,
    parentController: IEditorContainerController,
  ): Promise<MobCommentController> {
    const c = new MobCommentController(editorModel, parentController);
    await c.init();
    return c;
  }
}
