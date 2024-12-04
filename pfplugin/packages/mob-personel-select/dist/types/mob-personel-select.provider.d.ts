import { IEditorContainerController, IEditorProvider } from '@ibiz-template/runtime';
import { IPicker } from '@ibiz/model-core';
import { MobPersonelSelectController } from './mob-personel-select.controller';
/**
 * 数据选择器编辑器适配器
 *
 * @author lxm
 * @date 2022-09-19 22:09:03
 * @export
 * @class DataPickerEditorProvider
 * @implements {EditorProvider}
 */
export declare class MobPersonelSelectProvider implements IEditorProvider {
    formEditor: string;
    gridEditor: string;
    createController(editorModel: IPicker, parentController: IEditorContainerController): Promise<MobPersonelSelectController>;
}
