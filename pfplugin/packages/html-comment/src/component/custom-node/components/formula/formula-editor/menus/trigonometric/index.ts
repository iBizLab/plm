import DropListMenu from '../menu-constructors/DropListMenu';
import $ from '../../utils/dom-core';
import { createMemuElem } from '../../utils/util';
import Editor from '../../editor/index';
import TrigonometricList from '../common/InlineBlockList';

class Trigonometric extends DropListMenu {
  constructor(editor: Editor) {
    const $elem = $(createMemuElem('\\theta'));
    const presetList = new TrigonometricList(editor.menusConfig.trigonometric);
    const presetConf = {
      title: editor.t('fe.t'),
      list: presetList.getItemList(),
      clickHandler: (value: string) => {
        this.command(value);
      },
    };
    super($elem, editor, presetConf);
  }
}

export default Trigonometric;
