/**
 * 表情符号接口定义
 *
 * @interface IEmoji
 */
export interface IEmoji {
    /**
     * 表情符号的数据，通常是Unicode编码或svg
     *
     * @type {string}
     */
    data: string;
    /**
     * 表情符号所属的分类
     *
     * @type {string}
     */
    category: string;
    /**
     * 表情符号的别名列表
     *
     * @type {string[]}
     */
    aliases: string[];
}
/**
 * 表情符号类，实现IEmoji接口
 *
 * @class Emoji
 * @implements IEmoji
 */
export declare class Emoji implements IEmoji {
    data: string;
    category: string;
    aliases: string[];
    constructor(data: string, category: string, aliases: string[]);
}
