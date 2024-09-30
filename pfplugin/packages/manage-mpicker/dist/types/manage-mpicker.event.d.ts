import { EventBase, IComponentEvent } from '@ibiz-template/runtime';
export interface pickerEvent extends IComponentEvent {
    toggleMenu: {
        event: EventBase;
        emitArgs: IData;
    };
}
