/**
 * 布局元素定义
 */
export declare class LayoutElem extends HTMLElement {
    /**
     * 是否只读
     */
    private readonly;
    /**
     * 弹框
     */
    private overlay;
    constructor();
    static get observedAttributes(): string[];
    handleMousedown(e: MouseEvent): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(tag: string, oldValue: string, newValue: string): Promise<void>;
}
