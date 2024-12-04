import { CodeListItem, GridFieldEditColumnController, GridRowState } from '@ibiz-template/runtime';
import { IAppCodeList } from '@ibiz/model-core';
/**
 * 表格编辑列控制器
 * @return {*}
 * @author: zhujiamin
 * @Date: 2022-08-25 10:57:58
 */
export declare class GridEditColumnController extends GridFieldEditColumnController {
    /**
     * 用户代码表
     *
     * @type {(IAppCodeList | undefined)}
     * @memberof GridEditColumnController
     */
    userCodeList: IAppCodeList | undefined;
    /**
     * 是否拥有下拉
     *
     * @type {boolean}
     * @memberof GridEditColumnController
     */
    hasDropdown: boolean;
    /**
     * 当前选项id
     *
     * @type {string}
     * @memberof GridEditColumnController
     */
    curPickerId: string;
    /**
     * 加载用户代码表
     *
     * @param {IData} data
     * @return {*}  {Promise<readonly}
     * @memberof GridEditColumnController
     */
    loadUserCodeList(data: IData): Promise<readonly CodeListItem[]>;
    /**
     * 设置选中数据
     *
     * @param {IData} data
     * @return {*}  {Promise<readonly}
     * @memberof GridEditColumnController
     */
    setPickerValue(row: GridRowState): void;
}
