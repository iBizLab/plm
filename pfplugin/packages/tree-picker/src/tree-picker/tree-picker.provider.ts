import {
  CodeListEditorController,
  IEditorContainerController,
  IEditorProvider,
} from '@ibiz-template/runtime';
import { IDropDownList } from '@ibiz/model-core';

export class TreePickerProvider implements IEditorProvider {
  formEditor: string = 'IBizTreePicker';

  gridEditor: string = 'IBizTreePicker';

  async createController(
    editorModel: IDropDownList,
    parentController: IEditorContainerController,
  ): Promise<CodeListEditorController> {
    const c = new CodeListEditorController(editorModel, parentController);
    await c.init();
    return c;
  }
}
