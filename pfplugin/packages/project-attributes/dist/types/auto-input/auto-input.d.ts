import { PropType } from 'vue';
export declare const AutoInput: import("vue").DefineComponent<{
    controller: {
        type: PropType<any>;
        required: true;
    };
    item: {
        type: PropType<IData>;
        required: true;
    };
    emit: {
        type: PropType<Function>;
        required: true;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    c: any;
    startEdit: (e: Event) => void;
    stopEdit: (e: Event) => void;
    text: import("vue").Ref<string>;
    isEditing: import("vue").Ref<boolean>;
    change: (event: any) => void;
    componentRef: import("vue").Ref<any>;
    editSvg: () => JSX.Element;
    inputRef: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    controller: {
        type: PropType<any>;
        required: true;
    };
    item: {
        type: PropType<IData>;
        required: true;
    };
    emit: {
        type: PropType<Function>;
        required: true;
    };
}>>, {}, {}>;
