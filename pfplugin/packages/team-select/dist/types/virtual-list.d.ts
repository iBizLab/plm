import { PropType } from 'vue';
export declare const VirtualList: import("vue").DefineComponent<{
    items: {
        type: PropType<IData>;
        default: () => never[];
    };
    itemHeight: {
        type: NumberConstructor;
        default: number;
    };
    showNum: {
        type: NumberConstructor;
        default: number;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    contentHeight: import("vue").Ref<number>;
    showList: import("vue").Ref<never[]>;
    contentBox: import("vue").Ref<any>;
    top: import("vue").Ref<number>;
    onScroll: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "scrollEvent"[], "scrollEvent", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: PropType<IData>;
        default: () => never[];
    };
    itemHeight: {
        type: NumberConstructor;
        default: number;
    };
    showNum: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onScrollEvent?: ((...args: any[]) => any) | undefined;
}, {
    items: IData;
    itemHeight: number;
    showNum: number;
}, {}>;
