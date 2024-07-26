/**
 * 表情元素定义
 */
export class EmojiElem extends HTMLElement {
  // 监听的 attr
  static get observedAttributes(): string[] {
    return ['data-value'];
  }

  attributeChangedCallback(
    tag: string,
    oldValue: string,
    newValue: string,
  ): void {
    if (tag === 'data-value') {
      if (newValue && oldValue === newValue) return;
      const shadow = this.attachShadow({ mode: 'open' });
      const document = shadow.ownerDocument;
      const box = document.createElement('span');
      box.innerHTML = newValue;
      box.part.add('box');
      box.classList.add('emoji-elem_box');
      shadow.appendChild(box);
    }
  }
}
