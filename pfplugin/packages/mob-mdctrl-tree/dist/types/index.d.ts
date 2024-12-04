export declare const IBizMDCtrlTreeControl: import("@ibiz-template/vue3-util").TypeWithInstall<import("vue").DefineComponent<{
    modelData: {
        type: import("vue").PropType<import("@ibiz/model-core").IDEMobMDCtrl>;
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
    mdctrlActiveMode: {
        type: NumberConstructor;
        default: number;
    };
    singleSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectedData: {
        type: import("vue").PropType<IData[]>;
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
    c: import("./mob-mdctrl-tree.controller").MobMDCtrlTreeController;
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
        order: "desc" | "asc";
    }) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelData: {
        type: import("vue").PropType<import("@ibiz/model-core").IDEMobMDCtrl>;
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
    mdctrlActiveMode: {
        type: NumberConstructor;
        default: number;
    };
    singleSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectedData: {
        type: import("vue").PropType<IData[]>;
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
}, {}>>;
export default IBizMDCtrlTreeControl;
