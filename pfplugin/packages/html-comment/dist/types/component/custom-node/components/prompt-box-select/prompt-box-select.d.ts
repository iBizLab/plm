export declare const PromptBoxSelect: import("vue").DefineComponent<IParams, {
    ns: import("@ibiz-template/core").Namespace;
    curColor: import("vue").Ref<string>;
    curIcon: import("vue").Ref<string>;
    curText: import("vue").Ref<string>;
    inputRef: import("vue").Ref<any>;
    referenceRef: import("vue").Ref<any>;
    toolBars: import("vue").Ref<IData[]>;
    handleToolItemClick: (item: IData, e: MouseEvent) => void;
    onOpenTopPopover: () => Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<IParams>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    [x: string]: any;
    [x: symbol]: any;
}, {}>;
