import * as Y from 'yjs';
import { YjsEditor } from './with-yjs';
export type YHistoryEditor = YjsEditor & {
    undoManager: Y.UndoManager;
    withoutSavingOrigin: unknown;
    undo: () => void;
    redo: () => void;
};
export declare const YHistoryEditor: {
    isYHistoryEditor(value: unknown): value is YHistoryEditor;
    canUndo(editor: YHistoryEditor): boolean;
    canRedo(editor: YHistoryEditor): boolean;
    isSaving(editor: YHistoryEditor): boolean;
    withoutSaving(editor: YHistoryEditor, fn: () => void): void;
};
export type WithYHistoryOptions = NonNullable<ConstructorParameters<typeof Y.UndoManager>[1]> & {
    withoutSavingOrigin?: unknown;
};
export declare function withYHistory<T extends YjsEditor>(editor: T, { withoutSavingOrigin, trackedOrigins, ...options }?: WithYHistoryOptions): T & YHistoryEditor;
