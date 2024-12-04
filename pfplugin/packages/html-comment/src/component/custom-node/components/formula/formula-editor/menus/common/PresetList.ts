import $ from '../../utils/dom-core';
import { DropListItem } from '../menu-constructors/DropList';
import { Presets } from '../../config/menus';

/**
 * PresetList 预设公式列表
 */
class PresetList {
  private itemList: DropListItem[];

  constructor(list: Presets) {
    this.itemList = list.map(({ label, value }) => {
      return {
        $elem: $(`<p class="title">${label}：</p><p>$ ${value} $</p>`),
        value,
      };
    });
  }

  public getItemList(): DropListItem[] {
    return this.itemList;
  }
}

export default PresetList;
