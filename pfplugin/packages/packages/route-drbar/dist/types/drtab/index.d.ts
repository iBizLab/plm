export * from './drtab.controller';
export declare const IBizDRTabControl: import("@ibiz-template/vue3-util").TypeWithInstall<import("vue").DefineComponent<{
    modelData: {
        type: import("vue").PropType<import("@ibiz/model-core").IDEDRTab>;
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
}, {
    c: import("./drtab.controller").DRTabController;
    ns: import("@ibiz-template/core").Namespace;
    counterData: IData;
    handleTabChange: () => void;
    handleTabClick: (pane: {
        paneName: string;
    }) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelData: {
        type: import("vue").PropType<import("@ibiz/model-core").IDEDRTab>;
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
}>>, {
    params: IParams;
}, {}>>;
export default IBizDRTabControl;
