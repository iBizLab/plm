/**
 * 音频元素定义
 */
export declare class AudioElem extends HTMLElement {
    private vueAppKey;
    private vueApp;
    static get observedAttributes(): string[];
    disconnectedCallback(): void;
    attributeChangedCallback(tag: string, oldValue: string, newValue: string): Promise<void>;
}
