import { IEditorContainerController, IEditorProvider } from '@ibiz-template/runtime';
import { IPicker } from '@ibiz/model-core';
import { PersonelSelectController } from './personel-select-controller';
export declare class PersonelSelectProvider implements IEditorProvider {
    component: string;
    formEditor: string;
    gridEditor: string;
    createController(editorModel: IPicker, parentController: IEditorContainerController): Promise<PersonelSelectController>;
}
