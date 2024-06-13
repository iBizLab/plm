import { App } from 'vue';
export declare const IBizCustomUserInfo: import("@ibiz-template/vue3-util").TypeWithInstall<import("vue").DefineComponent<{
    modelData: {
        type: import("vue").PropType<import("@ibiz/model-core").IPanelRawItem>;
        required: true;
    };
    controller: {
        type: typeof import("./custom-user-info.controller").CustomUserInfoController;
        required: true;
    };
}, {
    c: import("./custom-user-info.controller").CustomUserInfoController;
    ns: import("@ibiz-template/core").Namespace;
    userInfo: import("vue").Ref<{}>;
    onOpenUserInfoPopover: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelData: {
        type: import("vue").PropType<import("@ibiz/model-core").IPanelRawItem>;
        required: true;
    };
    controller: {
        type: typeof import("./custom-user-info.controller").CustomUserInfoController;
        required: true;
    };
}>>, {}, {}>>;
declare const _default: {
    install(app: App): void;
};
export default _default;
