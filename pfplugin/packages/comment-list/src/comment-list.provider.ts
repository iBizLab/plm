import {
  IEditorContainerController,
  IEditorProvider,
} from '@ibiz-template/runtime';
import { ITextBox } from '@ibiz/model-core';
import { CommentListComtroller } from './comment-list.controller';

export class CommentListProvider implements IEditorProvider {
  component: string = 'CommentList';

  formEditor: string = 'CommentList';

  gridEditor: string = 'CommentList';

  async createController(
    editorModel: ITextBox,
    parentController: IEditorContainerController,
  ): Promise<CommentListComtroller> {
    const c = new CommentListComtroller(editorModel, parentController);
    await c.init();
    return c;
  }
}
