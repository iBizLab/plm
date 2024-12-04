import { DomElement } from '../../utils/dom-core';
import DropListMenu from './DropListMenu';
export type DropListItem = {
    $elem: DomElement;
    value: string;
};
export type DropListConf = {
    title: string;
    list: DropListItem[];
    /** 下拉选项样式 list 列表形式（如“预设”菜单）  block 块状形式（如“操作符”菜单） 默认： block */
    type?: string;
    clickHandler?: (value: DropListItem['value']) => void;
    /** 下拉框宽度，默认232 */
    width?: number;
};
declare class DropList {
    private menu;
    private conf;
    private $container;
    private rendered;
    private _show;
    hideTimeoutId: number;
    constructor(menu: DropListMenu, conf: DropListConf);
    /**
     * 显示 DropList
     */
    show(): void;
    /**
     * 隐藏 DropList
     */
    hide(): void;
    get isShow(): boolean;
}
export default DropList;
