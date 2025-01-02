/* eslint-disable @typescript-eslint/explicit-function-return-type */
import DropListMenu from '../menu-constructors/DropListMenu';
import $ from '../../utils/dom-core';
import { createMemuElem } from '../../utils/util';
import Editor from '../../editor/index';
import PresetList from '../common/PresetList';

class Presets extends DropListMenu {
  constructor(editor: Editor) {
    const $elem = $(createMemuElem('f_{(x)}'));
    const presetList = new PresetList(editor.menusConfig.presets(editor.t));
    const presetConf = {
      width: 252,
      title: editor.t('fe.p'),
      type: 'list',
      list: presetList.getItemList(),
      clickHandler: (value: string) => {
        this.command(value);
      },
    };
    super($elem, editor, presetConf);
  }
}

export default Presets;
