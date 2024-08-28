/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { SlateNode, SlatePath } from '@wangeditor/editor';
import DOMNode = globalThis.Node;
import DOMComment = globalThis.Comment;
import DOMElement = globalThis.Element;
import DOMText = globalThis.Text;
import DOMRange = globalThis.Range;
import DOMSelection = globalThis.Selection;
import DOMStaticRange = globalThis.StaticRange;

export {
  DOMNode,
  DOMComment,
  DOMElement,
  DOMText,
  DOMRange,
  DOMSelection,
  DOMStaticRange,
};

export type DOMPoint = [Node, number];

export type NodeMatch<T extends SlateNode> =
  | ((node: SlateNode, path: SlatePath) => node is T)
  | ((node: SlateNode, path: SlatePath) => boolean);

declare global {
  interface Window {
    Selection: (typeof Selection)['constructor'];
    DataTransfer: (typeof DataTransfer)['constructor'];
    Node: (typeof Node)['constructor'];
  }
}

/**
 * 返回DOM节点的主机窗口
 * @param value
 * @returns
 */
export const getDefaultView = (value: any): Window | null => {
  return value?.ownerDocument?.defaultView ?? null;
};

/**
 * 检查某个值是否为DOM节点。
 * @param value
 * @returns
 */
export const isDOMNode = (value: any): value is DOMNode => {
  const window = getDefaultView(value);
  return !!window && value instanceof window.Node;
};

/**
 * 检查DOM节点是否为元素节点。
 * @param value
 * @returns
 */
export const isDOMElement = (value: any): value is DOMElement => {
  return isDOMNode(value) && value.nodeType === 1;
};

/**
 * 检查DOM节点是否为元素节点
 * @param value
 * @returns
 */
export const isDOMText = (value: any): value is DOMText => {
  return isDOMNode(value) && value.nodeType === 3;
};

/**
 * 获取节点内容的明文表示，占block添加换行符的*元素
 * domNode必须附加到DOM上。
 * @param domNode
 * @returns
 */
export const getPlainText = (domNode: DOMNode): string => {
  let text = '';

  if (isDOMText(domNode) && domNode.nodeValue) {
    return domNode.nodeValue;
  }

  if (isDOMElement(domNode)) {
    for (const childNode of Array.from(domNode.childNodes)) {
      text += getPlainText(childNode);
    }

    const display = getComputedStyle(domNode).getPropertyValue('display');

    if (display === 'block' || display === 'list' || domNode.tagName === 'BR') {
      text += '\n';
    }
  }

  return text;
};

const catchSlateFragment = /data-slate-fragment="(.+?)"/m;

/**
 * 从data-slate-fragment获取x-slate-fragment属性
 * @param dataTransfer
 * @returns
 */
export const getSlateFragmentAttribute = (
  dataTransfer: DataTransfer,
): string | void => {
  const htmlData = dataTransfer.getData('text/html');
  const [, fragment] = htmlData.match(catchSlateFragment) || [];
  return fragment;
};
