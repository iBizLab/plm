import * as Y from 'yjs';
import { SlateEditor } from '@wangeditor/editor';
import { Operation } from '../types';
export declare function translateYTextEvent(sharedRoot: Y.XmlText, editor: SlateEditor, event: Y.YTextEvent): Operation[];
