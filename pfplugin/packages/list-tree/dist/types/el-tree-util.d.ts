import { ITreeController, ITreeNodeData } from '@ibiz-template/runtime';
import { ElTree } from 'element-plus';
import { NodeDropType } from 'element-plus/es/components/tree/src/tree.type';
import { Ref } from 'vue';
/**
 * 根据id查找树节点数据对象
 * @author lxm
 * @date 2023-09-28 03:45:35
 * @export
 * @param {string} key (数据的_uuid 或者 _id)
 * @param {ITreeController} c
 * @return {*}  {(ITreeNodeData | undefined)}
 */
export declare function findNodeData(key: string, c: ITreeController): ITreeNodeData | undefined;
export declare function useElTreeUtil(treeRef: Ref<InstanceType<typeof ElTree> | null>, c: ITreeController): {
    getTreeInstance: () => {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
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
        }> & Omit<{
            readonly data: unknown[];
            readonly renderAfterExpand: boolean;
            readonly checkStrictly: boolean;
            readonly defaultExpandAll: boolean;
            readonly expandOnClickNode: boolean;
            readonly checkOnClickNode: boolean;
            readonly checkDescendants: boolean;
            readonly autoExpandParent: boolean;
            readonly showCheckbox: boolean;
            readonly draggable: boolean;
            readonly props: import("element-plus/es/components/tree/src/tree.type").TreeOptionProps;
            readonly lazy: boolean;
            readonly highlightCurrent: boolean;
            readonly accordion: boolean;
            readonly indent: number;
            readonly emptyText?: string | undefined;
            readonly nodeKey?: string | undefined;
            readonly defaultCheckedKeys?: import("element-plus/es/components/tree/src/tree.type").TreeKey[] | undefined;
            readonly defaultExpandedKeys?: import("element-plus/es/components/tree/src/tree.type").TreeKey[] | undefined;
            readonly currentNodeKey?: string | number | undefined;
            readonly renderContent?: Function | undefined;
            readonly allowDrag?: Function | undefined;
            readonly allowDrop?: Function | undefined;
            readonly load?: import("element-plus/es/components/tree/src/tree.type").LoadFunction | undefined;
            readonly filterNodeMethod?: import("element-plus/es/components/tree/src/tree.type").FilterNodeMethodFunction | undefined;
            readonly icon?: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions> | undefined;
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
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
            defaultCheckedKeys: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").TreeKey[]>;
            defaultExpandedKeys: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").TreeKey[]>;
            currentNodeKey: import("vue").PropType<string | number>;
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
                type: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").TreeOptionProps>;
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
            load: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").LoadFunction>;
            filterNodeMethod: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").FilterNodeMethodFunction>;
            accordion: BooleanConstructor;
            indent: {
                type: NumberConstructor;
                default: number;
            };
            icon: {
                type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
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
        }, "data" | "renderAfterExpand" | "checkStrictly" | "defaultExpandAll" | "expandOnClickNode" | "checkOnClickNode" | "checkDescendants" | "autoExpandParent" | "showCheckbox" | "draggable" | "props" | "lazy" | "highlightCurrent" | "accordion" | "indent">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "current-change" | "node-expand" | "check-change" | "node-click" | "node-contextmenu" | "node-collapse" | "check" | "node-drag-start" | "node-drag-end" | "node-drop" | "node-drag-leave" | "node-drag-enter" | "node-drag-over", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
            defaultCheckedKeys: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").TreeKey[]>;
            defaultExpandedKeys: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").TreeKey[]>;
            currentNodeKey: import("vue").PropType<string | number>;
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
                type: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").TreeOptionProps>;
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
            load: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").LoadFunction>;
            filterNodeMethod: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").FilterNodeMethodFunction>;
            accordion: BooleanConstructor;
            indent: {
                type: NumberConstructor;
                default: number;
            };
            icon: {
                type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
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
            store: Ref<{
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
            root: Ref<{
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
            currentNode: Ref<{
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
            dragState: Ref<{
                showDropIndicator: boolean;
                draggingNode: null;
                dropNode: null;
                allowDrop: boolean;
                dropType: null;
            }>;
            el$: Ref<import("element-plus/es/utils").Nullable<HTMLElement>>;
            dropIndicator$: Ref<import("element-plus/es/utils").Nullable<HTMLElement>>;
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
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("current-change" | "node-expand" | "check-change" | "node-click" | "node-contextmenu" | "node-collapse" | "check" | "node-drag-start" | "node-drag-end" | "node-drop" | "node-drag-leave" | "node-drag-enter" | "node-drag-over")[], string, {
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
        }, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
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
        defaultCheckedKeys: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").TreeKey[]>;
        defaultExpandedKeys: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").TreeKey[]>;
        currentNodeKey: import("vue").PropType<string | number>;
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
            type: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").TreeOptionProps>;
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
        load: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").LoadFunction>;
        filterNodeMethod: import("vue").PropType<import("element-plus/es/components/tree/src/tree.type").FilterNodeMethodFunction>;
        accordion: BooleanConstructor;
        indent: {
            type: NumberConstructor;
            default: number;
        };
        icon: {
            type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
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
    } & import("vue").ShallowUnwrapRef<{
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
        store: Ref<{
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
        root: Ref<{
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
        currentNode: Ref<{
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
        dragState: Ref<{
            showDropIndicator: boolean;
            draggingNode: null;
            dropNode: null;
            allowDrop: boolean;
            dropType: null;
        }>;
        el$: Ref<import("element-plus/es/utils").Nullable<HTMLElement>>;
        dropIndicator$: Ref<import("element-plus/es/utils").Nullable<HTMLElement>>;
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
    }> & {} & import("vue").ComponentCustomProperties & {};
    updateUI: () => void;
    triggerNodeExpand: (id: string) => boolean | undefined;
};
/**
 * 格式化dropType
 * @author lxm
 * @date 2023-12-14 02:13:10
 * @export
 * @param {NodeDropType} dropType
 * @return {*}  {('inner' | 'prev' | 'next')}
 */
export declare function formatNodeDropType(dropType: NodeDropType): 'inner' | 'prev' | 'next';
