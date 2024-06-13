import { EventBase, ITreeEvent } from '@ibiz-template/runtime';
export interface GroupTreeEvent extends ITreeEvent {
    onFilterNode: {
        event: EventBase & {
            nodeTag: string;
        };
        emitArgs: {
            nodeTag: string;
        };
    };
    onBack: {
        event: EventBase;
        emitArgs: {};
    };
    onResetSate: {
        event: EventBase;
        emitArgs: {};
    };
}
