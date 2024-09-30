import * as Y from 'yjs';
import { SlateNode } from '@wangeditor/editor';
import { getYTarget } from '../../utils/location';
import { RemoveNodeOperation } from '../../types';

export function removeNode(
  sharedRoot: Y.XmlText,
  slateRoot: SlateNode,
  op: RemoveNodeOperation,
): void {
  const { yParent: parent, textRange } = getYTarget(
    sharedRoot,
    slateRoot,
    op.path,
  );
  parent.delete(textRange.start, textRange.end - textRange.start);
}
