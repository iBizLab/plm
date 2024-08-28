export * from './drbar.controller';
export declare const IBizDRBarControl: import("@ibiz-template/vue3-util").TypeWithInstall<import("vue").DefineComponent<{
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
    c: import("./drbar.controller").DRBarController;
    ns: import("@ibiz-template/core").Namespace;
    handleSelect: (key: string) => void;
    renderMenuItems: (item: import("@ibiz-template/runtime").IDRBarItemsState) => JSX.Element | undefined;
    opens: string[];
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
export default IBizDRBarControl;
