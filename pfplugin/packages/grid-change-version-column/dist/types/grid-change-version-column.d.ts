import { PropType } from 'vue';
import { GridRowState } from '@ibiz-template/runtime';
import { GridChangeVersionColumnController } from './grid-change-version-column.controller';
export declare const GridChangeVersionColumn: import("vue").DefineComponent<{
    controller: {
        type: typeof GridChangeVersionColumnController;
        required: true;
    };
    row: {
        type: typeof GridRowState;
        required: true;
    };
    attrs: {
        type: PropType<IData>;
        required: false;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    c: GridChangeVersionColumnController;
    componentRef: import("vue").Ref<any>;
    tooltip: import("vue").ComputedRef<string | undefined>;
    rowDataChange: (val: unknown, name?: string) => Promise<void>;
    onInfoTextChange: (text: string) => void;
    gridEditItemProps: IData;
    renderContent: () => JSX.Element;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    controller: {
        type: typeof GridChangeVersionColumnController;
        required: true;
    };
    row: {
        type: typeof GridRowState;
        required: true;
    };
    attrs: {
        type: PropType<IData>;
        required: false;
    };
}>>, {}, {}>;
export default GridChangeVersionColumn;
