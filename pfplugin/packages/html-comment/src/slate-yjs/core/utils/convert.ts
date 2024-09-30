/* eslint-disable no-use-before-define */
import * as Y from 'yjs';
import { SlateElement, SlateNode, SlateText } from '@wangeditor/editor';
import { DeltaInsert, InsertDelta } from '../types';
import { yTextToInsertDelta } from './delta';
import { getProperties } from './slate';

export function yTextToSlateElement(yText: Y.XmlText): SlateElement {
  const delta = yTextToInsertDelta(yText);

  const children =
    delta.length > 0 ? delta.map(deltaInsertToSlateNode) : [{ text: '' }];

  return { ...yText.getAttributes(), children };
}

export function deltaInsertToSlateNode(insert: DeltaInsert): SlateNode {
  if (typeof insert.insert === 'string') {
    return { ...insert.attributes, text: insert.insert };
  }

  return yTextToSlateElement(insert.insert);
}

export function slateNodesToInsertDelta(nodes: SlateNode[]): InsertDelta {
  return nodes.map(node => {
    if (SlateText.isText(node)) {
      return { insert: node.text, attributes: getProperties(node) };
    }

    return { insert: slateElementToYText(node) };
  });
}

export function slateElementToYText({
  children,
  ...attributes
}: SlateElement): Y.XmlText {
  const yElement = new Y.XmlText();

  Object.entries(attributes).forEach(([key, value]) => {
    yElement.setAttribute(key, value);
  });

  yElement.applyDelta(slateNodesToInsertDelta(children), { sanitize: false });
  return yElement;
}
