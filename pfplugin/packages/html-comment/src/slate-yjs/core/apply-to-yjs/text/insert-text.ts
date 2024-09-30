import type Y from 'yjs';
import { SlateNode, SlateText } from '@wangeditor/editor';
import { getYTarget } from '../../utils/location';
import { getProperties } from '../../utils/slate';
import { InsertTextOperation } from '../../types';

export function insertText(
  sharedRoot: Y.XmlText,
  slateRoot: SlateNode,
  op: InsertTextOperation,
): void {
  const { yParent: target, textRange } = getYTarget(
    sharedRoot,
    slateRoot,
    op.path,
  );

  const targetNode = SlateNode.get(slateRoot, op.path);
  if (!SlateText.isText(targetNode)) {
    throw new Error('Cannot insert text into non-text node');
  }

  target.insert(
    textRange.start + op.offset,
    op.text,
    getProperties(targetNode),
  );
}
