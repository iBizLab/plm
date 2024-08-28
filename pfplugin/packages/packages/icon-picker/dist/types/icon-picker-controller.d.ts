import { EditorController } from '@ibiz-template/runtime';
import { ITextBox } from '@ibiz/model-core';
export declare class IconPickerControlller extends EditorController<ITextBox> {
    /**
     * 图标列表
     */
    iconList: IData[];
    /**
     * 初始化图标列表
     */
    initIconList(): void;
}
