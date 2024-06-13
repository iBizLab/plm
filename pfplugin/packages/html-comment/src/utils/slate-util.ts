import {
  SlateNode,
  IDomEditor,
  SlateTransforms,
  SlateText,
  SlatePoint,
  SlatePath,
  SlateEditor,
  SlateRange,
} from '@wangeditor/editor';
import { VNode, VNodeStyle } from 'snabbdom';
import { IPersMarkNode } from '../interface';
import { HtmlUtil } from './utils';

/**
 * 添加样式
 * @param vnode
 * @param newStyle
 */
export function addVnodeStyle(vnode: VNode, newStyle: VNodeStyle) {
  if (vnode.data == null) vnode.data = {};
  const data = vnode.data;
  if (data.style == null) data.style = {};

  Object.assign(data.style, newStyle);
}

/**
 * 节点绘制样式
 * @param node
 * @param vnode
 * @returns
 */
export function renderStyle(node: IData, vnode: VNode): VNode {
  const { backgroundColor, bgColor } = node;
  let styleVnode: VNode = vnode;

  // 选区背景色
  if (backgroundColor) {
    addVnodeStyle(styleVnode, { backgroundColor });
  }

  // 设置的背景色
  if (bgColor) {
    addVnodeStyle(styleVnode, { backgroundColor: bgColor });
  }
  return styleVnode;
}

export class SlateUtil {
  /**
   * 添加标记
   * @param editor 编辑器
   * @param op 标记信息
   */
  static addMarks(
    editor: IDomEditor,
    op: { selection: SlateRange; mark: IData },
  ) {
    const { selection, mark } = op;
    const match = (node: SlateNode, path: SlatePath) => {
      if (!SlateText.isText(node)) {
        return false;
      }
      const [parentNode, parentPath] = SlateEditor.parent(editor, path);
      return !editor.isVoid(parentNode);
    };
    const expandedSelection = SlateRange.isExpanded(selection);
    if (expandedSelection) {
      SlateTransforms.setNodes(editor, mark, {
        match,
        at: selection,
        split: true,
        voids: true,
      });
    } else {
      const marks = {
        ...(SlateEditor.marks(editor) || {}),
        ...mark,
      };

      editor.marks = marks;
    }
  }

  /**
   * 删除标记
   * @param editor 编辑器
   * @param op 标记信息
   */
  static removeMarks(
    editor: IDomEditor,
    op: { selection: SlateRange; keys: string[] },
  ) {
    const { selection, keys } = op;
    const match = (node: SlateNode, path: SlatePath) => {
      if (!SlateText.isText(node)) {
        return false;
      }
      const [parentNode, parentPath] = SlateEditor.parent(editor, path);
      return !editor.isVoid(parentNode);
    };
    const expandedSelection = SlateRange.isExpanded(selection);
    if (expandedSelection) {
      SlateTransforms.unsetNodes(editor, keys, {
        match,
        at: selection,
        split: true,
        voids: true,
      });
    } else {
      const marks: IData = { ...(SlateEditor.marks(editor) || {}) };
      keys.forEach(key => {
        delete marks[key];
      });
      editor.marks = marks;
    }
  }

  /**
   * 移动用户光标节点
   * @param editor
   * @param options
   */
  static movePersNode(editor: IDomEditor, options: IPersMarkNode) {
    const { param, node } = options;
    const { id, cursor, preCursor } = param;
    const { position, newPosition, selectionRange } = cursor;
    // 用户取消选区时清除上一次光标选区样式
    if (!selectionRange && preCursor?.selectionRange) {
      const preRange = preCursor.selectionRange;
      this.removeMarks(editor, {
        keys: ['backgroundColor'],
        selection: {
          anchor: this.calcPointByOffset(editor, preRange.anchor),
          focus: this.calcPointByOffset(editor, preRange.focus),
        },
      });
    }
    // 删除老位置的用户标记
    if (position) {
      const parent = SlateNode.parent(editor, position.path);
      const index = parent.children.findIndex((c: IData) => c.id === id);
      if (index > -1) {
        SlateTransforms.removeNodes(editor, { at: [position.path[0], index] });
      }
    }
    if (newPosition) {
      // 如果是光标选中了一个区域，设置这个区域的背景色
      if (selectionRange) {
        this.addMarks(editor, {
          mark: {
            backgroundColor: HtmlUtil.stringToHexColor(id),
          },
          selection: {
            anchor: this.calcPointByOffset(editor, selectionRange.anchor),
            focus: this.calcPointByOffset(editor, selectionRange.focus),
          },
        });
      }
      const point = this.calcPointByOffset(editor, newPosition);
      // 在新位置处插入用户标记
      SlateTransforms.insertNodes(editor, [node], {
        at: point,
      });
    }
  }

  /**
   * 根据偏移量计算位置
   * @param editor
   * @param item
   */
  static calcPointByOffset(editor: IDomEditor, point: SlatePoint): SlatePoint {
    // 获取点位置所在行
    const parent = SlateNode.parent(editor, point.path);
    let index: number = 0;
    let textLength: number = 0;
    // 遍历行节点计算文本偏移量
    parent.children.forEach((c, i) => {
      if (SlateText.isText(c) && textLength < point!.offset) {
        // 字符串为空的记为1
        textLength += c.text.length || 1;
        index = i;
      }
    });
    const offset =
      (parent.children[index] as IData).text.length -
      (textLength - point.offset);

    return { path: [point.path[0], index], offset };
  }

  /**
   * 根据点位置计算偏移量
   * @param editor
   * @param point
   */
  static calcOffsetByPoint(editor: IDomEditor, point: SlatePoint): number {
    let offset = point.offset;
    // 获取点位置所在行
    const parent = SlateNode.parent(editor, point.path);
    // 获取点位置所在节点
    const target = SlateNode.get(editor, point.path);
    // 如果点在一个空的文本节点上则偏移量记为1
    if (SlateText.isText(target) && target.text.length === 0 && offset === 0) {
      offset = 1;
    }
    // 遍历行节点计算文本偏移量
    parent.children.forEach((c, index) => {
      if (SlateText.isText(c) && index < point.path[1]) {
        // 字符串为空的记为1
        offset += c.text.length || 1;
      }
    });
    return offset;
  }
}
