import { IGridRowState, ITreeGridState } from '@ibiz-template/runtime';

export interface INumberTreeGridState extends ITreeGridState {
  /**
   * 展开行
   *
   * @type {IGridRowState[]}
   * @memberof INumberTreeGridState
   */
  expandRows: IGridRowState[];
}
