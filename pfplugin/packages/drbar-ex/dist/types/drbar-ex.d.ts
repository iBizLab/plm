import { PropType } from 'vue';
import { IDEDRBar } from '@ibiz/model-core';
import { IControlProvider } from '@ibiz-template/runtime';
import { DRBarExController } from './drbar-ex.controller';
export declare function useWatchRouteChange(c: DRBarExController): void;
export declare const DRBarExControl: import("vue").DefineComponent<{
    modelData: {
        type: PropType<IDEDRBar>;
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
    srfnav: {
        type: StringConstructor;
        required: false;
    };
    showMode: {
        type: StringConstructor;
        default: string;
    };
    hideEditItem: {
        type: BooleanConstructor;
        default: undefined;
    };
}, {
    c: DRBarExController;
    ns: import("@ibiz-template/core").Namespace;
    moreItems: import("vue").Ref<IData>;
    controlRef: import("vue").Ref<any>;
    visibleItems: import("vue").Ref<IData>;
    counterData: IData;
    handleSelect: (key: string) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelData: {
        type: PropType<IDEDRBar>;
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
    srfnav: {
        type: StringConstructor;
        required: false;
    };
    showMode: {
        type: StringConstructor;
        default: string;
    };
    hideEditItem: {
        type: BooleanConstructor;
        default: undefined;
    };
}>>, {
    params: IParams;
    showMode: string;
    hideEditItem: boolean;
}, {}>;
