import {
  IEditorContainerController,
  IEditorProvider,
} from '@ibiz-template/runtime';
import { IPicker } from '@ibiz/model-core';
import { EmojiInputEditorController } from './editor.controller';

/**
 * 数据选择器编辑器适配器
 *
 * @author lxm
 * @date 2022-09-19 22:09:03
 * @export
 * @class EmojiInputEditorProvider
 * @implements {EditorProvider}
 */
export class EmojiInputEditorProvider implements IEditorProvider {
  formEditor: string = 'IBizEmojiInput';

  gridEditor: string = 'IBizEmojiInput';

  async createController(
    editorModel: IPicker,
    parentController: IEditorContainerController,
  ): Promise<EmojiInputEditorController> {
    const c = new EmojiInputEditorController(editorModel, parentController);
    await c.init();
    return c;
  }
}
