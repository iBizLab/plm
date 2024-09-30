export declare const LabelSelect: import("vue").DefineComponent<IParams, {
    ns: import("@ibiz-template/core").Namespace;
    curData: {
        color: string;
        bgColor: string;
        labelName: string;
    };
    inputVal: import("vue").Ref<string>;
    inputRef: import("vue").Ref<any>;
    popoverRef: import("vue").Ref<any>;
    labelConfig: string[];
    referenceRef: import("vue").Ref<any>;
    onInput: () => void;
    handleColorItemClick: (color: string) => void;
    handleAfterEnter: () => void;
    handleAfterLeave: () => Promise<void>;
    calcAlpha: (color: string) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<IParams>>, {
    [x: string]: any;
    [x: symbol]: any;
}, {}>;
