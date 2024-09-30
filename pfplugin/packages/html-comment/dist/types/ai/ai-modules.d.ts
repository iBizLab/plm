import { IButtonMenu, IDomEditor } from '@wangeditor/editor';
export declare class AIMenu implements IButtonMenu {
    title: string;
    iconSvg: string;
    tag: string;
    isActive(editor: IDomEditor): boolean;
    getValue(editor: IDomEditor): string | boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
