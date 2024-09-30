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
export type AttachmentsElement = {
  type: 'attachments';
  script: string;
  data: IData;
  children: EmptyText[]; // void 元素必须有一个空 text
};

function attachmentsToHtml(elem: SlateElement): string {
  const { script = '', data = {} } = elem as AttachmentsElement;
  const result = ScriptFactory.execScriptFn({ data }, script, {
    singleRowReturn: true,
    isAsync: false,
  }) as string;
  return `${result}`;
}

const elemToHtmlConf = {
  type: 'attachments',
  elemToHtml: attachmentsToHtml,
};

function parseHtml(elem: DOMElement): SlateElement {
  const datastr = decodeURIComponent(elem.getAttribute('data-value') || '');
  const data: IData = JSON.parse(datastr);
  return {
    type: 'attachments',
    script: data.script,
    data,
    children: [{ text: '' }],
  } as AttachmentsElement;
}

const parseHtmlConf = {
  selector: 'span[data-w-e-type="attachments"]',
  parseElemHtml: parseHtml,
};

function renderAttachments(elem: SlateElement) {
  const { data = {} } = elem as AttachmentsElement;

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
  type: 'attachments',
  renderElem: renderAttachments,
};

export class AttachMentsMenu implements IButtonMenu {
  readonly title = '本地文件';

  readonly tag = 'button';

  readonly iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="36px" height="36px" viewBox="0 0 36 36" version="1.1">
    <title>附件</title>
    <g id="附件" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="icon">
            <rect id="矩形" stroke="#EEEEEE" fill="#FFFFFF" x="0.5" y="0.5" width="35" height="35" rx="4"/>
            <g id="编组-28" transform="translate(2.997929, 8.001508)">
                <path d="M13.9611058,12.6330155 C13.9611058,14.5460163 12.4108408,16.0968098 10.498492,16.0968098 C8.58614322,16.0968098 7.03587822,14.5460163 7.03590808,12.6393438 L7.03590808,12.6393438 L6.98338468,7.07669061 C6.97992133,6.70644889 7.27712693,6.40347538 7.64724246,6.39998034 C8.017358,6.39648531 8.32022824,6.69379224 8.32372209,7.06403396 L8.32372209,7.06403396 L8.37624485,12.6330155 C8.37624485,13.8054998 9.32640727,14.7559862 10.498492,14.7559862 C11.6705768,14.7559862 12.6207392,13.8054998 12.6207392,12.6330155 L12.6207392,12.6330155 L12.6207392,6.46506253 C12.6207392,4.69957562 11.0562006,3.24725012 9.10227678,3.24725012 C7.148353,3.24725012 5.58381437,4.69957562 5.58381437,6.46506253 L5.58381437,6.46506253 L5.58381437,12.8655397 C5.58381437,15.5621365 7.78332719,17.7497339 10.498492,17.7497339 C13.2136568,17.7497339 15.4131697,15.5621365 15.4131697,12.8655397 L15.4131697,12.8655397 L15.4131697,7.10001026 C15.4131697,6.72975204 15.713221,6.42959845 16.083353,6.42959845 C16.453485,6.42959845 16.7535363,6.72975204 16.7535363,7.10001026 L16.7535363,7.10001026 L16.7535363,12.8655397 C16.7535363,16.3043913 13.9521943,19.0905575 10.498492,19.0905575 C7.04478976,19.0905575 4.24344774,16.3043913 4.24344774,12.8655397 L4.24344774,12.8655397 L4.24344774,6.46506253 C4.24344774,3.93573556 6.42955024,1.90642651 9.10227678,1.90642651 C11.7750033,1.90642651 13.9611058,3.93573556 13.9611058,6.46506253 L13.9611058,6.46506253 Z" id="形状结合" fill="#DDDDDD" transform="translate(10.498492, 10.498492) rotate(-315.000000) translate(-10.498492, -10.498492) "/>
                <path d="M21.6662931,9.87797441 L24.6096402,9.87797441 C24.9410111,9.87797441 25.2096402,10.1466036 25.2096402,10.4779744 C25.2096402,10.8093453 24.9410111,11.0779744 24.6096402,11.0779744 L21.6662931,11.0779744 C21.3349223,11.0779744 21.0662931,10.8093453 21.0662931,10.4779744 C21.0662931,10.1466036 21.3349223,9.87797441 21.6662931,9.87797441 Z" id="矩形备份-74" fill="#73D897"/>
                <path d="M21.6662931,4.29120933 L27.4020707,4.29120933 C27.7334415,4.29120933 28.0020707,4.55983848 28.0020707,4.89120933 C28.0020707,5.22258018 27.7334415,5.49120933 27.4020707,5.49120933 L21.6662931,5.49120933 C21.3349223,5.49120933 21.0662931,5.22258018 21.0662931,4.89120933 C21.0662931,4.55983848 21.3349223,4.29120933 21.6662931,4.29120933 Z" id="矩形备份-75" fill="#6698FF"/>
                <path d="M21.6662931,15.4647395 L27.4020707,15.4647395 C27.7334415,15.4647395 28.0020707,15.7333686 28.0020707,16.0647395 C28.0020707,16.3961103 27.7334415,16.6647395 27.4020707,16.6647395 L21.6662931,16.6647395 C21.3349223,16.6647395 21.0662931,16.3961103 21.0662931,16.0647395 C21.0662931,15.7333686 21.3349223,15.4647395 21.6662931,15.4647395 Z" id="矩形备份-77" fill="#FF7575"/>
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
    throw new RuntimeError('暂未支持上传本地文件！');
  }
}

const Menu = {
  key: 'attachments',
  factory() {
    return new AttachMentsMenu();
  },
};

const module: Partial<IModuleConf> = {
  renderElems: [renderElemConf],
  elemsToHtml: [elemToHtmlConf],
  parseElemsHtml: [parseHtmlConf],
  menus: [Menu],
};

export default module;
