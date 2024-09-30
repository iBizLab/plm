/**
 * 插入项接口定义
 *
 * @interface IInsertItem
 */
export interface IInsertItem {
    /**
     * 类型
     *
     * @type {string}
     */
    type: string;
    /**
     * 图标
     *
     * @type {string}
     */
    icon: string;
    /**
     * 文本
     *
     * @type {string}
     */
    text: string;
    /**
     * 插入项所属的分类
     *
     * @type {string}
     */
    category: string;
    /**
     * 插入项所属的分类
     *
     * @type {string}
     */
    value: string;
    /**
     * 是否为行类元素
     *
     * @type {string}
     */
    isInline: boolean;
}
/**
 * 插入项类，实现IInsertItem接口
 *
 * @class InsertItem
 * @implements IInsertItem
 */
export declare class InsertItem implements IInsertItem {
    type: string;
    icon: string;
    category: string;
    text: string;
    value: string;
    isInline: boolean;
    constructor(type: string, icon: string, category: string, text: string, value: string, isInline?: boolean);
}
