import { IEditorContainerController, IEditorProvider } from '@ibiz-template/runtime';
import { IPicker } from '@ibiz/model-core';
import { JsonSchemaController } from './json-schema.controller';
/**
 * json格式化编辑器适配器
 *
 * @export
 * @class JsonSchemaProvider
 * @implements {IEditorProvider}
 */
export declare class JsonSchemaProvider implements IEditorProvider {
    formEditor: string;
    gridEditor: string;
    constructor();
    createController(editorModel: IPicker, parentController: IEditorContainerController): Promise<JsonSchemaController>;
}
