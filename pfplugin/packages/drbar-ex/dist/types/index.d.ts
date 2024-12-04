import { App } from 'vue';
export * from './drbar-ex.controller';
export declare const IBizDRBarExControl: import("@ibiz-template/vue3-util").TypeWithInstall<import("vue").DefineComponent<{
    modelData: {
        type: import("vue").PropType<import("@ibiz/model-core").IDEDRBar>;
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
    c: import("./drbar-ex.controller").DRBarExController;
    ns: import("@ibiz-template/core").Namespace;
    moreItems: import("vue").Ref<IData>;
    controlRef: import("vue").Ref<any>;
    visibleItems: import("vue").Ref<IData>;
    counterData: IData;
    handleSelect: (key: string) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelData: {
        type: import("vue").PropType<import("@ibiz/model-core").IDEDRBar>;
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
}, {}>>;
declare const _default: {
    install(app: App): void;
};
export default _default;
