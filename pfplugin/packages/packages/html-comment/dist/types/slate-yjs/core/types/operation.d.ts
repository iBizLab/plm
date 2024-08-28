import type { SlateNode, SlatePath, SlateRange } from '@wangeditor/editor';
import { ExtendedType } from './slate-types';
export type BaseInsertNodeOperation = {
    type: 'insert_node';
    path: SlatePath;
    node: SlateNode;
};
export type InsertNodeOperation = ExtendedType<'InsertNodeOperation', BaseInsertNodeOperation>;
export type BaseInsertTextOperation = {
    type: 'insert_text';
    path: SlatePath;
    offset: number;
    text: string;
};
export type InsertTextOperation = ExtendedType<'InsertTextOperation', BaseInsertTextOperation>;
export type BaseMergeNodeOperation = {
    type: 'merge_node';
    path: SlatePath;
    position: number;
    properties: Partial<SlateNode>;
};
export type MergeNodeOperation = ExtendedType<'MergeNodeOperation', BaseMergeNodeOperation>;
export type BaseMoveNodeOperation = {
    type: 'move_node';
    path: SlatePath;
    newPath: SlatePath;
};
export type MoveNodeOperation = ExtendedType<'MoveNodeOperation', BaseMoveNodeOperation>;
export type BaseRemoveNodeOperation = {
    type: 'remove_node';
    path: SlatePath;
    node: SlateNode;
};
export type RemoveNodeOperation = ExtendedType<'RemoveNodeOperation', BaseRemoveNodeOperation>;
export type BaseRemoveTextOperation = {
    type: 'remove_text';
    path: SlatePath;
    offset: number;
    text: string;
};
export type RemoveTextOperation = ExtendedType<'RemoveTextOperation', BaseRemoveTextOperation>;
export type BaseSetNodeOperation = {
    type: 'set_node';
    path: SlatePath;
    properties: Partial<SlateNode>;
    newProperties: Partial<SlateNode>;
};
export type SetNodeOperation = ExtendedType<'SetNodeOperation', BaseSetNodeOperation>;
export type BaseSetSelectionOperation = {
    type: 'set_selection';
    properties: null;
    newProperties: SlateRange;
} | {
    type: 'set_selection';
    properties: Partial<SlateRange>;
    newProperties: Partial<SlateRange>;
} | {
    type: 'set_selection';
    properties: SlateRange;
    newProperties: null;
};
export type SetSelectionOperation = ExtendedType<'SetSelectionOperation', BaseSetSelectionOperation>;
export type BaseSplitNodeOperation = {
    type: 'split_node';
    path: SlatePath;
    position: number;
    properties: Partial<SlateNode>;
};
export type SplitNodeOperation = ExtendedType<'SplitNodeOperation', BaseSplitNodeOperation>;
export type NodeOperation = InsertNodeOperation | MergeNodeOperation | MoveNodeOperation | RemoveNodeOperation | SetNodeOperation | SplitNodeOperation;
export type SelectionOperation = SetSelectionOperation;
export type TextOperation = InsertTextOperation | RemoveTextOperation;
/**
 * `Operation` objects define the low-level instructions that Slate editors use
 * to apply changes to their internal state. Representing all changes as
 * operations is what allows Slate editors to easily implement history,
 * collaboration, and other features.
 */
export type BaseOperation = NodeOperation | SelectionOperation | TextOperation;
export type Operation = ExtendedType<'Operation', BaseOperation>;
