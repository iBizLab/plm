import { App } from 'vue';
import { createUUID } from 'qx-util';
import { removeNode } from '../utils';

/**
 * 布局元素定义
 */
export class LayoutColumnElem extends HTMLElement {
  private vueAppKey: string = createUUID();

  private vueApp!: App;

  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor() {
    super();
  }

  // 监听的 attr
  static get observedAttributes(): string[] {
    return ['data-value'];
  }

  connectedCallback(): void {
    this.classList.add('layout-column-elem');
  }

  // 自定义元素从页面中移除
  disconnectedCallback(): void {
    this.vueApp?.unmount();
    removeNode(this.vueAppKey);
  }

  async attributeChangedCallback(
    tag: string,
    oldValue: string,
    newValue: string,
  ): Promise<void> {
    if (tag === 'data-value') {
      // eslint-disable-next-line no-useless-return
      if (newValue && oldValue === newValue) return;
    }
  }
}
