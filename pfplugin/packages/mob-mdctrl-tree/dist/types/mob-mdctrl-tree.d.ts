import { PropType } from 'vue';
import { IDEMobMDCtrl } from '@ibiz/model-core';
import { MobMDCtrlTreeController } from './mob-mdctrl-tree.controller';
export declare const MDCtrlTreeControl: import("vue").DefineComponent<{
    modelData: {
        type: PropType<IDEMobMDCtrl>;
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
    mdctrlActiveMode: {
        type: NumberConstructor;
        default: number;
    };
    singleSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectedData: {
        type: PropType<IData[]>;
        required: false;
    };
    mode: {
        type: StringConstructor;
        default: string;
    };
    loadDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    c: MobMDCtrlTreeController;
    ns: import("@ibiz-template/core").Namespace;
    ns2: import("@ibiz-template/core").Namespace;
    renderMDContent: () => JSX.Element;
    renderNoData: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | undefined;
    showCollapseOrExpandIcon: import("vue").ComputedRef<boolean>;
    onPageChange: (page: number) => void;
    renderLoadMore: () => JSX.Element | null;
    sortVal: import("vue").ComputedRef<{
        key: string;
        order: string;
    } | null>;
    delistItems: import("vue").ComputedRef<{
        value: string;
        label: string;
    }[]>;
    onSortChange: (sort: {
        key: string;
        order: 'asc' | 'desc';
    }) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelData: {
        type: PropType<IDEMobMDCtrl>;
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
    mdctrlActiveMode: {
        type: NumberConstructor;
        default: number;
    };
    singleSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectedData: {
        type: PropType<IData[]>;
        required: false;
    };
    mode: {
        type: StringConstructor;
        default: string;
    };
    loadDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    params: IParams;
    mode: string;
    mdctrlActiveMode: number;
    singleSelect: boolean;
    loadDefault: boolean;
}, {}>;
