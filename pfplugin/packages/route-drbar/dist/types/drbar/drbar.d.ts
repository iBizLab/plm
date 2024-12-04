import { PropType } from 'vue';
import { IDEDRBar } from '@ibiz/model-core';
import { IControlProvider, IDRBarItemsState } from '@ibiz-template/runtime';
import { DRBarController } from './drbar.controller';
export declare const DRBarControl: import("vue").DefineComponent<{
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
    c: DRBarController;
    ns: import("@ibiz-template/core").Namespace;
    handleSelect: (key: string) => void;
    renderMenuItems: (item: IDRBarItemsState) => JSX.Element | undefined;
    opens: string[];
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
