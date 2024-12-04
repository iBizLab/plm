/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DomEditor,
  IDomEditor,
  SlateTransforms,
  SlateNode,
  SlateEditor,
  SlateRange,
  SlateText,
  SlateElement,
  SlatePoint,
} from '@wangeditor/editor';

/**
 * 递归遍历项插入时是否包含insertType类型中
 */
function recursiveMethod(
  path: number[],
  children: IData[],
  insertType: string,
): boolean {
  if (path.length > 0) {
    const item = children[path[0]];
    if (item && item.type === insertType) {
      return true;
    }
    if (item && item.children) {
      path.splice(0, 1);
      return recursiveMethod(path, item.children, insertType);
    }
  }
  return false;
}

/**
 * 检查插入项有是否在insertType类型内
 */
function isInsertTypeInside(editor: IDomEditor, insertType: string): boolean {
  const { selection, children } = editor;
  if (selection) {
    const { path } = selection.anchor;
    return recursiveMethod([...path] || [], children, insertType);
  }
  return false;
}

/**
 * 获取选择前最后一行文本
 *
 * @type {string}
 */
function getLastTextLineBeforeSelection(
  node: SlateNode,
  newEditor: IDomEditor,
): string {
  const selection = newEditor.selection;
  if (selection == null) return '';
  const codeText = SlateNode.string(node);
  const anchorOffset = selection.anchor.offset;
  const textBeforeAnchor = codeText.slice(0, anchorOffset); // 选区前的 text
  const arr = textBeforeAnchor.split('\n'); // 选区前的 text ，按换行拆分
  const length = arr.length;
  if (length === 0) return '';

  return arr[length - 1];
}

/**
 * 判断该 location 有没有命中 layout
 * @param editor editor
 * @param location location
 */
function isInsertLocation(
  editor: IDomEditor,
  location: IParams,
  insertType: string,
): boolean {
  const tables = SlateEditor?.nodes(editor, {
    at: location as any,
    match: (n: any) => {
      const type = DomEditor.getNodeType(n);
      return type === insertType;
    },
  });
  let hasTable = false;
  // eslint-disable-next-line no-restricted-syntax
  for (const insertLayout of tables) {
    hasTable = true; // 找到了
  }
  return hasTable;
}

/**
 * 递归遍历项是否包含insertType类型为块级的元素
 */
function insertsRecursiveMethod(
  children: IData[],
  insertType: string,
): IData | undefined {
  if (children.length > 0) {
    for (let i = 0; i < children.length; i++) {
      const item = children[i];
      if (
        item.type === insertType ||
        (item.data && item.data && item.data.type === insertType)
      ) {
        return item;
      }
      if (item.children) {
        return insertsRecursiveMethod(item.children || [], insertType);
      }
    }
  }
  return undefined;
}

/**
 * 判断所有插入项如果是块级项或者是行级项是否命中
 */
function isInsertsLocation(
  insertMap: IData[],
  path: number[],
  children: IData[],
  isInline: boolean = false,
): boolean {
  // eslint-disable-next-line prefer-const, no-restricted-syntax
  for (let item of insertMap.values()) {
    if (
      item.isInline === isInline &&
      insertsRecursiveMethod([children[path[0]]], item.type)
    ) {
      return true;
    }
  }
  return false;
}

/**
 * 检查当前行是否有内容
 *
 * @returns {boolean}
 */
function isCurrentLineEmpty(editor: IDomEditor): boolean {
  const { selection, children } = editor;
  if (selection) {
    const { path } = selection.anchor;
    const data: IData = children[path[0]] || {};
    if (data && data.children && data.children.length === 1) {
      return !data.children[0].text;
    }
    return !(data && data.children && data.children.length > 1);
  }

  return true;
}

/**
 * 检查下一行是否有内容
 *
 * @returns {boolean}
 */
function isNextLineEmpty(editor: IDomEditor): boolean {
  const { selection, children } = editor;
  if (selection) {
    const { path } = selection.anchor;
    const data: IData = children[path[0] + 1] || {};
    if (data && data.children && data.children.length === 1) {
      return !data.children[0].text;
    }
    return !(data && data.children && data.children.length > 1);
  }

  return true;
}

/**
 * 删除节点
 */
