/**
 * 判断字符串是否同时存在英文和中文
 * @param str
 * @returns
 */
export declare const hasChineseAndEnglish: (str: string) => boolean;
/**
 * 判断是不是汉字
 * @param char
 * @returns
 */
export declare const isChineseCharacter: (char: string) => boolean;
/**
 *  获取主题色
 * @returns
 */
export declare const getThemeVar: () => string | null;
/**
 * 绘制文本标志头
 * @param text
 * @returns
 */
export declare const renderTextPhoto: (text: string) => string | undefined;
/**
 * 字符串转16进制颜色
 * @param text
 * @returns
 */
export declare const stringToHexColor: (text: string) => string;
