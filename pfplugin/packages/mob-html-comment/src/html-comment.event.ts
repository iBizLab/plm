import { EventBase, IComponentEvent } from '@ibiz-template/runtime';

export interface mobCommentEvent extends IComponentEvent {
  onSetReply: {
    event: EventBase;
    emitArgs: IData;
  };

  onRemoveReply: {
    event: EventBase;
    emitArgs: IData;
  };

  focus: {
    event: EventBase;
    emitArgs: IData;
  };
}
