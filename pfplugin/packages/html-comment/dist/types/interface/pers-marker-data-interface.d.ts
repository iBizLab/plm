import { SlateNode, SlatePoint, SlateRange } from '@wangeditor/editor';
/**
 * 光标信息
 * - 信息中的offset均为当前行中相对于首位字符的偏移量
 */
export interface ICursor {
    /**
     * 光标老位置
     */
    position?: SlatePoint;
    /**
     * 光标新位置
     */
    newPosition?: SlatePoint;
    /**
     * 选区范围
     */
    selectionRange?: SlateRange;
}
/**
 * 用户标记数据
 *
 */
export interface IPersMarkData {
    /**
     * 用户标记
     */
    id: string;
    /**
     * 上一次操作的光标信息
     */
    preCursor?: ICursor;
    /**
     * 光标信息
     */
    cursor: ICursor;
}
/**
 * 用户标记节点
 */
export interface IPersMarkNode {
    /**
     * 节点结构
     */
    node: SlateNode;
    /**
     * 参数
     */
    param: IPersMarkData;
}
export declare const presRegex: RegExp;
