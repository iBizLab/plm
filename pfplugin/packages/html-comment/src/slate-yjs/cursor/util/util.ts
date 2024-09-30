import { HtmlUtil } from '../../../utils';
import { CursorData } from '../types';

/**
 * hexColor 添加透明度
 *
 * @export
 * @param {string} hexColor 颜色
 * @param {number} opacity 透明度
 * @return {*}  {string}
 */
export function addAlpha(hexColor: string, opacity: number): string {
  const normalized = Math.round(Math.min(Math.max(opacity, 0), 1) * 255);
  return hexColor + normalized.toString(16).toUpperCase();
}

/**
 * 获取光标数据
 *
 * @export
 * @param {string} userName
 * @return {*}  {CursorData}
 */
export function getCursorData(userName: string): CursorData {
  return {
    color: HtmlUtil.stringToHexColor(userName),
    name: `${userName}`,
  };
}
