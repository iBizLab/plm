import { IEditorContainerController, IEditorProvider } from '@ibiz-template/runtime';
import { ITextBox } from '@ibiz/model-core';
import { CommentListComtroller } from './comment-list.controller';
export declare class CommentListProvider implements IEditorProvider {
    component: string;
    formEditor: string;
    gridEditor: string;
    createController(editorModel: ITextBox, parentController: IEditorContainerController): Promise<CommentListComtroller>;
}
