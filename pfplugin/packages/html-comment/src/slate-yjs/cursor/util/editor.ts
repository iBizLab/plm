/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-continue */
/* eslint-disable no-param-reassign */

import {
  SlatePoint,
  SlateRange,
  SlateEditor,
  IDomEditor,
} from '@wangeditor/editor';
import { DOMRange, DOMPoint, DOMText, isDOMElement } from './dom';
import { YjsEditor } from '../../core';

/**
 * 转换dom节点位置
 *
 * @export
 * @param {YjsEditor} editor
 * @param {SlatePoint} point
 * @return {*}  {DOMPoint}
 */
export function toDOMPoint(editor: YjsEditor, point: SlatePoint): DOMPoint {
  const [node] = SlateEditor.node(editor, point.path);
  const el = (editor as unknown as IDomEditor).toDOMNode(node);
  let domPoint: DOMPoint | undefined;

  if (SlateEditor.void(editor, { at: point })) {
    point = { path: point.path, offset: 0 };
  }

  const selector = `[data-slate-string], [data-slate-zero-width]`;
  const texts = Array.from(el.querySelectorAll(selector));
  let start = 0;

  for (let i = 0; i < texts.length; i++) {
    const text = texts[i];
    const domNode = text.childNodes[0] as HTMLElement;

    if (domNode == null || domNode.textContent == null) {
      continue;
    }

    const { length } = domNode.textContent;
    const attr = text.getAttribute('data-slate-length');
    const trueLength = attr == null ? length : parseInt(attr, 10);
    const end = start + trueLength;

    const nextText = texts[i + 1];
    if (
      point.offset === end &&
      nextText?.hasAttribute('data-slate-mark-placeholder')
    ) {
      const domText = nextText.childNodes[0];

      domPoint = [
        domText instanceof DOMText ? domText : nextText,
        nextText.textContent?.startsWith('\uFEFF') ? 1 : 0,
      ];
      break;
    }

    if (point.offset <= end) {
      const offset = Math.min(length, Math.max(0, point.offset - start));
      domPoint = [domNode, offset];
      break;
    }

    start = end;
  }

  if (!domPoint) {
    throw new Error(
      `Cannot resolve a DOM point from Slate point: ${JSON.stringify(point)}`,
    );
  }

  return domPoint;
}

/**
 * 转换dom范围
 *
 * @export
 * @param {YjsEditor} editor
 * @param {SlateRange} range
 * @return {*}  {DOMRange}
 */
export function toDOMRange(editor: YjsEditor, range: SlateRange): DOMRange {
  const { anchor, focus } = range;
  const isBackward = SlateRange.isBackward(range);
  const domAnchor = toDOMPoint(editor, anchor);
  const domFocus = SlateRange.isCollapsed(range)
    ? domAnchor
    : toDOMPoint(editor, focus);

  const window = editor.editorWindow;
  const domRange = window.document.createRange();
  const [startNode, startOffset] = isBackward ? domFocus : domAnchor;
  const [endNode, endOffset] = isBackward ? domAnchor : domFocus;

  // A slate Point at zero-width Leaf always has an offset of 0 but a native DOM selection at
  // zero-width node has an offset of 1 so we have to check if we are in a zero-width node and
  // adjust the offset accordingly.
  const startEl = (
    isDOMElement(startNode) ? startNode : startNode.parentElement
  ) as HTMLElement;
  const isStartAtZeroWidth = !!startEl.getAttribute('data-slate-zero-width');
  const endEl = (
    isDOMElement(endNode) ? endNode : endNode.parentElement
  ) as HTMLElement;
  const isEndAtZeroWidth = !!endEl.getAttribute('data-slate-zero-width');

  domRange.setStart(startNode, isStartAtZeroWidth ? 1 : startOffset);
  domRange.setEnd(endNode, isEndAtZeroWidth ? 1 : endOffset);
  return domRange;
}

/**
 * 获取编辑器dom范围
 *
 * @export
 * @param {YjsEditor} editor
 * @param {SlateRange} range
 * @return {*}  {(DOMRange | null)}
 */
export function editorToDomRange(
  editor: YjsEditor,
  range: SlateRange,
): DOMRange | null {
  try {
    return toDOMRange(editor, range);
  } catch (e) {
    return null;
  }
}
