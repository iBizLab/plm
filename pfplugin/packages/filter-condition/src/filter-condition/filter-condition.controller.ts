import {
  CodeListEditorController,
  getEntitySchema,
} from '@ibiz-template/runtime';
import { IEditor } from '@ibiz/model-core';
import { ISchemaField } from '../interface';
import { TypeToEditor, TypeToOPs } from '../utils';

export class FilterConditionController extends CodeListEditorController {
  /**
   * jsonSchema标识
   *
   * @author zhanghengfeng
   * @date 2024-07-10 10:07:15
   * @type {string}
   */
  jsonSchemaTag: string = '';

  /**
   * jsonSchema属性字段
   *
   * @author zhanghengfeng
   * @date 2024-07-10 10:07:38
   * @type {ISchemaField[]}
   */
  schemaFields: ISchemaField[] = [];

  /**
   * jsonSchema属性字段映射
   *
   * @author zhanghengfeng
   * @date 2024-07-10 10:07:04
   */
  schemaFieldMap = new Map<string, ISchemaField>();

  /**
   * 边框模式
   *
   * @type {boolean}
   * @memberof FilterConditionController
   */
  borderMode: 'DEFAULT' | 'BORDER' = 'DEFAULT';

  /**
   * 初始化
   *
   * @author zhanghengfeng
   * @date 2024-07-10 10:07:23
   * @protected
   * @return {*}  {Promise<void>}
   */
  protected async onInit(): Promise<void> {
    await super.onInit();
    this.jsonSchemaTag = this.editorParams?.JSONSCHEMATAG || '';
    this.borderMode =
      this.editorParams?.BORDERMODE === 'BORDER' ? 'BORDER' : 'DEFAULT';
    if (this.jsonSchemaTag) {
      const jsonSchema = await getEntitySchema(
        this.jsonSchemaTag,
        this.context,
        {
          ...this.params,
        },
      );
      if (jsonSchema) {
        const schemaFields = this.calcSchemaFieldBySchema(jsonSchema);
        this.schemaFields = schemaFields;
        this.schemaFields.forEach(item => {
          this.schemaFieldMap.set(item.appDEFieldId, item);
        });
      }
    }
  }

  /**
   * 计算jsonSchema属性字段
   *
   * @author zhanghengfeng
   * @date 2024-07-10 10:07:35
   * @param {IData} jsonSchema
   * @return {*}  {ISchemaField[]}
   */
  calcSchemaFieldBySchema(jsonSchema: IData): ISchemaField[] {
    if (!jsonSchema.properties) {
      return [];
    }
    const { properties } = jsonSchema;
    if (!Object.keys(properties).length) {
      return [];
    }
    const schemaFields: ISchemaField[] = [];
    Object.keys(properties).forEach((key: string) => {
      let type: string = 'string';
      switch (properties[key].type) {
        case 'string':
          if (properties[key].format === 'date-time') {
            type = 'date';
          }
          if (properties[key].enumSource) {
            type = 'dropdown';
          }
          break;
        case 'integer':
        case 'number':
          type = 'number';
          break;
        default:
          if (properties[key].$ref) {
            type = 'dataPicker';
          }
          break;
      }
      schemaFields.push({
        type,
        appDEFieldId: key,
        valueOPs: TypeToOPs[type],
        caption: properties[key].description,
        appDataEntityId: properties[key].$ref?.split('.')[0],
        appCodeListId: properties[key].enumSource,
      });
    });
    return schemaFields;
  }

  /**
   * 获取编辑器模型
   *
   * @author zhanghengfeng
   * @date 2024-07-10 10:07:49
   * @param {ISchemaField} field
   * @return {*}  {IEditor}
   */
  getEditor(field: ISchemaField): IEditor {
    const model = { ...TypeToEditor[field.type] };
    if (field.type === 'dropdown') {
      Object.assign(model, {
        appCodeListId: field.appCodeListId,
      });
    }
    if (field.type === 'dataPicker') {
      Object.assign(model, {
        appDataEntityId: field.appDataEntityId,
      });
    }
    return model;
  }
}
