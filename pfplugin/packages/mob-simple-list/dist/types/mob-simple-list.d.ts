import { PropType, VNode } from 'vue';
import { IDEList } from '@ibiz/model-core';
import { IControlProvider } from '@ibiz-template/runtime';
import { MobSimpleListController } from './mob-simple-list.controller';
export declare const MobSimpleList: import("vue").DefineComponent<{
    modelData: {
        type: PropType<IDEList>;
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
        default: number;
    };
    singleSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    isSimple: {
        type: BooleanConstructor;
        required: false;
    };
    loadDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    c: MobSimpleListController;
    ns: import("@ibiz-template/core").Namespace;
    renderListContent: () => VNode;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelData: {
        type: PropType<IDEList>;
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
        default: number;
    };
    singleSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    isSimple: {
        type: BooleanConstructor;
        required: false;
    };
    loadDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    params: IParams;
    mdctrlActiveMode: number;
    singleSelect: boolean;
    isSimple: boolean;
    loadDefault: boolean;
}, {}>;
