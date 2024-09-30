import { CodeListEditorController, CodeListItem } from '@ibiz-template/runtime';
import { IDropDownList } from '@ibiz/model-core';
export declare class AutoRulesController extends CodeListEditorController<IDropDownList> {
    /**
     * [属性确定,文本项,允许空] 自定义仿真数据
     *
     * @static
     * @memberof AutoRulesController
     */
    allowEmptyText: {
        text: string;
        value: string;
    }[];
    protected onInit(): Promise<void>;
    loadCustomCodeList(tag: string, data: IData): Promise<readonly CodeListItem[]>;
}
