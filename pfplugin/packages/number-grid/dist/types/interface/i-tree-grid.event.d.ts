import { PartialWithObject } from '@ibiz-template/core';
import { EventBase, ITreeGridEvent } from '@ibiz-template/runtime';
import { NodeEvent } from './node.event';
/**
 * 编号树表格事件
 *
 * @export
 * @interface INumberTreeGridEvent
 * @extends {ITreeGridEvent}
 */
export interface INumberTreeGridEvent extends ITreeGridEvent {
    /**
     * 行折叠
     *
     * @type {{
     *     event: NodeEvent;
     *     emitArgs: PartialWithObject<NodeEvent, EventBase>;
     *   }}
     * @memberof INumberTreeGridEvent
     */
    onRowCollapse: {
        event: NodeEvent;
        emitArgs: PartialWithObject<NodeEvent, EventBase>;
    };
}
