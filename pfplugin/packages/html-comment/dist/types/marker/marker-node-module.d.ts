import { IDomEditor, IButtonMenu, IModuleConf } from '@wangeditor/editor';
type EmptyText = {
    text: '';
};
export type MarkerElement = {
    type: 'marker';
    script: string;
    data: IData;
    children: EmptyText[];
};
export declare class MenTionMenu implements IButtonMenu {
    readonly title = "\u63D0\u53CA\u5DE5\u4F5C\u9879";
    readonly tag = "button";
    readonly iconSvg = "<svg t=\"1706259772097\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"6854\" width=\"200\" height=\"200\"><path d=\"M929.28 625.664l-234.496 0.512 24.064-229.888 210.432-0.512c20.992 0 38.4-17.408 38.4-38.4s-17.408-38.4-38.4-38.4H727.04l29.184-275.456c2.048-20.992-13.312-39.936-34.304-41.984-20.992-2.048-39.936 13.312-41.984 34.304L650.24 318.976l-232.448 0.512 29.184-275.456c2.048-20.992-13.312-39.936-34.304-41.984-20.992-2.048-39.936 13.312-41.984 34.304l-29.696 283.648-246.272 0.512c-20.992 0-38.4 17.408-38.4 38.4s17.408 38.4 38.4 38.4l238.08-0.512-24.064 229.888-214.016 0.512c-20.992 0-38.4 17.408-38.4 38.4s17.408 38.4 38.4 38.4l205.824-0.512-29.184 276.992c-2.048 20.992 13.312 39.936 34.304 41.984h4.096c19.456 0 35.84-14.848 37.888-34.304l30.208-285.184 232.448-0.512-29.184 277.504c-2.048 20.992 13.312 39.936 34.304 41.984h4.096c19.456 0 35.84-14.848 38.4-34.304l30.208-285.184 242.688-0.512c20.992 0 38.4-17.408 38.4-38.4-1.536-20.992-18.944-37.888-39.936-37.888z m-544.256 0.512l24.064-229.888 232.448-0.512-24.064 229.888-232.448 0.512z\" fill=\"#979797\" p-id=\"6855\"></path></svg>";
    constructor();
    isActive(editor: IDomEditor): boolean;
    getValue(editor: IDomEditor): string | boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
declare const module: Partial<IModuleConf>;
export default module;
