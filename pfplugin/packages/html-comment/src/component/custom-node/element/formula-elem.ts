import { App, createApp } from 'vue';
import { ElButton } from 'element-plus';
import { createUUID } from 'qx-util';
import { FormulaSelect } from '../components';
import { removeNode } from '../utils';

/**
 * 公式选择元素定义
 */
export class FormulaElem extends HTMLElement {
  private vueAppKey: string = createUUID();

  private vueApp!: App;

  // 监听的 attr
  static get observedAttributes(): string[] {
    return ['data-value'];
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
      if (newValue && oldValue === newValue) return;
      const data = JSON.parse(newValue);
      const { type, value, params = {} } = data;
      const { readonly, isAdd } = params;
      // 一个大的vue组件绘制容器，分发绘制每个插入项
      const handleChange = (detail: IData, param: IParams): void => {
        // 在这里处理日期选择变化后的逻辑
        // 创建一个自定义事件
        const event = new CustomEvent('formulaElemEvent', {
          detail: { type, value: detail, params: param },
          bubbles: true, // 事件是否冒泡
          composed: true, // 事件是否能够穿过 shadow DOM 边界
        });
        this.dispatchEvent(event);
      };

      this.vueApp?.unmount();
      this.vueApp = createApp(FormulaSelect, {
        data: value,
        nodeKey: this.vueAppKey,
        isFocus: !!isAdd,
        readonly: !!readonly,
        change: (detail: IData, param: IParams) => handleChange(detail, param),
      });
      this.innerHTML = '';
      // 添加
      const container = document.createElement('span');
      container.classList.add('elem-box');
      container.part.add('container');
      this.vueApp.component(ElButton.name!, ElButton);
      this.vueApp.mount(container);
      this.appendChild(container);
    }
  }
}
