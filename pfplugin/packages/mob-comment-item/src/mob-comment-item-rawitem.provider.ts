import {
  IEditorContainerController,
  IEditorProvider,
} from '@ibiz-template/runtime';
import { IRaw } from '@ibiz/model-core';
import { MobCommentItemRawItemController } from './mob-comment-item-rawitem.controller';

export class MobCommentItemRawItemEditorProvider implements IEditorProvider {
  formEditor: string = 'MobCommentItemRawItem';

  gridEditor: string = 'MobCommentItemRawItem';

  async createController(
    editorModel: IRaw,
    parentController: IEditorContainerController,
  ): Promise<MobCommentItemRawItemController> {
    const c = new MobCommentItemRawItemController(
      editorModel,
      parentController,
    );
    await c.init();
    return c;
  }
}
