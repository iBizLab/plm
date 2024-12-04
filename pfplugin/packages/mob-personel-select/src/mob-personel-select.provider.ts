import {
  IEditorContainerController,
  IEditorProvider,
} from '@ibiz-template/runtime';
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
export class MobPersonelSelectProvider implements IEditorProvider {
  formEditor: string = 'MobPersonelSelect';

  gridEditor: string = 'MobPersonelSelect';

  async createController(
    editorModel: IPicker,
    parentController: IEditorContainerController,
  ): Promise<MobPersonelSelectController> {
    const c = new MobPersonelSelectController(editorModel, parentController);
    await c.init();
    return c;
  }
}
