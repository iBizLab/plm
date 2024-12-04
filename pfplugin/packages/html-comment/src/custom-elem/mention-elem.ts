/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export class MentionElem extends HTMLElement {
  // 监听的 attr
  static get observedAttributes() {
    return ['data-value'];
  }

  attributeChangedCallback(tag: string, oldValue: string, newValue: string) {
    if (tag === 'data-value') {
      if (newValue && oldValue === newValue) return;
      const data = JSON.parse(newValue);

      const shadow = this.attachShadow({ mode: 'open' });
      const document = shadow.ownerDocument;

      if (data.icon) {
        const svg = document.createElement('span');
        svg.part.add('svg');
        svg.innerHTML = data.icon;
        shadow.appendChild(svg);
      }

      if (data.identifier) {
        const identifier = document.createElement('span');
        identifier.part.add('identifier');
        identifier.innerHTML = data.identifier;
        shadow.appendChild(identifier);
      }

      if (data.name) {
        const name = document.createElement('span');
        name.part.add('name');
        name.innerHTML = data.name;
        shadow.appendChild(name);
      }

      const style = document.createElement('style');
      style.innerHTML = `
      svg {
        height: 1em;
        width: 1em;
      }
    `;
      shadow.appendChild(style);
    }
  }
}
