/* eslint-disable @typescript-eslint/no-explicit-any */
import Quill from 'quill';

const Inline: any = Quill.import('blots/inline');

/**
 * @description 提及人员
 * @class MarkerBlot
 * @extends {Inline}
 */
export class MarkerBlot extends Inline {
  static blotName = 'marker';

  static className = 'ql-marker';

  static tagName = 'mob-marker';

  static create(dataString: string) {
    const data = JSON.parse(dataString);
    const { name, value, identifier, icon } = data;
    const node = super.create();
    if (identifier) {
      node.setAttribute('data-identifier', identifier);
    }
    if (name) {
      node.setAttribute('data-name', name);
    }
    if (value) {
      node.setAttribute('data-value', value);
    }
    if (icon) {
      node.setAttribute('data-icon', icon);
    }
    return node;
  }

  static formats(domNode: HTMLElement) {
    const dataset = domNode.dataset;
    if (dataset.name) {
      return JSON.stringify(dataset);
    }
    return true;
  }
}
