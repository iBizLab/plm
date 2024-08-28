import { App } from 'vue';
export declare const IBizGridJsCodeColumn: import("@ibiz-template/vue3-util").TypeWithInstall<import("vue").DefineComponent<{
    controller: {
        type: typeof import("./grid-jscode-column.controller").GridJsCodeColumnController;
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
    c: import("./grid-jscode-column.controller").GridJsCodeColumnController;
    componentRef: import("vue").Ref<any>;
    tooltip: import("vue").ComputedRef<string | undefined>;
    rowDataChange: (val: unknown, name?: string | undefined) => Promise<void>;
    onInfoTextChange: (text: string) => void;
    gridEditItemProps: IData;
    editorProps: IData;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    controller: {
        type: typeof import("./grid-jscode-column.controller").GridJsCodeColumnController;
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
declare const _default: {
    install(app: App): void;
};
export default _default;
