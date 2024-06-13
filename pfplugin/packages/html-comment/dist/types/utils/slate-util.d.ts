import { IDomEditor, SlatePoint, SlateRange } from '@wangeditor/editor';
import { VNode, VNodeStyle } from 'snabbdom';
import { IPersMarkNode } from '../interface';
/**
 * 添加样式
 * @param vnode
 * @param newStyle
 */
export declare function addVnodeStyle(vnode: VNode, newStyle: VNodeStyle): void;
/**
 * 节点绘制样式
 * @param node
 * @param vnode
 * @returns
 */
export declare function renderStyle(node: IData, vnode: VNode): VNode;
export declare class SlateUtil {
    /**
     * 添加标记
     * @param editor 编辑器
     * @param op 标记信息
     */
    static addMarks(editor: IDomEditor, op: {
        selection: SlateRange;
        mark: IData;
    }): void;
    /**
     * 删除标记
     * @param editor 编辑器
     * @param op 标记信息
     */
    static removeMarks(editor: IDomEditor, op: {
        selection: SlateRange;
        keys: string[];
    }): void;
    /**
     * 移动用户光标节点
     * @param editor
     * @param options
     */
    static movePersNode(editor: IDomEditor, options: IPersMarkNode): void;
    /**
     * 根据偏移量计算位置
     * @param editor
     * @param item
     */
    static calcPointByOffset(editor: IDomEditor, point: SlatePoint): SlatePoint;
    /**
     * 根据点位置计算偏移量
     * @param editor
     * @param point
     */
    static calcOffsetByPoint(editor: IDomEditor, point: SlatePoint): number;
}
