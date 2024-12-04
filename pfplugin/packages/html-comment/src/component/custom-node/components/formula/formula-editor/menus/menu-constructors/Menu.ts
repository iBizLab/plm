import { DomElement } from '../../utils/dom-core';
import Editor from '../../editor/index';

class Menu {
  public key: string | undefined;

  public $elem: DomElement;

  public editor: Editor;

  /** 菜单是否处于激活状态，如选中一段加粗文字时，bold 菜单要被激活（即高亮显示） */
  private _active: boolean;

  constructor($elem: DomElement, editor: Editor) {
    this.$elem = $elem;
    this.editor = editor;
    this._active = false;

    // 绑定菜单点击事件
    $elem.on('click', (e: Event) => {
      e.stopPropagation();
      if (!editor.selection.getRange()) return;

      $elem.addClass('active');
      this.clickHandler();
    });
  }

  /**
   * 菜单点击事件
   */
  protected clickHandler(): void {}

  /**
   * 激活菜单，高亮显示
   */
  protected active(): void {
    this._active = true;
    this.$elem.addClass('me-active');
  }

  /**
   * 取消激活，不再高亮显示
   */
  protected unActive(): void {
    this._active = false;
    this.$elem.removeClass('me-active');
  }

  /**
   * 是否处于激活状态
   */
  public get isActive() {
    return this._active;
  }
}

export default Menu;
