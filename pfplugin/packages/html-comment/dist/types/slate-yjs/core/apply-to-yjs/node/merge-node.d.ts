import * as Y from 'yjs';
import { SlateNode } from '@wangeditor/editor';
import { MergeNodeOperation } from '../../types';
export declare function mergeNode(sharedRoot: Y.XmlText, slateRoot: SlateNode, op: MergeNodeOperation): void;
