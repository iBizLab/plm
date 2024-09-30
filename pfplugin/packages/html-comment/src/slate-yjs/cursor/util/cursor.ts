/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
import {
  SlateRange,
  SlateEditor,
  SlateText,
  IDomEditor,
  SlatePath,
  SlateDescendant,
} from '@wangeditor/editor';
import { editorToDomRange } from './editor';
import { CaretPosition, OverlayPosition, SelectionRect } from '../types';
import {
  CursorEditor,
  CursorState,
  YjsEditor,
  relativeRangeToSlateRange,
} from '../../core';

export const CHILDREN_TO_CURSOR_STATE_TO_RANGE: WeakMap<
  SlateDescendant[],
  WeakMap<CursorState, SlateRange | null>
> = new WeakMap();

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
export function getCursorRange<
  TCursorData extends Record<string, unknown> = Record<string, unknown>,
>(
  editor: CursorEditor<TCursorData> | undefined,
  cursorState: CursorState<TCursorData>,
): SlateRange | null {
  if (!cursorState.relativeSelection || !editor) {
    return null;
  }

  let cursorStates = CHILDREN_TO_CURSOR_STATE_TO_RANGE.get(editor.children);
  if (!cursorStates) {
    cursorStates = new WeakMap();
    CHILDREN_TO_CURSOR_STATE_TO_RANGE.set(editor.children, cursorStates);
  }

  let range = cursorStates.get(cursorState);
  if (range === undefined) {
    try {
      range = relativeRangeToSlateRange(
        editor.sharedRoot,
        editor,
        cursorState.relativeSelection,
      );

      cursorStates.set(cursorState, range);
    } catch (e) {
      return null;
    }
  }

  return range;
}

/**
 * 获取覆盖位置
 *
 * @export
 * @param {YjsEditor} editor
 * @param {SlateRange} range
 * @param {GetSelectionRectsOptions} { yOffset, xOffset, shouldGenerateOverlay }
 * @return {*}  {OverlayPosition}
 */
export function getOverlayPosition(
  editor: YjsEditor,
  range: SlateRange,
  { yOffset, xOffset, shouldGenerateOverlay }: GetSelectionRectsOptions,
): OverlayPosition {
  const [start, end] = SlateRange.edges(range);
  const domRange = editorToDomRange(editor, range);
  if (!domRange) {
    return {
      caretPosition: null,
      selectionRects: [],
    };
  }

  const selectionRects: SelectionRect[] = [];
  const nodeIterator = SlateEditor.nodes(editor, {
    at: range,
    match: (n, p) =>
      SlateText.isText(n) &&
      (!shouldGenerateOverlay || shouldGenerateOverlay(n, p)),
  });

  let caretPosition: CaretPosition | null = null;
  const isBackward = SlateRange.isBackward(range);
  for (const [node, path] of nodeIterator) {
    const domNode = (editor as unknown as IDomEditor).toDOMNode(node);

    const isStartNode = SlatePath.equals(path, start.path);
    const isEndNode = SlatePath.equals(path, end.path);

    let clientRects: DOMRectList | null = null;
    if (isStartNode || isEndNode) {
      const nodeRange = document.createRange();
      nodeRange.selectNode(domNode);

      if (isStartNode) {
        nodeRange.setStart(domRange.startContainer, domRange.startOffset);
      }
      if (isEndNode) {
        nodeRange.setEnd(domRange.endContainer, domRange.endOffset);
      }

      clientRects = nodeRange.getClientRects();
    } else {
      clientRects = domNode.getClientRects();
    }

    const isCaret = isBackward ? isStartNode : isEndNode;
    for (let i = 0; i < clientRects.length; i++) {
      const clientRect = clientRects.item(i);
      if (!clientRect) {
        continue;
      }

      const isCaretRect =
        isCaret && (isBackward ? i === 0 : i === clientRects.length - 1);

      const top = clientRect.top - yOffset;
      const left = clientRect.left - xOffset;

      if (isCaretRect) {
        caretPosition = {
          height: `${clientRect.height}px`,
          top: `${top}px`,
          left: `${
            left +
            (isBackward || SlateRange.isCollapsed(range) ? 0 : clientRect.width)
          }px`,
        };
      }

      selectionRects.push({
        width: `${clientRect.width}px`,
        height: `${clientRect.height}px`,
        top: `${top}px`,
        left: `${left}px`,
      });
    }
  }

  return {
    selectionRects,
    caretPosition,
  };
}
