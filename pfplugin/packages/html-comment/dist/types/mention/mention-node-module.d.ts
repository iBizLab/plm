import { IDomEditor, IButtonMenu, IModuleConf } from '@wangeditor/editor';
type EmptyText = {
    text: '';
};
export type MentionElement = {
    type: 'mention';
    script: string;
    data: IData;
    children: EmptyText[];
};
export declare class MenTionMenu implements IButtonMenu {
    readonly title = "\u63D0\u53CA\u6210\u5458";
    readonly tag = "button";
    readonly iconSvg = "<svg t=\"1705979200437\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"4218\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"200\" height=\"200\"><path d=\"M23.7 555c0-339.3 247-550 533.8-550 295.6 0 442.8 165.9 442.8 401.6 0 210.8-93.5 361.7-237 361.7-63.6 0-108.5-26.2-137.2-78.6-48.6 51.1-96 79.8-174.6 79.8-116 0-178.4-77.3-178.4-193.3 0-209.5 131-323 251.9-323 64.9 0 102.3 24.9 122.2 68.6l11.2-58.6 114.7 1.2L727 510.1c-7.5 36.2-11.2 63.6-11.2 81.1 0 44.9 22.5 71.1 56.1 71.1 63.6 0 106-89.8 106-243.2 0-205.8-114.7-300.6-323-300.6-220.8 0-405.4 163.4-405.4 436.5 0 238.2 132.2 350.5 390.4 350.5 94.8 0 174.6-12.5 255.7-36.2v109.8c-88.6 26.2-177.1 39.9-263.2 39.9-329.1 0-508.7-168.4-508.7-464z m585-44.9c3.7-20 6.2-39.9 6.2-53.6 0-56.1-15-96-83.6-96-83.6 0-133.5 108.5-133.5 212 0 44.9 13.7 88.6 77.3 88.6 73.7-0.1 114.9-57.4 133.6-151z\" fill=\"#333333\" p-id=\"4219\"></path></svg>";
    constructor();
    isActive(editor: IDomEditor): boolean;
    getValue(editor: IDomEditor): string | boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
declare const module: Partial<IModuleConf>;
export default module;
