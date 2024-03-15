import { PartialWithObject } from '@ibiz-template/core';
import { EventBase, ITreeGridEvent } from '@ibiz-template/runtime';
import { ReloadNodeEvent } from './reload-node.event';

/**
 * 编号树表格事件
 *
 * @export
 * @interface INumberTreeGridEvent
 * @extends {ITreeGridEvent}
 */
export interface INumberTreeGridEvent extends ITreeGridEvent {
  /**
   * 重载节点事件
   *
   * @type {{
   *     event: ReloadNodeEvent,
   *     emitArgs: PartialWithObject<ReloadNodeEvent, EventBase>;
   *   }}
   * @memberof INumberTreeGridEvent
   */
  onReloadNode: {
    event: ReloadNodeEvent;
    emitArgs: PartialWithObject<ReloadNodeEvent, EventBase>;
  };
}
