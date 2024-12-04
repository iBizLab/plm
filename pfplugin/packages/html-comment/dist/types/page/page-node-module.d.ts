import { IDomEditor, IButtonMenu, IModuleConf } from '@wangeditor/editor';
type EmptyText = {
    text: '';
};
export type PageElement = {
    type: 'page';
    script: string;
    data: IData;
    children: EmptyText[];
};
export declare class PageMenu implements IButtonMenu {
    readonly title = "\u9875\u9762";
    readonly tag = "button";
    readonly iconSvg = "<svg t=\"1707293566679\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"6103\" width=\"200\" height=\"200\"><path d=\"M288 512l256 0C561.92 512 576 497.92 576 480 576 462.08 561.92 448 544 448l-256 0C270.08 448 256 462.08 256 480 256 497.92 270.08 512 288 512zM768 64 192 64C121.6 64 64 121.6 64 192l0 576c0 70.4 57.6 128 128 128l576 0c70.4 0 128-57.6 128-128L896 192C896 121.6 838.4 64 768 64zM832 768c0 35.2-28.8 64-64 64L192 832c-35.2 0-64-28.8-64-64L128 192c0-35.2 28.8-64 64-64l576 0c35.2 0 64 28.8 64 64L832 768zM672 256l-384 0C270.08 256 256 270.08 256 288 256 305.92 270.08 320 288 320l384 0C689.92 320 704 305.92 704 288 704 270.08 689.92 256 672 256zM608 640l-320 0C270.08 640 256 654.08 256 672l0 0C256 689.92 270.08 704 288 704l320 0c17.92 0 32-14.08 32-32l0 0C640 654.08 625.92 640 608 640z\" p-id=\"6104\"></path></svg>";
    constructor();
    isActive(editor: IDomEditor): boolean;
    getValue(editor: IDomEditor): string | boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
declare const module: Partial<IModuleConf>;
export default module;
