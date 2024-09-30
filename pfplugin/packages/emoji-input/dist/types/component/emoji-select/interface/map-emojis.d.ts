import { IEmoji } from './emoji';
/**
 * 表情符号映射接口
 *
 * 此接口定义了一个对象，其键为字符串类型（可能是某种分类或标识符），
 * 对应的值为IEmoji接口的数组，表示属于该键所代表分类或标识符的表情符号列表。
 *
 * @interface MapEmojis
 */
export interface MapEmojis {
    /**
     * 表情符号的分类或标识符，作为对象的键
     *
     * @type {string}
     */
    [x: string]: IEmoji[];
}
