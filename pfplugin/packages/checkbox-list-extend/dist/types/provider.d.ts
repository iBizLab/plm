import { IEditorProvider, IEditorContainerController } from '@ibiz-template/runtime';
import { IPicker } from '@ibiz/model-core';
import { CheckboxListExtendController } from './controller';
/**
 * 树型列表框
 *
 * @export
 * @class CheckboxListExtendProvider
 * @implements {IEditorProvider}
 */
export declare class CheckboxListExtendProvider implements IEditorProvider {
    formEditor: string;
    gridEditor: string;
    createController(editorModel: IPicker, parentController: IEditorContainerController): Promise<CheckboxListExtendController>;
}
