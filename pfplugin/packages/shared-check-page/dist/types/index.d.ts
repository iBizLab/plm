import { App } from 'vue';
export declare const IBizSharedCheckPage: import("@ibiz-template/vue3-util").TypeWithInstall<import("vue").DefineComponent<{
    context: {
        type: import("vue").PropType<IContext>;
        default: () => void;
    };
    params: {
        type: import("vue").PropType<IParams>;
        default: () => {};
    };
    modelData: {
        type: import("vue").PropType<import("@ibiz/model-core").IAppView>;
        required: true;
    };
    modal: {
        type: import("vue").PropType<import("@ibiz-template/runtime").IModal>;
    };
    state: {
        type: import("vue").PropType<IData>;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    uiState: import("vue").Ref<string>;
    loading: import("vue").Ref<boolean>;
    renderInvalid: () => JSX.Element;
    renderVerifyPwd: () => JSX.Element;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    context: {
        type: import("vue").PropType<IContext>;
        default: () => void;
    };
    params: {
        type: import("vue").PropType<IParams>;
        default: () => {};
    };
    modelData: {
        type: import("vue").PropType<import("@ibiz/model-core").IAppView>;
        required: true;
    };
    modal: {
        type: import("vue").PropType<import("@ibiz-template/runtime").IModal>;
    };
    state: {
        type: import("vue").PropType<IData>;
    };
}>>, {
    context: IContext;
    params: IParams;
}, {}>>;
declare const _default: {
    install(app: App): void;
};
export default _default;
