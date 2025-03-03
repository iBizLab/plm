/* eslint-disable camelcase */
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
    const {
      name,
      id,
      identifier,
      owner_subtype,
      owner_id,
      owner_type,
      recent_parent,
      icon,
    } = data;
    const node = super.create();
    if (id) {
      node.setAttribute('data-id', id);
    }
    if (name) {
      node.setAttribute('data-name', name);
    }
    if (identifier) {
      node.setAttribute('data-identifier', identifier);
    }
    if (owner_subtype) {
      node.setAttribute('data-owner_subtype', owner_subtype);
    }
    if (owner_id) {
      node.setAttribute('data-owner_id', owner_id);
    }
    if (owner_type) {
      node.setAttribute('data-owner_type', owner_type);
    }
    if (recent_parent) {
      node.setAttribute('data-recent_parent', recent_parent);
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
