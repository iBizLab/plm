/* eslint-disable @typescript-eslint/explicit-function-return-type */
import DropListMenu from '../menu-constructors/DropListMenu';
import $ from '../../utils/dom-core';
import { createMemuElem } from '../../utils/util';
import Editor from '../../editor/index';
import GreekLetterList from '../common/InlineBlockList';

class GreekLetters extends DropListMenu {
  constructor(editor: Editor) {
    const $elem = $(createMemuElem('\\alpha'));
    const presetList = new GreekLetterList(editor.menusConfig.greekLetters);
    const presetConf = {
      title: editor.t('fe.gl'),
      list: presetList.getItemList(),
      clickHandler: (value: string) => {
        this.command(value);
      },
    };
    super($elem, editor, presetConf);
  }
}

export default GreekLetters;
