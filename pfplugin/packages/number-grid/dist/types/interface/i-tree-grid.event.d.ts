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
     * 重载父节点
     *
     * @type {{
     *     event: NodeEvent;
     *     emitArgs: PartialWithObject<NodeEvent, EventBase>;
     *   }}
     * @memberof INumberTreeGridEvent
     */
    onReloadParentNode: {
        event: NodeEvent;
        emitArgs: PartialWithObject<NodeEvent, EventBase>;
    };
}
