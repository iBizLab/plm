import {
  IEditorProvider,
  IEditorContainerController,
} from '@ibiz-template/runtime';
import { IPicker } from '@ibiz/model-core';
import { CheckboxListExtendController } from './controller';

/**
 * 树型列表框
 *
 * @export
 * @class CheckboxListExtendProvider
 * @implements {IEditorProvider}
 */
export class CheckboxListExtendProvider implements IEditorProvider {
  formEditor: string = 'CheckboxListExtend';

  gridEditor: string = 'CheckboxListExtend';

  async createController(
    editorModel: IPicker,
    parentController: IEditorContainerController,
  ): Promise<CheckboxListExtendController> {
    const c = new CheckboxListExtendController(editorModel, parentController);
    await c.init();
    return c;
  }
}
