import { App } from 'vue';
export declare const IBizProcessTimeLine: import("@ibiz-template/vue3-util").TypeWithInstall<import("vue").DefineComponent<{
    modelData: {
        type: import("vue").PropType<import("@ibiz/model-core").ISysCalendar>;
        required: true;
    };
    context: {
        type: import("vue").PropType<IContext>;
        required: true;
    };
    params: {
        type: import("vue").PropType<IParams>;
        default: () => {};
    };
    provider: {
        type: import("vue").PropType<import("@ibiz-template/runtime").IControlProvider>;
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
    c: import("./controller").ProcessTimeLineController;
    ns: import("@ibiz-template/core").Namespace;
    calendarRef: import("vue").Ref<IData | undefined>;
    selectDate: (tag: string) => void;
    calcItemStyle: (data: import("@ibiz-template/runtime").ICalendarItemData) => IData;
    isEvenRow: (pIndex: number) => boolean;
    isVerticalLine: (pIndex: number, index: number) => boolean;
    isLeftLine: (pIndex: number, index: number) => boolean;
    isRightLine: (pIndex: number, index: number) => boolean;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelData: {
        type: import("vue").PropType<import("@ibiz/model-core").ISysCalendar>;
        required: true;
    };
    context: {
        type: import("vue").PropType<IContext>;
        required: true;
    };
    params: {
        type: import("vue").PropType<IParams>;
        default: () => {};
    };
    provider: {
        type: import("vue").PropType<import("@ibiz-template/runtime").IControlProvider>;
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
}, {}>>;
declare const _default: {
    install(app: App): void;
};
export default _default;
