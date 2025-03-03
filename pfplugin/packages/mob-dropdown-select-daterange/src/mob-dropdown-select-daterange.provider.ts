import {
  IEditorContainerController,
  IEditorProvider,
} from '@ibiz-template/runtime';
import { IDateRange } from '@ibiz/model-core';
import { DropdownSelectDateRangeController } from './mob-dropdown-select-daterange.controller';

/**
 * 数值范围编辑器适配器
 *
 * @export
 * @class DropdownSelectDateRangeProvider
 * @implements {EditorProvider}
 */
export class DropdownSelectDateRangeProvider implements IEditorProvider {
  formEditor: string = 'DropdownSelectDateRange';

  gridEditor: string = 'DropdownSelectDateRange';

  async createController(
    editorModel: IDateRange,
    parentController: IEditorContainerController,
  ): Promise<DropdownSelectDateRangeController> {
    const c = new DropdownSelectDateRangeController(
      editorModel,
      parentController,
    );
    await c.init();
    return c;
  }
}
