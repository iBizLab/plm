/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Y from 'yjs';
import { SlateEditor } from '@wangeditor/editor';
import { translateYTextEvent } from './text-event';
import { Operation } from '../types';

/**
 * Translate a yjs event into slate operations. The editor state has to match the
 * yText state before the event occurred.
 *
 * @param sharedType
 * @param op
 */
export function translateYjsEvent(
  sharedRoot: Y.XmlText,
  editor: SlateEditor,
  event: Y.YEvent<Y.XmlText>,
): Operation[] {
  if (event instanceof Y.YTextEvent) {
    return translateYTextEvent(sharedRoot, editor, event as any);
  }

  throw new Error('Unexpected Y event type');
}

/**
 * Translates yjs events into slate operations and applies them to the editor. The
 * editor state has to match the yText state before the events occurred.
 *
 * @param sharedRoot
 * @param editor
 * @param events
 */
export function applyYjsEvents(
  sharedRoot: Y.XmlText,
  editor: SlateEditor,
  events: Y.YEvent<Y.XmlText>[],
): void {
  SlateEditor.withoutNormalizing(editor, () => {
    events.forEach(event => {
      translateYjsEvent(sharedRoot, editor, event).forEach(op => {
        editor.apply(op);
      });
    });
  });
}
