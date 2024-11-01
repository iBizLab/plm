/* eslint-disable no-useless-constructor */
/* eslint-disable lines-between-class-members */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export class MarkerElem extends HTMLElement {
  // 监听的 attr
  static get observedAttributes() {
    return ['data-icon', 'data-identifier', 'data-name'];
  }

  protected shadow = this.attachShadow({ mode: 'open' });
  protected document = this.shadow.ownerDocument;

  attributeChangedCallback(tag: string, oldValue: string, newValue: string) {
    if (!newValue || oldValue === newValue) return;
    if (tag === 'data-identifier') {
      const identifier = document.createElement('span');
      identifier.part.add('identifier');
      identifier.innerHTML = newValue;
      this.shadow.appendChild(identifier);
    }

    if (tag === 'data-name') {
      const name = document.createElement('span');
      name.part.add('name');
      name.innerHTML = newValue;
      this.shadow.appendChild(name);
    }
    if (tag === 'data-icon') {
      const svg = document.createElement('span');
      svg.part.add('svg');
      svg.innerHTML = newValue;
      if (this.shadow.firstChild) {
        this.shadow.insertBefore(svg, this.shadow.firstChild);
      } else {
        this.shadow.appendChild(svg);
      }
      const style = document.createElement('style');
      style.innerHTML = `
      svg {
        height: 1em;
        width: 1em;
      }
    `;
      this.shadow.appendChild(style);
    }
  }
}
