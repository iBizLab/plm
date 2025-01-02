/* eslint-disable no-useless-constructor */
/* eslint-disable lines-between-class-members */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export class MentionElem extends HTMLElement {
  // 监听的 attr
  static get observedAttributes() {
    return ['data-name'];
  }

  protected shadow = this.attachShadow({ mode: 'open' });
  protected document = this.shadow.ownerDocument;

  attributeChangedCallback(tag: string, oldValue: string, newValue: string) {
    if (!newValue || oldValue === newValue) return;
    if (tag === 'data-name') {
      const name = document.createElement('span');
      name.part.add('name');
      name.innerHTML = `@${newValue}`;
      this.shadow.appendChild(name);
    }
  }
}
