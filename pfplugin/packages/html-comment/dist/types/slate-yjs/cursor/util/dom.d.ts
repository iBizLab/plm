import { SlateNode, SlatePath } from '@wangeditor/editor';
import DOMNode = globalThis.Node;
import DOMComment = globalThis.Comment;
import DOMElement = globalThis.Element;
import DOMText = globalThis.Text;
import DOMRange = globalThis.Range;
import DOMSelection = globalThis.Selection;
import DOMStaticRange = globalThis.StaticRange;
export { DOMNode, DOMComment, DOMElement, DOMText, DOMRange, DOMSelection, DOMStaticRange, };
export type DOMPoint = [Node, number];
export type NodeMatch<T extends SlateNode> = ((node: SlateNode, path: SlatePath) => node is T) | ((node: SlateNode, path: SlatePath) => boolean);
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
export declare const getDefaultView: (value: any) => Window | null;
/**
 * 检查某个值是否为DOM节点。
 * @param value
 * @returns
 */
export declare const isDOMNode: (value: any) => value is DOMNode;
/**
 * 检查DOM节点是否为元素节点。
 * @param value
 * @returns
 */
export declare const isDOMElement: (value: any) => value is DOMElement;
/**
 * 检查DOM节点是否为元素节点
 * @param value
 * @returns
 */
export declare const isDOMText: (value: any) => value is DOMText;
/**
 * 获取节点内容的明文表示，占block添加换行符的*元素
 * domNode必须附加到DOM上。
 * @param domNode
 * @returns
 */
export declare const getPlainText: (domNode: DOMNode) => string;
/**
 * 从data-slate-fragment获取x-slate-fragment属性
 * @param dataTransfer
 * @returns
 */
export declare const getSlateFragmentAttribute: (dataTransfer: DataTransfer) => string | void;
