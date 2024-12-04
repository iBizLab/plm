export declare const IBizGridChangeVersionColumn: import("@ibiz-template/vue3-util").TypeWithInstall<import("vue").DefineComponent<{
    controller: {
        type: typeof import("./grid-change-version-column.controller").GridChangeVersionColumnController;
        required: true;
    };
    row: {
        type: typeof import("@ibiz-template/runtime").GridRowState;
        required: true;
    };
    attrs: {
        type: import("vue").PropType<IData>;
        required: false;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    c: import("./grid-change-version-column.controller").GridChangeVersionColumnController;
    componentRef: import("vue").Ref<any>;
    tooltip: import("vue").ComputedRef<string | undefined>;
    rowDataChange: (val: unknown, name?: string | undefined) => Promise<void>;
    onInfoTextChange: (text: string) => void;
    gridEditItemProps: IData;
    renderContent: () => JSX.Element;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    controller: {
        type: typeof import("./grid-change-version-column.controller").GridChangeVersionColumnController;
        required: true;
    };
    row: {
        type: typeof import("@ibiz-template/runtime").GridRowState;
        required: true;
    };
    attrs: {
        type: import("vue").PropType<IData>;
        required: false;
    };
}>>, {}, {}>>;
export default IBizGridChangeVersionColumn;
