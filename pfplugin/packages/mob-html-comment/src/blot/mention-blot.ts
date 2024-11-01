/* eslint-disable @typescript-eslint/no-explicit-any */
import Quill from 'quill';

const Inline: any = Quill.import('blots/inline');

/**
 * @description 提及人员
 * @class MentionBlot
 * @extends {Inline}
 */
export class MentionBlot extends Inline {
  static blotName = 'mention';

  static className = 'ql-mention';

  static tagName = 'span';

  static create(dataString: string) {
    const data = JSON.parse(dataString);
    const { name, value } = data;
    const node = super.create();
    node.setAttribute('data-value', value);
    node.setAttribute('data-name', name);
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
