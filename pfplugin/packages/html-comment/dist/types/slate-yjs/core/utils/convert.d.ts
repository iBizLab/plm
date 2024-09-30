import * as Y from 'yjs';
import { SlateElement, SlateNode } from '@wangeditor/editor';
import { DeltaInsert, InsertDelta } from '../types';
export declare function yTextToSlateElement(yText: Y.XmlText): SlateElement;
export declare function deltaInsertToSlateNode(insert: DeltaInsert): SlateNode;
export declare function slateNodesToInsertDelta(nodes: SlateNode[]): InsertDelta;
export declare function slateElementToYText({ children, ...attributes }: SlateElement): Y.XmlText;
