/**
 * 表情元素定义
 */
export declare class EmojiElem extends HTMLElement {
    static get observedAttributes(): string[];
    attributeChangedCallback(tag: string, oldValue: string, newValue: string): void;
}
