import { SlateRange } from '@wangeditor/editor';
import { Awareness } from 'y-protocols/awareness';
import { RelativeRange } from '../types';
import { YjsEditor } from './with-yjs';
export type CursorStateChangeEvent = {
    added: number[];
    updated: number[];
    removed: number[];
};
export type RemoteCursorChangeEventListener = (event: CursorStateChangeEvent) => void;
export type CursorState<TCursorData extends Record<string, unknown> = Record<string, unknown>> = {
    relativeSelection: RelativeRange | null;
    data?: TCursorData;
    clientId: number;
};
export type CursorEditor<TCursorData extends Record<string, unknown> = Record<string, unknown>> = YjsEditor & {
    awareness: any;
    cursorDataField: string;
    selectionStateField: string;
    sendCursorPosition: (range: SlateRange | null) => void;
    sendCursorData: (data: TCursorData) => void;
};
export declare const CursorEditor: {
    isCursorEditor(value: unknown): value is CursorEditor<Record<string, unknown>>;
    sendCursorPosition<TCursorData extends Record<string, unknown>>(editor: CursorEditor<TCursorData>, range?: SlateRange | null): void;
    sendCursorData<TCursorData_1 extends Record<string, unknown>>(editor: CursorEditor<TCursorData_1>, data: TCursorData_1): void;
    on<TCursorData_2 extends Record<string, unknown>>(editor: CursorEditor<TCursorData_2>, event: 'change', handler: RemoteCursorChangeEventListener): void;
    off<TCursorData_3 extends Record<string, unknown>>(editor: CursorEditor<TCursorData_3>, event: 'change', listener: RemoteCursorChangeEventListener): void;
    cursorState<TCursorData_4 extends Record<string, unknown>>(editor: CursorEditor<TCursorData_4>, clientId: number): CursorState<TCursorData_4> | null;
    cursorStates<TCursorData_5 extends Record<string, unknown>>(editor: CursorEditor<TCursorData_5>): Record<string, CursorState<TCursorData_5>>;
    emitEvent(name: any, ...args: any[]): void;
    onEvent(name: any, fn: (...args: any[]) => void | Promise<void>): void;
    offEvent(name: any, fn: (...args: any[]) => void | Promise<void>): void;
    resetEvent(): void;
};
export type WithCursorsOptions<TCursorData extends Record<string, unknown> = Record<string, unknown>> = {
    cursorStateField?: string;
    cursorDataField?: string;
    data?: TCursorData;
    autoSend?: boolean;
};
export declare function withCursors<TCursorData extends Record<string, unknown>, TEditor extends YjsEditor>(editor: TEditor, awareness: Awareness, { cursorStateField: selectionStateField, cursorDataField, autoSend, data, }?: WithCursorsOptions<TCursorData>): TEditor & CursorEditor<TCursorData>;
