export declare const Avatar: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        required: true;
    };
    img: {
        type: StringConstructor;
    };
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    renderAvatar: () => JSX.Element;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: StringConstructor;
        required: true;
    };
    img: {
        type: StringConstructor;
    };
    readOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    readOnly: boolean;
}, {}>;
