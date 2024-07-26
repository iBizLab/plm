import { PropType } from 'vue';
export declare const Categories: import("vue").DefineComponent<{
    categories: {
        type: PropType<IData[]>;
        required: true;
        default: () => never[];
    };
    current: {
        type: StringConstructor;
        required: true;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    onSelect: (category: IData) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "select"[], "select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    categories: {
        type: PropType<IData[]>;
        required: true;
        default: () => never[];
    };
    current: {
        type: StringConstructor;
        required: true;
    };
}>> & {
    onSelect?: ((...args: any[]) => any) | undefined;
}, {
    categories: IData[];
}, {}>;
