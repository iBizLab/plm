import { plus, RuntimeModelError } from '@ibiz-template/core';
import {
  CodeListItem,
  ControlVO,
  GridController,
  GridNotifyState,
  GridRowState,
  handleAllSettled,
  MDCtrlLoadParams,
} from '@ibiz-template/runtime';
import dayjs from 'dayjs';
import { isNil } from 'ramda';

/**
 * 工时表格控制器
 *
 * @export
 * @class WorkloadTableController
 * @extends {GridController}
 */
export class WorkloadTableController extends GridController {
  /**
   * 分组代码表数据项
   *
   * @type {readonly}
   * @memberof WorkloadTableController
   */
  codeListItems?: readonly CodeListItem[];

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
        [dayjs(item.register_date).format('YYYY-MM-DD')]: item.duration,
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
                  ? Number(item[name] || 0) + v.duration
                  : v.duration,
              });
            }
          });
          item.duration = _items
            .map(v => v.duration)
            .reduce((a, b) => plus(a, b), 0);
          items.push(item);
        }
      });
    } else {
      items = data;
    }
    return items;
  }
}
