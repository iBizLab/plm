import { IDomEditor, IButtonMenu } from '@wangeditor/editor';
export declare class PaintFormatMenu implements IButtonMenu {
    readonly title = "\u683C\u5F0F\u5237";
    readonly tag = "button";
    fragment: IData[];
    format: IData;
    editor: IDomEditor | null;
    excting: boolean;
    readonly iconSvg = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\" fit=\"\" height=\"1em\" width=\"1em\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\"><g id=\"aqseditor/paintformat\" stroke-width=\"1\" fill-rule=\"evenodd\"><path d=\"M3 5.24h10V2H3v3.24zM13.299 1H2.701A.701.701 0 0 0 2 1.701v3.838c0 .387.314.701.701.701h6.236L7.621 7.438h-.002v2.233h-.768v5.184L9.404 13.1V9.671h-.585V7.97l1.9-1.73h2.58A.701.701 0 0 0 14 5.539V1.701A.701.701 0 0 0 13.299 1z\" id=\"aqsFill-1\"></path></g></svg>";
    constructor();
    isActive(editor: IDomEditor): boolean;
    getValue(editor: IDomEditor): string | boolean;
    isDisabled(editor: IDomEditor): boolean;
    calcFormat(fragment: IData[]): void;
    clearFormat(): void;
    setPaintFormat: () => void;
    onPaintFormat: (...args: unknown[]) => void;
    throttle(fn: (...args: any[]) => void | Promise<void>, wait: number): (...args: any[]) => void;
    handle(editor: IDomEditor): void;
    throttleHandle: (...args: any[]) => void;
    exec(editor: IDomEditor): void;
}
export declare const paintFormatMenu: {
    key: string;
    factory(): PaintFormatMenu;
};
