import { GridFieldColumnController, GridRowState } from '@ibiz-template/runtime';
export declare const GridPersonalInfoColumn: import("vue").DefineComponent<{
    controller: {
        type: typeof GridFieldColumnController;
        required: true;
    };
    row: {
        type: typeof GridRowState;
        required: true;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    c: GridFieldColumnController;
    fieldValue: import("vue").ComputedRef<any>;
    onCellClick: (event: MouseEvent) => void;
    renderContent: () => JSX.Element | string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    controller: {
        type: typeof GridFieldColumnController;
        required: true;
    };
    row: {
        type: typeof GridRowState;
        required: true;
    };
}>>, {}, {}>;
export default GridPersonalInfoColumn;
