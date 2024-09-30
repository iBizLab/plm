export declare const DateSelect: import("vue").DefineComponent<IParams, {
    ns: import("@ibiz-template/core").Namespace;
    dateVal: import("vue").Ref<string>;
    dateRef: import("vue").Ref<any>;
    handleChange: (value: string | Date) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<IParams>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    [x: string]: any;
    [x: symbol]: any;
}, {}>;
