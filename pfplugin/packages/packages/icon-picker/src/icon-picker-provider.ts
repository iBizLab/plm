import {
  IEditorContainerController,
  IEditorProvider,
} from '@ibiz-template/runtime';
import { ITextBox } from '@ibiz/model-core';
import { IconPickerControlller } from './icon-picker-controller';

export class IconPickerProvider implements IEditorProvider {
  component: string = 'IconPicker';

  formEditor: string = 'IconPicker';

  gridEditor: string = 'IconPicker';

  async createController(
    editorModel: ITextBox,
    parentController: IEditorContainerController,
  ): Promise<IconPickerControlller> {
    const c = new IconPickerControlller(editorModel, parentController);
    await c.init();
    return c;
  }
}
