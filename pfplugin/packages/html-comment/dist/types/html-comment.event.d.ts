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
    focus: {
        event: EventBase;
        emitArgs: undefined;
    };
    blur: {
        event: EventBase;
        emitArgs: undefined;
    };
    openPopper: {
        event: EventBase;
        emitArgs: undefined;
    };
    closePopper: {
        event: EventBase;
        emitArgs: undefined;
    };
}
