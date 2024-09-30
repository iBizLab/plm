import Editor from './index';
import $, { DomElement } from '../utils/dom-core';

/**
 * 初始化并添加编辑器Dom结构
 * @param editor 编辑器实例
 */
function initDom(editor: Editor): void {
  const {
    $editorRootElem,
    $toolbarElem,
    $textLatexElem,
    // $textSvgElem,
    config,
  } = editor;

  // 添加菜单
  $editorRootElem.append($toolbarElem);

  const $textElem: DomElement = $('<div></div>');
  $textElem
    .addClass('clearfix')
    .css('width', '100%')
    .css('height', `${config.height - config.menuHeight}px`)
    .css('overflow', 'hidden');

  // 设置latex编辑区域
  $textLatexElem.attr('contenteditable', 'true').css('outline', 'none');
  // .css('border-right', '1px solid #ccc');
  // 添加latex编辑和数学公式渲染区域
  // $textElem.append($textLatexElem).append($textSvgElem);
  // TODO 不添加左侧svg内容，svg内容绘制放在外面
  $textElem.append($textLatexElem);

  // 初始化根节点
  $editorRootElem
    .css('width', `${config.width}px`)
    .css('height', `${config.height}px`);
  $editorRootElem.append($textElem);
}

export default initDom;
