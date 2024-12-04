import { SlateDescendant, SlateText } from '@wangeditor/editor';
import { omit } from './object';

export function getProperties<TNode extends SlateDescendant>(
  node: TNode,
): Omit<TNode, TNode extends SlateText ? 'text' : 'children'> {
  return omit(
    node,
    (SlateText.isText(node) ? 'text' : 'children') as keyof TNode,
  ) as Omit<TNode, TNode extends SlateText ? 'text' : 'children'>;
}
