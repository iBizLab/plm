import * as Y from 'yjs';
import { SlateEditor, SlateDescendant, SlatePoint, IDomEditor } from '@wangeditor/editor';
import { Operation } from '../types';
type LocalChange = {
    op: Operation;
    doc: SlateDescendant[];
    origin: unknown;
};
export type YjsEditor = IDomEditor & {
    sharedRoot: Y.XmlText;
    editorWindow: Window;
    localOrigin: unknown;
    positionStorageOrigin: unknown;
    applyRemoteEvents: (events: Y.YEvent<Y.XmlText>[], origin: unknown) => void;
    storeLocalChange: (op: Operation) => void;
    flushLocalChanges: () => void;
    isLocalOrigin: (origin: unknown) => boolean;
    connect: () => void;
    disconnect: () => void;
};
export declare const YjsEditor: {
    isYjsEditor(value: unknown): value is YjsEditor;
    localChanges(editor: YjsEditor): LocalChange[];
    applyRemoteEvents(editor: YjsEditor, events: Y.YEvent<Y.XmlText>[], origin: unknown): void;
    storeLocalChange(editor: YjsEditor, op: Operation): void;
    flushLocalChanges(editor: YjsEditor): void;
    connected(editor: YjsEditor): boolean;
    connect(editor: YjsEditor): void;
    disconnect(editor: YjsEditor): void;
    isLocal(editor: YjsEditor): boolean;
    origin(editor: YjsEditor): unknown;
    withOrigin(editor: YjsEditor, origin: unknown, fn: () => void): void;
    storePosition(editor: YjsEditor, key: string, point: SlatePoint): void;
    removeStoredPosition(editor: YjsEditor, key: string): void;
    position(editor: YjsEditor, key: string): SlatePoint | null | undefined;
    storedPositionsRelative(editor: YjsEditor): Record<string, Y.RelativePosition>;
};
export type WithYjsOptions = {
    autoConnect?: boolean;
    localOrigin?: unknown;
    positionStorageOrigin?: unknown;
};
/**
 * withYjs
 * - 在slate-yjs的基础上新增editorWindow参数 用于计算光标位置
 * @export
 * @template T
 * @param {T} editor
 * @param {Y.XmlText} sharedRoot
 * @param {Window} editorWindow
 * @param {WithYjsOptions} [{
 *     localOrigin,
 *     positionStorageOrigin,
 *     autoConnect = false,
 *   }={}]
 * @return {*}  {(T & YjsEditor)}
 */
export declare function withYjs<T extends SlateEditor>(editor: T, sharedRoot: Y.XmlText, editorWindow: Window, { localOrigin, positionStorageOrigin, autoConnect, }?: WithYjsOptions): T & YjsEditor;
export {};
