import { PropType } from 'vue';
export declare const InsertItemList: import("vue").DefineComponent<{
    data: {
        type: PropType<IData>;
        required: true;
    };
    filter: {
        type: StringConstructor;
        default: string;
    };
    categories: {
        type: PropType<IData>;
        required: true;
        default: () => void;
    };
    hasSearch: {
        type: BooleanConstructor;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    InsertItemsRef: import("vue").Ref<IData>;
    dataFilteredByCategory: import("vue").ComputedRef<IData>;
    onSelect: (insertItem: IData) => void;
    renderListInsertItems: (params: IData) => JSX.Element | string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("data" | "select")[], "data" | "select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<IData>;
        required: true;
    };
    filter: {
        type: StringConstructor;
        default: string;
    };
    categories: {
        type: PropType<IData>;
        required: true;
        default: () => void;
    };
    hasSearch: {
        type: BooleanConstructor;
    };
}>> & {
    onSelect?: ((...args: any[]) => any) | undefined;
    onData?: ((...args: any[]) => any) | undefined;
}, {
    filter: string;
    categories: IData;
    hasSearch: boolean;
}, {}>;
