import { PropType } from 'vue';
import { IDEDRTab } from '@ibiz/model-core';
import { IControlProvider } from '@ibiz-template/runtime';
import { DRTabController } from './drtab.controller';
export declare const DRTabControl: import("vue").DefineComponent<{
    modelData: {
        type: PropType<IDEDRTab>;
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
}, {
    c: DRTabController;
    ns: import("@ibiz-template/core").Namespace;
    counterData: IData;
    handleTabChange: () => void;
    handleTabClick: (pane: {
        paneName: string;
    }) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelData: {
        type: PropType<IDEDRTab>;
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
}>>, {
    params: IParams;
}, {}>;
