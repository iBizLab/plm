import { EditorController } from '@ibiz-template/runtime';
import { IDateRange } from '@ibiz/model-core';
export declare class DropdownSelectDateRangeController extends EditorController<IDateRange> {
    /**
     * 根据编辑器类型获取格式化
     *
     * @return {*}  {string}
     * @memberof DropdownSelectDateRangeController
     */
    getFormatByType(): string;
}
