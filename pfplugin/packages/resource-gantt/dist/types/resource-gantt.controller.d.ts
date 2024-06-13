import { ControllerEvent, EventBase, GanttController, IGanttEvent, IGanttNodeData, IGanttState, ITreeNodeData, IUIActionResult, MDCtrlLoadParams, TreeGridExRowState } from '@ibiz-template/runtime';
import { ResourceGanttService } from './resource-gantt.service';
interface IResourceGanttEvent extends IGanttEvent {
    onDefaultExpand: {
        event: {
            nodes: IGanttNodeData[];
        } & EventBase;
        emitArgs: {
            nodes: IGanttNodeData[];
        };
    };
    onFullscreenChange: {
        event: {} & EventBase;
        emitArgs: {};
    };
}
interface IDateRange {
    /**
     * 开始时间
     */
    start: string | Date;
    /**
     * 结束时间
     */
    end: string | Date;
}
interface ICapacityCalc {
    /**
     * 计算类型
     */
    calcType: string;
    /**
     * 属性名称
     */
    fieldName: string;
}
interface IResourceGanttState extends IGanttState {
    /**
     * 时间范围
     *
     * @type {IDateRange | null}
     * @memberof IResourceGanttState
     */
    dateRange: IDateRange | null;
    /**
     * 是否显示容量数值
     *
     * @type {boolean}
     * @memberof IResourceGanttState
     */
    showCapacity: boolean;
    /**
     * 存储需要显示的周几的数组
     *
     * @type {number[]}
     * @memberof IResourceGanttState
     */
    showWeekdays: number[];
    /**
     * 容量设置
     *
     * @type {string}
     * @memberof IResourceGanttState
     */
    capacityConfig: string;
    /**
     * 仅显示顶部节点
     *
     * @type {boolean}
     * @memberof IResourceGanttState
     */
    onlyTopNodes: boolean;
    /**
     * 是否开启滑块拖拽
     *
     * @type {boolean}
     * @memberof IResourceGanttState
     */
    sliderDraggable: boolean;
    /**
     * 滑块显示内容映射
     *
     * @type {string}
     * @memberof IResourceGanttState
     */
    sliderShowContent: string;
    /**
     * 分组配置
     *
     * @type {IData}
     * @memberof IResourceGanttState
     */
    groupConfig: IData;
    /**
     * 滑块限制
     *
     * @type {boolean}
     * @memberof IResourceGanttState
     */
    sliderLimit: boolean;
    /**
     * 展开所有
     *
     * @type {boolean}
     * @memberof IResourceGanttState
     */
    expandAll: boolean;
    /**
     * 上下文映射
     *
     * @type {string}
     * @memberof IResourceGanttState
     */
    contextMap: string;
}
/**
 * 甘特图控制器
 *
 * @export
 * @class GanttController
 * @extends {MDControlController<IDEGantt, IGanttState, IGanttEvent>}
 * @implements {IGanttController}
 */
export declare class ResourceGanttController extends GanttController {
    get _evt(): ControllerEvent<IResourceGanttEvent>;
    service: ResourceGanttService;
    /**
     * 状态对象
     *
     * @type {IGroupTreeStateEx}
     * @memberof ResourceGanttController
     */
    state: IResourceGanttState;
    /**
     * 初始加载
     */
    isInitialLoad: boolean;
    /**
     * 初始化对应类型的部件服务
     *
     * @protected
     * @return {*}  {Promise<void>}
     * @memberof GanttController
     */
    protected initService(): Promise<void>;
    protected initState(): void;
    /**
     * 部件参数解析
     *
     * @protected
     * @memberof ControlController
     */
    protected handleControlParams(): void;
    /**
     * 设置时间范围
     *
     * @memberof ResourceGanttController
     */
    setDateRange(params: IDateRange): void;
    /**
     * 设置容量数值显示
     *
     * @memberof ResourceGanttController
     */
    showCapacityChange(state: boolean): void;
    /**
     * 全屏切换
     *
     * @memberof ResourceGanttController
     */
    fullscreenChange(): void;
    /**
     * 不显示周六及周天
     *
     * @memberof ResourceGanttController
     */
    noWeekendDays(state: boolean): void;
    /**
     * 容量计算切换
     *
     * @memberof ResourceGanttController
     */
    capacityCalcChange(params: ICapacityCalc): void;
    /**
     * 仅显示顶部节点
     *
     * @memberof ResourceGanttController
     */
    onlyTopNodesChange(state: boolean): void;
    /**
     * 计算时间范围
     */
    calcDataRange(): void;
    /**
     * 根据节点id获取节点数据
     *
     * @param {string} key
     * @return {*}  {IData[]}
     * @memberof ResourceGanttController
     */
    getNodeDataByNodeId(key: string): IData[];
    /**
     * 部件加载
     *
     * @param {MDCtrlLoadParams} [args={}]
     * @return {*}  {Promise<ITreeNodeData[]>}
     * @memberof ResourceGanttController
     */
    load(args?: MDCtrlLoadParams): Promise<ITreeNodeData[]>;
    /**
     * 加载子节点数据
     *
     * @param {(ITreeNodeData | undefined)} parentNode
     * @returns {*}
     * @memberof TreeController
     */
    loadNodes(parentNode: IGanttNodeData): Promise<IGanttNodeData[]>;
    /**
     * 开始加载
     *
     * @return {*}  {Promise<void>}
     */
    startLoading(): Promise<void>;
    /**
     * 打开编辑数据视图
     *
     * @param {IGanttNodeData} item
     * @memberof GanttController
     */
    openData({ data, context, params, }: {
        data: IData[];
        context: IContext;
        params: IParams;
    }): Promise<IUIActionResult>;
    /**
     * 保存
     *
     * @param {IGanttNodeData} nodeData
     * @return {*}  {Promise<void>}
     * @memberof GanttController
     */
    save(nodeData: IGanttNodeData): Promise<void>;
    /**
     * 设置行属性的值
     *
     * @param {TreeGridExRowState} row
     * @param {string} name
     * @param {unknown} value
     * @return {*}  {Promise<void>}
     * @memberof GanttController
     */
    setRowValue(row: TreeGridExRowState, name: string, value: unknown): Promise<void>;
}
export {};
