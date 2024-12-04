/**
 * 本地文件元素定义
 */
export declare class FilesElem extends HTMLElement {
    private vueAppKey;
    private vueApp;
    static get observedAttributes(): string[];
    disconnectedCallback(): void;
    attributeChangedCallback(tag: string, oldValue: string, newValue: string): Promise<void>;
}
