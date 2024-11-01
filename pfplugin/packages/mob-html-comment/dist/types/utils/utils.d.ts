export declare class HtmlUtil {
    /**
     * 获取主题
     * @returns
     */
    static getThemeVar(): string | null;
    /**
     * 是否包含中文字符
     * @param inputString
     * @returns
     */
    static isChineseCharacter(inputString: string): boolean;
    /**
     * 判断字符串是否同时存在英文和中文
     * @param str
     * @returns
     */
    static hasChineseAndEnglish(str: string): boolean;
    /**
     * 字符串转16进制颜色
     * @param text
     * @returns
     */
    static stringToHexColor(text: string): string;
    /**
     * 缩写名字
     * @param text
     * @returns
     */
    static avatarName(text: string): string | void;
    /**
     * 解析emoji表情
     *
     * @param {string} value
     * @return {*}  {string}
     */
    static getEmojiCustomHtml(value: string): string;
}
