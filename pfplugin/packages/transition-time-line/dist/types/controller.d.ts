import { CalendarController, ICalendarItemData, ICalendarState, MDCtrlLoadParams } from '@ibiz-template/runtime';
interface ITransitionTimeLine extends ICalendarState {
    /**
     * 排序字段
     *
     * @type {string}
     * @memberof ITransitionTimeLine
     */
    sortField: string;
    /**
     * 排序顺序
     *
     * @type {string}
     * @memberof ITransitionTimeLine
     */
    sortOrder: string;
    /**
     * 是否显示当前
     *
     * @type {boolean}
     * @memberof ITransitionTimeLine
     */
    isShowCurrent: boolean;
}
export declare class TransitionTimeLineController extends CalendarController {
    /**
     * 状态对象
     *
     * @type {ITransitionTimeLine}
     * @memberof TransitionTimeLineController
     */
    state: ITransitionTimeLine;
    /**
     * 初始化状态
     *
     * @protected
     * @memberof NetDiskController
     */
    protected initState(): void;
    /**
     * 部件参数解析
     *
     * @protected
     * @memberof ControlController
     */
    protected handleControlParams(): void;
    /**
     * 日历加载
     *
     * @author ljx
     * @date 2024-02-19 01:08:24
     * @param {MDCtrlLoadParams} [args={}]
     * @return {*}  {Promise<IData[][]>}
     * @memberof CalendarController
     */
    load(args?: MDCtrlLoadParams): Promise<ICalendarItemData[]>;
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
}
export {};
