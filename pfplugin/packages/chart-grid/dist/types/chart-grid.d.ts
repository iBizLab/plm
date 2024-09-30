import { PropType, Ref } from 'vue';
import { IDEChart } from '@ibiz/model-core';
import { IControlProvider } from '@ibiz-template/runtime';
import { ChartGridController } from './chart-grid-controller';
declare const ChartGrid: import("vue").DefineComponent<{
    modelData: {
        type: PropType<IDEChart>;
        required: true;
    };
    context: {
        type: PropType<IContext>;
        required: true;
    };
    params: {
        type: PropType<IParams>;
        default: () => {};
    };
    provider: {
        type: PropType<IControlProvider>;
    };
    mdctrlActiveMode: {
        type: NumberConstructor;
        default: undefined;
    };
    loadDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    c: ChartGridController;
    ns: import("@ibiz-template/core").Namespace;
    uuid: string;
    headerStyle: () => {};
    isCollapse: Ref<boolean>;
    collapse: () => Promise<void>;
    chartRef: Ref<any>;
    showTotal: Ref<boolean>;
    showPercent: Ref<boolean>;
    tableRef: Ref<any>;
    maxHeight: Ref<number>;
    totalRow: Ref<any[]>;
    gridpos: Ref<string>;
    handleTotal: () => {
        srfpercent: string;
    } | null;
    computeHeight: () => number;
    renderCollapseIcon: () => JSX.Element;
    handleGridData: () => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelData: {
        type: PropType<IDEChart>;
        required: true;
    };
    context: {
        type: PropType<IContext>;
        required: true;
    };
    params: {
        type: PropType<IParams>;
        default: () => {};
    };
    provider: {
        type: PropType<IControlProvider>;
    };
    mdctrlActiveMode: {
        type: NumberConstructor;
        default: undefined;
    };
    loadDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    params: IParams;
    mdctrlActiveMode: number;
    loadDefault: boolean;
}, {}>;
export default ChartGrid;
