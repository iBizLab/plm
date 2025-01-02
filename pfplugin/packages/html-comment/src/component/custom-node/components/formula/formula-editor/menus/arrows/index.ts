/* eslint-disable @typescript-eslint/explicit-function-return-type */
import DropListMenu from '../menu-constructors/DropListMenu';
import $ from '../../utils/dom-core';
import { createMemuElem } from '../../utils/util';
import Editor from '../../editor/index';
import ArrowList from '../common/InlineBlockList';

class Arrows extends DropListMenu {
  constructor(editor: Editor) {
    const $elem = $(createMemuElem('\\rightarrow'));
    const presetList = new ArrowList(editor.menusConfig.arrows);
    const presetConf = {
      title: editor.t('fe.a'),
      list: presetList.getItemList(),
      clickHandler: (value: string) => {
        this.command(value);
      },
    };
    super($elem, editor, presetConf);
  }
}

export default Arrows;
