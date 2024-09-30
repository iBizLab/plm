import { PropType } from 'vue';
import { IAppView } from '@ibiz/model-core';
import { IModal } from '@ibiz-template/runtime';
export declare const SharedCheckPage: import("vue").DefineComponent<{
    context: {
        type: PropType<IContext>;
        default: () => void;
    };
    params: {
        type: PropType<IParams>;
        default: () => {};
    };
    modelData: {
        type: PropType<IAppView>;
        required: true;
    };
    modal: {
        type: PropType<IModal>;
    };
    state: {
        type: PropType<IData>;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    uiState: import("vue").Ref<string>;
    loading: import("vue").Ref<boolean>;
    renderInvalid: () => JSX.Element;
    renderVerifyPwd: () => JSX.Element;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    context: {
        type: PropType<IContext>;
        default: () => void;
    };
    params: {
        type: PropType<IParams>;
        default: () => {};
    };
    modelData: {
        type: PropType<IAppView>;
        required: true;
    };
    modal: {
        type: PropType<IModal>;
    };
    state: {
        type: PropType<IData>;
    };
}>>, {
    context: IContext;
    params: IParams;
}, {}>;
