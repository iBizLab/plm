/* eslint-disable @typescript-eslint/no-unused-vars */
import { IButtonMenu, IDomEditor } from '@wangeditor/editor';

export class AIMenu implements IButtonMenu {
  // TS 语法

  title: string = 'AI询问';

  iconSvg: string =
    '<svg xmlns="http://www.w3.org/2000/svg" version="1.1"> <text x="0" y="13" font-size="16" fill="black">AI</text></svg>';

  tag: string = 'button';

  // 菜单是否需要激活（如选中加粗文本，“加粗”菜单会激活），用不到则返回 false
  isActive(editor: IDomEditor): boolean {
    // TS 语法
    return false;
  }

  // 获取菜单执行时的 value ，用不到则返回空 字符串或 false
  getValue(editor: IDomEditor): string | boolean {
    // TS 语法
    return 'aichart';
  }

  // 菜单是否需要禁用（如选中 H1 ，“引用”菜单被禁用），用不到则返回 false
  isDisabled(editor: IDomEditor): boolean {
    // TS 语法
    return false;
  }

  // 点击菜单时触发的函数
  exec(editor: IDomEditor, value: string | boolean): void {
    // TS 语法
    // Modal menu ，这个函数不用写，空着即可
    editor.emit('aiClick');
  }
}
