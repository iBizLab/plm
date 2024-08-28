import { SlateRange, SlateText, SlatePath, SlateDescendant } from '@wangeditor/editor';
import { OverlayPosition } from '../types';
import { CursorEditor, CursorState, YjsEditor } from '../../core';
export declare const CHILDREN_TO_CURSOR_STATE_TO_RANGE: WeakMap<SlateDescendant[], WeakMap<CursorState, SlateRange | null>>;
/**
 * 获取选区配置
 */
type GetSelectionRectsOptions = {
    xOffset: number;
    yOffset: number;
    shouldGenerateOverlay?: (node: SlateText, path: SlatePath) => boolean;
};
/**
 * 获取光标范围
 *
 * @export
 * @template TCursorData
 * @param {CursorEditor<TCursorData>} editor
 * @param {CursorState<TCursorData>} cursorState
 * @return {*}  {(SlateRange | null)}
 */
export declare function getCursorRange<TCursorData extends Record<string, unknown> = Record<string, unknown>>(editor: CursorEditor<TCursorData> | undefined, cursorState: CursorState<TCursorData>): SlateRange | null;
/**
 * 获取覆盖位置
 *
 * @export
 * @param {YjsEditor} editor
 * @param {SlateRange} range
 * @param {GetSelectionRectsOptions} { yOffset, xOffset, shouldGenerateOverlay }
 * @return {*}  {OverlayPosition}
 */
export declare function getOverlayPosition(editor: YjsEditor, range: SlateRange, { yOffset, xOffset, shouldGenerateOverlay }: GetSelectionRectsOptions): OverlayPosition;
export {};
