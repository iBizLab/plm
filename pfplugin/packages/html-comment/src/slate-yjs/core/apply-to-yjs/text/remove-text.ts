import type Y from 'yjs';
import { SlateNode } from '@wangeditor/editor';
import { getYTarget } from '../../utils/location';
import { RemoveTextOperation } from '../../types';

export function removeText(
  sharedRoot: Y.XmlText,
  slateRoot: SlateNode,
  op: RemoveTextOperation,
): void {
  const { yParent: target, textRange } = getYTarget(
    sharedRoot,
    slateRoot,
    op.path,
  );
  target.delete(textRange.start + op.offset, op.text.length);
}
