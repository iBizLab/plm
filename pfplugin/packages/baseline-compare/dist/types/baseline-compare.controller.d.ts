import { ControlVO, GridController, IGridEvent, IGridState, MDCtrlLoadParams } from '@ibiz-template/runtime';
import { IDEGrid } from '@ibiz/model-core';
interface IBaselineState extends IGridState {
    /**
     * 比较分组数据-下拉列表的数据
     *
     * @type {IData[]}
     * @memberof IBaselineState
     */
    compareGroup: IData[];
    /**
     * 比较数据-表格的数据
     *
     * @type {IData[]}
     * @memberof IBaselineState
     */
    compareList: IData[];
    /**
     * 基线
     *
     * @type {string}
     * @memberof IBaselineState
     */
    baseline: string;
    /**
     * 比较线
     *
     * @type {string}
     * @memberof IBaselineState
     */
    compareline: string;
}
export declare class BaselineCompareController extends GridController<IDEGrid, IBaselineState, IGridEvent> {
    /**
     * 重写初始化state class类
     *
     * @protected
     * @memberof BaselineCompareController
     */
    protected initState(): void;
    protected onCreated(): Promise<void>;
    /**
     * 转化下拉的映射数据
     *
     * @param {IData[]} items
     * @memberof BaselineCompareController
     */
    convertList(items: IData[]): void;
    /**
     * 加载对比下拉数据
     *
     * @memberof BaselineCompareController
     */
    loadCompareSelectData(): Promise<void>;
    /**
     * 部件加载数据行为
     *
     * @author lxm
     * @date 2022-08-19 14:08:50
     */
    load(args?: MDCtrlLoadParams): Promise<IData[]>;
    /**
     * 数据加载完成后对数据进行分组处理
     *
     * @param {MDCtrlLoadParams} args
     * @param {ControlVO[]} items
     * @return {*}  {Promise<ControlVO[]>}
     * @memberof BaselineCompareController
     */
    afterLoad(args: MDCtrlLoadParams, items: ControlVO[]): Promise<ControlVO[]>;
    /**
     * 计算比对分组数据,根据属性 principal_id 分为两组
     *
     * @memberof BaselineCompareController
     */
    computeCompareGroup(args: IData, items: ControlVO[]): void;
    /**
     * 比较不同，有不同返回true,否则返回false
     *
     * @param {IData} item1
     * @param {IData} item2
     * @return {*}
     * @memberof BaselineCompareController
     */
    compareField(item1: IData, item2: IData): boolean;
    /**
     * 判断当前项在左右两边是否存在，因为遍历的是左边，所以肯定不会出现左边没有而右边存在的情况，不会返回 [ADD]
     *
     * @param {string} id
     * @param {IData[]} leftItems
     * @param {IData[]} rightItesm
     * @return {*}
     * @memberof BaselineCompareController
     */
    diffItms(id: string, leftItems: IData[], rightItesm: IData[]): "EDIT" | "DEL" | undefined;
}
export {};
