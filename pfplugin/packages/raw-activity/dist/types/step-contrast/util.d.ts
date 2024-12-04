/**
 * 封装字符串比对方法
 *
 * @memberof Util
 */
export declare class Util {
    /**
     * diff-match-patch 实例
     *
     * @memberof Util
     */
    dmp: IParams;
    /**
     * 比对标签的集合
     *
     * @memberof Util
     */
    tagMap: IParams;
    /**
     * unicode初始值
     *
     * @memberof Util
     */
    unicodeRangeStart: number;
    /**
     * 标签集合的长度
     *
     * @memberof Util
     */
    mapLength: number;
    constructor();
    init(): void;
    /**
     * 字符串比对方法
     *
     * @param {string} oldValue 旧值
     * @param {string} newValue 新值
     * @returns {string} 比对结果字符串
     * @memberof Util
     */
    doDiff(oldValue: string, newValue: string): string;
    /**
     * 将 HTML 字符串转换为可比较的字符串
     *
     * @param {string} htmlString 输入的 HTML 字符串
     * @returns {string} 转换后的可比较字符串
     * @memberof Util
     */
    convertHtmlToDiffString(htmlString: string): string;
    /**
     * 插入标签操作符
     *
     * @param {string} diffableString
     * @param {number} [operation=0 | 1 | -1]
     * @return {*}
     * @memberof Util
     */
    insertTagsForOperation(diffableString: string, operation?: number): string;
    /**
     * 将可比较的字符串转换回 HTML 字符串
     *
     * @param {string} diffString 可比较的字符串
     * @returns {string} 转换后的 HTML 字符串
     * @memberof Util
     */
    convertDiffBackToHtml(diffString: string): string;
}
