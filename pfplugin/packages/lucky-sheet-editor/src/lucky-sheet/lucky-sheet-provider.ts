import {
  IEditorContainerController,
  IEditorProvider,
} from '@ibiz-template/runtime';
import { ITextBox } from '@ibiz/model-core';
import { LuckySheetController } from './lucky-sheet.controller';

export class LuckySheetProvider implements IEditorProvider {
  formEditor: string = 'IBizLuckySheet';

  gridEditor: string = 'IBizLuckySheet';

  async createController(
    editorModel: ITextBox,
    parentController: IEditorContainerController,
  ): Promise<LuckySheetController> {
    const c = new LuckySheetController(editorModel, parentController);
    await c.init();
    return c;
  }
}
