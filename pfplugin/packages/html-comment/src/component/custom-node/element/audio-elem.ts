import { App, createApp } from 'vue';
import { ElSlider } from 'element-plus';
import { createUUID } from 'qx-util';
import { Audio } from '../components';

/**
 * 音频元素定义
 */
export class AudioElem extends HTMLElement {
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
      const handleChange = (detail: IData): void => {
        // 在这里处理日期选择变化后的逻辑
        // 创建一个自定义事件
        const event = new CustomEvent('audioElemEvent', {
          detail: { type, value: detail },
          bubbles: true, // 事件是否冒泡
          composed: true, // 事件是否能够穿过 shadow DOM 边界
        });
        this.dispatchEvent(event);
      };

      this.vueApp?.unmount();
      this.innerHTML = '';
      this.vueApp = createApp(Audio, {
        data: value,
        nodeKey: this.vueAppKey,
        isFocus: !!isAdd,
        readonly: !!readonly,
        change: (detail: IData) => handleChange(detail),
      });
      // 添加
      const container = document.createElement('span');
      container.classList.add('elem-box');
      container.part.add('container');
      this.vueApp.component(ElSlider.name!, ElSlider);
      this.vueApp.mount(container);
      this.appendChild(container);
    }
  }
}
