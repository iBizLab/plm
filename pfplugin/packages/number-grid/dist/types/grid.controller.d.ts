import { IDEGrid } from '@ibiz/model-core';
import { CodeListItem, ControlVO, GridController, IGridEvent, IGridState, MDCtrlLoadParams } from '@ibiz-template/runtime';
export declare class NumberGridController extends GridController<IDEGrid, IGridState, IGridEvent> {
    /**
     * 分组代码表数据项
     *
     * @type {readonly}
     * @memberof NumberGridController
     */
    codeListItems?: readonly CodeListItem[];
    /**
     * 是否默认展开所有
     *
     * @type {boolean}
     * @memberof NumberGridController
     */
    defaultExpandAll: boolean;
    /**
     * 初始化方法
     *
     * @memberof NumberGridController
     */
    onCreated(): Promise<void>;
    /**
     * 设置排序
     */
    setSort(fieldId?: string, order?: 'asc' | 'desc'): void;
    /**
     * 设置排序缓存
     */
    setSortCache(): void;
    /**
     * 获取请求过滤参数（整合了视图参数，各种过滤条件，排序，分页）
     */
    getFetchParams(extraParams?: IParams): Promise<IParams>;
    /**
     * 初始化表格分组
     *
     * @protected
     * @return {*}  {Promise<void>}
     * @memberof NumberGridController
     */
    protected initGroup(): Promise<void>;
    /**
     * 计算分组数据
     *
     * @protected
     * @param {IData[]} items
     * @memberof NumberGridController
     */
    protected calcGroupData(items: IData[]): void;
    afterLoad(args: MDCtrlLoadParams, items: ControlVO[]): Promise<ControlVO[]>;
    /**
     * 表格行单击
     *
     * @param {IData} data
     * @return {*}  {Promise<void>}
     * @memberof NumberGridController
     */
    onRowClick(data: IData): Promise<void>;
}
