import {
  CalendarController,
  ICalendarItemData,
  MDCtrlLoadParams,
} from '@ibiz-template/runtime';

export class TransitionTimeLineController extends CalendarController {
  /**
   * 日历加载
   *
   * @author ljx
   * @date 2024-02-19 01:08:24
   * @param {MDCtrlLoadParams} [args={}]
   * @return {*}  {Promise<IData[][]>}
   * @memberof CalendarController
   */
  public tempMinorSortDir: string = 'asc';

  /**
   * 日历加载
   *
   * @author ljx
   * @date 2024-02-19 01:08:24
   * @param {MDCtrlLoadParams} [args={}]
   * @return {*}  {Promise<IData[][]>}
   * @memberof CalendarController
   */
  async load(args: MDCtrlLoadParams = {}): Promise<ICalendarItemData[]> {
    const isInitialLoad = args.isInitialLoad === true;
    // *查询参数处理
    const { context } = this.handlerAbilityParams(args);
    const params = await this.getFetchParams(args?.viewParam);
    // *发起请求
    await this.startLoading();
    let items;
    try {
      items = await this.service.search(context, params);
    } finally {
      await this.endLoading();
    }
    await this.afterLoad(args, items);
    this.state.isLoaded = true;
    this.state.items = items;
    await this.evt.emit('onLoadSuccess', {
      isInitialLoad,
    });
    return items;
  }

  /**
   * 获取请求参数
   *
   * @author zk
   * @date 2023-08-09 11:08:35
   * @param {IParams} [extraParams={}]
   * @return {*}  {Promise<IParams>}
   * @memberof CalendarController
   */
  async getFetchParams(extraParams: IParams = {}): Promise<IParams> {
    const { curPage, size, sortQuery, noSort } = this.state;
    const resultParams: IParams = {
      ...this.params,
    };

    // 排序条件
    if (!noSort && sortQuery) {
      resultParams.sort = sortQuery;
    }
    // 默认赋值排序
    if (!resultParams.sort) {
      resultParams.sort = `update_time,${this.tempMinorSortDir}`;
    }

    // *请求参数处理
    await this._evt.emit('onBeforeLoad', undefined);
    // 合并搜索条件参数，这些参数在onBeforeLoad监听里由外部填入
    Object.assign(resultParams, {
      ...this.state.searchParams,
    });
    // 有size才给page和size。size默认值给0就不传分页和大小
    if (size) {
      resultParams.page = curPage - 1;
      resultParams.size = size;
    }

    // 额外附加参数
    if (extraParams) {
      Object.assign(resultParams, extraParams);
    }

    // 时间轴类型不需要开始结束时间参数
    if (this.model.calendarStyle !== 'TIMELINE') {
      const timeParam = this.getCurSelectDate(resultParams);
      Object.assign(resultParams, timeParam);
    }
    return resultParams;
  }

  /**
   * 设置排序
   * 无参数时设置的是默认排序。
   *
   * @author lxm
   * @date 2022-09-28 13:09:44
   * @param {string} key 排序字段
   * @param {string} order 排序顺序
   */
  setSort(key?: string, order?: 'asc' | 'desc'): void {
    super.setSort(key, order);
    const { minorSortDir } = this.getSortModel();
    if (minorSortDir) {
      this.tempMinorSortDir = minorSortDir?.toLowerCase();
    }
  }
}
