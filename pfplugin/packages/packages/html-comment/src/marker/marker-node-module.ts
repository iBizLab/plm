/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
export type MarkerElement = {
  type: 'marker';
  script: string;
  data: IData;
  children: EmptyText[]; // void 元素必须有一个空 text
};

function markerToHtml(elem: SlateElement): string {
  const { script = '', data = {} } = elem as MarkerElement;
  const result = ScriptFactory.execScriptFn({ data }, script, {
    singleRowReturn: true,
    isAsync: false,
  }) as string;
  return `${result}`;
}

const elemToHtmlConf = {
  type: 'marker',
  elemToHtml: markerToHtml,
};

function parseHtml(elem: DOMElement): SlateElement {
  const datastr = decodeURIComponent(elem.getAttribute('data-value') || '');
  const data: IData = JSON.parse(datastr);
  return {
    type: 'marker',
    script: data.script,
    data,
    children: [{ text: '' }],
  } as MarkerElement;
}

const parseHtmlConf = {
  selector: 'span[data-w-e-type="marker"]',
  parseElemHtml: parseHtml,
};

function renderMarker(elem: SlateElement) {
  const { data = {} } = elem as MarkerElement;

  // 构建 vnode
  const vnode = h(
    'mention-elem',
    {
      dataset: { value: JSON.stringify(data) },
      props: {
        contentEditable: false, // 不可编辑
      },
    },
    [],
  );

  return vnode;
}

const renderElemConf: any = {
  type: 'marker',
  renderElem: renderMarker,
};

export class MenTionMenu implements IButtonMenu {
  readonly title = '提及工作项';

  readonly tag = 'button';

  readonly iconSvg =
    '<svg t="1706259772097" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6854" width="200" height="200"><path d="M929.28 625.664l-234.496 0.512 24.064-229.888 210.432-0.512c20.992 0 38.4-17.408 38.4-38.4s-17.408-38.4-38.4-38.4H727.04l29.184-275.456c2.048-20.992-13.312-39.936-34.304-41.984-20.992-2.048-39.936 13.312-41.984 34.304L650.24 318.976l-232.448 0.512 29.184-275.456c2.048-20.992-13.312-39.936-34.304-41.984-20.992-2.048-39.936 13.312-41.984 34.304l-29.696 283.648-246.272 0.512c-20.992 0-38.4 17.408-38.4 38.4s17.408 38.4 38.4 38.4l238.08-0.512-24.064 229.888-214.016 0.512c-20.992 0-38.4 17.408-38.4 38.4s17.408 38.4 38.4 38.4l205.824-0.512-29.184 276.992c-2.048 20.992 13.312 39.936 34.304 41.984h4.096c19.456 0 35.84-14.848 37.888-34.304l30.208-285.184 232.448-0.512-29.184 277.504c-2.048 20.992 13.312 39.936 34.304 41.984h4.096c19.456 0 35.84-14.848 38.4-34.304l30.208-285.184 242.688-0.512c20.992 0 38.4-17.408 38.4-38.4-1.536-20.992-18.944-37.888-39.936-37.888z m-544.256 0.512l24.064-229.888 232.448-0.512-24.064 229.888-232.448 0.512z" fill="#979797" p-id="6855"></path></svg>';

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
    editor.insertText('#');
  }
}

const atMenu = {
  key: 'marker',
  factory() {
    return new MenTionMenu();
  },
};

const module: Partial<IModuleConf> = {
  renderElems: [renderElemConf],
  elemsToHtml: [elemToHtmlConf],
  parseElemsHtml: [parseHtmlConf],
  menus: [atMenu],
};

export default module;
