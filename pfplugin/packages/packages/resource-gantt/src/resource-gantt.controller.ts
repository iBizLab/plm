/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable @typescript-eslint/ban-types */
import { IDETreeDataSetNode } from '@ibiz/model-core';
import { RuntimeError, awaitTimeout } from '@ibiz-template/core';
import {
  ControllerEvent,
  EventBase,
  GanttController,
  IGanttEvent,
  IGanttNodeData,
  IGanttState,
  ITreeNodeData,
  IUIActionResult,
  MDCtrlLoadParams,
  Srfuf,
  TreeGridExNotifyState,
  TreeGridExRowState,
  calcDeCodeNameById,
  isValueChange,
} from '@ibiz-template/runtime';

import dayjs from 'dayjs';
import { ResourceGanttService } from './resource-gantt.service';
import { dynamicMatch, isTimeSame } from './utils/common';

interface IResourceGanttEvent extends IGanttEvent {
  onDefaultExpand: {
    event: { nodes: IGanttNodeData[] } & EventBase;
    emitArgs: { nodes: IGanttNodeData[] };
  };
  onFullscreenChange: {
    event: {} & EventBase;
    emitArgs: {};
  };
  onSliderMove: {
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
export class ResourceGanttController extends GanttController {
  get _evt(): ControllerEvent<IResourceGanttEvent> {
    return this.evt;
  }

  declare service: ResourceGanttService;

  /**
   * 状态对象
   *
   * @type {IGroupTreeStateEx}
   * @memberof ResourceGanttController
   */
  declare state: IResourceGanttState;

  /**
   * 初始加载
   */
  public isInitialLoad: boolean = true;

  /**
   * 初始化对应类型的部件服务
   *
   * @protected
   * @return {*}  {Promise<void>}
   * @memberof GanttController
   */
  protected async initService(): Promise<void> {
    this.service = new ResourceGanttService(this.model);
    await this.service.init(this.context);
  }

  protected initState(): void {
    super.initState();
    this.state.showCapacity = true;
    this.state.onlyTopNodes = false;
    this.state.showWeekdays = [];
    this.state.capacityConfig = JSON.stringify({
      calcType: 'WORKITEMCOUNT',
      fieldName: '',
      weekdays: '${weekday}',
      dayCapacityVal: '${day_capacity.work_item_count}',
    });
    this.state.sliderDraggable = true;
    this.state.sliderShowContent = '"${show_identifier}  ${title}"';
    this.state.groupConfig = { groupField: 'project_id' };
    this.state.contextMap = JSON.stringify({
      project: '${project_id}',
    });
    this.state.sliderLimit = true;
    this.state.expandAll = false;

    this.calcDataRange();
  }

  /**
   * 部件参数解析
   *
   * @protected
   * @memberof ControlController
   */
  protected handleControlParams(): void {
    super.handleControlParams();
    if (this.controlParams.sliderdraggable) {
      this.state.sliderDraggable =
        this.controlParams.sliderdraggable === 'true';
    }
    if (this.controlParams.slidershowcontent) {
      this.state.sliderShowContent = this.controlParams.slidershowcontent;
    }
    if (this.controlParams.groupconfig) {
      try {
        this.state.groupConfig = JSON.parse(this.controlParams.groupconfig);
      } catch (error) {
        this.state.groupConfig = {};
      }
    }
    if (this.controlParams.sliderlimit) {
      this.state.sliderLimit = this.controlParams.sliderlimit === 'true';
    }
    if (this.controlParams.expandall) {
      this.state.expandAll = this.controlParams.expandall === 'true';
    }
    if (this.controlParams.contextmap) {
      this.state.contextMap = this.controlParams.contextmap;
    }
  }

  /**
   * 设置时间范围
   *
   * @memberof ResourceGanttController
   */
  setDateRange(params: IDateRange): void {
    this.state.dateRange = params;
  }

  /**
   * 设置容量数值显示
   *
   * @memberof ResourceGanttController
   */
  showCapacityChange(state: boolean) {
    this.state.showCapacity = state;
  }

  /**
   * 全屏切换
   *
   * @memberof ResourceGanttController
   */
  fullscreenChange() {
    this._evt.emit('onFullscreenChange', {});
  }

  /**
   * 不显示周六及周天
   *
   * @memberof ResourceGanttController
   */
  noWeekendDays(state: boolean) {
    if (state) {
      this.state.showWeekdays = [1, 2, 3, 4, 5];
    } else {
      this.state.showWeekdays = [0, 1, 2, 3, 4, 5, 6];
    }
  }

  /**
   * 容量计算切换
   *
   * @memberof ResourceGanttController
   */
  capacityCalcChange(params: ICapacityCalc) {
    this.state.capacityConfig = JSON.stringify(params);
  }

  /**
   * 仅显示顶部节点
   *
   * @memberof ResourceGanttController
   */
  onlyTopNodesChange(state: boolean) {
    this.state.onlyTopNodes = state;
  }

  /**
   * 计算时间范围
   */
  calcDataRange() {
    const searchForm = this.view.getController('searchform');
    if (searchForm) {
      const { data } = searchForm.state as IData;
      this.state.dateRange = {
        start: data.n_date_scope_gtandeq,
        end: data.n_date_scope_ltandeq,
      };
    } else {
      const time = new Date();
      this.state.dateRange = {
        start: dayjs(time.getTime() - 604800000).format('YYYY-MM-DD'),
        end: dayjs(time).format('YYYY-MM-DD'),
      };
    }
  }

  /**
   * 根据节点id获取节点数据
   *
   * @param {string} key
   * @return {*}  {IData[]}
   * @memberof ResourceGanttController
   */
  getNodeDataByNodeId(key: string): IData[] {
    const items = this.state.items.filter(x => x._nodeId === key);
    return items.map(x => {
      let resut = {};
      if (x._deData) {
        resut = { ...x._deData, srfkey: x._deData.srfkey };
      }
      return resut;
    });
  }

  /**
   * 部件加载
   *
   * @param {MDCtrlLoadParams} [args={}]
   * @return {*}  {Promise<ITreeNodeData[]>}
   * @memberof ResourceGanttController
   */
  async load(args: MDCtrlLoadParams = {}): Promise<ITreeNodeData[]> {
    this.calcDataRange();
    this.isInitialLoad = args.isInitialLoad === true;

    return super.load(args);
  }

  /**
   * 加载子节点数据
   *
   * @param {(ITreeNodeData | undefined)} parentNode
   * @returns {*}
   * @memberof TreeController
   */
  async loadNodes(parentNode: IGanttNodeData): Promise<IGanttNodeData[]> {
    const params = await this.getFetchParams();
    const hasQuery = !!params.query;

    // 修复加载时出现两个loading
    this.state.isLoading = !this.isInitialLoad;

    let nodes;
    try {
      // 请求服务获取子节点数据
      nodes =
        (await this.service.fetchChildNodes(parentNode, {
          context: this.context.clone(),
          params,
          hasQuery,
          groupField: this.state.groupConfig.groupField,
          defaultExpandedKeys: this.state.expandedKeys,
        })) || [];
    } finally {
      this.state.isLoading = false;
    }
    // 有父节点绑定到父节点数据上，无父节点替换rootNodes
    if (parentNode) {
      // eslint-disable-next-line no-param-reassign
      parentNode._children = nodes;
    } else {
      this.state.rootNodes = nodes;
    }

    await this.afterLoadNodes(nodes);

    return nodes;
  }

  /**
   * 开始加载
   *
   * @return {*}  {Promise<void>}
   */
  async startLoading(): Promise<void> {
    this.ctx.startLoading();
  }

  /**
   * 打开编辑数据视图
   *
   * @param {IGanttNodeData} item
   * @memberof GanttController
   */
  async openData({
    data,
    context,
    params,
  }: {
    data: IData[];
    context: IContext;
    params: IParams;
  }): Promise<IUIActionResult> {
    const nodeData = data[0];
    const nodeModel = this.getNodeModel(nodeData._nodeId)!;
    const { appDataEntityId } = nodeModel as IDETreeDataSetNode;
    const deName = calcDeCodeNameById(appDataEntityId!);
    context[deName!.toLowerCase()] = nodeData._deData?.srfkey;

    const result = await this.viewScheduler?.triggerCustom(
      `${nodeModel.id!.toLowerCase()}_opendata`,
      {
        context,
        params,
        data,
        event: undefined,
        view: this.view,
        ctrl: this,
      },
    );

    if (result === -1) {
      throw new Error(
        ibiz.i18n.t('runtime.controller.control.calendar.missingViewLogic', {
          itemType: nodeModel.id!.toLowerCase(),
        }),
      );
    } else {
      return {
        cancel: !result.ok,
      };
    }
  }

  /**
   * 保存
   *
   * @param {IGanttNodeData} nodeData
   * @return {*}  {Promise<void>}
   * @memberof GanttController
   */
  async save(nodeData: IGanttNodeData): Promise<void> {
    if (this.state.isSimple) {
      ibiz.log.debug(ibiz.i18n.t('runtime.controller.common.md.simpleMode'));
      return;
    }

    if (nodeData._nodeType !== 'DE') {
      throw new RuntimeError(
        ibiz.i18n.t('runtime.controller.control.gantt.nonentity'),
      );
    }

    const rowState = this.state.rows[nodeData._uuid];
    if (!rowState) {
      throw new RuntimeError(
        ibiz.i18n.t('runtime.controller.common.md.rowData'),
      );
    }

    if (!rowState.modified) {
      ibiz.log.debug(ibiz.i18n.t('runtime.controller.common.md.noChange'));
      return;
    }

    // 如果数据正在处理中，则延迟保存
    if (rowState.processing) {
      await awaitTimeout(500, this.save.bind(this), [nodeData]);
      return;
    }

    const nodeModel = this.getNodeModel(nodeData._nodeId)!;
    const { appDataEntityId } = nodeModel as IDETreeDataSetNode;
    const isCreate = nodeData._deData!.srfuf === Srfuf.CREATE;
    // 处理接口
    const deName = calcDeCodeNameById(appDataEntityId!);
    const tempContext = this.context.clone();
    tempContext[deName] = nodeData._deData!.srfkey;

    // 合并自定义上下文
    const customContext =
      dynamicMatch(this.state.contextMap, nodeData._deData || {}) || '{}';
    Object.assign(tempContext, JSON.parse(customContext));

    const app = ibiz.hub.getApp(this.context.srfappid);

    let res;

    try {
      res = await app.deService.exec(
        appDataEntityId!,
        isCreate ? 'create' : 'update',
        tempContext,
        nodeData._deData,
      );
    } catch (error) {
      await this.evt.emit('onSaveError', undefined);
      this.actionNotification(`${isCreate ? 'CREATE' : 'UPDATE'}ERROR`, {
        error: error as Error,
        data: rowState.data,
      });
      throw error;
    }
    // 后续处理
    rowState.data._deData = res.data;
    rowState.modified = false;

    this.gridStateNotify(rowState, TreeGridExNotifyState.SAVE);
    await this.evt.emit('onSaveSuccess', undefined);
  }

  /**
   * 设置行属性的值
   *
   * @param {TreeGridExRowState} row
   * @param {string} name
   * @param {unknown} value
   * @return {*}  {Promise<void>}
   * @memberof GanttController
   */
  async setRowValue(
    row: TreeGridExRowState,
    name: string,
    value: unknown,
  ): Promise<void> {
    const { beginDataItemName, endDataItemName } = this.model;
    if (
      Object.prototype.hasOwnProperty.call(row.data, name) &&
      !isValueChange((row.data as IData)[name], value)
    ) {
      // `表格行数据里没有属性${name}或者${name}的值未发生改变`
      return;
    }
    if (
      (name === beginDataItemName || name === endDataItemName) &&
      isTimeSame((row.data as IData)[name], value as string, 'day')
    ) {
      // 时间按照天的精度判断，不能等于当天
      return;
    }

    // 改变值
    (row.data as IData)[name] = value;
    if (name === beginDataItemName) {
      (row.data as IGanttNodeData)._beginDataItemValue = value as string;
    } else if (name === endDataItemName) {
      (row.data as IGanttNodeData)._endDataItemValue = value as string;
    }
    row.modified = true;
    row.processing = true;

    try {
      await this.dataChangeNotify(row, [name]);
    } finally {
      row.processing = false;
    }
  }
}
