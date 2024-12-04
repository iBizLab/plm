import { PropType } from 'vue';
import { IDEEditForm, IDEFormItem } from '@ibiz/model-core';
import { FormItemController, IControlProvider } from '@ibiz-template/runtime';
import { ProjectAttributesController } from './project-attributes-controller';
export declare const ProjectAttributes: import("vue").DefineComponent<{
    modelData: {
        type: PropType<IDEEditForm>;
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
    isSimple: {
        type: BooleanConstructor;
        required: false;
    };
    data: {
        type: PropType<IData>;
        required: false;
    };
    loadDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    c: ProjectAttributesController;
    ns: import("@ibiz-template/core").Namespace;
    formItems: IDEFormItem[];
    emit: (event: string, ...args: any[]) => void;
    renderEditor: (item: IData, controller: FormItemController) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | undefined;
    editSvg: () => JSX.Element;
    pxx: import("vue").Ref<any>;
    findController: (item: IData) => FormItemController;
    startsWithHttpProtocol: (str: string) => boolean;
    linkSvg: () => JSX.Element;
    linkOpen: (url: string) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelData: {
        type: PropType<IDEEditForm>;
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
    isSimple: {
        type: BooleanConstructor;
        required: false;
    };
    data: {
        type: PropType<IData>;
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
}, {}>;
export default ProjectAttributes;
