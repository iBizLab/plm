import { IEditorContainerController, IEditorProvider } from '@ibiz-template/runtime';
import { IHtml } from '@ibiz/model-core';
import { MobCommentController } from './mob-comment.controller';
/**
 * @description 评论框
 * @export
 * @class MobCommentProvider
 * @implements {IEditorProvider}
 */
export declare class MobCommentProvider implements IEditorProvider {
    formEditor: string;
    gridEditor: string;
    createController(editorModel: IHtml, parentController: IEditorContainerController): Promise<MobCommentController>;
}
