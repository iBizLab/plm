import { PropType } from 'vue';
import { IModal } from '@ibiz-template/runtime';
export declare const InsertSelect: import("vue").DefineComponent<{
    modal: {
        type: PropType<IModal>;
        required: true;
    };
    context: {
        type: PropType<IData>;
        default: () => void;
    };
    viewParams: {
        type: PropType<IData>;
        default: () => void;
    };
    actionParams: {
        type: PropType<IData>;
        default: () => void;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    mapInsertItems: import("vue").Ref<IData>;
    mapCategories: import("vue").Ref<IData>;
    searchVal: import("vue").Ref<string>;
    onSelectItem: (item: IData) => Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "select"[], "select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modal: {
        type: PropType<IModal>;
        required: true;
    };
    context: {
        type: PropType<IData>;
        default: () => void;
    };
    viewParams: {
        type: PropType<IData>;
        default: () => void;
    };
    actionParams: {
        type: PropType<IData>;
        default: () => void;
    };
}>> & {
    onSelect?: ((...args: any[]) => any) | undefined;
}, {
    context: IData;
    actionParams: IData;
    viewParams: IData;
}, {}>;
