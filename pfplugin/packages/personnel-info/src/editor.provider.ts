import { ISpan } from '@ibiz/model-core';
import {
  IEditorContainerController,
  IEditorProvider,
} from '@ibiz-template/runtime';
import { PersonnelInfoEditorController } from './editor.controller';

/**
 * 标签编辑器适配器
 *
 * @author lxm
 * @date 2022-09-19 22:09:03
 * @export
 * @class PersonnelInfoEditorProvider
 * @implements {EditorProvider}
 */
export class PersonnelInfoEditorProvider implements IEditorProvider {
  formEditor: string = 'IBizPersonnelInfo';

  gridEditor: string = 'IBizPersonnelInfo';

  async createController(
    editorModel: ISpan,
    parentController: IEditorContainerController,
  ): Promise<PersonnelInfoEditorController> {
    const c = new PersonnelInfoEditorController(editorModel, parentController);
    await c.init();
    return c;
  }
}
