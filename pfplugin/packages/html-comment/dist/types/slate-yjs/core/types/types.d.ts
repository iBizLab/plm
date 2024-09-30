import type Y from 'yjs';
import type { SlateElement, SlateEditor, SlateNode } from '@wangeditor/editor';
export type DeltaAttributes = {
    retain: number;
    attributes: Record<string, unknown>;
};
export type DeltaRetain = {
    retain: number;
};
export type DeltaDelete = {
    delete: number;
};
export type DeltaInsert = {
    insert: string | Y.XmlText;
    attributes?: Record<string, unknown>;
};
export type InsertDelta = Array<DeltaInsert>;
export type Delta = Array<DeltaRetain | DeltaDelete | DeltaInsert | DeltaAttributes>;
export type TextRange = {
    start: number;
    end: number;
};
export type HistoryStackItem = {
    meta: Map<string, unknown>;
};
export type YTarget = {
    textRange: TextRange;
    yParent: Y.XmlText;
    slateParent: SlateElement | SlateEditor;
    yTarget?: Y.XmlText;
    slateTarget?: SlateNode;
    targetDelta: InsertDelta;
};
export type RelativeRange = {
    anchor: Y.RelativePosition;
    focus: Y.RelativePosition;
};
