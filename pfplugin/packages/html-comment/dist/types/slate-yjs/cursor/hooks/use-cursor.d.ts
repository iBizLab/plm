import { Ref, ComputedRef } from 'vue';
import { SlateRange, SlateText } from '@wangeditor/editor';
import { NodeMatch } from '../util';
import { CaretPosition, CursorData, SelectionRect } from '../types';
import { CursorState } from '../../core';
import { SlateYjs } from '../../slate-yjs';
/**
 * 计算光标覆盖位置所需参数
 */
export type useCursorOverlayPositionOptions = {
    /**
     * SlateYjs 实例对象
     *
     * @type {SlateYjs}
     */
    slateYjs: SlateYjs;
    /**
     * 光标所在绘制容器Ref
     *
     * @type {(Ref<HTMLElement | undefined>)}
     */
    containerRef: Ref<HTMLElement | undefined>;
    /**
     * 调整大小时刷新
     *
     * @type {(boolean | 'debounced')}
     */
    refreshOnResize?: boolean | 'debounced';
    /**
     * 生成叠加覆盖
     *
     * @type {NodeMatch<SlateText>}
     */
    shouldGenerateOverlay?: NodeMatch<SlateText>;
};
/**
 * 光标位置数据
 */
export type CursorOverlayData<TCursorData extends Record<string, unknown>> = CursorState<TCursorData> & {
    range: SlateRange | null;
    caretPosition: CaretPosition | null;
    selectionRects: SelectionRect[];
};
/**
 * 计算光标覆盖位置
 *
 * @export
 * @param {useCursorOverlayPositionOptions} opts
 */
export declare function useCursorOverlayPositions(opts: useCursorOverlayPositionOptions): {
    overlayData: ComputedRef<CursorOverlayData<CursorData>[]>;
    refresh: () => void;
};
