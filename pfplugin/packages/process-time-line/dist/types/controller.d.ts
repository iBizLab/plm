import { CalendarController, ICalendarItemData, ICalendarState, MDCtrlLoadParams } from '@ibiz-template/runtime';
interface IProcessTimeLineState extends ICalendarState {
    /**
     * 绘制数据
     */
    renderItems: Array<ICalendarItemData[]>;
    /**
     * 列绘制个数，二维数组内每个数组放几个
     */
    columnNum: number;
}
export declare class ProcessTimeLineController extends CalendarController {
    /**
     * 状态对象
     *
     * @type {IGroupTreeStateEx}
     * @memberof ProcessTimeLineController
     */
    state: IProcessTimeLineState;
    /**
     * 日历加载
     *
     * @author ljx
     * @date 2024-02-19 01:08:24
     * @param {MDCtrlLoadParams} [args={}]
     * @return {*}  {Promise<IData[][]>}
     * @memberof ProcessTimeLineController
     */
    tempMinorSortDir: string;
    protected initState(): void;
    /**
     * 日历加载
     *
     * @author ljx
     * @date 2024-02-19 01:08:24
     * @param {MDCtrlLoadParams} [args={}]
     * @return {*}  {Promise<IData[][]>}
     * @memberof ProcessTimeLineController
     */
    load(args?: MDCtrlLoadParams): Promise<ICalendarItemData[]>;
    /**
     * 部件参数解析
     *
     * @protected
     * @memberof ControlController
     */
    protected handleControlParams(): void;
    /**
     * 获取请求参数
     *
     * @author zk
     * @date 2023-08-09 11:08:35
     * @param {IParams} [extraParams={}]
     * @return {*}  {Promise<IParams>}
     * @memberof CalendarController
     */
    getFetchParams(extraParams?: IParams): Promise<IParams>;
    /**
     * 设置排序
     * 无参数时设置的是默认排序。
     *
     * @author lxm
     * @date 2022-09-28 13:09:44
     * @param {string} key 排序字段
     * @param {string} order 排序顺序
     */
    setSort(key?: string, order?: 'asc' | 'desc'): void;
    /**
     * 处理绘制数据
     */
    handleRenderItems(items: ICalendarItemData[]): void;
}
export {};
