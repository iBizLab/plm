export declare class MarkerElem extends HTMLElement {
    static get observedAttributes(): string[];
    protected shadow: ShadowRoot;
    protected document: Document;
    attributeChangedCallback(tag: string, oldValue: string, newValue: string): void;
}
