import { plus, RuntimeError, RuntimeModelError } from '@ibiz-template/core';
import {
  CodeListItem,
  ControlVO,
  exportData,
  GridController,
  GridNotifyState,
  GridRowState,
  handleAllSettled,
  IExportColumn,
  IGridEvent,
  IGridState,
  MDCtrlLoadParams,
} from '@ibiz-template/runtime';
import { IDEGrid } from '@ibiz/model-core';
import dayjs from 'dayjs';
import { clone, isNil } from 'ramda';
import { IDate, Util } from './util';

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
export class WorkloadTableController extends GridController<
  IDEGrid,
  IWorkloadGridState,
  IGridEvent
> {
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
  precision: number = 1;

  protected async onCreated(): Promise<void> {
    await super.onCreated();
    const { ctrlParams = {} } = this.model.controlParam as IData;
    try {
      if (ctrlParams.PRECISION) {
        this.precision = Number(ctrlParams.PRECISION);
      }
    } catch (error) {
      ibiz.log.error(error);
    }
  }

  protected initState(): void {
    super.initState();
    this.initGanttColumns();
  }

  /**
   * 初始化甘特列
   * - 默认最近一周
   */
  protected initGanttColumns() {
    const time = new Date();
    const start = dayjs(time.getTime() - 604800000).format('YYYY-MM-DD');
    const end = dayjs(time).format('YYYY-MM-DD');
    this.state.ganttColumns = Util.calcDate(start, end);
  }

  /**
   * 初始化分组
   *
   * @protected
   * @return {*}  {Promise<void>}
   * @memberof WorkloadTableController
   */
  protected async initGroup(): Promise<void> {
    const { groupCodeListId, groupMode, enableGroup } = this.model;
    if (enableGroup) {
      if (groupMode === 'CODELIST') {
        if (!groupCodeListId) {
          throw new RuntimeModelError(
            this.model,
            '代码表分组模式需要配置代码表',
          );
        }
        const app = ibiz.hub.getApp(this.context.srfappid);
        this.codeListItems = await app.codeList.get(
          groupCodeListId,
          this.context,
          this.params,
        );
      }
    }
  }

  /**
   * 计算甘特列
   */
  protected calcGanttColumns() {
    const searchForm = this.view.getController('searchform');
    const paramName = this.model.controlParam?.ctrlParams?.DATERANGE;
    this.state.ganttColumns = [];
    if (searchForm && paramName) {
      const dateRange = (searchForm.state as IData).data?.[paramName];
      if (dateRange) {
        const _date = dateRange.split(',');
        if (_date.length === 2) {
          this.state.ganttColumns = Util.calcDate(_date[0], _date[1]);
        }
      }
    }

    if (this.state.ganttColumns.length === 0) {
      this.initGanttColumns();
    }
  }

  /**
   * 部件加载数据行为
   * @param args
   * @returns
   */
  async load(args: MDCtrlLoadParams = {}): Promise<IData[]> {
    this.calcGanttColumns();
    if (this.state.isSimple) {
      return [];
    }
    const silent = args.silent === true;
    if (!silent) {
      await this.startLoading();
    }
    try {
      // *初始加载需要重置分页
      const isInitialLoad = args.isInitialLoad === true;
      const isLoadMore = args.isLoadMore === true;
      if (isInitialLoad) {
        this.state.curPage = 1;
      } else if (isLoadMore) {
        this.state.curPage += 1;
      }

      // *查询参数处理
      const { context } = this.handlerAbilityParams(args);
      const params = await this.getFetchParams(args?.viewParam);

      const res = await this.service.fetch(context, params);
      // 更新分页数据总条数
      if (typeof res.total === 'number') {
        this.state.total = res.total;
      }

      if (isLoadMore) {
        this.state.items.push(...res.data);
      } else {
        this.state.items = res.data;
      }

      await this.afterLoad(args, res.data);

      this.state.isLoaded = true;
      await this._evt.emit('onLoadSuccess', {
        isInitialLoad,
      });
    } catch (error) {
      await this._evt.emit('onLoadError', undefined);
      this.actionNotification('FETCHERROR', {
        error: error as Error,
      });
      throw error;
    } finally {
      if (!silent) {
        await this.endLoading();
      }
    }

    this.state.items.forEach((item, index) => {
      item.srfserialnum = index + 1;
    });

    this.actionNotification('FETCHSUCCESS');
    return this.state.items;
  }

  /**
   * 加载之后
   *
   * @param {MDCtrlLoadParams} args
   * @param {ControlVO[]} items
   * @return {*}  {Promise<ControlVO[]>}
   * @memberof WorkloadTableController
   */
  async afterLoad(
    args: MDCtrlLoadParams,
    items: ControlVO[],
  ): Promise<ControlVO[]> {
    // 每次表格刷新时通知表格属性列,加载代码表,避免动态代码表更新不及时
    await handleAllSettled(
      Object.values(this.fieldColumns).map(async fieldColumn => {
        await fieldColumn.loadCodeList();
      }),
      false,
    );
    const rows = this.calcMergeByGroup(items);
    // 生成表格row对象
    this.state.rows = rows.map(item => {
      const row = new GridRowState(item, this);
      this.gridStateNotify(row, GridNotifyState.LOAD);
      return row;
    });

    // 响应式写法，用state里遍历出来的row才是reactive
    this.state.rows.forEach(row => {
      Object.values(row.uaColStates).forEach(uaState => {
        uaState.update(
          this.context,
          row.data.getOrigin(),
          this.model.appDataEntityId,
        );
      });
    });

    this.state.rows.forEach(row => {
      Object.values(row.uiActionGroupStates).forEach(uaState => {
        uaState.update(
          this.context,
          row.data.getOrigin(),
          this.model.appDataEntityId,
        );
      });
    });
    this.calcAggResult(items);
    return items;
  }

  /**
   * 通过分组计算数据聚合
   *
   * @protected
   * @param {IData[]} data
   * @return {*}  {IData[]}
   * @memberof WorkloadTableController
   */
  protected calcMergeByGroup(data: ControlVO[]): ControlVO[] {
    let items: ControlVO[] = [];
    data.forEach(item => {
      Object.assign(item, {
        [dayjs(item.register_date).format('YYYY-MM-DD')]: item.duration.toFixed(
          this.precision,
        ),
      });
    });
    const { enableGroup, groupMode, groupAppDEFieldId } = this.model;
    if (enableGroup && groupAppDEFieldId) {
      const groupMap = new Map<string | number, IData[]>();
      const codeListGroup = groupMode === 'CODELIST';
      const groupFiledName = groupAppDEFieldId.toLowerCase();
      if (codeListGroup) {
        this.codeListItems!.forEach(item => {
          groupMap.set(item.value, []);
        });
      }
      data.forEach(item => {
        const groupFieldValue = item[groupFiledName];
        // 非代码表分组时，不存在时根据数据创建分组
        if (!codeListGroup && !groupMap.has(groupFieldValue)) {
          groupMap.set(groupFieldValue, []);
        }
        if (groupMap.has(groupFieldValue)) {
          groupMap.get(groupFieldValue)!.push(item);
        }
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      groupMap.forEach((value, key) => {
        if (value.length > 0) {
          const item = value[0].clone();
          const _items = value.filter(s => !isNil(s.duration));
          value.forEach(v => {
            const name = dayjs(v.register_date).format('YYYY-MM-DD');
            if (item.srfkey !== v.srfkey && name) {
              Object.assign(item, {
                [name]: Object.prototype.hasOwnProperty.call(item, name)
                  ? (Number(item[name] || 0) + v.duration).toFixed(
                      this.precision,
                    )
                  : v.duration.toFixed(this.precision),
              });
            }
          });
          item.duration = _items
            .map(v => v.duration)
            .reduce((a, b) => plus(a, b), 0)
            .toFixed(this.precision);
          items.push(item);
        }
      });
    } else {
      items = data;
    }
    return items;
  }

  /**
   * 数据导出
   * @param _args
   */
  async exportData(_args: { event: MouseEvent; params: IData }): Promise<void> {
    // 初始化导出对象
    if (this.model.dedataExportId && !this.dataExport) {
      this.dataExport = this.dataEntity.appDEDataExports?.find(dataExport => {
        return dataExport.id === this.model.dedataExportId;
      });
      if (this.dataExport) {
        this.allExportColumns = await this.findAllExportColumns(
          this.dataExport,
        );
      }
    }
    // 数据格式化
    const formatExcelData = (data: IData[]): IData[] => {
      const codeListMap: Map<string, readonly CodeListItem[]> = new Map();
      if (this.allExportColumns && this.allExportColumns.length > 0) {
        this.allExportColumns?.forEach((exportColumn: IExportColumn) => {
          if (exportColumn.codeListItems) {
            codeListMap.set(
              exportColumn.appDEFieldId!,
              exportColumn.codeListItems!,
            );
          }
        });
      } else {
        Object.keys(this.fieldColumns).forEach((key: string) => {
          if (this.fieldColumns[key].codeList) {
            codeListMap.set(key, this.fieldColumns[key].codeListItems!);
          }
        });
      }
      const cloneData = clone(
        data.map(item => {
          return item;
        }),
      );
      cloneData.forEach(item => {
        const fields = Object.keys(item);
        fields.forEach((key: string) => {
          let value = item[key];
          const fieldColumnC = this.fieldColumns[key];
          if (codeListMap.get(key)) {
            value =
              codeListMap.get(key)!.find(_item => {
                return _item.value === item[key];
              })?.text || value;
          } else if (fieldColumnC) {
            value =
              fieldColumnC.formatValue(value) +
              (fieldColumnC.model.unitName || '');
          }
          item[key] = value;
        });
      });
      return cloneData;
    };

    const ganttHeader: string[] = this.state.ganttColumns.map(
      gantt => `${gantt.week}(${dayjs(gantt.date).format('MM/DD')})`,
    );
    const ganttVal: string[] = this.state.ganttColumns.map(gantt => gantt.date);

    // 获取导出数据
    const getExportData = async (): Promise<IData[]> => {
      const type = _args.params?.type;
      let data: IData[] = [];
      // 未指定类型时，默认导出当前页
      if (!type || type === 'activatedPage') {
        data = this.state.rows.map(row => row.data);
      } else if (type === 'maxRowCount' || type === 'customPage') {
        const { size } = this.state;
        const { startPage, endPage } = _args.params;
        const params =
          type === 'customPage'
            ? {
                page: 0,
                offset: (startPage - 1) * size,
                size: (endPage - startPage + 1) * size,
              }
            : { size: 1000, page: 0 };
        const items = await this.loadData({ viewParam: params });
        data = this.calcMergeByGroup(items);
      } else if (type === 'selectedRows') {
        data = this.getData();
      }
      if (data.length === 0) {
        throw new RuntimeError('无导出数据');
      }
      if (this.enableAgg) {
        const summary = { ...this.state.aggResult, summary: true };
        if (ganttVal.length > 0) {
          ganttVal.forEach(name => {
            Object.assign(summary, {
              [name]: data
                .map(v => v[name] || 0)
                .reduce((a, b) => plus(a, b), 0)
                .toFixed(this.precision),
            });
          });
        }
        data.push(summary);
      }
      return formatExcelData(data);
    };
    //  一维数组转成二维数组
    const formatArrayData = (
      filterVal: string[],
      tableData: IData[],
    ): IData[][] => {
      return tableData.map(v => {
        return filterVal.map((j, i) => {
          if (v.summary && i === 0) {
            return this.aggTitle;
          }
          return v[j];
        });
      });
    };

    // 头部id数组
    let filterVal: string[] = [];
    // 表头数组
    let header: string[] = [];

    if (this.allExportColumns && this.allExportColumns.length > 0) {
      filterVal = this.allExportColumns.map(
        (column: IExportColumn) => column.appDEFieldId!,
      );
      header = this.allExportColumns.map(
        (column: IExportColumn) => column.caption!,
      );
    } else {
      const { degridColumns } = this.model;
      if (!degridColumns) {
        throw new RuntimeError('无表格列');
      }
      filterVal = degridColumns!.map(item => item.id!);
      header = degridColumns.map(item => item.caption!);
    }

    header = header.concat(ganttHeader);
    filterVal = filterVal.concat(ganttVal);
    // 二维数组
    const data = formatArrayData(filterVal, await getExportData());
    await exportData(header, data, this.model.logicName!);
  }
}
