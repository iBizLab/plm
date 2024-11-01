declare const Inline: any;
/**
 * @description 提及人员
 * @class MentionBlot
 * @extends {Inline}
 */
export declare class MentionBlot extends Inline {
    static blotName: string;
    static className: string;
    static tagName: string;
    static create(dataString: string): any;
    static formats(domNode: HTMLElement): string | true;
}
export {};
