import { SlateDescendant, SlateText } from '@wangeditor/editor';
export declare function getProperties<TNode extends SlateDescendant>(node: TNode): Omit<TNode, TNode extends SlateText ? 'text' : 'children'>;
