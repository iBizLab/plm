/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as Y from 'yjs';
import {
  SlateElement,
  SlateNode,
  SlateText,
  SlatePath,
} from '@wangeditor/editor';
import { YTarget } from '../types';
import { sliceInsertDelta, yTextToInsertDelta } from './delta';

export function getSlateNodeYLength(node: SlateNode | undefined): number {
  if (!node) {
    return 0;
  }

  return SlateText.isText(node) ? node.text.length : 1;
}

export function slatePathOffsetToYOffset(
  element: SlateElement,
  pathOffset: number,
) {
  return element.children
    .slice(0, pathOffset)
    .reduce((yOffset, node) => yOffset + getSlateNodeYLength(node), 0);
}

export function getYTarget(
  yRoot: Y.XmlText,
  slateRoot: SlateNode,
  path: SlatePath,
): YTarget {
  if (path.length === 0) {
    throw new Error('Path has to a have a length >= 1');
  }

  if (SlateText.isText(slateRoot)) {
    throw new Error('Cannot descent into slate text');
  }

  const [pathOffset, ...childPath] = path;

  const yOffset = slatePathOffsetToYOffset(slateRoot, pathOffset);
  const targetNode = slateRoot.children[pathOffset];

  const delta = yTextToInsertDelta(yRoot);
  const targetLength = getSlateNodeYLength(targetNode);

  const targetDelta = sliceInsertDelta(delta, yOffset, targetLength);
  if (targetDelta.length > 1) {
    throw new Error("Path doesn't match yText, yTarget spans multiple nodes");
  }

  const yTarget = targetDelta[0]?.insert;
  if (childPath.length > 0) {
    if (!(yTarget instanceof Y.XmlText)) {
      throw new Error(
        "Path doesn't match yText, cannot descent into non-yText",
      );
    }

    return getYTarget(yTarget, targetNode, childPath);
  }

  return {
    yParent: yRoot,
    textRange: { start: yOffset, end: yOffset + targetLength },
    yTarget: yTarget instanceof Y.XmlText ? yTarget : undefined,
    slateParent: slateRoot,
    slateTarget: targetNode,
    targetDelta,
  };
}

export function yOffsetToSlateOffsets(
  parent: SlateElement,
  yOffset: number,
  opts: { assoc?: number; insert?: boolean } = {},
): [number, number] {
  const { assoc = 0, insert = false } = opts;

  let currentOffset = 0;
  let lastNonEmptyPathOffset = 0;
  for (let pathOffset = 0; pathOffset < parent.children.length; pathOffset++) {
    const child = parent.children[pathOffset];
    const nodeLength = SlateText.isText(child) ? child.text.length : 1;

    if (nodeLength > 0) {
      lastNonEmptyPathOffset = pathOffset;
    }

    const endOffset = currentOffset + nodeLength;
    if (
      nodeLength > 0 &&
      (assoc >= 0 ? endOffset > yOffset : endOffset >= yOffset)
    ) {
      return [pathOffset, yOffset - currentOffset];
    }

    currentOffset += nodeLength;
  }

  if (yOffset > currentOffset + (insert ? 1 : 0)) {
    throw new Error('yOffset out of bounds');
  }

  if (insert) {
    return [parent.children.length, 0];
  }

  const child = parent.children[lastNonEmptyPathOffset];
  const textOffset = SlateText.isText(child) ? child.text.length : 1;
  return [lastNonEmptyPathOffset, textOffset];
}

export function getSlatePath(
  sharedRoot: Y.XmlText,
  slateRoot: SlateNode,
  yText: Y.XmlText,
): SlatePath {
  const yNodePath = [yText];
  while (yNodePath[0] !== sharedRoot) {
    const { parent: yParent } = yNodePath[0];

    if (!yParent) {
      throw new Error("yText isn't a descendant of root element");
    }

    if (!(yParent instanceof Y.XmlText)) {
      throw new Error('Unexpected y parent type');
    }

    yNodePath.unshift(yParent);
  }

  if (yNodePath.length < 2) {
    return [];
  }

  let slateParent = slateRoot;
  return yNodePath.reduce<SlatePath>((path, yParent, idx) => {
    const yChild = yNodePath[idx + 1];
    if (!yChild) {
      return path;
    }

    let yOffset = 0;
    const currentDelta = yTextToInsertDelta(yParent);
    for (const element of currentDelta) {
      if (element.insert === yChild) {
        break;
      }

      yOffset += typeof element.insert === 'string' ? element.insert.length : 1;
    }

    if (SlateText.isText(slateParent)) {
      throw new Error('Cannot descent into slate text');
    }

    const [pathOffset] = yOffsetToSlateOffsets(slateParent, yOffset);
    slateParent = slateParent.children[pathOffset];
    return path.concat(pathOffset);
  }, []);
}
