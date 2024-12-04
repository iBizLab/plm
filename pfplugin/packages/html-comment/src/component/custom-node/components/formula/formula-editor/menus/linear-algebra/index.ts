import DropListMenu from '../menu-constructors/DropListMenu';
import $ from '../../utils/dom-core';
import { createMemuElem } from '../../utils/util';
import Editor from '../../editor/index';
import LinearAlgebraList from '../common/InlineBlockList';

class LinearAlgebra extends DropListMenu {
  constructor(editor: Editor) {
    const $elem = $(createMemuElem('\\left|x\\right|'));
    const presetList = new LinearAlgebraList(editor.menusConfig.LinearAlgebra);
    const presetConf = {
      width: 244,
      title: editor.t('fe.lg'),
      list: presetList.getItemList(),
      clickHandler: (value: string) => {
        this.command(value);
      },
    };
    super($elem, editor, presetConf);
  }
}

export default LinearAlgebra;
