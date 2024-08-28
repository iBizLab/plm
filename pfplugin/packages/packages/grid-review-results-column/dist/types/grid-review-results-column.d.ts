import { PropType } from 'vue';
import { GridRowState } from '@ibiz-template/runtime';
import { GridReviewResultsColumnController } from './grid-review-results-column.controller';
export declare const GridReviewResultsColumn: import("vue").DefineComponent<{
    controller: {
        type: typeof GridReviewResultsColumnController;
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
    c: GridReviewResultsColumnController;
    componentRef: import("vue").Ref<any>;
    tooltip: import("vue").ComputedRef<string | undefined>;
    rowDataChange: (val: unknown, name?: string) => Promise<void>;
    onInfoTextChange: (text: string) => void;
    gridEditItemProps: IData;
    editorProps: IData;
    renderContent: () => JSX.Element | string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    controller: {
        type: typeof GridReviewResultsColumnController;
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
export default GridReviewResultsColumn;