function deleteNodes(editor: IDomEditor, path: number[]): void {
  SlateTransforms.removeNodes(editor, {
    at: path,
  });
  let time: NodeJS.Timeout | null = setTimeout(() => {
    editor.move(1);
    editor.focus();
    clearTimeout(time!);
    time = null;
  }, 0);
}

/**
 * 更新节点
 */
function updateNodes(editor: IDomEditor, path: number[], data: IData): void {
  SlateTransforms.setNodes(
    editor,
    {
      children: [{ text: '' }],
      data,
      type: 'insert',
    },
    {
      at: path,
    },
  );
  editor.move(1);
  editor.focus();
}

/**
 * 选区是否为空
 * @param editor editor
 */
function isSelectedEmpty(editor: IDomEditor, type: string): boolean {
  const { selection } = editor;
  if (selection == null) return false;

  if (SlateRange.isExpanded(selection)) return false;

  const selectedNode = DomEditor.getSelectedNodeByType(editor, type);
  if (selectedNode === null) return false;

  const { children } = selectedNode as unknown as Element;
  if (children.length !== 1) return false;

  const { text } = children[0] as unknown as SlateText;
  if (text === '') return true;
  return false;
}

// 定义一个辅助函数，用于找到最近的 'layout-column' 祖先节点
const findLayoutColumnAncestor = (editor: IDomEditor): any | null => {
  const { selection } = editor;

  if (selection && SlateRange.isCollapsed(selection)) {
    // 找到选择最近的 'layout-column' 祖先节点
    const layoutColumnEntry = SlateEditor.above(editor, {
      match: node => SlateElement.isElementType(node, 'layout-column'),
    });

    return layoutColumnEntry as any | null;
  }

  return null;
};

// 函数用于检查光标是否位于 'layout-column' 的开始位置
const isCursorAtStartOfColumn = (editor: IDomEditor): boolean => {
  const layoutColumnEntry = findLayoutColumnAncestor(editor);

  if (layoutColumnEntry) {
    const [, path] = layoutColumnEntry;

    // 获取 'layout-column' 节点的起始点
    const start = SlateEditor.start(editor, path);

    // 检查选择点是否与节点的起始点匹配
    return SlatePoint.equals(editor.selection!.anchor, start);
  }

  return false;
};

// 函数用于检查光标是否位于 'layout-column' 的结束位置
const isCursorAtEndOfColumn = (editor: IDomEditor): boolean => {
  const layoutColumnEntry = findLayoutColumnAncestor(editor);

  if (layoutColumnEntry) {
    const [, path] = layoutColumnEntry;

    // 获取 'layout-column' 节点的结束点
    const end = SlateEditor.end(editor, path);

    // 检查选择点是否与节点的结束点匹配
    return SlatePoint.equals(editor.selection!.anchor, end);
  }

  return false;
};

// 函数用于检查当前选择是否为空（但包含空白字符，如换行符）
const isSelectionWrap = (editor: IDomEditor): boolean => {
  const { selection } = editor;

  if (selection && SlateRange.isCollapsed(selection)) {
    // 获取当前选择点所在的节点
    const [node] = SlateEditor.node(editor, selection);

    // 检查节点是否为文本节点且其内容仅包含空白字符（如空格、换行符等）
    if (SlateText.isText(node) && /^(\s*\n\s*)+$/.test(node.text)) {
      return true;
    }
  }

  return false;
};

// 函数用于检查当前选择是否完全为空
const isSelectionEmpty = (editor: IDomEditor): boolean => {
  const { selection } = editor;

  if (selection && SlateRange.isCollapsed(selection)) {
    // 获取当前选择点所在的节点
    const [node] = SlateEditor.node(editor, selection);

    // 检查节点是否为文本节点且其内容为空
    if (SlateText.isText(node) && (node as IParams).text === '') {
      return true;
    }
  }

  return false;
};

export {
  isInsertTypeInside,
  getLastTextLineBeforeSelection,
  isInsertLocation,
  isInsertsLocation,
  insertsRecursiveMethod,
  isCurrentLineEmpty,
  isNextLineEmpty,
  deleteNodes,
  updateNodes,
  isSelectedEmpty,
  isCursorAtStartOfColumn,
  isCursorAtEndOfColumn,
  isSelectionWrap,
  isSelectionEmpty,
};
