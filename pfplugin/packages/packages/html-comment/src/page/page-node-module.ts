/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { RuntimeError } from '@ibiz-template/core';
import { ScriptFactory } from '@ibiz-template/runtime';
import {
  IDomEditor,
  IButtonMenu,
  IModuleConf,
  SlateElement,
} from '@wangeditor/editor';
import { DOMElement } from '@wangeditor/editor/dist/editor/src/utils/dom';
import { h } from 'snabbdom';

type EmptyText = {
  text: '';
};
export type PageElement = {
  type: 'page';
  script: string;
  data: IData;
  children: EmptyText[]; // void 元素必须有一个空 text
};

function PageToHtml(elem: SlateElement): string {
  const { script = '', data = {} } = elem as PageElement;
  const result = ScriptFactory.execScriptFn({ data }, script, {
    singleRowReturn: true,
    isAsync: false,
  }) as string;
  return `${result}`;
}

const elemToHtmlConf = {
  type: 'page',
  elemToHtml: PageToHtml,
};

function parseHtml(elem: DOMElement): SlateElement {
  const datastr = decodeURIComponent(elem.getAttribute('data-value') || '');
  const data: IData = JSON.parse(datastr);
  return {
    type: 'page',
    script: data.script,
    data,
    children: [{ text: '' }],
  } as PageElement;
}

const parseHtmlConf = {
  selector: 'span[data-w-e-type="page"]',
  parseElemHtml: parseHtml,
};

function renderPage(elem: SlateElement) {
  const { data = {} } = elem as PageElement;

  const tempData = {
    name: `${data.name}`,
    id: data.id,
  };

  // 构建 vnode
  const vnode = h(
    'mention-elem',
    {
      dataset: { value: JSON.stringify(tempData) },
      props: {
        contentEditable: false, // 不可编辑
      },
    },
    [],
  );

  return vnode;
}

const renderElemConf: any = {
  type: 'Page',
  renderElem: renderPage,
};

export class PageMenu implements IButtonMenu {
  readonly title = '页面';

  readonly tag = 'button';

  readonly iconSvg = `<svg t="1707293566679" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6103" width="200" height="200"><path d="M288 512l256 0C561.92 512 576 497.92 576 480 576 462.08 561.92 448 544 448l-256 0C270.08 448 256 462.08 256 480 256 497.92 270.08 512 288 512zM768 64 192 64C121.6 64 64 121.6 64 192l0 576c0 70.4 57.6 128 128 128l576 0c70.4 0 128-57.6 128-128L896 192C896 121.6 838.4 64 768 64zM832 768c0 35.2-28.8 64-64 64L192 832c-35.2 0-64-28.8-64-64L128 192c0-35.2 28.8-64 64-64l576 0c35.2 0 64 28.8 64 64L832 768zM672 256l-384 0C270.08 256 256 270.08 256 288 256 305.92 270.08 320 288 320l384 0C689.92 320 704 305.92 704 288 704 270.08 689.92 256 672 256zM608 640l-320 0C270.08 640 256 654.08 256 672l0 0C256 689.92 270.08 704 288 704l320 0c17.92 0 32-14.08 32-32l0 0C640 654.08 625.92 640 608 640z" p-id="6104"></path></svg>`;

  constructor() {}

  // 菜单是否需要激活（如选中加粗文本，“加粗”菜单会激活），用不到则返回 false
  isActive(editor: IDomEditor): boolean {
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

  // 点击菜单时触发的函数
  exec(editor: IDomEditor, value: string | boolean) {
    throw new RuntimeError('暂未支持上传页面！');
  }
}

const Menu = {
  key: 'page',
  factory() {
    return new PageMenu();
  },
};

const module: Partial<IModuleConf> = {
  renderElems: [renderElemConf],
  elemsToHtml: [elemToHtmlConf],
  parseElemsHtml: [parseHtmlConf],
  menus: [Menu],
};

export default module;
