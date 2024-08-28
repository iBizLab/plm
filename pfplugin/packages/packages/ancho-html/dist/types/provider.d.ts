import { IEditorContainerController, IEditorProvider } from '@ibiz-template/runtime';
import { IRaw } from '@ibiz/model-core';
import { RawEditorController } from './controller';
/**
 * 直接内容编辑器适配器
 *
 * @export
 * @class RawEditorProvider
 * @implements {EditorProvider}
 */
export declare class AnchoHtmlProvider implements IEditorProvider {
    formEditor: string;
    gridEditor: string;
    createController(editorModel: IRaw, parentController: IEditorContainerController): Promise<RawEditorController>;
}
