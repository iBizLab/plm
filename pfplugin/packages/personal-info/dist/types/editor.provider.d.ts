import { ISpan } from '@ibiz/model-core';
import { IEditorContainerController, IEditorProvider } from '@ibiz-template/runtime';
import { PersonalInfoEditorController } from './editor.controller';
/**
 * 标签编辑器适配器
 *
 * @author lxm
 * @date 2022-09-19 22:09:03
 * @export
 * @class PersonalInfoEditorProvider
 * @implements {EditorProvider}
 */
export declare class PersonalInfoEditorProvider implements IEditorProvider {
    formEditor: string;
    gridEditor: string;
    createController(editorModel: ISpan, parentController: IEditorContainerController): Promise<PersonalInfoEditorController>;
}
