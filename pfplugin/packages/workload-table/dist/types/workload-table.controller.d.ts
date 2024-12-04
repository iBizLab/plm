import { CodeListItem, ControlVO, GridController, IGridEvent, IGridState, MDCtrlLoadParams } from '@ibiz-template/runtime';
import { IDEGrid } from '@ibiz/model-core';
import { IDate } from './util';
export interface IWorkloadGridState extends IGridState {
    /**
     * 甘特列
     */
    ganttColumns: IDate[];
}
/**
 * 工时表格控制器
 *
 * @export
 * @class WorkloadTableController
 * @extends {GridController}
 */
export declare class WorkloadTableController extends GridController<IDEGrid, IWorkloadGridState, IGridEvent> {
    /**
     * 分组代码表数据项
     *
     * @type {readonly}
     * @memberof WorkloadTableController
     */
    codeListItems?: readonly CodeListItem[];
    /**
     * 精度
     *
     * @memberof WorkloadTableController
     */
    precision: number;
    /**
     * 排序代码表数据项
     */
    sortCodeListItems?: readonly CodeListItem[];
    /**
     * 排序顺序
     */
    order?: 'asc' | 'desc';
    /**
     * 排序属性
     */
    sort?: string;
    protected onCreated(): Promise<void>;
    protected initState(): void;
    /**
     * 初始化排序
     */
    protected initSort(): Promise<void>;
    /**
     * 初始化甘特列
     * - 默认最近一周
     */
    protected initGanttColumns(): void;
    /**
     * 初始化分组
     *
     * @protected
     * @return {*}  {Promise<void>}
     * @memberof WorkloadTableController
     */
    protected initGroup(): Promise<void>;
    /**
     * 计算甘特列
     */
    protected calcGanttColumns(): void;
    /**
     * 部件加载数据行为
     * @param args
     * @returns
     */
    load(args?: MDCtrlLoadParams): Promise<IData[]>;
    /**
     * 加载之后
     *
     * @param {MDCtrlLoadParams} args
     * @param {ControlVO[]} items
     * @return {*}  {Promise<ControlVO[]>}
     * @memberof WorkloadTableController
     */
    afterLoad(args: MDCtrlLoadParams, items: ControlVO[]): Promise<ControlVO[]>;
    /**
     * 默认排序
     * @param rows
     */
    protected defaultSort(rows: IData[]): void;
    /**
     * 通过分组计算数据聚合
     *
     * @protected
     * @param {IData[]} data
     * @return {*}  {IData[]}
     * @memberof WorkloadTableController
     */
    protected calcMergeByGroup(data: ControlVO[]): ControlVO[];
    /**
     * 数据导出
     * @param _args
     */
    exportData(_args: {
        event: MouseEvent;
        params: IData;
    }): Promise<void>;
}
