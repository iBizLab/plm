import { IModalData, IOverlayPopoverContainer } from '@ibiz-template/runtime';
import { onCreatePopover } from '../utils';
import { LayoutToolBar } from '../components';
import '../components/layout/layout.scss';

/**
 * 布局元素定义
 */
export class LayoutElem extends HTMLElement {
  /**
   * 是否只读
   */
  private readonly: boolean = false;

  /**
   * 弹框
   */
  private overlay!: IOverlayPopoverContainer | null;

  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor() {
    super();
  }

  // 监听的 attr
  static get observedAttributes(): string[] {
    return ['data-value'];
  }

  // 处理鼠标按下
  handleMousedown(e: MouseEvent): void {
    if (e.button === 0) {
      this.classList.remove('is-activated');
    }
  }

  // 元素创建
  connectedCallback(): void {
    this.classList.add('layout-elem');
    if (this.readonly) {
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _this = this;
    // 值改变
    const handleChange = (detail: string, param: IParams): void => {
      // 在这里处理日期选择变化后的逻辑
      // 创建一个自定义事件
      const event = new CustomEvent('labelElemEvent', {
        detail: { type: 'insert-layout', value: detail, params: param },
        bubbles: true, // 事件是否冒泡
        composed: true, // 事件是否能够穿过 shadow DOM 边界
      });
      this.dispatchEvent(event);
    };

    // 打开第一层弹框
    const onOpenTopPopover = async (e: HTMLElement): Promise<void> => {
      _this.overlay = onCreatePopover(LayoutToolBar as unknown as JSX.Element, {
        placement: 'top-start',
      });
      await _this.overlay.present(e as HTMLElement);
      const result: IModalData = await _this.overlay.onWillDismiss();
      if (result.ok && result.data && result.data.length > 0) {
        const { value, params } = result.data[0];
        handleChange(value, params);
      }
      _this.overlay = null;
    };

    // 监听点击事件
    this.onclick = (e: IParams): void => {
      if (
        `${e.target.nodeName}`?.toLocaleLowerCase() === 'layout-elem' &&
        !e.target.classList.contains('is-activated')
      ) {
        // 打开模态
        e.target.classList.add('is-activated');
        onOpenTopPopover(e.target);
      }
    };

    // 监听鼠标按下事件
    document.addEventListener('mousedown', this.handleMousedown.bind(this));
  }

  // 自定义元素从页面中移除
  disconnectedCallback(): void {
    if (this.overlay) {
      this.overlay.dismiss();
      this.overlay = null;
    }
    document.removeEventListener('mousedown', this.handleMousedown.bind(this));
  }

  async attributeChangedCallback(
    tag: string,
    oldValue: string,
    newValue: string,
  ): Promise<void> {
    if (tag === 'data-value') {
      // eslint-disable-next-line no-useless-return
      if (newValue && oldValue === newValue) return;
      const data = JSON.parse(newValue);
      const { params = {} } = data;
      const { readonly } = params;
      this.readonly = !!readonly;
    }
  }
}
