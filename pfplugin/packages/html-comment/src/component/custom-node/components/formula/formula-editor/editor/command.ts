import $, { DomElement } from '../utils/dom-core';
import Editor from './index';
import { createEmptyElem } from '../utils/util';

class Command {
  public editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;
  }

  /**
   * 执行富文本操作的命令
   * @param value value
   */
  public do(value?: string | DomElement): void {
    const selection = this.editor.selection;

    // 如果无选区，忽略
    if (!selection.getRange()) return;

    // 恢复选取
    selection.restoreSelection();

    // 执行
    this.insertHtml(value as string);

    // 插入渲染数学公式
    this.renderFormula();

    // 最后，恢复选取保证光标在原来的位置闪烁
    selection.saveRange();
    selection.restoreSelection();
  }

  /**
   * 公式编辑输入处理
   * @param text 插入的字符串
   * @param isSeparator 是否是定义的分隔符
   */
  insert(text: string, isSeparator?: boolean): void {
    if (isSeparator) {
      const editor = this.editor;

      const range = editor.selection.getRange();
      if (range) {
        // 删除原来的输入
        const textNode = range.startContainer;
        range.setStart(textNode, range.endOffset);
        range.setEnd(textNode, range.endOffset);
        range.deleteContents();
      }

      this.insertHtml(text === ' ' ? '&nbsp;' : text);
      return;
    }

    const htmlStr = createEmptyElem(text);
    this.do(htmlStr);
  }

  /**
   * 渲染数学公式
   */
  public renderFormula(): void {
    const editor = this.editor;
    // 获取输入框文本
    const text = editor.latex.text();

    // 值改变
    editor.change(text);

    // TODO 不在组件内执行绘制svg逻辑
    // const $textSvgElem = editor.$textSvgElem;

    // // 没有文本
    // if (isNullText(text)) {
    //   $textSvgElem.html('<p></p>');
    //   return;
    // }
    // // 空格处理
    // text = text.replace(/&nbsp;/g, ' ').trim();

    // // 文本没有变化
    // if ($textSvgElem.attr('data-latex') === text) return;

    // const htmlText = `$ ${text} $`;
    // $textSvgElem.attr('data-latex', text);

    // // 渲染
    // $textSvgElem.html(htmlText);
    // $textSvgElem.renderFormula();
  }

  /**
   * 插入 html 片段
   * @param html html字符串
   */
  private insertHtml(html: string): void {
    const editor = this.editor;
    const range = editor.selection.getRange();

    if (!range) return;

    if (this.queryCommandSupported('insertHTML')) {
      // W3C
      this.execCommand('insertHTML', html);
    } else if (range.insertNode) {
      // IE
      range.deleteContents();
      if ($(html).elems.length > 0) {
        range.insertNode($(html).elems[0]);
      } else {
        const newNode = document.createElement('p');
        newNode.appendChild(document.createTextNode(html));
        range.insertNode(newNode);
      }
      editor.selection.collapseRange();
    }
  }

  /**
   * 执行 document.execCommand
   * @param name name
   * @param value value
   */
  private execCommand(name: string, value: string): void {
    document.execCommand(name, false, value);
  }

  /**
   * 执行 document.queryCommandSupported
   * @param name name
   */
  public queryCommandSupported(name: string): boolean {
    return document.queryCommandSupported(name);
  }
}

export default Command;
