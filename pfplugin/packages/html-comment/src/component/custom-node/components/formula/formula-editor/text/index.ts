import $ from '../utils/dom-core';
import Editor from '../editor/index';
import { debounce } from '../utils/util';
import {
  EMPTY_P,
  NON_CHARACTER_KEYS,
  IUTERCEPTED_KEYS,
} from '../utils/constants';

class Text {
  public editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;
  }

  /**
   * 初始化
   */
  public init(): void {
    // 实时保存选取范围
    this._saveRange();
  }

  /**
   * 清空内容
   */
  public clear(): void {
    this.editor.$textLatexElem.replaceChildAll($(EMPTY_P));
  }

  /**
   * 设置/获取 text
   */
  public text(): string {
    const $textLatexElem = this.editor.$textLatexElem;
    return $textLatexElem.text().replace(/&nbsp;/g, ' ');
  }

  /**
   * 每一步操作，都实时保存选区范围
   */
  private _saveRange(): void {
    const editor = this.editor;
    const $textLatexElem = editor.$textLatexElem;
    const $document = $(document);

    // 保存当前的选区
    function saveRange() {
      // 随时保存选区
      editor.selection.saveRange();
    }

    // 按键后保存
    function handleKeyup() {
      saveRange();
      editor.cmd.renderFormula();
    }
    $textLatexElem.on('keyup', debounce(handleKeyup));

    // ctrl + 字符按键新建高亮
    function handleKeydown(e: KeyboardEvent) {
      const key = e.key;
      const isCtrl = e.ctrlKey && !NON_CHARACTER_KEYS.includes(key);
      const isIntercepted = IUTERCEPTED_KEYS.includes(key);

      if (isCtrl || isIntercepted) {
        e.preventDefault();
        saveRange();
        editor.cmd.insert(key, isIntercepted);
      }
    }
    $textLatexElem.on('keydown', handleKeydown);

    // 点击后保存
    function onceClickSaveRange() {
      saveRange();
      $textLatexElem.off('click', onceClickSaveRange);
    }
    $textLatexElem.on('click', onceClickSaveRange);

    function handleMouseUp() {
      // 在编辑器区域之外完成抬起，保存此时编辑区内的新选区，取消此时鼠标抬起事件
      saveRange();
      $document.off('mouseup', handleMouseUp);
    }
    function listenMouseLeave() {
      // 当鼠标移动到外面，要监听鼠标抬起操作
      $document.on('mouseup', handleMouseUp);
      // 首次移出时即接触leave监听，防止用户不断移入移出多次注册handleMouseUp
      $textLatexElem.off('mouseleave', listenMouseLeave);
    }
    $textLatexElem.on('mousedown', () => {
      // mousedown 状态下，要坚听鼠标滑动到编辑区域外面
      $textLatexElem.on('mouseleave', listenMouseLeave);
    });

    $textLatexElem.on('mouseup', () => {
      // 记得移除$textLatexElem的mouseleave事件, 避免内存泄露
      $textLatexElem.off('mouseleave', listenMouseLeave);
      // fix：避免当选中一段文字之后，再次点击文字中间位置无法更新selection问题。issue#3096
      setTimeout(() => {
        const selection = editor.selection;
        const range = selection.getRange();
        if (!range) return;
        saveRange();
      }, 0);
    });
  }
}

export default Text;
