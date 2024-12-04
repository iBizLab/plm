import { EventBase } from '@ibiz-template/runtime';
export interface NodeEvent extends EventBase {
    /**
     * 节点数据
     *
     * @type {IData}
     * @memberof NodeEvent
     */
    node: IData;
}
