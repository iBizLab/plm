import { App } from 'vue';
export declare const IBizTabExpSelectControl: import("@ibiz-template/vue3-util").TypeWithInstall<import("vue").DefineComponent<{
    modelData: {
        type: import("vue").PropType<import("@ibiz/model-core").ITabExpPanel>;
        required: true;
    };
    context: {
        type: import("vue").PropType<IContext>;
        required: true;
    };
    params: {
        type: import("vue").PropType<IParams>;
        default: () => {};
    };
    provider: {
        type: import("vue").PropType<import("@ibiz-template/runtime").IControlProvider>;
    };
    defaultTabName: {
        type: StringConstructor;
        required: false;
    };
}, {
    c: import("./tab-exp-select.controller").TabExpSelectController;
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
        type: import("vue").PropType<import("@ibiz/model-core").ITabExpPanel>;
        required: true;
    };
    context: {
        type: import("vue").PropType<IContext>;
        required: true;
    };
    params: {
        type: import("vue").PropType<IParams>;
        default: () => {};
    };
    provider: {
        type: import("vue").PropType<import("@ibiz-template/runtime").IControlProvider>;
    };
    defaultTabName: {
        type: StringConstructor;
        required: false;
    };
}>>, {
    params: IParams;
}, {}>>;
declare const _default: {
    install(app: App): void;
};
export default _default;
