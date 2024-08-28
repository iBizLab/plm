import { PropType, Ref } from 'vue';
import { IDEKanban } from '@ibiz/model-core';
import { IKanbanGroupState, IControlProvider } from '@ibiz-template/runtime';
import { StepsKanbanController } from './steps-kanban.controller';
export declare const StepsKanbanControl: import("vue").DefineComponent<{
    modelData: {
        type: PropType<IDEKanban>;
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
    singleSelect: {
        type: BooleanConstructor;
        default: undefined;
    };
    loadDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    c: StepsKanbanController;
    ns: import("@ibiz-template/core").Namespace;
    isFull: Ref<boolean>;
    kanban: Ref<any>;
    onFullScreen: () => void;
    renderGroup: (group: IKanbanGroupState) => JSX.Element;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelData: {
        type: PropType<IDEKanban>;
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
    singleSelect: {
        type: BooleanConstructor;
        default: undefined;
    };
    loadDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    params: IParams;
    mdctrlActiveMode: number;
    singleSelect: boolean;
    loadDefault: boolean;
}, {}>;
