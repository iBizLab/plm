import {
  IEditorContainerController,
  IEditorProvider,
} from '@ibiz-template/runtime';
import { IPicker } from '@ibiz/model-core';
import { AttentionSelectController } from './attention-select.controller';

/**
 * 数据选择器编辑器适配器
 *
 * @author lxm
 * @date 2022-09-19 22:09:03
 * @export
 * @class DataPickerEditorProvider
 * @implements {EditorProvider}
 */
export class AttentionSelectProvider implements IEditorProvider {
  formEditor: string = 'AttentionSelect';

  gridEditor: string = 'AttentionSelect';

  async createController(
    editorModel: IPicker,
    parentController: IEditorContainerController,
  ): Promise<AttentionSelectController> {
    const c = new AttentionSelectController(editorModel, parentController);
    await c.init();
    return c;
  }
}
