import { DomElement } from '../../utils/dom-core';
import { hightlightHtml } from '../../utils/util';
import Editor from '../../editor/index';
import Menu from './Menu';
import DropList, { DropListConf } from './DropList';

class DropListMenu extends Menu {
  public dropList: DropList;

  constructor($elem: DomElement, editor: Editor, conf: DropListConf) {
    super($elem, editor);

    // 初始化 dropList
    const dropList = new DropList(this, conf);
    this.dropList = dropList;

    // 绑定事件
    $elem
      .on('mouseover', () => {
        if (!editor.selection.getRange()) return;

        $elem.addClass('active');
        // 显示
        dropList.show();
      })
      .on('mouseleave', () => {
        $elem.removeClass('active');
        // 隐藏
        dropList.hideTimeoutId = window.setTimeout(() => {
          dropList.hide();
        });
      });
  }

  /**
   * 执行命令
   * @param value value
   */
  public command(value: string): void {
    const editor = this.editor;

    const isEmptySelection = editor.selection.isSelectionEmpty();

    const selectionElem =
      editor.selection.getSelectionContainerElem()?.elems[0];

    if (!selectionElem) return;

    const html = hightlightHtml(value);
    editor.cmd.do(html);
    if (isEmptySelection) {
      // 需要将选区范围折叠起来
      editor.selection.collapseRange();
      editor.selection.restoreSelection();
    }
  }
}

export default DropListMenu;
