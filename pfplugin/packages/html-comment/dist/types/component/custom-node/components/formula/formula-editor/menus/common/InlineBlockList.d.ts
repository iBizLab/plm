import { DropListItem } from '../menu-constructors/DropList';
/**
 * BlockList 行内块状配置列表
 */
declare class InlineBlockList {
    private itemList;
    constructor(list: string[]);
    getItemList(): DropListItem[];
}
export default InlineBlockList;
