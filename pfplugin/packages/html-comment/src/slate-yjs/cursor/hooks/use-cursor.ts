/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref, Ref, watch, computed, watchEffect, ComputedRef } from 'vue';
import { SlateRange, SlateText } from '@wangeditor/editor';
import { NodeMatch, getCursorRange, getOverlayPosition } from '../util';
import {
  CaretPosition,
  CursorData,
  OverlayPosition,
  SelectionRect,
} from '../types';
import { useOnResize } from './use-resize';
import { CursorEditor, CursorState } from '../../core';
import { SlateYjs } from '../../slate-yjs';
import { debounce } from '@ibiz-template/core';

const FROZEN_EMPTY_ARRAY = Object.freeze([]);

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
export type CursorOverlayData<TCursorData extends Record<string, unknown>> =
  CursorState<TCursorData> & {
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
export function useCursorOverlayPositions(
  opts: useCursorOverlayPositionOptions,
): {
  overlayData: ComputedRef<CursorOverlayData<CursorData>[]>;
  refresh: () => void;
} {
  const { slateYjs, containerRef, shouldGenerateOverlay } = opts;

  const refreshOnResize =
    'refreshOnResize' in opts ? opts.refreshOnResize ?? true : true;

  const overlayPositionCache = new Map<SlateRange, OverlayPosition>();
  const overlayPositions = ref<Record<string, OverlayPosition>>({});

  /**
   * 更新位置
   *
   * @return {*}  {void}
   */
  const updateOverlayPositions = (): void => {
    if ((containerRef && !containerRef.value) || !slateYjs.yjsEditor) {
      return;
    }
    const containerRect = containerRef?.value?.getBoundingClientRect();
    const xOffset = containerRect?.x ?? 0;
    const yOffset = containerRect?.y ?? 0;

    let overlayPositionsChanged =
      Object.keys(overlayPositions.value).length !==
      Object.keys(slateYjs.cursorStates).length;

    const updated = Object.fromEntries(
      Object.entries(slateYjs.cursorStates).map(([key, state]) => {
        const range =
          state.relativeSelection &&
          getCursorRange(slateYjs.yjsEditor as CursorEditor, state);

        if (!range) {
          return [key, FROZEN_EMPTY_ARRAY];
        }

        const cached = overlayPositionCache.get(range);
        if (cached) {
          return [key, cached];
        }

        const overlayPosition = getOverlayPosition(
          slateYjs.yjsEditor as CursorEditor,
          range,
          {
            xOffset,
            yOffset,
            shouldGenerateOverlay,
          },
        );
        overlayPositionsChanged = true;
        overlayPositionCache.set(range, overlayPosition);
        return [key, overlayPosition];
      }),
    );

    if (overlayPositionsChanged) {
      overlayPositions.value = updated;
    }
  };

  const refresh = (): void => {
    overlayPositionCache.clear();
    updateOverlayPositions();
  };

  if (refreshOnResize) {
    useOnResize(containerRef, refresh);
  }

  CursorEditor.onEvent('updateCursor', debounce(updateOverlayPositions, 0));

  watch(
    () => slateYjs.cursorStates,
    () => updateOverlayPositions(),
    { deep: true, immediate: true },
  );

  const overlayData = computed(() => {
    return Object.entries(slateYjs.cursorStates).map(([clientId, state]) => {
      const range =
        state.relativeSelection &&
        getCursorRange(slateYjs.yjsEditor as CursorEditor, state);
      const overlayPosition = overlayPositions.value[clientId];

      return {
        ...state,
        range,
        caretPosition: overlayPosition?.caretPosition ?? null,
        selectionRects: overlayPosition?.selectionRects ?? FROZEN_EMPTY_ARRAY,
      } as CursorOverlayData<CursorData>;
    });
  });

  return {
    overlayData,
    refresh,
  };
}
