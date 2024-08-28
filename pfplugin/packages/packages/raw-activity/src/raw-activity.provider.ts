/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  IEditorContainerController,
  IEditorProvider,
} from '@ibiz-template/runtime';
import { IRaw } from '@ibiz/model-core';
import { RawActivityEditorController } from './raw-activity.controller';

/**
 * 直接内容(活动)编辑器适配器
 *
 * @export
 * @class RawActivityEditorProvider
 * @implements {EditorProvider}
 */
export class RawActivityEditorProvider implements IEditorProvider {
  formEditor: string = 'RawActivity';

  gridEditor: string = 'RawActivity';

  async createController(
    editorModel: IRaw,
    parentController: IEditorContainerController,
  ): Promise<RawActivityEditorController> {
    const c = new RawActivityEditorController(editorModel, parentController);
    await c.init();
    return c;
  }
}
