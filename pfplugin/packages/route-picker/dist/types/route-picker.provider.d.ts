import { IEditorContainerController, IEditorProvider } from '@ibiz-template/runtime';
import { IPicker } from '@ibiz/model-core';
import { RoutePickerController } from './route-picker.controller';
/**
 * 数据选择器编辑器适配器
 *
 * @author lxm
 * @date 2022-09-19 22:09:03
 * @export
 * @class RoutePickerProvider
 * @implements {EditorProvider}
 */
export declare class RoutePickerProvider implements IEditorProvider {
    formEditor: string;
    gridEditor: string;
    constructor();
    createController(editorModel: IPicker, parentController: IEditorContainerController): Promise<RoutePickerController>;
}
