import { IEditorContainerController, IEditorProvider } from '@ibiz-template/runtime';
import { IRaw } from '@ibiz/model-core';
import { RawActivityEditorController } from './raw-activity.controller';
/**
 * 直接内容(活动)编辑器适配器
 *
 * @export
 * @class RawActivityEditorProvider
 * @implements {EditorProvider}
 */
export declare class RawActivityEditorProvider implements IEditorProvider {
    formEditor: string;
    gridEditor: string;
    createController(editorModel: IRaw, parentController: IEditorContainerController): Promise<RawActivityEditorController>;
}
