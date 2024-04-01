import { HtmlUtil } from '../utils';
/**
 * 人员编辑标记元素创建
 */
export class PersonnelMarkerElem extends HTMLElement {
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
      const data = JSON.parse(newValue);

      const shadow = this.attachShadow({ mode: 'open' });
      const document = shadow.ownerDocument;

      const box = document.createElement('div');
      box.part.add('box');
      box.classList.add('personnel-marker_box');
      let background = '';
      if (data.name) {
        background = HtmlUtil.stringToHexColor(data.name);
        const name = document.createElement('div');
        name.part.add('name');
        name.classList.add('personnel-marker_name');
        name.style.backgroundColor = background;
        name.innerHTML = data.name;
        box.appendChild(name);
      }

      const line = document.createElement('div');
      line.part.add('line');
      line.classList.add('personnel-marker_line');
      line.style.backgroundColor = background;

      box.appendChild(line);
      shadow.appendChild(box);
      const style = document.createElement('style');
      box.appendChild(style);
    }
  }
}
