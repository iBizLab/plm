import { DropListItem } from '../menu-constructors/DropList';
import { Presets } from '../../config/menus';
/**
 * PresetList 预设公式列表
 */
declare class PresetList {
    private itemList;
    constructor(list: Presets);
    getItemList(): DropListItem[];
}
export default PresetList;
