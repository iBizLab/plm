import { IEditorContainerController, IEditorProvider } from '@ibiz-template/runtime';
import { IRaw } from '@ibiz/model-core';
import { CommentItemRawItemEditorController } from './comment-item-rawitem-editor.controller';
/**
 * 直接内容编辑器适配器
 *
 * @export
 * @class CommentItemRawItemEditorController
 * @implements {EditorProvider}
 */
export declare class CommentItemRawItemEditorProvider implements IEditorProvider {
    formEditor: string;
    gridEditor: string;
    createController(editorModel: IRaw, parentController: IEditorContainerController): Promise<CommentItemRawItemEditorController>;
}
