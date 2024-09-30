import { ISpan } from '@ibiz/model-core';
import { IEditorContainerController, IEditorProvider } from '@ibiz-template/runtime';
import { EditorController } from './editor.controller';
/**
 * 标签编辑器适配器
 *
 * @export
 * @class SpanEditorProvider
 * @implements {EditorProvider}
 */
export declare class EditorProvider implements IEditorProvider {
    formEditor: string;
    gridEditor: string;
    createController(editorModel: ISpan, parentController: IEditorContainerController): Promise<EditorController>;
}
