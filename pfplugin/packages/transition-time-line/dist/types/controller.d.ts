import { CalendarController, ICalendarItemData, MDCtrlLoadParams } from '@ibiz-template/runtime';
export declare class TransitionTimeLineController extends CalendarController {
    /**
     * 日历加载
     *
     * @author ljx
     * @date 2024-02-19 01:08:24
     * @param {MDCtrlLoadParams} [args={}]
     * @return {*}  {Promise<IData[][]>}
     * @memberof CalendarController
     */
    tempMinorSortDir: string;
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
}
