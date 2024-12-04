import { PropType } from 'vue';
import { IDEEditForm, IDEFormItem } from '@ibiz/model-core';
import { FormItemController, IControlProvider } from '@ibiz-template/runtime';
import { MobProjectAttributesController } from './mob-project-attributes-controller';
export declare const MobProjectAttributes: import("vue").DefineComponent<{
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
    c: MobProjectAttributesController;
    ns: import("@ibiz-template/core").Namespace;
    formItems: IDEFormItem[];
    emit: (event: string, ...args: any[]) => void;
    renderEditor: (item: IData, controller: FormItemController) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | undefined;
    findController: (item: IData) => FormItemController;
    click: (event: MouseEvent, item: IData, controller: any) => void;
    dialogShow: import("vue").Ref<boolean>;
    confirm: () => void;
    cancel: () => void;
    dialogDescription: import("vue").Ref<string>;
    dialogValue: import("vue").Ref<string>;
    linkSvg: () => JSX.Element;
    startsWithHttpProtocol: (str: string) => boolean;
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
export default MobProjectAttributes;
