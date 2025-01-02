import { IEditorContainerController, IEditorProvider } from '@ibiz-template/runtime';
import { IDateRange } from '@ibiz/model-core';
import { DropdownSelectDateRangeController } from './mob-dropdown-select-daterange.controller';
/**
 * 数值范围编辑器适配器
 *
 * @export
 * @class DropdownSelectDateRangeProvider
 * @implements {EditorProvider}
 */
export declare class DropdownSelectDateRangeProvider implements IEditorProvider {
    formEditor: string;
    gridEditor: string;
    createController(editorModel: IDateRange, parentController: IEditorContainerController): Promise<DropdownSelectDateRangeController>;
}
