import {
  CalendarController,
  ICalendarItemData,
  ICalendarState,
  MDCtrlLoadParams,
} from '@ibiz-template/runtime';

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

export class TransitionTimeLineController extends CalendarController {
  /**
   * 状态对象
   *
   * @type {ITransitionTimeLine}
   * @memberof TransitionTimeLineController
   */
  declare state: ITransitionTimeLine;

  /**
   * 初始化状态
   *
   * @protected
   * @memberof NetDiskController
   */
  protected initState(): void {
    super.initState();
    this.state.sortField = 'update_time';
    this.state.sortOrder = 'asc';
    this.state.isShowCurrent = true;
  }

  /**
   * 部件参数解析
   *
   * @protected
   * @memberof ControlController
   */
  protected handleControlParams(): void {
    super.handleControlParams();
    if (this.controlParams.isshowcurrent) {
      this.state.isShowCurrent = this.controlParams.isshowcurrent === 'true';
    }
    if (this.controlParams.sortfield) {
      this.state.sortField = this.controlParams.sortfield;
    }
    if (this.controlParams.sortorder) {
      this.state.sortOrder = this.controlParams.sortorder;
    }
  }

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
      resultParams.sort = `${this.state.sortField},${this.state.sortOrder}`;
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
}
