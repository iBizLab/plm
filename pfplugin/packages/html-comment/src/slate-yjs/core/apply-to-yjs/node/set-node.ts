/* eslint-disable no-prototype-builtins */
import * as Y from 'yjs';
import { SlateNode } from '@wangeditor/editor';
import { getYTarget } from '../../utils/location';
import { SetNodeOperation } from '../../types';

export function setNode(
  sharedRoot: Y.XmlText,
  slateRoot: SlateNode,
  op: SetNodeOperation,
): void {
  const { yTarget, textRange, yParent } = getYTarget(
    sharedRoot,
    slateRoot,
    op.path,
  );

  if (yTarget) {
    Object.entries(op.newProperties).forEach(([key, value]) => {
      if (value === null) {
        return yTarget.removeAttribute(key);
      }

      yTarget.setAttribute(key, value);
    });

    return Object.entries(op.properties).forEach(([key]) => {
      if (!op.newProperties.hasOwnProperty(key)) {
        yTarget.removeAttribute(key);
      }
    });
  }

  const unset = Object.fromEntries(
    Object.keys(op.properties).map(key => [key, null]),
  );
  const newProperties = { ...unset, ...op.newProperties };

  yParent.format(
    textRange.start,
    textRange.end - textRange.start,
    newProperties,
  );
}
