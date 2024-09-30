import { SlatePoint, SlateRange } from '@wangeditor/editor';
import { DOMRange, DOMPoint } from './dom';
import { YjsEditor } from '../../core';
/**
 * 转换dom节点位置
 *
 * @export
 * @param {YjsEditor} editor
 * @param {SlatePoint} point
 * @return {*}  {DOMPoint}
 */
export declare function toDOMPoint(editor: YjsEditor, point: SlatePoint): DOMPoint;
/**
 * 转换dom范围
 *
 * @export
 * @param {YjsEditor} editor
 * @param {SlateRange} range
 * @return {*}  {DOMRange}
 */
export declare function toDOMRange(editor: YjsEditor, range: SlateRange): DOMRange;
/**
 * 获取编辑器dom范围
 *
 * @export
 * @param {YjsEditor} editor
 * @param {SlateRange} range
 * @return {*}  {(DOMRange | null)}
 */
export declare function editorToDomRange(editor: YjsEditor, range: SlateRange): DOMRange | null;
