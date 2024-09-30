import * as Y from 'yjs';
import { SlateNode, SlateText } from '@wangeditor/editor';
import { slateElementToYText } from '../../utils/convert';
import { getYTarget } from '../../utils/location';
import { getProperties } from '../../utils/slate';
import { InsertNodeOperation } from '../../types';

export function insertNode(
  sharedRoot: Y.XmlText,
  slateRoot: SlateNode,
  op: InsertNodeOperation,
): void {
  const { yParent, textRange } = getYTarget(sharedRoot, slateRoot, op.path);

  if (SlateText.isText(op.node)) {
    return yParent.insert(
      textRange.start,
      op.node.text,
      getProperties(op.node),
    );
  }

  yParent.insertEmbed(textRange.start, slateElementToYText(op.node));
}
