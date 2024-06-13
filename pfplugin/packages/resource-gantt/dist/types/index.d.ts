import { App } from 'vue';
export declare const IBizResourceGanttControl: import("@ibiz-template/vue3-util").TypeWithInstall<import("vue").DefineComponent<{
    modelData: {
        type: import("vue").PropType<import("@ibiz/model-core").IDEGantt>;
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
    loadDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
    mdctrlActiveMode: {
        type: NumberConstructor;
        default: undefined;
    };
    singleSelect: {
        type: BooleanConstructor;
        default: undefined;
    };
}, {
    c: import("./resource-gantt.controller").ResourceGanttController;
    ns: import("@ibiz-template/core").Namespace;
    ns2: import("@ibiz-template/core").Namespace;
    fullscreenChange: () => void;
    ganttRef: import("vue").Ref<IData | undefined>;
    ganttBoxRef: import("vue").Ref<IData | undefined>;
    isInited: import("vue").Ref<boolean>;
    ganttId: import("vue").Ref<any>;
    data: import("vue").ComputedRef<IData[] | import("@ibiz-template/runtime").ITreeNodeData[]>;
    locale: import("vue").ComputedRef<string>;
    columns: import("vue").ComputedRef<import("@ibiz/model-core").IDETreeColumn[]>;
    onCheck: (state: boolean, item: import("@ibiz-template/runtime").IGanttNodeData) => void;
    loading: import("vue").ComputedRef<boolean>;
    ganttStyle: import("vue").ComputedRef<{
        primaryColor: string;
        textColor: string;
    }>;
    onNodeClick: (nodeData: import("@ibiz-template/runtime").IGanttNodeData, evt: MouseEvent) => void;
    onNodeDbClick: (nodeData: import("@ibiz-template/runtime").IGanttNodeData) => void;
    onNodeExpand: (nodeData: import("@ibiz-template/runtime").IGanttNodeData) => void;
    onNodeCollapse: (nodeData: import("@ibiz-template/runtime").IGanttNodeData) => void;
    renderContent: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    renderGanttCell: (cellData: IData) => JSX.Element | undefined;
    renderGanttTitle: (titleData: IData) => JSX.Element;
    onSliderMove: (sliders: IData[]) => void;
    renderNoData: () => false | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelData: {
        type: import("vue").PropType<import("@ibiz/model-core").IDEGantt>;
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
    loadDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
    mdctrlActiveMode: {
        type: NumberConstructor;
        default: undefined;
    };
    singleSelect: {
        type: BooleanConstructor;
        default: undefined;
    };
}>>, {
    params: IParams;
    loadDefault: boolean;
    mdctrlActiveMode: number;
    singleSelect: boolean;
}, {}>>;
declare const _default: {
    install(app: App): void;
};
export default _default;
