import { App, createApp } from 'vue';
import { createUUID } from 'qx-util';
import ElementPlus from 'element-plus';
import { Files } from '../components';

/**
 * 本地文件元素定义
 */
export class FilesElem extends HTMLElement {
  private vueAppKey: string = createUUID();

  private vueApp!: App;

  // 监听的 attr
  static get observedAttributes(): string[] {
    return ['data-value'];
  }

  // 自定义元素从页面中移除
  disconnectedCallback(): void {
    this.vueApp?.unmount();
  }

  async attributeChangedCallback(
    tag: string,
    oldValue: string,
    newValue: string,
  ): Promise<void> {
    if (tag === 'data-value') {
      if (newValue && oldValue === newValue) return;
      const data = JSON.parse(newValue);
      const { type, value, params = {} } = data;
      const { readonly, isAdd } = params;
      // 一个大的vue组件绘制容器，分发绘制每个插入项
      const handleChange = (detail: IData, param: IParams): void => {
        // 在这里处理日期选择变化后的逻辑
        // 创建一个自定义事件
        const event = new CustomEvent('filesElemEvent', {
          detail: { type, value: detail, params: param },
          bubbles: true, // 事件是否冒泡
          composed: true, // 事件是否能够穿过 shadow DOM 边界
        });
        this.dispatchEvent(event);
      };

      this.vueApp?.unmount();
      this.innerHTML = '';
      this.vueApp = createApp(Files, {
        data: value,
        nodeKey: this.vueAppKey,
        isFocus: !!isAdd,
        readonly: !!readonly,
        change: (detail: IData, param: IParams) => handleChange(detail, param),
      });
      // 添加
      const container = document.createElement('span');
      container.classList.add('elem-box');
      container.part.add('container');
      this.vueApp.use(ElementPlus);
      this.vueApp.mount(container);
      this.appendChild(container);
    }
  }
}
