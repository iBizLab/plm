/**
 * 获取随机字符
 * @param prefix 前缀
 */
export declare function getRandom(prefix?: string): string;
/**
 * 替换 html 特殊字符
 * @param html html 字符串
 */
export declare function replaceHtmlSymbol(html: string): string;
export declare function replaceSpecialSymbol(value: string): string;
/**
 * 遍历类数组
 * @param fakeArr 类数组
 * @param fn 回调函数
 */
export declare function arrForEach<T extends {
    length: number;
    [key: number]: unknown;
}>(fakeArr: T, fn: (this: T, item: T[number], index: number) => boolean | unknown): void;
/**
 * 节流
 * @param fn 函数
 * @param interval 间隔时间，毫秒
 */
export declare function throttle<C, T extends unknown[]>(fn: (this: C, ...args: T) => unknown, interval?: number): (this: C, ...args: T) => void;
/**
 * 防抖
 * @param fn 函数
 * @param delay 间隔时间，毫秒
 */
export declare function debounce<C, T extends unknown[]>(fn: (this: C, ...args: T) => void, delay?: number): (this: C, ...args: T) => void;
/**
 * isFunction 是否是函数
 * @param fn 函数
 */
export declare function isFunction(fn: any): fn is Function;
/**
 * 引用与非引用值 深拷贝方法
 * @param data
 */
export declare function deepClone<T>(data: T): T;
/**
 * 将可遍历的对象转换为数组
 * @param data 可遍历的对象
 */
export declare function toArray<T>(data: T): any[];
/**
 * 唯一id生成
 * @param length 随机数长度
 */
export declare function getRandomCode(): string;
/**
 * 输入非数字或字母自动创建空元素
 * @param str 字符串
 */
export declare function createEmptyElem(str: string): string;
/**
 * 字符串转高亮HTML字符串
 * @param str 字符串
 */
export declare function hightlightHtml(str: string): string;
/**
 * 创建菜单按钮
 * @param icon 字符串
 */
export declare function createMemuElem(icon: string): string;
/**
 * 是否空文本
 * @param str 字符串
 */
export declare function isNullText(str: string): boolean;
/**
 * @description 工具函数集合
 */
declare class NavUA {
    _ua: string;
    isOldEdge: boolean;
    isFirefox: boolean;
    constructor();
    /** 是否为 IE */
    isIE(): boolean;
    /** 是否为 webkit */
    isWebkit(): boolean;
}
export declare const UA: NavUA;
export {};
