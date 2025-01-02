/* eslint-disable @typescript-eslint/explicit-function-return-type */
import DropListMenu from '../menu-constructors/DropListMenu';
import $ from '../../utils/dom-core';
import { createMemuElem } from '../../utils/util';
import Editor from '../../editor/index';
import AdvancedMathList from '../common/InlineBlockList';

class AdvancedMath extends DropListMenu {
  constructor(editor: Editor) {
    const $elem = $(createMemuElem('\\Sigma'));
    const presetList = new AdvancedMathList(editor.menusConfig.AdvancedMath);
    const presetConf = {
      width: 244,
      title: editor.t('fe.am'),
      list: presetList.getItemList(),
      clickHandler: (value: string) => {
        this.command(value);
      },
    };
    super($elem, editor, presetConf);
  }
}

export default AdvancedMath;
