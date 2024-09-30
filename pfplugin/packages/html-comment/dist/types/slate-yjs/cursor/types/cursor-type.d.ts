/**
 * 光标数据
 *
 * @export
 * @interface CursorData
 */
export type CursorData = {
    /**
     * 名称
     *
     * @type {string}
     * @memberof CursorData
     */
    name: string;
    /**
     * 颜色
     *
     * @type {string}
     * @memberof CursorData
     */
    color: string;
};
/**
 * 选区位置
 */
export type SelectionRect = {
    width: string;
    height: string;
    top: string;
    left: string;
};
/**
 * 光标插入位置
 */
export type CaretPosition = {
    top: string;
    left: string;
    height: string;
};
/**
 * 覆盖位置
 */
export type OverlayPosition = {
    caretPosition: CaretPosition | null;
    selectionRects: SelectionRect[];
};
