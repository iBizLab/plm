/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DomEditor,
  IDomEditor,
  IModuleConf,
  SlateElement,
} from '@wangeditor/editor';
import { DOMElement } from '@wangeditor/editor/dist/editor/src/utils/dom';
import { h } from 'snabbdom';

type EmptyText = {
  text: '';
};
export type PersonnelMarkerElement = {
  type: 'personnel-marker';
  data: IData;
  children: EmptyText[]; // void 元素必须有一个空 text
};

function PersonnelMarkerToHtml(elem: SlateElement): string {
  const { data = {} } = elem as PersonnelMarkerElement;
  return `<span>${data?.name}</span>`;
}

const elemToHtmlConf = {
  type: 'personnel-marker',
  elemToHtml: PersonnelMarkerToHtml,
};

function parseHtml(elem: DOMElement): SlateElement {
  const datastr = decodeURIComponent(elem.getAttribute('data-value') || '');
  const data: IData = JSON.parse(datastr);
  return {
    type: 'personnel-marker',
    data,
    children: [{ text: '' }],
  } as PersonnelMarkerElement;
}

const parseHtmlConf = {
  selector: 'span[data-w-e-type="personnel-marker"]',
  parseElemHtml: parseHtml,
};

function renderPersonnelMarker(elem: SlateElement): any {
  const { data = {} } = elem as PersonnelMarkerElement;

  const tempData = {
    name: `${data.name}`,
    id: data.id,
  };

  // 构建 vnode
  const vnode = h(
    'personnel-marker-elem',
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
  type: 'personnel-marker',
  renderElem: renderPersonnelMarker,
};

export const personnelMarkerModule: Partial<IModuleConf> = {
  renderElems: [renderElemConf],
  elemsToHtml: [elemToHtmlConf],
  parseElemsHtml: [parseHtmlConf],
};

export const personnelMarkerPlugin = <T extends IDomEditor>(editor: T): any => {
  const { isInline, isVoid, deleteBackward } = editor;

  // 重写 deleteBackward
  editor.deleteBackward = unit => {
    const { selection } = editor;
    // offset为0表示开始删除前一个editor
    if (selection && selection.focus.offset === 0) {
      const [p1, p2] = selection.focus.path;
      let x = p2;
      let y = p1;
      let isBr = false;
      // 如果p2为0 p1要减1
      if (p2 === 0 && p1 !== 0) {
        y = y - 1;
        isBr = true;
      } else if (p2 > 0) {
        x = x - 1;
      }

      const node = (editor.children[y] as IData).children[
        isBr ? (editor.children[y] as IData).children.length - 1 : x
      ];

      if (node?.type === 'personnel-marker') {
        editor.moveReverse(1);
      }
    }
    deleteBackward(unit);
  };

  // 重写 isInline
  editor.isInline = elem => {
    const type = DomEditor.getNodeType(elem);

    if (type === 'personnel-marker') {
      return true;
    }

    return isInline(elem);
  };

  // 重写 isVoid
  editor.isVoid = elem => {
    const type = DomEditor.getNodeType(elem);
    if (type === 'personnel-marker') {
      return false;
    }

    return isVoid(elem);
  };

  return editor;
};
