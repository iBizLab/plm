/**
 * 类别接口定义
 *
 * @interface ICategory
 */
export interface ICategory {
  /**
   * 类别的名称
   *
   * @type {string}
   */
  name: string;

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
export class Category implements ICategory {
  public name: string;

  public icon: string;

  public text: string;

  constructor(name: string, icon: string, text: string) {
    this.name = name;
    this.icon = icon;
    this.text = text;
  }

  get label(): string {
    return this.name;
  }
}
