import { App } from 'vue';
export declare const IBizGridEditColumn: import("@ibiz-template/vue3-util").TypeWithInstall<import("vue").DefineComponent<{
    controller: {
        type: typeof import("./grid-field-clolumn/grid-edit-column.controller").GridEditColumnController;
        required: true;
    };
    row: {
        type: typeof import("@ibiz-template/runtime").GridRowState;
        required: true;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    picking: boolean;
    componentRef: import("vue").Ref<any>;
    actionToolbarRef: import("vue").Ref<any>;
    fieldName: string;
    gridEditItemProps: IData;
    rowDataChange: (val: unknown, name?: string | undefined) => Promise<void>;
    editorProps: IData;
    onCellClick: (event: MouseEvent) => void;
    onTextClick: (event: MouseEvent) => void;
    onInfoTextChange: (text: string) => void;
    onActionClick: (detail: import("@ibiz/model-core").IUIActionGroupDetail, event: MouseEvent) => Promise<void>;
    renderActions: () => IData[];
    CustomHtml: import("vue").ComputedRef<string | undefined>;
    fieldValue: import("vue").ComputedRef<any>;
    formatValue: import("vue").ComputedRef<string>;
    tooltip: import("vue").ComputedRef<string | undefined>;
    renderPicker: () => JSX.Element | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    controller: {
        type: typeof import("./grid-field-clolumn/grid-edit-column.controller").GridEditColumnController;
        required: true;
    };
    row: {
        type: typeof import("@ibiz-template/runtime").GridRowState;
        required: true;
    };
}>>, {}, {}>>;
export declare const IBizTreeGridExFieldColumn: import("@ibiz-template/vue3-util").TypeWithInstall<import("vue").DefineComponent<{
    controller: {
        type: typeof import("@ibiz-template/runtime").TreeGridExFieldColumnController;
        required: true;
    };
    row: {
        type: typeof import("@ibiz-template/runtime").TreeGridExRowState;
        required: true;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    ns2: import("@ibiz-template/core").Namespace;
    zIndex: number;
    nodeColumn: import("vue").ComputedRef<import("@ibiz-template/runtime").TreeGridExNodeColumnController | undefined>;
    fieldValue: import("vue").ComputedRef<any>;
    showText: import("vue").ComputedRef<any>;
    clickable: import("vue").ComputedRef<any>;
    tooltip: import("vue").ComputedRef<any>;
    editable: import("vue").ComputedRef<boolean>;
    readonly: import("vue").ComputedRef<boolean>;
    editColums: import("vue").ComputedRef<import("@ibiz-template/runtime").TreeGridExColumnController<import("@ibiz/model-core").IDETreeColumn>[]>;
    actionToolbarRef: import("vue").Ref<any>;
    onInfoTextChange: (text: string) => void;
    onDataChange: (tempNodeColumn: IData, val: unknown, name: string) => Promise<void>;
    editorEnter: (tempNodeColumn: IData, val: unknown, name: string) => Promise<void>;
    onTextClick: (event: MouseEvent) => void;
    onActionClick: (detail: import("@ibiz/model-core").IUIActionGroupDetail, event: MouseEvent) => Promise<void>;
    onOpenEdit: (event: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    controller: {
        type: typeof import("@ibiz-template/runtime").TreeGridExFieldColumnController;
        required: true;
    };
    row: {
        type: typeof import("@ibiz-template/runtime").TreeGridExRowState;
        required: true;
    };
}>>, {}, {}>>;
declare const _default: {
    install(app: App): void;
};
export default _default;
