import { PropType } from 'vue';
import { IUIActionGroupDetail } from '@ibiz/model-core';
import { TreeGridExFieldColumnController, TreeGridExRowState } from '@ibiz-template/runtime';
export declare const ResourceGanttExFieldColumn: import("vue").DefineComponent<{
    controller: {
        type: typeof TreeGridExFieldColumnController;
        required: true;
    };
    row: {
        type: typeof TreeGridExRowState;
        required: true;
    };
    parentRow: {
        type: PropType<TreeGridExRowState | undefined>;
    };
    column: {
        type: PropType<IData>;
    };
    capacityConfig: {
        type: PropType<IParams>;
        required: true;
        default: () => void;
    };
    groupConfig: {
        type: PropType<IData>;
        required: true;
        default: () => void;
    };
    ganttPosition: {
        type: PropType<IParams>;
        required: true;
        default: () => void;
    };
    virtualTableVal: {
        type: PropType<IData[]>;
        default: () => never[];
    };
    dateRange: {
        type: ObjectConstructor;
        required: true;
        default: () => void;
    };
    level: {
        type: NumberConstructor;
        default: number;
    };
    isTopFirstIndex: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    ns2: import("@ibiz-template/core").Namespace;
    nodeColumn: import("vue").ComputedRef<import("@ibiz-template/runtime").TreeGridExNodeColumnController | undefined>;
    fieldValue: import("vue").ComputedRef<any>;
    showText: import("vue").ComputedRef<any>;
    clickable: import("vue").ComputedRef<any>;
    tooltip: import("vue").ComputedRef<any>;
    calcMergeClass: import("vue").ComputedRef<string>;
    calcMergeStyle: import("vue").ComputedRef<{}>;
    columnRef: import("vue").Ref<any>;
    contentStyle: import("vue").Ref<IParams>;
    onInfoTextChange: (text: string) => void;
    onTextClick: (event: MouseEvent) => void;
    onActionClick: (detail: IUIActionGroupDetail, event: MouseEvent) => Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    controller: {
        type: typeof TreeGridExFieldColumnController;
        required: true;
    };
    row: {
        type: typeof TreeGridExRowState;
        required: true;
    };
    parentRow: {
        type: PropType<TreeGridExRowState | undefined>;
    };
    column: {
        type: PropType<IData>;
    };
    capacityConfig: {
        type: PropType<IParams>;
        required: true;
        default: () => void;
    };
    groupConfig: {
        type: PropType<IData>;
        required: true;
        default: () => void;
    };
    ganttPosition: {
        type: PropType<IParams>;
        required: true;
        default: () => void;
    };
    virtualTableVal: {
        type: PropType<IData[]>;
        default: () => never[];
    };
    dateRange: {
        type: ObjectConstructor;
        required: true;
        default: () => void;
    };
    level: {
        type: NumberConstructor;
        default: number;
    };
    isTopFirstIndex: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    capacityConfig: IParams;
    dateRange: Record<string, any>;
    groupConfig: IData;
    ganttPosition: IParams;
    virtualTableVal: IData[];
    level: number;
    isTopFirstIndex: boolean;
}, {}>;
export default ResourceGanttExFieldColumn;
