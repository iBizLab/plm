import { DomElement } from '../../utils/dom-core';
import Editor from '../../editor/index';
declare class Menu {
    key: string | undefined;
    $elem: DomElement;
    editor: Editor;
    /** 菜单是否处于激活状态，如选中一段加粗文字时，bold 菜单要被激活（即高亮显示） */
    private _active;
    constructor($elem: DomElement, editor: Editor);
    /**
     * 菜单点击事件
     */
    protected clickHandler(): void;
    /**
     * 激活菜单，高亮显示
     */
    protected active(): void;
    /**
     * 取消激活，不再高亮显示
     */
    protected unActive(): void;
    /**
     * 是否处于激活状态
     */
    get isActive(): boolean;
}
export default Menu;
