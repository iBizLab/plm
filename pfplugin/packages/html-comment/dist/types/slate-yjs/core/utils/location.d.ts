import * as Y from 'yjs';
import { SlateElement, SlateNode, SlatePath } from '@wangeditor/editor';
import { YTarget } from '../types';
export declare function getSlateNodeYLength(node: SlateNode | undefined): number;
export declare function slatePathOffsetToYOffset(element: SlateElement, pathOffset: number): number;
export declare function getYTarget(yRoot: Y.XmlText, slateRoot: SlateNode, path: SlatePath): YTarget;
export declare function yOffsetToSlateOffsets(parent: SlateElement, yOffset: number, opts?: {
    assoc?: number;
    insert?: boolean;
}): [number, number];
export declare function getSlatePath(sharedRoot: Y.XmlText, slateRoot: SlateNode, yText: Y.XmlText): SlatePath;
