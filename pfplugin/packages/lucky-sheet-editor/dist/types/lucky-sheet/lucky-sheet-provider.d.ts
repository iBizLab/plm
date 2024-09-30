import { IEditorContainerController, IEditorProvider } from '@ibiz-template/runtime';
import { ITextBox } from '@ibiz/model-core';
import { LuckySheetController } from './lucky-sheet.controller';
export declare class LuckySheetProvider implements IEditorProvider {
    formEditor: string;
    gridEditor: string;
    createController(editorModel: ITextBox, parentController: IEditorContainerController): Promise<LuckySheetController>;
}
