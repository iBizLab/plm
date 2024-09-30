import { App } from 'vue';
export declare const IBizIconGridColumn: import("@ibiz-template/vue3-util").TypeWithInstall<import("vue").DefineComponent<{
    controller: {
        type: typeof import("@ibiz-template/runtime").GridFieldColumnController;
        required: true;
    };
    row: {
        type: typeof import("@ibiz-template/runtime").GridRowState;
        required: true;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    onCellClick: (event: MouseEvent) => void;
    onTextClick: (event: MouseEvent) => void;
    onInfoTextChange: (text: string) => void;
    onActionClick: (detail: import("@ibiz/model-core").IUIActionGroupDetail, event: MouseEvent) => Promise<void>;
    CustomHtml: import("vue").ComputedRef<string | undefined>;
    fieldValue: import("vue").ComputedRef<any>;
    formatValue: import("vue").ComputedRef<string>;
    tooltip: import("vue").ComputedRef<string | undefined>;
    codeListIcon: import("vue").ComputedRef<import("@ibiz/model-core").ISysImage | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    controller: {
        type: typeof import("@ibiz-template/runtime").GridFieldColumnController;
        required: true;
    };
    row: {
        type: typeof import("@ibiz-template/runtime").GridRowState;
        required: true;
    };
}>>, {}, {}>>;
declare const _default: {
    install(app: App): void;
};
export default _default;
