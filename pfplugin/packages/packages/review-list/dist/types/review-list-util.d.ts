import { IMDControlController } from '@ibiz-template/runtime';
/**
 * 使用分页组件
 *
 * @export
 * @returns {*}
 */
export declare function usePagination(c: IMDControlController): {
    onPageChange: (page: number) => void;
    onPageSizeChange: (size: number) => void;
    onPageRefresh: () => void;
};
/**
 * 工具方法
 *
 * @export
 * @class Util
 */
export declare class Util {
    /**
     * 获取主题色
     *
     * @static
     * @return {*}
     * @memberof Util
     */
    static getThemeVar(): null | string;
    /**
     * 是否为中文字符串
     *
     * @static
     * @param {string} char
     * @return {*}
     * @memberof Util
     */
    static isChineseChart(char: string): boolean;
    /**
     * 是否同时存在英文和中文
     *
     * @static
     * @param {string} str
     * @return {*}
     * @memberof Util
     */
    static hasChineseAndEnglish(str: string): boolean;
    /**
     * 计算图片颜色
     *
     * @static
     * @param {string} textVal
     * @memberof Util
     */
    static calcColorPhoto: (textVal: string) => string;
    /**
     * 计算图片文字
     *
     * @static
     * @param {string} textVal
     * @return {*}
     * @memberof Util
     */
    static calcTextPhoto(textVal: string): string | void;
}
