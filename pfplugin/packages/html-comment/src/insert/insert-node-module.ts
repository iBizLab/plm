/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { h, VNode } from 'snabbdom';
import {
  IModuleConf,
  SlateElement,
  IButtonMenu,
  IDomEditor,
} from '@wangeditor/editor';
import { DOMElement } from '@wangeditor/editor/dist/editor/src/utils/dom';
import { FilesButtonMenu } from './files-node-module';

/**
 * 空值节点
 */
type EmptyText = {
  text: '';
};

/**
 * insert节点
 */
type InsertElement = {
  type: 'insert' | 'layout' | 'layout-column';
  data?: IData;
  children: EmptyText[]; // void 元素必须有一个空 text
};

/**
 * 根据节点类型绘制节点元素
 *
 * wangEditor 内容区呈现元素
 */
const renderElemConf = {
  type: 'insert',
  renderElem: (elem: SlateElement, children: VNode[] | null): VNode => {
    const { data = {} } = elem as InsertElement;
    const vnode = h(
      `${data.type || ''}-elem`,
      {
        dataset: { value: JSON.stringify(data) },
        props: {
          contentEditable: false, // 不可编辑
        },
      },
      children,
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
  type: 'insert',
  elemToHtml: (elem: SlateElement): string => {
    const { data = {} } = elem as InsertElement;
    return `<span data-w-e-type="insert" class='insert'>${JSON.stringify({
      type: data.type,
      value: data.value,
    })}</span>`;
  },
};

/**
 * html字符串解析为编辑器节点
 *
 * 后台数据转前台数据
 */
const parseHtmlConf = {
  selector: 'span[data-w-e-type="insert"]',
  parseElemHtml: (elem: DOMElement): InsertElement => {
    const data: IData = JSON.parse(elem.innerHTML) || {};
    const children2 = [{ text: '' }];
    return {
      data,
      type: 'insert',
      children: children2 as any,
    };
  },
};

/**
 * 根据节点类型绘制节点元素
 *
 * wangEditor 内容区呈现元素
 */
const renderLayoutElemConf = {
  type: 'layout',
  renderElem: (elem: SlateElement, children: VNode[] | null): VNode => {
    const vnode = h(
      `layout-elem`,
      {
        props: {
          class: 'layout',
        },
      },
      children || [],
    );
    return vnode;
  },
};

/**
 * 编辑器节点解析为html字符串
 *
 * 前端数据转后台数据
 */
const layoutElemToHtmlConf = {
  type: 'layout',
  elemToHtml: (elem: SlateElement, childrenHtml: string): string => {
    return `<layout-elem data-w-e-type="layout" class='layout'>${childrenHtml}</layout-elem>`;
  },
};

/**
 * html字符串解析为编辑器节点
 *
 * 后台数据转前台数据
 */
const parseLayoutHtmlConf = {
  selector: 'layout-elem[data-w-e-type="layout"]',
  parseElemHtml: (elem: DOMElement, children: any[]): InsertElement => {
    return {
      type: 'layout',
      children,
    };
  },
};

/**
 * 根据节点类型绘制节点元素
 *
 * wangEditor 内容区呈现元素
 */
const renderLayoutColumnElemConf = {
  type: 'layout-column',
  renderElem: (elem: SlateElement, children: VNode[] | null): VNode => {
    const vnode = h(
      `layout-column-elem`,
      {
        props: {
          class: 'layout-column',
        },
      },
      children || [],
    );
    return vnode;
  },
};

/**
 * 编辑器节点解析为html字符串
 *
 * 前端数据转后台数据
 */
const layoutColumnElemToHtmlConf = {
  type: 'layout-column',
  elemToHtml: (elem: SlateElement, childrenHtml: string): string => {
    return `<layout-column-elem data-w-e-type="layout-column" class='layout-column'>${childrenHtml}</layout-column-elem>`;
  },
};

/**
 * html字符串解析为编辑器节点
 *
 * 后台数据转前台数据
 */
const parseLayoutColumnHtmlConf = {
  selector: 'layout-column-elem[data-w-e-type="layout-column"]',
  parseElemHtml: (elem: DOMElement, children: any[]): InsertElement => {
    return {
      type: 'layout-column',
      children,
    };
  },
};

/**
 * 插入菜单项
 *
 * @export
 * @class InsertButtonMenu
 * @implements {IButtonMenu}
 */
class InsertButtonMenu implements IButtonMenu {
  /**
   * 标题
   *
   * @memberof InsertButtonMenu
   */
  readonly title = `插入`;

  /**
   * 菜单类型
   *
   * @memberof InsertButtonMenu
   */
  readonly tag = 'button';

  /**
   * 菜单图标
   *
   * @memberof InsertButtonMenu
   */
  readonly iconSvg = `<svg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' height='1em' width='1em' class='insert-icon' fill='var(--ibiz-color-primary)'><g stroke-width='1' fill-rule='evenodd'> <path d='M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm-.6-8.6H4v1.2h3.4V12h1.2V8.6H12V7.4H8.6V4H7.4v3.4z'></path></g></svg>`;

  /**
   * Creates an instance of InsertButtonMenu.
   * @memberof InsertButtonMenu
   */
  constructor() {}

  /**
   * 菜单是否需要激活（如选中加粗文本，“加粗”菜单会激活），用不到则返回 false
   *
   * @return {*}  {boolean}
   * @memberof InsertButtonMenu
   */
  isActive(): boolean {
    return false;
  }

  /**
   * 获取菜单执行时的 value ，用不到则返回空 字符串或 false
   *
   * @return {*}  {(string | boolean)}
   * @memberof InsertButtonMenu
   */
  getValue(): string | boolean {
    return false;
  }

  /**
   * 菜单是否需要禁用（如选中 H1 ，“引用”菜单被禁用），用不到则返回 false
   *
   * @return {*}  {boolean}
   * @memberof InsertButtonMenu
   */
  isDisabled(): boolean {
    return false;
  }

  /**
   * 点击菜单时触发的函数
   *
   * @param {IDomEditor} editor
   * @memberof InsertButtonMenu
   */
  exec(editor: IDomEditor): void {
    editor.emit('openInsertSelect');
  }
}

/**
 * 插入菜单
 */
const InsertMenu = {
  key: 'insert',
  factory(): InsertButtonMenu {
    return new InsertButtonMenu();
  },
};

/**
 * 插入菜单
 */
const FilesMenu = {
  key: 'files',
  factory(): FilesButtonMenu {
    return new FilesButtonMenu();
  },
};

/**
 * 插入模块
 * - 插入节点定义
 * - 插入菜单
 */
export const InsertModule: Partial<IModuleConf> = {
  renderElems: [
    renderElemConf,
    renderLayoutElemConf,
    renderLayoutColumnElemConf,
  ],
  elemsToHtml: [
    elemToHtmlConf,
    layoutElemToHtmlConf,
    layoutColumnElemToHtmlConf,
  ],
  parseElemsHtml: [
    parseHtmlConf,
    parseLayoutHtmlConf,
    parseLayoutColumnHtmlConf,
  ],
  menus: [InsertMenu, FilesMenu],
};

export default InsertModule;
