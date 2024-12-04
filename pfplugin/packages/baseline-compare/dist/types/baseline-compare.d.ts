import { IControlProvider } from '@ibiz-template/runtime';
import { IDEGrid, IDEGridColumn } from '@ibiz/model-core';
import { PropType, VNode } from 'vue';
import { BaselineCompareController } from './baseline-compare.controller';
export declare function renderColumn(c: BaselineCompareController, model: IDEGridColumn, renderColumns: IDEGridColumn[], index: number): VNode | null;
export declare function renderChildColumn(c: BaselineCompareController, model: IDEGridColumn, renderColumns: IDEGridColumn[], index: number): VNode | null;
export declare const BaselineCompare: import("vue").DefineComponent<{
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
    c: BaselineCompareController;
    ns: import("@ibiz-template/core").Namespace;
    curTableRef: import("vue").Ref<any>;
    compareTableRef: import("vue").Ref<any>;
    tableData: import("vue").Ref<IData>;
    renderColumns: import("vue").Ref<IDEGridColumn[]>;
    CustomCellClass: (data: IData) => "baseline-index" | "baseline-uaaction" | undefined;
    renderTableColumn: (model: IDEGridColumn, index: number, compareIndex: number) => VNode | null;
    onDbRowClick: (data: import("@ibiz-template/runtime").ControlVO) => void;
    onRowClick: (data: import("@ibiz-template/runtime").ControlVO, _column: IData, event: MouseEvent) => Promise<void>;
    onSelectionChange: (selection: import("@ibiz-template/runtime").ControlVO[]) => void;
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
    customHeaderRowClass: (data: IData) => string;
    renderSelectCompare: () => JSX.Element;
    renderLegendIcon: () => JSX.Element;
    customRowClass: (data: IData) => string;
    compareGroup: import("vue").Ref<never[]>;
    defaultSort: import("vue").Ref<IData>;
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
