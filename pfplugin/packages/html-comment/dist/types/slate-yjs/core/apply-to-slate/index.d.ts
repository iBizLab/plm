import * as Y from 'yjs';
import { SlateEditor } from '@wangeditor/editor';
import { Operation } from '../types';
/**
 * Translate a yjs event into slate operations. The editor state has to match the
 * yText state before the event occurred.
 *
 * @param sharedType
 * @param op
 */
export declare function translateYjsEvent(sharedRoot: Y.XmlText, editor: SlateEditor, event: Y.YEvent<Y.XmlText>): Operation[];
/**
 * Translates yjs events into slate operations and applies them to the editor. The
 * editor state has to match the yText state before the events occurred.
 *
 * @param sharedRoot
 * @param editor
 * @param events
 */
export declare function applyYjsEvents(sharedRoot: Y.XmlText, editor: SlateEditor, events: Y.YEvent<Y.XmlText>[]): void;
