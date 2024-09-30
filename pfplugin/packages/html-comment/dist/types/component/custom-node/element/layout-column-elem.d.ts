/**
 * 布局元素定义
 */
export declare class LayoutColumnElem extends HTMLElement {
    private vueAppKey;
    private vueApp;
    constructor();
    static get observedAttributes(): string[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(tag: string, oldValue: string, newValue: string): Promise<void>;
}
