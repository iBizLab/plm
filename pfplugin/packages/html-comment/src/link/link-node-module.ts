/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  DomEditor,
  IButtonMenu,
  IDomEditor,
  IModuleConf,
  SlateElement,
} from '@wangeditor/editor';

type LinkElement = {
  type: 'link';
  url: string;
  target?: string;
  children: IData[];
};

function linkToHtml(elem: SlateElement): string {
  const { url, children } = elem as unknown as LinkElement;
  let target = '_blank';
  if (url.startsWith('./#/')) {
    target = '_self';
  }
  return `<a href="${url}" target="${target}">${children[0].text}</a>`;
}

const elemToHtmlConf = {
  type: 'link',
  elemToHtml: linkToHtml,
};

class ViewLink implements IButtonMenu {
  readonly title = '查看连接';

  readonly iconSvg =
    '<svg viewBox="0 0 1024 1024"><path d="M924.402464 1023.068211H0.679665V99.345412h461.861399v98.909208H99.596867v725.896389h725.896389V561.206811h98.909208z" p-id="10909"></path><path d="M930.805104 22.977336l69.965436 69.965436-453.492405 453.492404-69.965435-69.901489z" p-id="10910"></path><path d="M1022.464381 304.030081h-98.917201V99.345412H709.230573V0.428211h313.233808z"></path></svg>';

  readonly tag = 'button';

  private getSelectedLinkElem(editor: IDomEditor): LinkElement | null {
    const node = DomEditor.getSelectedNodeByType(editor, 'link');
    if (node == null) return null;
    return node as unknown as LinkElement;
  }

  getValue(editor: IDomEditor): string | boolean {
    const linkElem = this.getSelectedLinkElem(editor);
    if (linkElem) {
      return linkElem.url || '';
    }
    return '';
  }

  isActive(): boolean {
    // 无需 active
    return false;
  }

  isDisabled(editor: IDomEditor): boolean {
    if (editor.selection == null) return true;

    const linkElem = this.getSelectedLinkElem(editor);
    if (linkElem == null) {
      // 选区未处于 link node ，则禁用
      return true;
    }
    return false;
  }

  exec(editor: IDomEditor, value: string | boolean): void {
    if (this.isDisabled(editor)) return;
    if (!value || typeof value !== 'string') {
      throw new Error(`打开链接失败, 路径为 '${value}'`);
    }

    if (value.toString().startsWith('./#/')) {
      window.open(`${window.location.pathname}${value.slice(1)}`, '_self');
    } else {
      // 查看链接
      window.open(value, '_blank');
    }
  }
}

const CustomViewLink = {
  key: 'customViewLink',
  factory() {
    return new ViewLink();
  },
};

const CustomViewLinkModule: Partial<IModuleConf> = {
  menus: [CustomViewLink],
  elemsToHtml: [elemToHtmlConf],
};

export default CustomViewLinkModule;
