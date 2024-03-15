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
export type CodeSnippetElement = {
  type: 'codesnippet';
  script: string;
  data: IData;
  children: EmptyText[]; // void 元素必须有一个空 text
};

function CodeSnippetToHtml(elem: SlateElement): string {
  const { script = '', data = {} } = elem as CodeSnippetElement;
  const result = ScriptFactory.execScriptFn({ data }, script, {
    singleRowReturn: true,
    isAsync: false,
  }) as string;
  return `${result}`;
}

const elemToHtmlConf = {
  type: 'codesnippet',
  elemToHtml: CodeSnippetToHtml,
};

function parseHtml(elem: DOMElement): SlateElement {
  const datastr = decodeURIComponent(elem.getAttribute('data-value') || '');
  const data: IData = JSON.parse(datastr);
  return {
    type: 'codesnippet',
    script: data.script,
    data,
    children: [{ text: '' }],
  } as CodeSnippetElement;
}

const parseHtmlConf = {
  selector: 'span[data-w-e-type="codesnippet"]',
  parseElemHtml: parseHtml,
};

function renderCodeSnippet(elem: SlateElement) {
  const { data = {} } = elem as CodeSnippetElement;

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
  type: 'CodeSnippet',
  renderElem: renderCodeSnippet,
};

export class CodeSnippetMenu implements IButtonMenu {
  readonly title = '代码段';

  readonly tag = 'button';

  readonly iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="36px" height="36px" viewBox="0 0 36 36" version="1.1">
  <title>代码段</title>
  <g id="代码段" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="icon备份">
          <rect id="矩形" stroke="#EEEEEE" fill="#FFFFFF" x="0.5" y="0.5" width="35" height="35" rx="4"/>
          <path d="M24.6642225,18.8794824 L27.6075695,18.8794824 C27.9389404,18.8794824 28.2075695,19.1481115 28.2075695,19.4794824 C28.2075695,19.8108532 27.9389404,20.0794824 27.6075695,20.0794824 L24.6642225,20.0794824 C24.3328516,20.0794824 24.0642225,19.8108532 24.0642225,19.4794824 C24.0642225,19.1481115 24.3328516,18.8794824 24.6642225,18.8794824 Z" id="矩形备份-74" fill="#73D897"/>
          <path d="M24.6642225,13.2927173 L30.4,13.2927173 C30.7313708,13.2927173 31,13.5613465 31,13.8927173 C31,14.2240882 30.7313708,14.4927173 30.4,14.4927173 L24.6642225,14.4927173 C24.3328516,14.4927173 24.0642225,14.2240882 24.0642225,13.8927173 C24.0642225,13.5613465 24.3328516,13.2927173 24.6642225,13.2927173 Z" id="矩形备份-75" fill="#6698FF"/>
          <path d="M24.6642225,24.4662475 L30.4,24.4662475 C30.7313708,24.4662475 31,24.7348766 31,25.0662475 C31,25.3976183 30.7313708,25.6662475 30.4,25.6662475 L24.6642225,25.6662475 C24.3328516,25.6662475 24.0642225,25.3976183 24.0642225,25.0662475 C24.0642225,24.7348766 24.3328516,24.4662475 24.6642225,24.4662475 Z" id="矩形备份-77" fill="#FF7575"/>
          <g id="1.Base基础/1.icon图标/11.editor/header-1" transform="translate(5.000000, 11.000000)" fill="#DDDDDD">
              <path d="M4.68266589,2.39258039 L1.51032474,7.44797324 L5.01586095,12.7216272 L4.05994646,13.3212428 L0.126424153,7.40475416 L3.68603474,1.72997946 L4.68266589,2.39258039 Z M11.3173341,12.6697762 L14.4896753,7.61438339 L10.984139,2.34072939 L11.9400535,1.7411138 L15.8735758,7.65760247 L12.3139653,13.3323772 L11.3173341,12.6697762 Z M8.86596086,1.31248434 L10.0376294,1.55020137 L7.19605832,13.6243456 L6.0243898,13.3866286 L8.86596086,1.31248434 Z" id="形状结合"/>
          </g>
      </g>
  </g>
</svg>`;

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
    throw new RuntimeError('暂未支持上传代码段！');
  }
}

const Menu = {
  key: 'codesnippet',
  factory() {
    return new CodeSnippetMenu();
  },
};

const module: Partial<IModuleConf> = {
  renderElems: [renderElemConf],
  elemsToHtml: [elemToHtmlConf],
  parseElemsHtml: [parseHtmlConf],
  menus: [Menu],
};

export default module;
