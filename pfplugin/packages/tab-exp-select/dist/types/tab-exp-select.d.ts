import { PropType } from 'vue';
import { ITabExpPanel } from '@ibiz/model-core';
import { IControlProvider } from '@ibiz-template/runtime';
import { TabExpSelectController } from './tab-exp-select.controller';
export declare const TabExpSelect: import("vue").DefineComponent<{
    modelData: {
        type: PropType<ITabExpPanel>;
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
    defaultTabName: {
        type: StringConstructor;
        required: false;
    };
}, {
    c: TabExpSelectController;
    ns: import("@ibiz-template/core").Namespace;
    tabPosition: string;
    cascaderProps: {
        expandTrigger: string;
        label: string;
        value: string;
    };
    handleTabChange: (names: string[]) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelData: {
        type: PropType<ITabExpPanel>;
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
    defaultTabName: {
        type: StringConstructor;
        required: false;
    };
}>>, {
    params: IParams;
}, {}>;
