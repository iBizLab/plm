import { CursorData } from '../types';
/**
 * hexColor 添加透明度
 *
 * @export
 * @param {string} hexColor 颜色
 * @param {number} opacity 透明度
 * @return {*}  {string}
 */
export declare function addAlpha(hexColor: string, opacity: number): string;
/**
 * 获取光标数据
 *
 * @export
 * @param {string} userName
 * @return {*}  {CursorData}
 */
export declare function getCursorData(userName: string): CursorData;
