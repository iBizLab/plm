import { IAppCodeList, IListBox } from '@ibiz/model-core';
import { CodeListEditorController, CodeListItem } from '@ibiz-template/runtime';
/**
 * 树型列表框
 *
 * @export
 * @class CheckboxListExtendController
 * @extends {EditorController}
 */
export declare class CheckboxListExtendController extends CodeListEditorController<IListBox> {
    /**
     * 分组模式
     *
     * @type {('YEAR' | 'QUARTER' | 'MONTH' | 'WEEK' | 'DAY' | 'CODELIST' | 'FIELD' | 'NOGROUP')}
     * @memberof CheckboxListExtendController
     */
    groupModel: 'YEAR' | 'QUARTER' | 'MONTH' | 'WEEK' | 'DAY' | 'CODELIST' | 'FIELD' | 'NOGROUP';
    /**
     * 分组属性
     *
     * @type {string}
     * @memberof CheckboxListExtendController
     */
    groupField: string;
    /**
     * 分组代码表
     *
     * @type {IData[]}
     * @memberof CheckboxListExtendController
     */
    groupCodeList: IData[];
    /**
     * 空值文本
     *
     * @type {string}
     * @memberof CheckboxListExtendController
     */
    emptyValue: string;
    /**
     * 加载之后
     *
     * @type {string}
     * @memberof CheckboxListExtendController
     */
    loadAfter: string;
    /**
     * 设置默认选中
     *
     * @type {string}
     * @memberof CheckboxListExtendController
     */
    setDefaultSelect: string;
    /**
     * 排序
     *
     * @type {string}
     * @memberof CheckboxListExtendController
     */
    dateSort: string;
    /**
     * 绘制模式
     *
     * @type {('TREE' | 'BUTTON')}
     * @memberof CheckboxListExtendController
     */
    renderMode: 'TREE' | 'BUTTON';
    /**
     * 模式
     *
     * @type {('horizontal' | 'vertical')}
     * @memberof CheckboxListExtendController
     */
    mode: 'horizontal' | 'vertical';
    /**
     * 单项选择
     *
     * @type {boolean}
     * @memberof CheckboxListExtendController
     */
    singleSelect: boolean;
    /**
     * 代码表模型
     *
     * @type {(IAppCodeList | undefined)}
     * @memberof CheckboxListExtendController
     */
    codeList: IAppCodeList | undefined;
    protected onInit(): Promise<void>;
    /**
     * 初始化编辑器参数
     *
     * @protected
     * @memberof CheckboxListExtendController
     */
    protected initEditorParams(): void;
    /**
     * 处理代码表数据
     *
     * @param {readonly} items
     * @param {*} CodeListItem
     * @param {*} []
     * @return {*}
     * @memberof CheckboxListExtendController
     */
    handleCodeListData(items: readonly CodeListItem[], data: IData): IData[];
    /**
     * 处理排序
     *
     * @param {IData[]} result
     * @return {*}
     * @memberof CheckboxListExtendController
     */
    handleSort(result: IData[]): IData[];
    /**
     * 计算年分组数据
     *
     * @param {IData[]} items
     * @return {*}
     * @memberof CheckboxListExtendController
     */
    calcYearData(items: IData[]): IData[];
    /**
     * 计算季度分组数据
     *
     * @param {IData[]} items
     * @return {*}
     * @memberof CheckboxListExtendController
     */
    calcQuarterData(items: IData[]): IData[];
    /**
     * 计算年周分组数据
     *
     * @param {IData[]} items
     * @return {*}
     * @memberof CheckboxListExtendController
     */
    calcWeekData(items: IData[]): IData[];
    /**
     * 计算月分组数据
     *
     * @param {IData[]} items
     * @return {*}
     * @memberof CheckboxListExtendController
     */
    calcMonthData(items: IData[]): IData[];
    /**
     * 计算天分组数据
     *
     * @param {IData[]} items
     * @memberof CheckboxListExtendController
     */
    calcDayData(items: IData[]): IData[];
    /**
     * 计算代码表分组数据
     *
     * @param {IData[]} items
     * @return {*}
     * @memberof CheckboxListExtendController
     */
    calcGroupCodelistData(items: IData[]): IData[];
    /**
     * 计算属性分组数据
     *
     * @param {IData[]} items
     * @return {*}
     * @memberof CheckboxListExtendController
     */
    calcFieldData(items: IData[]): IData[];
    /**
     * 获取季度细节
     *
     * @param {number} quarter
     * @param {string} year
     * @return {*}
     * @memberof CheckboxListExtendController
     */
    getQuarterDetail(quarter: number, year: string): string | undefined;
    /**
     * 设置默认选中
     *
     * @param {IData} items
     * @param {IData} data
     * @memberof CheckboxListExtendController
     */
    getDefaultSelect: (items: IData, data: IData) => string[];
}
