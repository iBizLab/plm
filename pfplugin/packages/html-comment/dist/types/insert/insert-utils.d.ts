import { IDomEditor, SlateNode } from '@wangeditor/editor';
/**
 * 检查插入项有是否在insertType类型内
 */
declare function isInsertTypeInside(editor: IDomEditor, insertType: string): boolean;
/**
 * 获取选择前最后一行文本
 *
 * @type {string}
 */
declare function getLastTextLineBeforeSelection(node: SlateNode, newEditor: IDomEditor): string;
/**
 * 判断该 location 有没有命中 layout
 * @param editor editor
 * @param location location
 */
declare function isInsertLocation(editor: IDomEditor, location: IParams, insertType: string): boolean;
/**
 * 递归遍历项是否包含insertType类型为块级的元素
 */
declare function insertsRecursiveMethod(children: IData[], insertType: string): IData | undefined;
/**
 * 判断所有插入项如果是块级项或者是行级项是否命中
 */
declare function isInsertsLocation(insertMap: IData[], path: number[], children: IData[], isInline?: boolean): boolean;
/**
 * 检查当前行是否有内容
 *
 * @returns {boolean}
 */
declare function isCurrentLineEmpty(editor: IDomEditor): boolean;
/**
 * 检查下一行是否有内容
 *
 * @returns {boolean}
 */
declare function isNextLineEmpty(editor: IDomEditor): boolean;
/**
 * 删除节点
 */
declare function deleteNodes(editor: IDomEditor, path: number[]): void;
/**
 * 更新节点
 */
declare function updateNodes(editor: IDomEditor, path: number[], data: IData): void;
/**
 * 选区是否为空
 * @param editor editor
 */
declare function isSelectedEmpty(editor: IDomEditor, type: string): boolean;
declare const isCursorAtStartOfColumn: (editor: IDomEditor) => boolean;
declare const isCursorAtEndOfColumn: (editor: IDomEditor) => boolean;
declare const isSelectionWrap: (editor: IDomEditor) => boolean;
declare const isSelectionEmpty: (editor: IDomEditor) => boolean;
export { isInsertTypeInside, getLastTextLineBeforeSelection, isInsertLocation, isInsertsLocation, insertsRecursiveMethod, isCurrentLineEmpty, isNextLineEmpty, deleteNodes, updateNodes, isSelectedEmpty, isCursorAtStartOfColumn, isCursorAtEndOfColumn, isSelectionWrap, isSelectionEmpty, };
