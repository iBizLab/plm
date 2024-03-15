import { EventBase, IGridRowState } from '@ibiz-template/runtime';

export interface ReloadNodeEvent extends EventBase {
  /**
   * 行状态对象
   * @author lxm
   * @date 2023-08-17 06:58:15
   * @type {IGridRowState}
   */
  row: IGridRowState;

  /**
   * 是否为重载父节点
   *
   * @type {boolean}
   * @memberof RowEditChangeEvent
   */
  isReloadParent: boolean;
}
