import { PropType, VNode } from 'vue';
import { IDEGrid, IDEGridColumn } from '@ibiz/model-core';
import { GridController, IControlProvider } from '@ibiz-template/runtime';
import { NumberTreeGridController } from './tree-grid.controller';
import { NumberGridController } from './grid.controller';
export declare function renderColumn(c: GridController, model: IDEGridColumn, renderColumns: IDEGridColumn[], index: number): VNode | null;
export declare function renderChildColumn(c: GridController, model: IDEGridColumn, renderColumns: IDEGridColumn[], index: number): VNode | null;
export declare const NumberGridControl: import("vue").DefineComponent<{
    modelData: {
        type: PropType<IDEGrid>;
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
    mdctrlActiveMode: {
        type: NumberConstructor;
        default: undefined;
    };
    singleSelect: {
        type: BooleanConstructor;
        default: undefined;
    };
    rowEditOpen: {
        type: BooleanConstructor;
        default: undefined;
    };
    isSimple: {
        type: BooleanConstructor;
        required: false;
    };
    data: {
        type: {
            (arrayLength: number): IData[];
            (...items: IData[]): IData[];
            new (arrayLength: number): IData[];
            new (...items: IData[]): IData[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        required: false;
    };
    loadDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    c: NumberTreeGridController | NumberGridController;
    ns: import("@ibiz-template/core").Namespace;
    ns2: import("vue").ComputedRef<import("@ibiz-template/core").Namespace | undefined>;
    ns3: import("@ibiz-template/core").Namespace;
    tableRef: import("vue").Ref<IData | undefined>;
    tableData: import("vue").Ref<IData[]>;
    treeGirdData: import("vue").Ref<IData[]>;
    showTreeGrid: import("vue").ComputedRef<boolean>;
    renderColumns: import("vue").Ref<IDEGridColumn[]>;
    onDbRowClick: (data: import("@ibiz-template/runtime").ControlVO) => void;
    onRowClick: (data: import("@ibiz-template/runtime").ControlVO, _column: IData, event: MouseEvent) => Promise<void>;
    onExpandChange: (row: IData, state: boolean) => void;
    onSortChange: (opts: {
        _column: IData;
        prop: string;
        order: "ascending" | "descending";
    }) => void;
    onPageChange: (page: number) => void;
    onPageSizeChange: (size: number) => void;
    onPageRefresh: () => void;
    handleRowClassName: ({ row }: {
        row: IData;
    }) => string;
    handleHeaderCellClassName: ({ _row, column, _rowIndex, _columnIndex, }: {
        _row: IData;
        column: IData;
        _rowIndex: number;
        _columnIndex: number;
    }) => string;
    renderNoData: () => VNode | null;
    summaryMethod: ({ columns, }: {
        columns: import("element-plus/es/components/table/src/table-column/defaults").TableColumnCtx<IData>[];
        data: IData[];
    }) => string[];
    headerDragend: (newWidth: number, oldWidth: number, column: IData) => void;
    renderPopover: () => JSX.Element[];
    defaultSort: import("vue").Ref<IData>;
    renderBatchToolBar: () => VNode | undefined;
    renderFirstColumn: () => JSX.Element;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelData: {
        type: PropType<IDEGrid>;
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
    mdctrlActiveMode: {
        type: NumberConstructor;
        default: undefined;
    };
    singleSelect: {
        type: BooleanConstructor;
        default: undefined;
    };
    rowEditOpen: {
        type: BooleanConstructor;
        default: undefined;
    };
    isSimple: {
        type: BooleanConstructor;
        required: false;
    };
    data: {
        type: {
            (arrayLength: number): IData[];
            (...items: IData[]): IData[];
            new (arrayLength: number): IData[];
            new (...items: IData[]): IData[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        required: false;
    };
    loadDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    params: IParams;
    mdctrlActiveMode: number;
    singleSelect: boolean;
    rowEditOpen: boolean;
    isSimple: boolean;
    loadDefault: boolean;
}, {}>;
