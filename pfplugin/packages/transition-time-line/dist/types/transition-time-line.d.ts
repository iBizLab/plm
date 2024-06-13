import { PropType } from 'vue';
import { ISysCalendar } from '@ibiz/model-core';
import { ICalendarItemData, IControlProvider } from '@ibiz-template/runtime';
import { TransitionTimeLineController } from './controller';
export declare const TransitionTimeLine: import("vue").DefineComponent<{
    modelData: {
        type: PropType<ISysCalendar>;
        required: true;
    };
    context: {
        type: PropType<IContext>;
        required: true;
    };
    params: {
        type: PropType<IParams>;
        default: () => {};
    };
    provider: {
        type: PropType<IControlProvider>;
    };
    mdctrlActiveMode: {
        type: NumberConstructor;
        default: undefined;
    };
    loadDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    c: TransitionTimeLineController;
    ns: import("@ibiz-template/core").Namespace;
    calendarRef: import("vue").Ref<IData | undefined>;
    selectDate: (tag: string) => void;
    calcItemStyle: (data: ICalendarItemData) => IData;
    calcCurrent: () => number;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelData: {
        type: PropType<ISysCalendar>;
        required: true;
    };
    context: {
        type: PropType<IContext>;
        required: true;
    };
    params: {
        type: PropType<IParams>;
        default: () => {};
    };
    provider: {
        type: PropType<IControlProvider>;
    };
    mdctrlActiveMode: {
        type: NumberConstructor;
        default: undefined;
    };
    loadDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    params: IParams;
    mdctrlActiveMode: number;
    loadDefault: boolean;
}, {}>;
