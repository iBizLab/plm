import { PropType } from 'vue';
import { GridRowState } from '@ibiz-template/runtime';
import { GridJsCodeColumnController } from './grid-jscode-column.controller';
export declare const GridJsCodeColumn: import("vue").DefineComponent<{
    controller: {
        type: typeof GridJsCodeColumnController;
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
    c: GridJsCodeColumnController;
    componentRef: import("vue").Ref<any>;
    tooltip: import("vue").ComputedRef<string | undefined>;
    rowDataChange: (val: unknown, name?: string) => Promise<void>;
    onInfoTextChange: (text: string) => void;
    gridEditItemProps: IData;
    editorProps: IData;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    controller: {
        type: typeof GridJsCodeColumnController;
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
export default GridJsCodeColumn;
