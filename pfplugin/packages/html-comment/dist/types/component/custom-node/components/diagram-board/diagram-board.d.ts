export declare const DiagramBoard: import("vue").DefineComponent<IParams, {
    ns: import("@ibiz-template/core").Namespace;
    diagramRef: import("vue").Ref<any>;
    diagramBoxRef: import("vue").Ref<any>;
    diagramBoxActivate: import("vue").Ref<boolean>;
    onFocus: () => Promise<void>;
    onBlur: () => void;
    renderTopToolBar: () => JSX.Element;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<IParams>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    [x: string]: any;
    [x: symbol]: any;
}, {}>;
