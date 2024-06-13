import { PropType, VNode, Ref } from 'vue';
import { IDEGantt, IDETreeColumn } from '@ibiz/model-core';
import { IControlProvider, IGanttNodeData } from '@ibiz-template/runtime';
import { ResourceGanttController } from './resource-gantt.controller';
export declare const ResourceGanttControl: import("vue").DefineComponent<{
    modelData: {
        type: PropType<IDEGantt>;
        required: true;
    };
    context: {
        type: PropType<IContext>;
        required: true;
    };
    params: {
        type: PropType<IParams>;
        default: () => {};
    };
    provider: {
        type: PropType<IControlProvider>;
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
    c: ResourceGanttController;
    ns: import("@ibiz-template/core").Namespace;
    ns2: import("@ibiz-template/core").Namespace;
    fullscreenChange: () => void;
    ganttRef: Ref<IData | undefined>;
    ganttBoxRef: Ref<IData | undefined>;
    isInited: Ref<boolean>;
    ganttId: Ref<any>;
    data: import("vue").ComputedRef<IData[] | import("@ibiz-template/runtime").ITreeNodeData[]>;
    locale: import("vue").ComputedRef<string>;
    columns: import("vue").ComputedRef<IDETreeColumn[]>;
    onCheck: (state: boolean, item: IGanttNodeData) => void;
    loading: import("vue").ComputedRef<boolean>;
    ganttStyle: import("vue").ComputedRef<{
        primaryColor: string;
        textColor: string;
    }>;
    onNodeClick: (nodeData: IGanttNodeData, evt: MouseEvent) => void;
    onNodeDbClick: (nodeData: IGanttNodeData) => void;
    onNodeExpand: (nodeData: IGanttNodeData) => void;
    onNodeCollapse: (nodeData: IGanttNodeData) => void;
    renderContent: () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
    renderGanttCell: (cellData: IData) => JSX.Element | undefined;
    renderGanttTitle: (titleData: IData) => JSX.Element;
    onSliderMove: (sliders: IData[]) => void;
    renderNoData: () => VNode | false;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelData: {
        type: PropType<IDEGantt>;
        required: true;
    };
    context: {
        type: PropType<IContext>;
        required: true;
    };
    params: {
        type: PropType<IParams>;
        default: () => {};
    };
    provider: {
        type: PropType<IControlProvider>;
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
}, {}>;
