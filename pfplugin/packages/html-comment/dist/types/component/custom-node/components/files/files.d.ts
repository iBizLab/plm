export declare const Files: import("vue").DefineComponent<IParams, {
    ns: import("@ibiz-template/core").Namespace;
    file: import("vue").ComputedRef<IData>;
    toolBars: ({
        type: string;
        text: string;
        color: string;
        icon: string;
    } | {
        type: string;
        text: string;
        color?: undefined;
        icon?: undefined;
    } | {
        type: string;
        text: string;
        icon: string;
        color?: undefined;
    })[];
    visible: import("vue").Ref<boolean>;
    hoverToolBarItemKey: import("vue").Ref<string>;
    onToolItemClick: (item: IData) => void;
    onMouseover: (item: IData) => void;
    onMouseout: () => void;
    onShow: () => void;
    onHide: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<IParams>>, {
    [x: string]: any;
    [x: symbol]: any;
}, {}>;
