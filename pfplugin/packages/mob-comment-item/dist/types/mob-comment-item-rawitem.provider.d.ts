import { IEditorContainerController, IEditorProvider } from '@ibiz-template/runtime';
import { IRaw } from '@ibiz/model-core';
import { MobCommentItemRawItemController } from './mob-comment-item-rawitem.controller';
export declare class MobCommentItemRawItemEditorProvider implements IEditorProvider {
    formEditor: string;
    gridEditor: string;
    createController(editorModel: IRaw, parentController: IEditorContainerController): Promise<MobCommentItemRawItemController>;
}
