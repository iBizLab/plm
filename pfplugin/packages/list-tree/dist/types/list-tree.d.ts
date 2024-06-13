import { PropType } from 'vue';
import { IDETree, IDETreeNode } from '@ibiz/model-core';
import { IControlProvider, ITreeNodeData, TreeController } from '@ibiz-template/runtime';
import { AllowDropType, NodeDropType } from 'element-plus/es/components/tree/src/tree.type';
import { findNodeData } from './el-tree-util';
export declare const ListTreeControl: import("vue").DefineComponent<{
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
    provider: {
        type: PropType<IControlProvider>;
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
        default: undefined;
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
        default: undefined;
    };
    navigational: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultExpandedKeys: {
        type: PropType<string[]>;
    };
    loadDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    c: TreeController<IDETree, import("@ibiz-template/runtime").ITreeState, import("@ibiz-template/runtime").ITreeEvent>;
    ns: import("@ibiz-template/core").Namespace;
    treeRef: import("vue").Ref<import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: ArrayConstructor;
            default: () => never[];
        };
        emptyText: {
            type: StringConstructor;
        };
        renderAfterExpand: {
            type: BooleanConstructor;
            default: boolean;
        };
        nodeKey: StringConstructor;
        checkStrictly: BooleanConstructor;
        defaultExpandAll: BooleanConstructor;
        expandOnClickNode: {
            type: BooleanConstructor;
            default: boolean;
        };
        checkOnClickNode: BooleanConstructor;
        checkDescendants: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoExpandParent: {
            type: BooleanConstructor;
            default: boolean;
        };
        defaultCheckedKeys: PropType<import("element-plus/es/components/tree/src/tree.type").TreeKey[]>;
        defaultExpandedKeys: PropType<import("element-plus/es/components/tree/src/tree.type").TreeKey[]>;
        currentNodeKey: PropType<string | number>;
        renderContent: FunctionConstructor;
        showCheckbox: {
            type: BooleanConstructor;
            default: boolean;
        };
        draggable: {
            type: BooleanConstructor;
            default: boolean;
        };
        allowDrag: FunctionConstructor;
        allowDrop: FunctionConstructor;
        props: {
            type: PropType<import("element-plus/es/components/tree/src/tree.type").TreeOptionProps>;
            default: () => {
                children: string;
                label: string;
                disabled: string;
            };
        };
        lazy: {
            type: BooleanConstructor;
            default: boolean;
        };
        highlightCurrent: BooleanConstructor;
        load: PropType<import("element-plus/es/components/tree/src/tree.type").LoadFunction>;
        filterNodeMethod: PropType<import("element-plus/es/components/tree/src/tree.type").FilterNodeMethodFunction>;
        accordion: BooleanConstructor;
        indent: {
            type: NumberConstructor;
            default: number;
        };
        icon: {
            type: PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        };
    }>> & {
        "onCurrent-change"?: ((...args: any[]) => any) | undefined;
        "onNode-expand"?: ((...args: any[]) => any) | undefined;
        onCheck?: ((...args: any[]) => any) | undefined;
        "onCheck-change"?: ((...args: any[]) => any) | undefined;
        "onNode-click"?: ((...args: any[]) => any) | undefined;
        "onNode-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onNode-collapse"?: ((...args: any[]) => any) | undefined;
        "onNode-drag-start"?: ((...args: any[]) => any) | undefined;
        "onNode-drag-end"?: ((...args: any[]) => any) | undefined;
        "onNode-drop"?: ((...args: any[]) => any) | undefined;
        "onNode-drag-leave"?: ((...args: any[]) => any) | undefined;
        "onNode-drag-enter"?: ((...args: any[]) => any) | undefined;
        "onNode-drag-over"?: ((...args: any[]) => any) | undefined;
    }, {
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string | undefined) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        store: import("vue").Ref<{
            currentNode: {
                id: number;
                text: string;
                checked: boolean;
                indeterminate: boolean;
                data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData;
                expanded: boolean;
                parent: any;
                visible: boolean;
                isCurrent: boolean;
                store: any;
                isLeafByUser: boolean;
                isLeaf: boolean;
                canFocus: boolean;
                level: number;
                loaded: boolean;
                childNodes: any[];
                loading: boolean;
                initialize: () => void;
                setData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
                readonly label: string;
                readonly key: import("element-plus/es/components/tree/src/tree.type").TreeKey;
                readonly disabled: boolean;
                readonly nextSibling: any;
                readonly previousSibling: any;
                contains: (target: import("element-plus/es/components/tree/src/model/node").default, deep?: boolean | undefined) => boolean;
                remove: () => void;
                insertChild: (child?: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
                insertBefore: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
                insertAfter: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
                removeChild: (child: import("element-plus/es/components/tree/src/model/node").default) => void;
                removeChildByData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
                expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
                doCreateChildren: (array: import("element-plus/es/components/tree/src/tree.type").TreeNodeData[], defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
                collapse: () => void;
                shouldLoadData: () => boolean;
                updateLeafState: () => void;
                setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
                getChildren: (forceInit?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
                updateChildren: () => void;
                loadData: (callback: (node: import("element-plus/es/components/tree/src/model/node").default) => void, defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
            };
            currentNodeKey: import("element-plus/es/components/tree/src/tree.type").TreeKey;
            nodesMap: import("element-plus/es/components/tree/src/tree.type").TreeStoreNodesMap;
            root: {
                id: number;
                text: string;
                checked: boolean;
                indeterminate: boolean;
                data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData;
                expanded: boolean;
                parent: any;
                visible: boolean;
                isCurrent: boolean;
                store: any;
                isLeafByUser: boolean;
                isLeaf: boolean;
                canFocus: boolean;
                level: number;
                loaded: boolean;
                childNodes: any[];
                loading: boolean;
                initialize: () => void;
                setData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
                readonly label: string;
                readonly key: import("element-plus/es/components/tree/src/tree.type").TreeKey;
                readonly disabled: boolean;
                readonly nextSibling: any;
                readonly previousSibling: any;
                contains: (target: import("element-plus/es/components/tree/src/model/node").default, deep?: boolean | undefined) => boolean;
                remove: () => void;
                insertChild: (child?: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
                insertBefore: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
                insertAfter: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
                removeChild: (child: import("element-plus/es/components/tree/src/model/node").default) => void;
                removeChildByData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
                expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
                doCreateChildren: (array: import("element-plus/es/components/tree/src/tree.type").TreeNodeData[], defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
                collapse: () => void;
                shouldLoadData: () => boolean;
                updateLeafState: () => void;
                setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
                getChildren: (forceInit?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
                updateChildren: () => void;
                loadData: (callback: (node: import("element-plus/es/components/tree/src/model/node").default) => void, defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
            };
            data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
            lazy: boolean;
            load: import("element-plus/es/components/tree/src/tree.type").LoadFunction;
            filterNodeMethod: import("element-plus/es/components/tree/src/tree.type").FilterNodeMethodFunction;
            key: import("element-plus/es/components/tree/src/tree.type").TreeKey;
            defaultCheckedKeys: import("element-plus/es/components/tree/src/tree.type").TreeKey[];
            checkStrictly: boolean;
            defaultExpandedKeys: import("element-plus/es/components/tree/src/tree.type").TreeKey[];
            autoExpandParent: boolean;
            defaultExpandAll: boolean;
            checkDescendants: boolean;
            props: {
                children?: string | undefined;
                label?: string | ((data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, node: import("element-plus/es/components/tree/src/model/node").default) => string) | undefined;
                disabled?: string | ((data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, node: import("element-plus/es/components/tree/src/model/node").default) => boolean) | undefined;
                isLeaf?: string | ((data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, node: import("element-plus/es/components/tree/src/model/node").default) => boolean) | undefined;
                class?: ((data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, node: import("element-plus/es/components/tree/src/model/node").default) => string | {
                    [key: string]: boolean;
                }) | undefined;
            };
            initialize: () => void;
            filter: (value: any) => void;
            setData: (newVal: import("element-plus/es/components/tree/src/tree.type").TreeData) => void;
            getNode: (data: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => import("element-plus/es/components/tree/src/model/node").default;
            insertBefore: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, refData: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
            insertAfter: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, refData: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
            remove: (data: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
            append: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, parentData: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
            _initDefaultCheckedNodes: () => void;
            _initDefaultCheckedNode: (node: import("element-plus/es/components/tree/src/model/node").default) => void;
            setDefaultCheckedKey: (newVal: import("element-plus/es/components/tree/src/tree.type").TreeKey[]) => void;
            registerNode: (node: import("element-plus/es/components/tree/src/model/node").default) => void;
            deregisterNode: (node: import("element-plus/es/components/tree/src/model/node").default) => void;
            getCheckedNodes: (leafOnly?: boolean | undefined, includeHalfChecked?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
            getCheckedKeys: (leafOnly?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeKey[];
            getHalfCheckedNodes: () => import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
            getHalfCheckedKeys: () => import("element-plus/es/components/tree/src/tree.type").TreeKey[];
            _getAllNodes: () => import("element-plus/es/components/tree/src/model/node").default[];
            updateChildren: (key: import("element-plus/es/components/tree/src/tree.type").TreeKey, data: import("element-plus/es/components/tree/src/tree.type").TreeData) => void;
            _setCheckedKeys: (key: import("element-plus/es/components/tree/src/tree.type").TreeKey, leafOnly: boolean | undefined, checkedKeys: {
                [key: string]: boolean;
            }) => void;
            setCheckedNodes: (array: import("element-plus/es/components/tree/src/model/node").default[], leafOnly?: boolean | undefined) => void;
            setCheckedKeys: (keys: import("element-plus/es/components/tree/src/tree.type").TreeKey[], leafOnly?: boolean | undefined) => void;
            setDefaultExpandedKeys: (keys: import("element-plus/es/components/tree/src/tree.type").TreeKey[]) => void;
            setChecked: (data: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData, checked: boolean, deep: boolean) => void;
            getCurrentNode: () => import("element-plus/es/components/tree/src/model/node").default;
            setCurrentNode: (currentNode: import("element-plus/es/components/tree/src/model/node").default) => void;
            setUserCurrentNode: (node: import("element-plus/es/components/tree/src/model/node").default, shouldAutoExpandParent?: boolean | undefined) => void;
            setCurrentNodeKey: (key?: import("element-plus/es/components/tree/src/tree.type").TreeKey | undefined, shouldAutoExpandParent?: boolean | undefined) => void;
        }>;
        root: import("vue").Ref<{
            id: number;
            text: string;
            checked: boolean;
            indeterminate: boolean;
            data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData;
            expanded: boolean;
            parent: any;
            visible: boolean;
            isCurrent: boolean;
            store: any;
            isLeafByUser: boolean;
            isLeaf: boolean;
            canFocus: boolean;
            level: number;
            loaded: boolean;
            childNodes: any[];
            loading: boolean;
            initialize: () => void;
            setData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
            readonly label: string;
            readonly key: import("element-plus/es/components/tree/src/tree.type").TreeKey;
            readonly disabled: boolean;
            readonly nextSibling: any;
            readonly previousSibling: any;
            contains: (target: import("element-plus/es/components/tree/src/model/node").default, deep?: boolean | undefined) => boolean;
            remove: () => void;
            insertChild: (child?: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
            insertBefore: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
            insertAfter: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
            removeChild: (child: import("element-plus/es/components/tree/src/model/node").default) => void;
            removeChildByData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
            expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
            doCreateChildren: (array: import("element-plus/es/components/tree/src/tree.type").TreeNodeData[], defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
            collapse: () => void;
            shouldLoadData: () => boolean;
            updateLeafState: () => void;
            setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
            getChildren: (forceInit?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
            updateChildren: () => void;
            loadData: (callback: (node: import("element-plus/es/components/tree/src/model/node").default) => void, defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
        }>;
        currentNode: import("vue").Ref<{
            id: number;
            text: string;
            checked: boolean;
            indeterminate: boolean;
            data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData;
            expanded: boolean;
            parent: any;
            visible: boolean;
            isCurrent: boolean;
            store: any;
            isLeafByUser: boolean;
            isLeaf: boolean;
            canFocus: boolean;
            level: number;
            loaded: boolean;
            childNodes: any[];
            loading: boolean;
            initialize: () => void;
            setData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
            readonly label: string;
            readonly key: import("element-plus/es/components/tree/src/tree.type").TreeKey;
            readonly disabled: boolean;
            readonly nextSibling: any;
            readonly previousSibling: any;
            contains: (target: import("element-plus/es/components/tree/src/model/node").default, deep?: boolean | undefined) => boolean;
            remove: () => void;
            insertChild: (child?: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
            insertBefore: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
            insertAfter: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
            removeChild: (child: import("element-plus/es/components/tree/src/model/node").default) => void;
            removeChildByData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
            expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
            doCreateChildren: (array: import("element-plus/es/components/tree/src/tree.type").TreeNodeData[], defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
            collapse: () => void;
            shouldLoadData: () => boolean;
            updateLeafState: () => void;
            setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
            getChildren: (forceInit?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
            updateChildren: () => void;
            loadData: (callback: (node: import("element-plus/es/components/tree/src/model/node").default) => void, defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
        }>;
        dragState: import("vue").Ref<{
            showDropIndicator: boolean;
            draggingNode: null;
            dropNode: null;
            allowDrop: boolean;
            dropType: null;
        }>;
        el$: import("vue").Ref<import("element-plus/es/utils").Nullable<HTMLElement>>;
        dropIndicator$: import("vue").Ref<import("element-plus/es/utils").Nullable<HTMLElement>>;
        isEmpty: import("vue").ComputedRef<boolean>;
        filter: (value: any) => void;
        getNodeKey: (node: import("element-plus/es/components/tree/src/model/node").default) => any;
        getNodePath: (data: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
        getCheckedNodes: (leafOnly?: boolean | undefined, includeHalfChecked?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
        getCheckedKeys: (leafOnly?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeKey[];
        getCurrentNode: () => import("element-plus/es/components/tree/src/tree.type").TreeNodeData;
        getCurrentKey: () => any;
        setCheckedNodes: (nodes: import("element-plus/es/components/tree/src/model/node").default[], leafOnly?: boolean | undefined) => void;
        setCheckedKeys: (keys: import("element-plus/es/components/tree/src/tree.type").TreeKey[], leafOnly?: boolean | undefined) => void;
        setChecked: (data: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData, checked: boolean, deep: boolean) => void;
        getHalfCheckedNodes: () => import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
        getHalfCheckedKeys: () => import("element-plus/es/components/tree/src/tree.type").TreeKey[];
        setCurrentNode: (node: import("element-plus/es/components/tree/src/model/node").default, shouldAutoExpandParent?: boolean | undefined) => void;
        setCurrentKey: (key?: import("element-plus/es/components/tree/src/tree.type").TreeKey | undefined, shouldAutoExpandParent?: boolean | undefined) => void;
        t: import("element-plus").Translator;
        getNode: (data: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => import("element-plus/es/components/tree/src/model/node").default;
        remove: (data: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
        append: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, parentNode: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
        insertBefore: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, refNode: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
        insertAfter: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, refNode: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
        handleNodeExpand: (nodeData: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, node: import("element-plus/es/components/tree/src/model/node").default, instance: import("vue").ComponentInternalInstance) => void;
        updateKeyChildren: (key: import("element-plus/es/components/tree/src/tree.type").TreeKey, data: import("element-plus/es/components/tree/src/tree.type").TreeData) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("current-change" | "node-expand" | "check-change" | "node-click" | "node-contextmenu" | "node-collapse" | "check" | "node-drag-start" | "node-drag-end" | "node-drop" | "node-drag-leave" | "node-drag-enter" | "node-drag-over")[], import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: ArrayConstructor;
            default: () => never[];
        };
        emptyText: {
            type: StringConstructor;
        };
        renderAfterExpand: {
            type: BooleanConstructor;
            default: boolean;
        };
        nodeKey: StringConstructor;
        checkStrictly: BooleanConstructor;
        defaultExpandAll: BooleanConstructor;
        expandOnClickNode: {
            type: BooleanConstructor;
            default: boolean;
        };
        checkOnClickNode: BooleanConstructor;
        checkDescendants: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoExpandParent: {
            type: BooleanConstructor;
            default: boolean;
        };
        defaultCheckedKeys: PropType<import("element-plus/es/components/tree/src/tree.type").TreeKey[]>;
        defaultExpandedKeys: PropType<import("element-plus/es/components/tree/src/tree.type").TreeKey[]>;
        currentNodeKey: PropType<string | number>;
        renderContent: FunctionConstructor;
        showCheckbox: {
            type: BooleanConstructor;
            default: boolean;
        };
        draggable: {
            type: BooleanConstructor;
            default: boolean;
        };
        allowDrag: FunctionConstructor;
        allowDrop: FunctionConstructor;
        props: {
            type: PropType<import("element-plus/es/components/tree/src/tree.type").TreeOptionProps>;
            default: () => {
                children: string;
                label: string;
                disabled: string;
            };
        };
        lazy: {
            type: BooleanConstructor;
            default: boolean;
        };
        highlightCurrent: BooleanConstructor;
        load: PropType<import("element-plus/es/components/tree/src/tree.type").LoadFunction>;
        filterNodeMethod: PropType<import("element-plus/es/components/tree/src/tree.type").FilterNodeMethodFunction>;
        accordion: BooleanConstructor;
        indent: {
            type: NumberConstructor;
            default: number;
        };
        icon: {
            type: PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        };
    }>> & {
        "onCurrent-change"?: ((...args: any[]) => any) | undefined;
        "onNode-expand"?: ((...args: any[]) => any) | undefined;
        onCheck?: ((...args: any[]) => any) | undefined;
        "onCheck-change"?: ((...args: any[]) => any) | undefined;
        "onNode-click"?: ((...args: any[]) => any) | undefined;
        "onNode-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onNode-collapse"?: ((...args: any[]) => any) | undefined;
        "onNode-drag-start"?: ((...args: any[]) => any) | undefined;
        "onNode-drag-end"?: ((...args: any[]) => any) | undefined;
        "onNode-drop"?: ((...args: any[]) => any) | undefined;
        "onNode-drag-leave"?: ((...args: any[]) => any) | undefined;
        "onNode-drag-enter"?: ((...args: any[]) => any) | undefined;
        "onNode-drag-over"?: ((...args: any[]) => any) | undefined;
    }, {
        props: import("element-plus/es/components/tree/src/tree.type").TreeOptionProps;
        data: unknown[];
        checkStrictly: boolean;
        lazy: boolean;
        accordion: boolean;
        draggable: boolean;
        defaultExpandAll: boolean;
        indent: number;
        renderAfterExpand: boolean;
        showCheckbox: boolean;
        expandOnClickNode: boolean;
        checkOnClickNode: boolean;
        checkDescendants: boolean;
        autoExpandParent: boolean;
        highlightCurrent: boolean;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: ArrayConstructor;
            default: () => never[];
        };
        emptyText: {
            type: StringConstructor;
        };
        renderAfterExpand: {
            type: BooleanConstructor;
            default: boolean;
        };
        nodeKey: StringConstructor;
        checkStrictly: BooleanConstructor;
        defaultExpandAll: BooleanConstructor;
        expandOnClickNode: {
            type: BooleanConstructor;
            default: boolean;
        };
        checkOnClickNode: BooleanConstructor;
        checkDescendants: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoExpandParent: {
            type: BooleanConstructor;
            default: boolean;
        };
        defaultCheckedKeys: PropType<import("element-plus/es/components/tree/src/tree.type").TreeKey[]>;
        defaultExpandedKeys: PropType<import("element-plus/es/components/tree/src/tree.type").TreeKey[]>;
        currentNodeKey: PropType<string | number>;
        renderContent: FunctionConstructor;
        showCheckbox: {
            type: BooleanConstructor;
            default: boolean;
        };
        draggable: {
            type: BooleanConstructor;
            default: boolean;
        };
        allowDrag: FunctionConstructor;
        allowDrop: FunctionConstructor;
        props: {
            type: PropType<import("element-plus/es/components/tree/src/tree.type").TreeOptionProps>;
            default: () => {
                children: string;
                label: string;
                disabled: string;
            };
        };
        lazy: {
            type: BooleanConstructor;
            default: boolean;
        };
        highlightCurrent: BooleanConstructor;
        load: PropType<import("element-plus/es/components/tree/src/tree.type").LoadFunction>;
        filterNodeMethod: PropType<import("element-plus/es/components/tree/src/tree.type").FilterNodeMethodFunction>;
        accordion: BooleanConstructor;
        indent: {
            type: NumberConstructor;
            default: number;
        };
        icon: {
            type: PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        };
    }>> & {
        "onCurrent-change"?: ((...args: any[]) => any) | undefined;
        "onNode-expand"?: ((...args: any[]) => any) | undefined;
        onCheck?: ((...args: any[]) => any) | undefined;
        "onCheck-change"?: ((...args: any[]) => any) | undefined;
        "onNode-click"?: ((...args: any[]) => any) | undefined;
        "onNode-contextmenu"?: ((...args: any[]) => any) | undefined;
        "onNode-collapse"?: ((...args: any[]) => any) | undefined;
        "onNode-drag-start"?: ((...args: any[]) => any) | undefined;
        "onNode-drag-end"?: ((...args: any[]) => any) | undefined;
        "onNode-drop"?: ((...args: any[]) => any) | undefined;
        "onNode-drag-leave"?: ((...args: any[]) => any) | undefined;
        "onNode-drag-enter"?: ((...args: any[]) => any) | undefined;
        "onNode-drag-over"?: ((...args: any[]) => any) | undefined;
    }, {
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string | undefined) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        store: import("vue").Ref<{
            currentNode: {
                id: number;
                text: string;
                checked: boolean;
                indeterminate: boolean;
                data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData;
                expanded: boolean;
                parent: any;
                visible: boolean;
                isCurrent: boolean;
                store: any;
                isLeafByUser: boolean;
                isLeaf: boolean;
                canFocus: boolean;
                level: number;
                loaded: boolean;
                childNodes: any[];
                loading: boolean;
                initialize: () => void;
                setData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
                readonly label: string;
                readonly key: import("element-plus/es/components/tree/src/tree.type").TreeKey;
                readonly disabled: boolean;
                readonly nextSibling: any;
                readonly previousSibling: any;
                contains: (target: import("element-plus/es/components/tree/src/model/node").default, deep?: boolean | undefined) => boolean;
                remove: () => void;
                insertChild: (child?: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
                insertBefore: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
                insertAfter: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
                removeChild: (child: import("element-plus/es/components/tree/src/model/node").default) => void;
                removeChildByData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
                expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
                doCreateChildren: (array: import("element-plus/es/components/tree/src/tree.type").TreeNodeData[], defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
                collapse: () => void;
                shouldLoadData: () => boolean;
                updateLeafState: () => void;
                setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
                getChildren: (forceInit?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
                updateChildren: () => void;
                loadData: (callback: (node: import("element-plus/es/components/tree/src/model/node").default) => void, defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
            };
            currentNodeKey: import("element-plus/es/components/tree/src/tree.type").TreeKey;
            nodesMap: import("element-plus/es/components/tree/src/tree.type").TreeStoreNodesMap;
            root: {
                id: number;
                text: string;
                checked: boolean;
                indeterminate: boolean;
                data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData;
                expanded: boolean;
                parent: any;
                visible: boolean;
                isCurrent: boolean;
                store: any;
                isLeafByUser: boolean;
                isLeaf: boolean;
                canFocus: boolean;
                level: number;
                loaded: boolean;
                childNodes: any[];
                loading: boolean;
                initialize: () => void;
                setData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
                readonly label: string;
                readonly key: import("element-plus/es/components/tree/src/tree.type").TreeKey;
                readonly disabled: boolean;
                readonly nextSibling: any;
                readonly previousSibling: any;
                contains: (target: import("element-plus/es/components/tree/src/model/node").default, deep?: boolean | undefined) => boolean;
                remove: () => void;
                insertChild: (child?: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
                insertBefore: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
                insertAfter: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
                removeChild: (child: import("element-plus/es/components/tree/src/model/node").default) => void;
                removeChildByData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
                expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
                doCreateChildren: (array: import("element-plus/es/components/tree/src/tree.type").TreeNodeData[], defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
                collapse: () => void;
                shouldLoadData: () => boolean;
                updateLeafState: () => void;
                setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
                getChildren: (forceInit?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
                updateChildren: () => void;
                loadData: (callback: (node: import("element-plus/es/components/tree/src/model/node").default) => void, defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
            };
            data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
            lazy: boolean;
            load: import("element-plus/es/components/tree/src/tree.type").LoadFunction;
            filterNodeMethod: import("element-plus/es/components/tree/src/tree.type").FilterNodeMethodFunction;
            key: import("element-plus/es/components/tree/src/tree.type").TreeKey;
            defaultCheckedKeys: import("element-plus/es/components/tree/src/tree.type").TreeKey[];
            checkStrictly: boolean;
            defaultExpandedKeys: import("element-plus/es/components/tree/src/tree.type").TreeKey[];
            autoExpandParent: boolean;
            defaultExpandAll: boolean;
            checkDescendants: boolean;
            props: {
                children?: string | undefined;
                label?: string | ((data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, node: import("element-plus/es/components/tree/src/model/node").default) => string) | undefined;
                disabled?: string | ((data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, node: import("element-plus/es/components/tree/src/model/node").default) => boolean) | undefined;
                isLeaf?: string | ((data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, node: import("element-plus/es/components/tree/src/model/node").default) => boolean) | undefined;
                class?: ((data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, node: import("element-plus/es/components/tree/src/model/node").default) => string | {
                    [key: string]: boolean;
                }) | undefined;
            };
            initialize: () => void;
            filter: (value: any) => void;
            setData: (newVal: import("element-plus/es/components/tree/src/tree.type").TreeData) => void;
            getNode: (data: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => import("element-plus/es/components/tree/src/model/node").default;
            insertBefore: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, refData: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
            insertAfter: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, refData: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
            remove: (data: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
            append: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, parentData: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
            _initDefaultCheckedNodes: () => void;
            _initDefaultCheckedNode: (node: import("element-plus/es/components/tree/src/model/node").default) => void;
            setDefaultCheckedKey: (newVal: import("element-plus/es/components/tree/src/tree.type").TreeKey[]) => void;
            registerNode: (node: import("element-plus/es/components/tree/src/model/node").default) => void;
            deregisterNode: (node: import("element-plus/es/components/tree/src/model/node").default) => void;
            getCheckedNodes: (leafOnly?: boolean | undefined, includeHalfChecked?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
            getCheckedKeys: (leafOnly?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeKey[];
            getHalfCheckedNodes: () => import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
            getHalfCheckedKeys: () => import("element-plus/es/components/tree/src/tree.type").TreeKey[];
            _getAllNodes: () => import("element-plus/es/components/tree/src/model/node").default[];
            updateChildren: (key: import("element-plus/es/components/tree/src/tree.type").TreeKey, data: import("element-plus/es/components/tree/src/tree.type").TreeData) => void;
            _setCheckedKeys: (key: import("element-plus/es/components/tree/src/tree.type").TreeKey, leafOnly: boolean | undefined, checkedKeys: {
                [key: string]: boolean;
            }) => void;
            setCheckedNodes: (array: import("element-plus/es/components/tree/src/model/node").default[], leafOnly?: boolean | undefined) => void;
            setCheckedKeys: (keys: import("element-plus/es/components/tree/src/tree.type").TreeKey[], leafOnly?: boolean | undefined) => void;
            setDefaultExpandedKeys: (keys: import("element-plus/es/components/tree/src/tree.type").TreeKey[]) => void;
            setChecked: (data: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData, checked: boolean, deep: boolean) => void;
            getCurrentNode: () => import("element-plus/es/components/tree/src/model/node").default;
            setCurrentNode: (currentNode: import("element-plus/es/components/tree/src/model/node").default) => void;
            setUserCurrentNode: (node: import("element-plus/es/components/tree/src/model/node").default, shouldAutoExpandParent?: boolean | undefined) => void;
            setCurrentNodeKey: (key?: import("element-plus/es/components/tree/src/tree.type").TreeKey | undefined, shouldAutoExpandParent?: boolean | undefined) => void;
        }>;
        root: import("vue").Ref<{
            id: number;
            text: string;
            checked: boolean;
            indeterminate: boolean;
            data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData;
            expanded: boolean;
            parent: any;
            visible: boolean;
            isCurrent: boolean;
            store: any;
            isLeafByUser: boolean;
            isLeaf: boolean;
            canFocus: boolean;
            level: number;
            loaded: boolean;
            childNodes: any[];
            loading: boolean;
            initialize: () => void;
            setData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
            readonly label: string;
            readonly key: import("element-plus/es/components/tree/src/tree.type").TreeKey;
            readonly disabled: boolean;
            readonly nextSibling: any;
            readonly previousSibling: any;
            contains: (target: import("element-plus/es/components/tree/src/model/node").default, deep?: boolean | undefined) => boolean;
            remove: () => void;
            insertChild: (child?: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
            insertBefore: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
            insertAfter: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
            removeChild: (child: import("element-plus/es/components/tree/src/model/node").default) => void;
            removeChildByData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
            expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
            doCreateChildren: (array: import("element-plus/es/components/tree/src/tree.type").TreeNodeData[], defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
            collapse: () => void;
            shouldLoadData: () => boolean;
            updateLeafState: () => void;
            setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
            getChildren: (forceInit?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
            updateChildren: () => void;
            loadData: (callback: (node: import("element-plus/es/components/tree/src/model/node").default) => void, defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
        }>;
        currentNode: import("vue").Ref<{
            id: number;
            text: string;
            checked: boolean;
            indeterminate: boolean;
            data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData;
            expanded: boolean;
            parent: any;
            visible: boolean;
            isCurrent: boolean;
            store: any;
            isLeafByUser: boolean;
            isLeaf: boolean;
            canFocus: boolean;
            level: number;
            loaded: boolean;
            childNodes: any[];
            loading: boolean;
            initialize: () => void;
            setData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
            readonly label: string;
            readonly key: import("element-plus/es/components/tree/src/tree.type").TreeKey;
            readonly disabled: boolean;
            readonly nextSibling: any;
            readonly previousSibling: any;
            contains: (target: import("element-plus/es/components/tree/src/model/node").default, deep?: boolean | undefined) => boolean;
            remove: () => void;
            insertChild: (child?: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
            insertBefore: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
            insertAfter: (child: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").FakeNode, ref: import("element-plus/es/components/tree/src/model/node").default) => void;
            removeChild: (child: import("element-plus/es/components/tree/src/model/node").default) => void;
            removeChildByData: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
            expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
            doCreateChildren: (array: import("element-plus/es/components/tree/src/tree.type").TreeNodeData[], defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
            collapse: () => void;
            shouldLoadData: () => boolean;
            updateLeafState: () => void;
            setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
            getChildren: (forceInit?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData | import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
            updateChildren: () => void;
            loadData: (callback: (node: import("element-plus/es/components/tree/src/model/node").default) => void, defaultProps?: import("element-plus/es/components/tree/src/tree.type").TreeNodeLoadedDefaultProps | undefined) => void;
        }>;
        dragState: import("vue").Ref<{
            showDropIndicator: boolean;
            draggingNode: null;
            dropNode: null;
            allowDrop: boolean;
            dropType: null;
        }>;
        el$: import("vue").Ref<import("element-plus/es/utils").Nullable<HTMLElement>>;
        dropIndicator$: import("vue").Ref<import("element-plus/es/utils").Nullable<HTMLElement>>;
        isEmpty: import("vue").ComputedRef<boolean>;
        filter: (value: any) => void;
        getNodeKey: (node: import("element-plus/es/components/tree/src/model/node").default) => any;
        getNodePath: (data: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
        getCheckedNodes: (leafOnly?: boolean | undefined, includeHalfChecked?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
        getCheckedKeys: (leafOnly?: boolean | undefined) => import("element-plus/es/components/tree/src/tree.type").TreeKey[];
        getCurrentNode: () => import("element-plus/es/components/tree/src/tree.type").TreeNodeData;
        getCurrentKey: () => any;
        setCheckedNodes: (nodes: import("element-plus/es/components/tree/src/model/node").default[], leafOnly?: boolean | undefined) => void;
        setCheckedKeys: (keys: import("element-plus/es/components/tree/src/tree.type").TreeKey[], leafOnly?: boolean | undefined) => void;
        setChecked: (data: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData, checked: boolean, deep: boolean) => void;
        getHalfCheckedNodes: () => import("element-plus/es/components/tree/src/tree.type").TreeNodeData[];
        getHalfCheckedKeys: () => import("element-plus/es/components/tree/src/tree.type").TreeKey[];
        setCurrentNode: (node: import("element-plus/es/components/tree/src/model/node").default, shouldAutoExpandParent?: boolean | undefined) => void;
        setCurrentKey: (key?: import("element-plus/es/components/tree/src/tree.type").TreeKey | undefined, shouldAutoExpandParent?: boolean | undefined) => void;
        t: import("element-plus").Translator;
        getNode: (data: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => import("element-plus/es/components/tree/src/model/node").default;
        remove: (data: import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
        append: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, parentNode: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
        insertBefore: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, refNode: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
        insertAfter: (data: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, refNode: import("element-plus/es/components/tree/src/tree.type").TreeKey | import("element-plus/es/components/tree/src/model/node").default | import("element-plus/es/components/tree/src/tree.type").TreeNodeData) => void;
        handleNodeExpand: (nodeData: import("element-plus/es/components/tree/src/tree.type").TreeNodeData, node: import("element-plus/es/components/tree/src/model/node").default, instance: import("vue").ComponentInternalInstance) => void;
        updateKeyChildren: (key: import("element-plus/es/components/tree/src/tree.type").TreeKey, data: import("element-plus/es/components/tree/src/tree.type").TreeData) => void;
    }, {}, {}, {}, {
        props: import("element-plus/es/components/tree/src/tree.type").TreeOptionProps;
        data: unknown[];
        checkStrictly: boolean;
        lazy: boolean;
        accordion: boolean;
        draggable: boolean;
        defaultExpandAll: boolean;
        indent: number;
        renderAfterExpand: boolean;
        showCheckbox: boolean;
        expandOnClickNode: boolean;
        checkOnClickNode: boolean;
        checkDescendants: boolean;
        autoExpandParent: boolean;
        highlightCurrent: boolean;
    }> | null>;
    treeviewRef: import("vue").Ref<IData | null>;
    treeNodeTextInputRef: import("vue").Ref<IData | null>;
    treeData: import("vue").ComputedRef<ITreeNodeData[]>;
    treeRefreshKey: import("vue").Ref<string>;
    editingNodeKey: import("vue").Ref<string | null>;
    editingNodeText: import("vue").Ref<string | null>;
    cascadeSelect: import("vue").Ref<boolean>;
    findNodeData: typeof findNodeData;
    onCheck: (nodeData: ITreeNodeData, opts: {
        checkedNodes: ITreeNodeData[];
    }) => void;
    onNodeClick: (nodeData: ITreeNodeData, evt: MouseEvent) => void;
    onNodeDbClick: (nodeData: ITreeNodeData, evt: MouseEvent) => void;
    onNodeContextmenu: (nodeData: ITreeNodeData, evt: MouseEvent) => Promise<void>;
    loadData: (item: IData, callback: (nodes: IData[]) => void) => Promise<void>;
    renderContextMenu: (nodeModel: IDETreeNode, nodeData: ITreeNodeData) => JSX.Element | null | undefined;
    renderCounter: (nodeModel: IDETreeNode) => JSX.Element | null | undefined;
    updateNodeExpand: (data: IData, expanded: boolean) => void;
    onInput: (value: string) => void;
    allowDrop: (draggingNode: IData, dropNode: IData, type: AllowDropType) => boolean;
    allowDrag: (draggingNode: IData) => boolean;
    handleDrop: (draggingNode: IData, dropNode: IData, dropType: NodeDropType) => void;
    onNodeTextEditBlur: () => Promise<void>;
    calcNodeAbility: (nodeData: ITreeNodeData) => boolean;
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
    provider: {
        type: PropType<IControlProvider>;
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
        default: undefined;
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
        default: undefined;
    };
    navigational: {
        type: BooleanConstructor;
        default: undefined;
    };
    defaultExpandedKeys: {
        type: PropType<string[]>;
    };
    loadDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    params: IParams;
    mdctrlActiveMode: number;
    singleSelect: boolean;
    navigational: boolean;
    loadDefault: boolean;
}, {}>;
