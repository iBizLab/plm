import { App } from 'vue';
export declare const IBizSwitchShowModeButton: import("@ibiz-template/vue3-util").TypeWithInstall<import("vue").DefineComponent<{
    modelData: {
        type: import("vue").PropType<import("@ibiz/model-core").IPanelButton>;
        required: true;
    };
    controller: {
        type: typeof import("./switch-show-mode.controller").SwitchShowModeController;
        required: true;
    };
}, {
    ns: import("@ibiz-template/core").Namespace;
    items: ({
        icon: {
            htmlStr: string;
            cssClass?: undefined;
        };
        title: string;
        value: string;
    } | {
        icon: {
            cssClass: string;
            htmlStr?: undefined;
        };
        title: string;
        value: string;
    })[];
    indicatorStyle: import("vue").Ref<{
        transition: string;
        width: string;
        transform: string;
    }>;
    activeItem: import("vue").Ref<string>;
    content: import("vue").Ref<HTMLElement | undefined>;
    onClick: (e: MouseEvent, item: {
        icon: {
            htmlStr: string;
            cssClass?: undefined;
        };
        title: string;
        value: string;
    } | {
        icon: {
            cssClass: string;
            htmlStr?: undefined;
        };
        title: string;
        value: string;
    }) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelData: {
        type: import("vue").PropType<import("@ibiz/model-core").IPanelButton>;
        required: true;
    };
    controller: {
        type: typeof import("./switch-show-mode.controller").SwitchShowModeController;
        required: true;
    };
}>>, {}, {}>>;
declare const _default: {
    install(app: App): void;
};
export default _default;
