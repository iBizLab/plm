import { App } from 'vue';
export declare const IBizProjectAttributes: import("@ibiz-template/vue3-util").TypeWithInstall<import("vue").DefineComponent<{
    modelData: {
        type: import("vue").PropType<import("@ibiz/model-core").IDEEditForm>;
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
    isSimple: {
        type: BooleanConstructor;
        required: false;
    };
    data: {
        type: import("vue").PropType<IData>;
        required: false;
    };
    loadDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    c: import("./project-attributes-controller").ProjectAttributesController;
    ns: import("@ibiz-template/core").Namespace;
    formItems: import("@ibiz/model-core").IDEFormItem[];
    emit: (event: string, ...args: any[]) => void;
    renderEditor: (item: IData, controller: import("@ibiz-template/runtime").FormItemController) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | undefined;
    editSvg: () => JSX.Element;
    pxx: import("vue").Ref<any>;
    findController: (item: IData) => import("@ibiz-template/runtime").FormItemController;
    startsWithHttpProtocol: (str: string) => boolean;
    linkSvg: () => JSX.Element;
    linkOpen: (url: string) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelData: {
        type: import("vue").PropType<import("@ibiz/model-core").IDEEditForm>;
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
    isSimple: {
        type: BooleanConstructor;
        required: false;
    };
    data: {
        type: import("vue").PropType<IData>;
        required: false;
    };
    loadDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    params: IParams;
    isSimple: boolean;
    loadDefault: boolean;
}, {}>>;
declare const _default: {
    install(app: App): void;
};
export default _default;
