import $ from '../../utils/dom-core';
import { DropListItem } from '../menu-constructors/DropList';

/**
 * BlockList 行内块状配置列表
 */
class InlineBlockList {
  private itemList: DropListItem[];

  constructor(list: string[]) {
    this.itemList = list.map(item => ({
      $elem: $(`<span>$${item}$</span>`),
      value: item,
    }));
  }

  public getItemList(): DropListItem[] {
    return this.itemList;
  }
}

export default InlineBlockList;
