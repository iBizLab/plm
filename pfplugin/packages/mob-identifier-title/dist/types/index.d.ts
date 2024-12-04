import { App } from 'vue';
export declare const IBizMobIdentifierTitle: import("@ibiz-template/vue3-util").TypeWithInstall<import("vue").DefineComponent<{
    modelData: {
        type: import("vue").PropType<import("@ibiz/model-core").ICaptionBar>;
        required: true;
    };
    controller: {
        type: typeof import("./mob-identifier-title.controller").MobIdentifierTitleController;
        required: true;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelData: {
        type: import("vue").PropType<import("@ibiz/model-core").ICaptionBar>;
        required: true;
    };
    controller: {
        type: typeof import("./mob-identifier-title.controller").MobIdentifierTitleController;
        required: true;
    };
}>>, {}, {}>>;
declare const _default: {
    install(app: App): void;
};
export default _default;
