import { PropType } from 'vue';
import { ISysCalendar } from '@ibiz/model-core';
import { ICalendarItemData, IControlProvider } from '@ibiz-template/runtime';
import { ProcessTimeLineController } from './controller';
export declare const ProcessTimeLine: import("vue").DefineComponent<{
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
    c: ProcessTimeLineController;
    ns: import("@ibiz-template/core").Namespace;
    calendarRef: import("vue").Ref<IData | undefined>;
    selectDate: (tag: string) => void;
    calcItemStyle: (data: ICalendarItemData) => IData;
    isEvenRow: (pIndex: number) => boolean;
    isVerticalLine: (pIndex: number, index: number) => boolean;
    isLeftLine: (pIndex: number, index: number) => boolean;
    isRightLine: (pIndex: number, index: number) => boolean;
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
