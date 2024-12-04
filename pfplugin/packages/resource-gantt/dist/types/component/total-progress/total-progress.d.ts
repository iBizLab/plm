import { PropType } from 'vue';
import { TreeGridExRowState } from '@ibiz-template/runtime';
import { ResourceGanttController } from '../../resource-gantt.controller';
export declare const TotalProgress: import("vue").DefineComponent<{
    row: {
        type: typeof TreeGridExRowState;
        required: true;
    };
    controller: {
        type: typeof ResourceGanttController;
        required: true;
    };
    capacityConfig: {
        type: PropType<IParams>;
        required: true;
        default: () => void;
    };
    dateRange: {
        type: ObjectConstructor;
        required: true;
        default: () => void;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    numerator: import("vue").Ref<number>;
    denominator: import("vue").Ref<number>;
    percentage: import("vue").ComputedRef<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    row: {
        type: typeof TreeGridExRowState;
        required: true;
    };
    controller: {
        type: typeof ResourceGanttController;
        required: true;
    };
    capacityConfig: {
        type: PropType<IParams>;
        required: true;
        default: () => void;
    };
    dateRange: {
        type: ObjectConstructor;
        required: true;
        default: () => void;
    };
}>>, {
    capacityConfig: IParams;
    dateRange: Record<string, any>;
}, {}>;
