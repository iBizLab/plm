import { ControlVO, GridController, IControlProvider, IMDControlController } from '@ibiz-template/runtime';
import { IDEGrid, IDEGridColumn } from '@ibiz/model-core';
import { TableColumnCtx } from 'element-plus';
import { Ref } from 'vue';
/**
 * 表格部件props接口
 *
 * @author zk
 * @date 2023-09-26 06:09:51
 * @export
 * @interface IGridProps
 */
export interface IGridProps {
    modelData: IDEGrid;
    context: IContext;
    params: IParams;
    provider: IControlProvider;
    mdctrlActiveMode?: number;
    singleSelect?: boolean;
    rowEditOpen?: boolean;
    isSimple: boolean;
    data: Array<IData>;
    loadDefault: boolean;
}
/**
 * 适配element的table的事件
 *
 * @author lxm
 * @date 2022-09-05 21:09:42
 * @export
 * @param {GridController} c
 * @returns {*}
 */
export declare function useITableEvent(c: GridController): {
    tableRef: Ref<IData | undefined>;
    treeGirdData: Ref<IData[]>;
    curSelectedData: Ref<IData[]>;
    onRowClick: (data: ControlVO, _column: IData, event: MouseEvent) => Promise<void>;
    onDbRowClick: (data: ControlVO) => void;
    onSortChange: (opts: {
        _column: IData;
        prop: string;
        order: 'ascending' | 'descending';
    }) => void;
    handleRowClassName: ({ row }: {
        row: IData;
    }) => string;
    handleHeaderCellClassName: ({ _row, column, _rowIndex, _columnIndex, }: {
        _row: IData;
        column: IData;
        _rowIndex: number;
        _columnIndex: number;
    }) => string;
    isSelected: (row: IData) => boolean;
    getSelection: () => IData[];
};
/**
 * 使用表格分页组件
 *
 * @author lxm
 * @date 2022-09-06 17:09:09
 * @export
 * @param {GridController} c
 * @returns {*}
 */
export declare function useAppGridPagination(c: GridController): {
    onPageChange: (page: number) => void;
    onPageSizeChange: (size: number) => void;
    onPageRefresh: () => void;
};
export declare function useAppGridBase(c: GridController, props: IGridProps): {
    tableData: Ref<IData[]>;
    renderColumns: Ref<IDEGridColumn[]>;
    defaultSort: Ref<IData>;
    summaryMethod: ({ columns, }: {
        columns: TableColumnCtx<IData>[];
        data: IData[];
    }) => string[];
    headerDragend: (newWidth: number, oldWidth: number, column: IData) => void;
};
export declare function usePagination(c: IMDControlController): {
    onPageChange: (page: number) => void;
    onPageSizeChange: (size: number) => void;
    onPageRefresh: () => void;
};
