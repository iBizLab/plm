import { PropType } from 'vue';
import { ResourceGanttController } from '../../resource-gantt.controller';
export declare const ResourceGanttColumnHead: import("vue").DefineComponent<{
    controller: {
        type: typeof ResourceGanttController;
        required: true;
        default: () => void;
    };
    model: {
        type: PropType<IModel>;
        required: true;
        default: () => void;
    };
    expandAll: {
        type: BooleanConstructor;
        required: true;
        default: boolean;
    };
    titleData: {
        type: PropType<IData>;
        required: true;
        default: () => void;
    };
}, {
    c: ResourceGanttController;
    ns: import("@ibiz-template/core").Namespace;
    label: import("vue").ComputedRef<any>;
    isHeadSearch: import("vue").Ref<boolean>;
    expand: import("vue").Ref<boolean>;
    renderHeadSearch: () => JSX.Element;
    onColumnHeadClick: (e: MouseEvent) => void;
    onExpandAllChange: () => void;
    renderContent: () => JSX.Element;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("expandAllChange" | "headSearch")[], "expandAllChange" | "headSearch", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    controller: {
        type: typeof ResourceGanttController;
        required: true;
        default: () => void;
    };
    model: {
        type: PropType<IModel>;
        required: true;
        default: () => void;
    };
    expandAll: {
        type: BooleanConstructor;
        required: true;
        default: boolean;
    };
    titleData: {
        type: PropType<IData>;
        required: true;
        default: () => void;
    };
}>> & {
    onExpandAllChange?: ((...args: any[]) => any) | undefined;
    onHeadSearch?: ((...args: any[]) => any) | undefined;
}, {
    controller: ResourceGanttController;
    model: IModel;
    titleData: IData;
}, {}>;
