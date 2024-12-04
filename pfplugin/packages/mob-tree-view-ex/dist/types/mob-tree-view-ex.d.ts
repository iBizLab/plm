import { PropType, VNode } from 'vue';
import { IDETree, IDETreeNode } from '@ibiz/model-core';
import { ITreeNodeData } from '@ibiz-template/runtime';
import { IMobTreeViewExNodeData, MobTreeViewExController } from './mob-tree-view-ex.controller';
export declare const MobTreeViewEx: import("vue").DefineComponent<{
    modelData: {
        type: PropType<IDETree>;
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
    /**
     * 部件行数据默认激活模式
     * - 0 不激活
     * - 1 单击激活
     * - 2 双击激活(默认值)
     *
     * @type {(number | 0 | 1 | 2)}
     */
    mdctrlActiveMode: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * 是否为单选
     * - true 单选
     * - false 多选
     *
     * @type {(Boolean)}
     */
    singleSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    c: MobTreeViewExController;
    ns: import("@ibiz-template/core").Namespace;
    treeData: import("vue").ComputedRef<ITreeNodeData[]>;
    checkedKeys: import("vue").ComputedRef<(string | undefined)[]>;
    uuid: string;
    onNodeCheck: (event: MouseEvent, opts: IData) => void;
    onNodeClick: (event: MouseEvent, item: IMobTreeViewExNodeData, nodeModel: IDETreeNode | undefined) => void;
    onInput: (value: string) => Promise<void>;
    loadData: (item: IData) => Promise<void>;
    renderTree: (items: IMobTreeViewExNodeData[]) => JSX.Element;
    renderNoData: () => VNode | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelData: {
        type: PropType<IDETree>;
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
    /**
     * 部件行数据默认激活模式
     * - 0 不激活
     * - 1 单击激活
     * - 2 双击激活(默认值)
     *
     * @type {(number | 0 | 1 | 2)}
     */
    mdctrlActiveMode: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * 是否为单选
     * - true 单选
     * - false 多选
     *
     * @type {(Boolean)}
     */
    singleSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    params: IParams;
    mdctrlActiveMode: number;
    singleSelect: boolean;
}, {}>;
export default MobTreeViewEx;
