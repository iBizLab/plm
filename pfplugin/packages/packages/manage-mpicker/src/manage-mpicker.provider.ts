import {
  IEditorContainerController,
  IEditorProvider,
} from '@ibiz-template/runtime';
import { IPicker } from '@ibiz/model-core';
import { ManageMPickerController } from './manage-mpicker.controller';

/**
 * 数据选择器编辑器适配器
 *
 * @author lxm
 * @date 2022-09-19 22:09:03
 * @export
 * @class ManageMPickerProvider
 * @implements {EditorProvider}
 */
export class ManageMPickerProvider implements IEditorProvider {
  formEditor: string;

  gridEditor: string;

  constructor() {
    this.formEditor = 'ManageMPicker';
    this.gridEditor = 'ManageMPicker';
  }

  async createController(
    editorModel: IPicker,
    parentController: IEditorContainerController,
  ): Promise<ManageMPickerController> {
    const c = new ManageMPickerController(editorModel, parentController);
    await c.init();
    return c;
  }
}
