import { TreeGridExNodeColumnController, TreeGridExRowState } from '@ibiz-template/runtime';
export declare const TreeGridExEditColumn: import("vue").DefineComponent<{
    controller: {
        type: typeof TreeGridExNodeColumnController;
        required: true;
    };
    row: {
        type: typeof TreeGridExRowState;
        required: true;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    fieldValue: import("vue").ComputedRef<any>;
    componentRef: import("vue").Ref<any>;
    tooltip: import("vue").ComputedRef<string | undefined>;
    rowDataChange: (val: unknown, name?: string) => Promise<void>;
    onInfoTextChange: (text: string) => void;
    gridEditItemProps: IData;
    editorProps: IData;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    controller: {
        type: typeof TreeGridExNodeColumnController;
        required: true;
    };
    row: {
        type: typeof TreeGridExRowState;
        required: true;
    };
}>>, {}, {}>;
export default TreeGridExEditColumn;
