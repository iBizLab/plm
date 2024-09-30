import { CodeListEditorController } from '@ibiz-template/runtime';
import { IEditor } from '@ibiz/model-core';
import { ISchemaField } from '../interface';
export declare class FilterConditionController extends CodeListEditorController {
    /**
     * jsonSchema标识
     *
     * @author zhanghengfeng
     * @date 2024-07-10 10:07:15
     * @type {string}
     */
    jsonSchemaTag: string;
    /**
     * jsonSchema属性字段
     *
     * @author zhanghengfeng
     * @date 2024-07-10 10:07:38
     * @type {ISchemaField[]}
     */
    schemaFields: ISchemaField[];
    /**
     * jsonSchema属性字段映射
     *
     * @author zhanghengfeng
     * @date 2024-07-10 10:07:04
     */
    schemaFieldMap: Map<string, ISchemaField>;
    /**
     * 边框模式
     *
     * @type {boolean}
     * @memberof FilterConditionController
     */
    borderMode: 'DEFAULT' | 'BORDER';
    /**
     * 初始化
     *
     * @author zhanghengfeng
     * @date 2024-07-10 10:07:23
     * @protected
     * @return {*}  {Promise<void>}
     */
    protected onInit(): Promise<void>;
    /**
     * 计算jsonSchema属性字段
     *
     * @author zhanghengfeng
     * @date 2024-07-10 10:07:35
     * @param {IData} jsonSchema
     * @return {*}  {ISchemaField[]}
     */
    calcSchemaFieldBySchema(jsonSchema: IData): ISchemaField[];
    /**
     * 获取编辑器模型
     *
     * @author zhanghengfeng
     * @date 2024-07-10 10:07:49
     * @param {ISchemaField} field
     * @return {*}  {IEditor}
     */
    getEditor(field: ISchemaField): IEditor;
}
