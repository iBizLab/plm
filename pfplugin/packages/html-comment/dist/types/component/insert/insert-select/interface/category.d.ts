/**
 * 类别接口定义
 *
 * @interface ICategory
 */
export interface ICategory {
    /**
     * 类型
     *
     * @type {string}
     */
    type: string;
    /**
     * 类别的图标（可能是 URL 或其他标识符）
     *
     * @type {string}
     */
    icon: string;
    /**
     * 类别相关的文本描述
     *
     * @type {string}
     */
    text: string;
    /**
     * 获取类别的标签（通常是类别的名称）
     *
     * @returns {string} - 类别的名称
     */
    label: string;
}
/**
 * 类别类，实现 ICategory 接口
 *
 * @class Category
 * @implements ICategory
 */
export declare class Category implements ICategory {
    type: string;
    icon: string;
    text: string;
    constructor(type: string, icon: string, text: string);
    get label(): string;
}
