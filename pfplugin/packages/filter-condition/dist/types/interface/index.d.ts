import { IEditorController, IEditorProvider, ValueOP } from '@ibiz-template/runtime';
import { IEditor } from '@ibiz/model-core';
export interface ISchemaField {
    /**
     * 类型
     * - 用于计算预置操作符和编辑器
     * @type {string}
     * @memberof ISchemaField
     */
    type: string;
    /**
     * 属性标识
     *
     * @type {string}
     * @memberof ISchemaField
     */
    appDEFieldId: string;
    /**
     * 预置操作符
     *
     * @type {ValueOP[]}
     * @memberof ISchemaField
     */
    valueOPs: ValueOP[];
    /**
     * 标题
     *
     * @type {string}
     * @memberof ISchemaField
     */
    caption: string;
    /**
     * 代码表标识
     *
     * @type {string}
     * @memberof ISchemaField
     */
    appCodeListId?: string;
    /**
     * 应用实体标识
     *
     * @type {string}
     * @memberof ISchemaField
     */
    appDataEntityId?: string;
}
export interface IFilterCondition {
    /**
     * 标识
     *
     * @author zhanghengfeng
     * @date 2024-07-10 10:07:08
     * @type {string}
     */
    key: string;
    /**
     * 逻辑连接符
     *
     * @author zhanghengfeng
     * @date 2024-07-10 10:07:25
     * @type {string}
     */
    connection: string;
    /**
     * 属性字段
     *
     * @author zhanghengfeng
     * @date 2024-07-10 10:07:41
     * @type {string}
     */
    field: string;
    /**
     * 操作符
     *
     * @author zhanghengfeng
     * @date 2024-07-10 10:07:58
     * @type {string}
     */
    valueOP: string;
    /**
     * 值
     *
     * @author zhanghengfeng
     * @date 2024-07-10 10:07:07
     * @type {unknown}
     */
    value?: unknown;
    /**
     * 编辑器
     *
     * @author zhanghengfeng
     * @date 2024-07-10 10:07:16
     * @type {IEditorController<IEditor>}
     */
    editor?: IEditorController<IEditor>;
    /**
     * 编辑器适配器
     *
     * @author zhanghengfeng
     * @date 2024-07-10 10:07:25
     * @type {IEditorProvider}
     */
    editorProvider?: IEditorProvider;
}
