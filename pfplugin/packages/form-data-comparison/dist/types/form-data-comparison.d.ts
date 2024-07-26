import { PropType, Ref } from 'vue';
import { IDEEditForm, IDEFormDetail, IDEFormItem } from '@ibiz/model-core';
import { IControlProvider } from '@ibiz-template/runtime';
import { FormDataComparisonController } from './form-data-comparison-controller';
export declare const FormDataComparison: import("vue").DefineComponent<{
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
    baseVersion: Ref<string>;
    compareVersion: Ref<string>;
    switchValue: Ref<boolean>;
    c: FormDataComparisonController;
    ns: import("@ibiz-template/core").Namespace;
    gridData: Ref<IData[]>;
    formItems: IDEFormItem[];
    activeNames: Ref<never[]>;
    renderEditor: (data: IDEFormDetail, formData: IData) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null;
    renderDruipart: (item: IData, data: IData, version: string) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null;
    renderMdctrl: (item: IData, type: string, _data: IData, componentP: string) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
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
export default FormDataComparison;
