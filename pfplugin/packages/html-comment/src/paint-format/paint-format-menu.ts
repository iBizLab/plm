/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
import { debounce } from '@ibiz-template/core';
import { IDomEditor, IButtonMenu } from '@wangeditor/editor';

export class PaintFormatMenu implements IButtonMenu {
  readonly title = '格式刷';

  readonly tag = 'button';

  public fragment: IData[] = [];

  public format: IData = {};

  public editor: IDomEditor | null = null;

  public excting: boolean = false;

  readonly iconSvg =
    '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fit="" height="1em" width="1em" preserveAspectRatio="xMidYMid meet" focusable="false"><g id="aqseditor/paintformat" stroke-width="1" fill-rule="evenodd"><path d="M3 5.24h10V2H3v3.24zM13.299 1H2.701A.701.701 0 0 0 2 1.701v3.838c0 .387.314.701.701.701h6.236L7.621 7.438h-.002v2.233h-.768v5.184L9.404 13.1V9.671h-.585V7.97l1.9-1.73h2.58A.701.701 0 0 0 14 5.539V1.701A.701.701 0 0 0 13.299 1z" id="aqsFill-1"></path></g></svg>';

  constructor() {}

  // 菜单是否需要激活（如选中加粗文本，“加粗”菜单会激活），用不到则返回 false
  isActive(editor: IDomEditor): boolean {
    if (Object.keys(this.format).length > 0) {
      return true;
    }
    return false;
  }

  // 获取菜单执行时的 value ，用不到则返回空 字符串或 false
  getValue(editor: IDomEditor): string | boolean {
    return '';
  }

  // 菜单是否需要禁用（如选中 H1 ，“引用”菜单被禁用），用不到则返回 false
  isDisabled(editor: IDomEditor): boolean {
    return false;
  }

  calcFormat(fragment: IData[]) {
    if (fragment.length > 0) {
      const { children } = fragment[0];
      children.forEach((item: IData) => {
        Object.assign(this.format, item);
      });
    }
  }

  clearFormat() {
    this.format = {};
    const container = this.editor!.getEditableContainer();
    if (container) {
      container.classList.remove('is-paint-format');
    }
  }

  setPaintFormat = () => {
    if (!this.editor) {
      return;
    }
    const select = this.editor.getSelectionText();
    if (!select) {
      return;
    }

    if (Object.keys(this.format).length > 0) {
      const node = { ...this.format, text: select };
      this.editor.insertNode(node);
      if (!this.excting) {
        this.clearFormat();
      }
    }
  };

  onPaintFormat = debounce(this.setPaintFormat, 500, false);

  throttle(
    fn: (...args: any[]) => void | Promise<void>,
    wait: number,
  ): (...args: any[]) => void {
    let timer: unknown = null;
    return function (this: any, ...args: any[]): void {
      if (!timer) {
        timer = setTimeout(() => {
          fn.apply(this, args);
          timer = null;
          this.excting = true;
        }, wait);
      }
    };
  }

  handle(editor: IDomEditor) {
    const fragment = editor.getFragment();
    this.calcFormat(fragment);
    this.editor = editor;
    const container = this.editor.getEditableContainer();
    if (container) {
      container.classList.add('is-paint-format');
    }
    editor.deselect();
    editor.on('change', this.onPaintFormat);
    editor.on('clickOutside', () => {
      this.clearFormat();
      this.excting = false;
    });
  }

  throttleHandle = this.throttle(this.handle, 300);

  // 点击菜单时触发的函数
  exec(editor: IDomEditor) {
    this.throttleHandle(editor);
  }
}

export const paintFormatMenu = {
  key: 'paintformat',
  factory() {
    return new PaintFormatMenu();
  },
};
