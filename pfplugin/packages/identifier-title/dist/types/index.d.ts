import { App } from 'vue';
export declare const IBizIdentifierTitle: import("@ibiz-template/vue3-util").TypeWithInstall<import("vue").DefineComponent<{
    modelData: {
        type: import("vue").PropType<import("@ibiz/model-core").ICaptionBar>;
        required: true;
    };
    controller: {
        type: typeof import("./identifier-title-controller").IdentifierTitleController;
        required: true;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    copyIdSuccess: import("vue").Ref<boolean>;
    copyUrlSuccess: import("vue").Ref<boolean>;
    copy: (value: string, tag: string) => Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelData: {
        type: import("vue").PropType<import("@ibiz/model-core").ICaptionBar>;
        required: true;
    };
    controller: {
        type: typeof import("./identifier-title-controller").IdentifierTitleController;
        required: true;
    };
}>>, {}, {}>>;
declare const _default: {
    install(app: App): void;
};
export default _default;
