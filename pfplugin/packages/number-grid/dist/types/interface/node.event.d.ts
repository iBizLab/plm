import { EventBase, IGridRowState } from '@ibiz-template/runtime';
export interface NodeEvent extends EventBase {
    /**
     * 行状态对象
     *
     * @type {IGridRowState}
     * @memberof NodeEvent
     */
    row: IGridRowState;
    /**
     * 行展开状态
     *
     * @type {boolean}
     * @memberof NodeEvent
     */
    state: boolean;
}
