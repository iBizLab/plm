import {
  GridController,
  GridFieldColumnController,
  IEditorContainerController,
} from '@ibiz-template/runtime';
import { ISpan, IDEGridFieldColumn } from '@ibiz/model-core';
import { SpanEditorController } from './clip-board-span/controller';

/**
 * 适配器
 *
 * @author ljx
 * @date 2024-02-01 22:09:03
 * @export
 * @class FastCopyProvider
 * @implements {EditorProvider}
 */
export class FastCopyProvider {
  formEditor: string = 'IBizFastCopySpan';

  gridEditor: string = 'IBizFastCopySpan';

  component: string = 'IBizFastCopyFieldColumn';

  registerType: string | undefined = '';

  constructor(registerType?: string) {
    this.registerType = registerType;
  }

  async createController(
    model: IParams,
    parentController: IParams,
  ): Promise<SpanEditorController | GridFieldColumnController> {
    let c;
    if (this.registerType === 'GRIDCOLUMN') {
      c = new GridFieldColumnController(
        model as IDEGridFieldColumn,
        parentController as GridController,
      );
    } else {
      c = new SpanEditorController(
        model as ISpan,
        parentController as IEditorContainerController,
      );
    }
    await c.init();
    return c;
  }
}
