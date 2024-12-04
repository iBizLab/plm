/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { h } from 'snabbdom';
import { base64ToStr } from '@ibiz-template/core';
import {
  IModuleConf,
  SlateElement,
  IButtonMenu,
  IDomEditor,
} from '@wangeditor/editor';
import { DOMElement } from '@wangeditor/editor/dist/editor/src/utils/dom';

/**
 * 空值节点
 */
type EmptyText = {
  text: '';
};

/**
 * emoji节点
 */
type EmojiElement = {
  type: 'emoji';
  data: IData;
  children: EmptyText[]; // void 元素必须有一个空 text
};

/**
 * 根据节点类型绘制节点元素
 *
 * wangEditor 内容区呈现元素
 */
const renderElemConf = {
  type: 'emoji',
  renderElem: (elem: SlateElement): any => {
    const { data = {} } = elem as EmojiElement;

    const vnode = h(
      'emoji-elem',
      {
        dataset: { value: data.emoji ? base64ToStr(data.emoji) : '' },
        props: {
          contentEditable: false, // 不可编辑
        },
      },
      [],
    );
    return vnode;
  },
};

/**
 * 编辑器节点解析为html字符串
 *
 * 前端数据转后台数据
 */
const elemToHtmlConf = {
  type: 'emoji',
  elemToHtml: (elem: SlateElement): string => {
    const { data } = elem as EmojiElement;
    return `<span data-w-e-type="emoji" class='emoji'>${data.emoji}</span>`;
  },
};

/**
 * html字符串解析为编辑器节点
 *
 * 后台数据转前台数据
 */
const parseHtmlConf = {
  selector: 'span[data-w-e-type="emoji"]',
  parseElemHtml: (elem: DOMElement): EmojiElement => {
    const data: IData = {
      emoji: elem.innerHTML,
    };
    return {
      data,
      type: 'emoji',
      children: [{ text: '' }],
    };
  },
};

/**
 * 表情菜单项
 *
 * @export
 * @class EmojiButtonMenu
 * @implements {IButtonMenu}
 */
class EmojiButtonMenu implements IButtonMenu {
  /**
   * 标题
   *
   * @memberof EmojiButtonMenu
   */
  readonly title = `表情`;

  /**
   * 菜单类型
   *
   * @memberof EmojiButtonMenu
   */
  readonly tag = 'button';

  /**
   * 菜单图标
   *
   * @memberof EmojiButtonMenu
   */
  readonly iconSvg = `<svg viewBox='0 0 1040 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='1490' width='1em' height='1em' stroke='var(--w-e-toolbar-color)' > <path stroke-width='38' d='M512.075261 1024A511.774217 511.774217 0 1 1 730.482434 48.769072a37.630457 37.630457 0 1 1-32.061149 68.035867 436.513303 436.513303 0 1 0 250.468323 395.270322 37.630457 37.630457 0 0 1 75.260914 0 512.526826 512.526826 0 0 1-512.075261 511.924739z' p-id='1491' ></path> <path stroke-width='38' d='M333.857416 344.0929a57.348817 57.348817 0 1 0 57.348817 57.348817 57.499339 57.499339 0 0 0-57.348817-57.348817zM686.53006 344.0929a57.348817 57.348817 0 1 0 57.348817 57.348817 57.348817 57.348817 0 0 0-57.348817-57.348817zM515.236219 783.165074c-162.864619 0-262.359547-141.942084-262.359547-219.159782a30.104366 30.104366 0 0 1 60.208731 0c0 48.618551 76.314567 158.951051 202.150816 158.951051s193.571072-134.114949 193.571072-158.951051a30.104366 30.104366 0 0 1 60.208731 0c0 54.488902-90.012054 219.159782-253.779803 219.159782zM1009.549904 207.720123h-67.132735V139.985301a30.104366 30.104366 0 1 0-60.208732 0v67.734822h-67.734822a30.104366 30.104366 0 0 0-30.104366 30.104366 30.104366 30.104366 0 0 0 30.104366 30.104366h67.734822v67.734823a30.104366 30.104366 0 0 0 60.208732 0v-67.734823h67.734823a30.104366 30.104366 0 0 0 30.104365-30.104366 30.104366 30.104366 0 0 0-30.706453-30.104366z' p-id='1492' ></path> </svg>`;

  /**
   * Creates an instance of EmojiButtonMenu.
   * @memberof EmojiButtonMenu
   */
  constructor() {}

  /**
   * 菜单是否需要激活（如选中加粗文本，“加粗”菜单会激活），用不到则返回 false
   *
   * @return {*}  {boolean}
   * @memberof EmojiButtonMenu
   */
  isActive(): boolean {
    return false;
  }

  /**
   * 获取菜单执行时的 value ，用不到则返回空 字符串或 false
   *
   * @return {*}  {(string | boolean)}
   * @memberof EmojiButtonMenu
   */
  getValue(): string | boolean {
    return false;
  }

  /**
   * 菜单是否需要禁用（如选中 H1 ，“引用”菜单被禁用），用不到则返回 false
   *
   * @return {*}  {boolean}
   * @memberof EmojiButtonMenu
   */
  isDisabled(): boolean {
    return false;
  }

  /**
   * 点击菜单时触发的函数
   *
   * @param {IDomEditor} editor
   * @memberof EmojiButtonMenu
   */
  exec(editor: IDomEditor): void {
    editor.emit('openEmojiSelect');
  }
}

/**
 * 表情菜单
 */
const EmojiMenu = {
  key: 'emoji',
  factory(): EmojiButtonMenu {
    return new EmojiButtonMenu();
  },
};

/**
 * 表情模块
 * - 表情节点定义
 * - 表情菜单
 */
export const EmojiModule: Partial<IModuleConf> = {
  renderElems: [renderElemConf],
  elemsToHtml: [elemToHtmlConf],
  parseElemsHtml: [parseHtmlConf],
  menus: [EmojiMenu],
};

export default EmojiModule;
