/* eslint-disable @typescript-eslint/explicit-function-return-type */
import DropListMenu from '../menu-constructors/DropListMenu';
import $ from '../../utils/dom-core';
import { createMemuElem } from '../../utils/util';
import Editor from '../../editor/index';
import InequationList from '../common/InlineBlockList';

class Inequation extends DropListMenu {
  constructor(editor: Editor) {
    const $elem = $(createMemuElem('\\approx'));
    const presetList = new InequationList(editor.menusConfig.inequation);
    const presetConf = {
      title: editor.t('fe.i'),
      list: presetList.getItemList(),
      clickHandler: (value: string) => {
        this.command(value);
      },
    };
    super($elem, editor, presetConf);
  }
}

export default Inequation;
