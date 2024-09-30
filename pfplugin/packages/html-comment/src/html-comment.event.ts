import { EventBase, IComponentEvent } from '@ibiz-template/runtime';

export interface commentEvent extends IComponentEvent {
  onFocus: {
    event: EventBase;
    emitArgs: IData;
  };

  onBlur: {
    event: EventBase;
    emitArgs: IData;
  };

  onChange: {
    event: EventBase;
    emitArgs: IData;
  };

  onSetReply: {
    event: EventBase;
    emitArgs: IData;
  };

  onRemoveReply: {
    event: EventBase;
    emitArgs: IData;
  };

  setHtml: {
    event: EventBase;
    emitArgs: IData;
  };

  clear: {
    event: EventBase;
    emitArgs: IData;
  };
}
