export class ModalUtil {
  /**
   * 模态实例
   * @memberof ModalUtil
   */
  private modalOrPanel!: IParams;

  /**
   * 富文本Ref
   * @memberof ModalUtil
   */
  private htmlRef!: IParams;

  constructor(modalOrPanel: IParams, htmlRef: IParams) {
    this.modalOrPanel = modalOrPanel;
    this.htmlRef = htmlRef;
    this.calcModalPosition();
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  /**
   * 计算模态定位
   * @memberof ModalUtil
   */
  calcModalPosition(): void {
    const modalType = ['dropPanel'];
    if (!modalType.includes(this.modalOrPanel.type)) {
      return;
    }
    const { $elem } = this.modalOrPanel;
    const dom = $elem[0];
    // 富文本编辑器实例
    const htmlDom = this.htmlRef.$el;
    // 获取工具栏节点
    const toolbarDom = htmlDom.querySelector('.w-e-bar');
    // 工具栏触发模态的行为项元素
    const buttonDom = dom.previousElementSibling;
    const dataMenuKey = buttonDom.getAttribute('data-menu-key');
    // html-toolbar工具栏
    const outToolbarDom = dom.parentNode.parentNode.parentNode;

    const menuKeys = ['bgColor', 'color'];

    if (
      !menuKeys.includes(dataMenuKey) ||
      !htmlDom ||
      !toolbarDom ||
      !buttonDom ||
      outToolbarDom.getAttribute('data-w-e-toolbar') === 'true'
    ) {
      return;
    }

    // 获取模态元素本身宽度
    const modalWidth = dom.clientWidth;
    const modalHeight = dom.clientHeight;
    // 获取工具栏节点
    const toolbarHeight = toolbarDom.clientHeight;
    // 获取元素本身定位
    const btnRect = buttonDom.getBoundingClientRect();
    // 拿到节点距离顶部窗口及距离左边窗口的位置
    const btnBottom = btnRect.bottom;
    const btnRight = btnRect.right;
    const btnTop = btnRect.top;
    const btnLeft = btnRect.left;

    // 定位计算值
    const top = `${btnTop + toolbarHeight}px`;
    const left = `${btnLeft}px`;
    const bottom = `${btnBottom - modalHeight - toolbarHeight}px`;
    const right = `${btnRight - modalWidth}px`;

    const modalStyle = { position: 'fixed', left, top } as IParams;
    // 获取窗口宽高
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    // 判断是否应该定位在左侧
    if (windowWidth - btnLeft < modalWidth) {
      Object.assign(modalStyle, { left: right });
    }
    // 判断是否应该定位在下面
    if (windowHeight - btnTop - toolbarHeight < modalHeight) {
      Object.assign(modalStyle, { top: bottom });
    }

    Object.assign(dom.style, { top: '', bottom: '', left: '', right: '' });
    Object.assign(dom.style, modalStyle);
  }

  /**
   * 监听窗口变化
   * @memberof ModalUtil
   */
  handleResize(): void {
    this.calcModalPosition();
  }

  /**
   * 销毁
   * @memberof ModalUtil
   */
  destroy(): void {
    window.removeEventListener('resize', this.handleResize);
  }
}
