/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-param-reassign */
import {
  ControlVO,
  GridController,
  GridRowState,
  GridUAColumnController,
  IControlProvider,
  IMDControlController,
} from '@ibiz-template/runtime';
import { IDEGrid, IDEGridColumn, IUIActionGroupDetail } from '@ibiz/model-core';
import { TableColumnCtx } from 'element-plus';
import { Ref, computed, ref, watch } from 'vue';

/**
 * 表格部件props接口
 *
 * @author zk
 * @date 2023-09-26 06:09:51
 * @export
 * @interface IGridProps
 */
export interface IGridProps {
  // 模型
  modelData: IDEGrid;
  // 上下文
  context: IContext;
  // 视图参数
  params: IParams;
  // 适配器
  provider: IControlProvider;
  // 部件行数据默认激活模式
  mdctrlActiveMode?: number;
  // 是否单选
  singleSelect?: boolean;
  // 是否开启行编辑
  rowEditOpen?: boolean;
  // 是否是本地数据模式
  isSimple: boolean;
  // 本地数据模式data
  data: Array<IData>;
  // 默认加载
  loadDefault: boolean;
}

/**
 * 使用分页组件
 *
 * @author lxm
 * @date 2022-09-06 17:09:09
 * @export
 * @param {GridController} c
 * @returns {*}
 */
export function usePagination(c: IMDControlController): {
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
  onPageRefresh: () => void;
} {
  function onPageChange(page: number): void {
    if (!page || page === c.state.curPage) {
      return;
    }
    c.state.curPage = page;
    c.load();
  }

  function onPageSizeChange(size: number): void {
    if (!size || size === c.state.size) {
      return;
    }
    c.state.size = size;

    // 当page为第一页的时候切换size不会触发pageChange，需要自己触发加载
    if (c.state.curPage === 1) {
      c.load();
    }
  }

  function onPageRefresh(): void {
    c.load();
  }
  return { onPageChange, onPageSizeChange, onPageRefresh };
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
export function useITableEvent(c: GridController): {
  tableRef: Ref<IData | undefined>;
  onRowClick: (
    data: ControlVO,
    _column: IData,
    event: MouseEvent,
  ) => Promise<void>;
  onDbRowClick: (data: ControlVO) => void;
  onSelectionChange: (selection: ControlVO[]) => void;
  onSortChange: (opts: {
    _column: IData;
    prop: string;
    order: 'ascending' | 'descending';
  }) => void;
  handleRowClassName: ({ row }: { row: IData }) => string;
  handleHeaderCellClassName: ({
    _row,
    column,
    _rowIndex,
    _columnIndex,
  }: {
    _row: IData;
    column: IData;
    _rowIndex: number;
    _columnIndex: number;
  }) => string;
} {
  const tableRef = ref<IData>();
  let forbidChange = false;

  async function onRowClick(
    data: ControlVO,
    _column: IData,
    _event: MouseEvent,
  ): Promise<void> {
    // 单行编辑模式下，行点击会触发
    if (ibiz.config.grid.editShowMode === 'row' && c.model.enableRowEdit) {
      const row = c.findRowState(data);
      if (row && row.showRowEdit !== true) {
        // 开启行编辑
        await c.switchRowEdit(row, true);
      }
    } else {
      c.onRowClick(data as ControlVO);
    }
  }

  function onDbRowClick(data: ControlVO): void {
    c.onDbRowClick(data);
  }

  function onSelectionChange(selection: ControlVO[]): void {
    // 选中数据在回显的时候屏蔽值变更事件，否则会递归。
    if (!forbidChange) {
      c.setSelection(selection);
    }
  }

  // 监听选中数据，操作表格来界面回显选中效果。
  watch(
    [
      () => tableRef.value,
      (): boolean => c.state.isLoaded,
      (): IData[] => c.state.selectedData,
    ],
    ([table, isLoaded, newVal]) => {
      if (!isLoaded || !table) {
        return;
      }
      if (c.state.singleSelect) {
        // 单选，选中效果回显。
        if (newVal[0]) {
          tableRef.value!.setCurrentRow(newVal[0], true);
        } else {
          tableRef.value!.setCurrentRow();
        }
      } else {
        forbidChange = true;
        tableRef.value!.clearSelection();
        newVal.forEach(item => tableRef.value!.toggleRowSelection(item, true));
        forbidChange = false;
      }
    },
  );

  // 排序变更回调。
  function onSortChange(opts: {
    _column: IData;
    prop: string;
    order: 'ascending' | 'descending';
  }): void {
    const { prop, order } = opts;
    const fieldName = c.fieldColumns[prop].model.appDEFieldId;
    let order1: 'asc' | 'desc' | undefined;
    if (order === 'ascending') {
      order1 = 'asc';
    } else if (order === 'descending') {
      order1 = 'desc';
    }
    c.setSort(fieldName, order1);
    c.load();
  }

  // todo 用自己的ns类名去压制，把element原来的样式清除
  function handleRowClassName({ row }: { row: IData }): string {
    let activeClassName = '';
    if (c.state.selectedData.length > 0) {
      c.state.selectedData.forEach((data: IData) => {
        if (data === row) {
          // current-row用于多选激活样式与单选保持一致，有背景色
          activeClassName = 'current-row';
        }
      });
    }
    const rowState = c.findRowState(row);
    if (rowState?.showRowEdit) {
      activeClassName += ' editing-row';
    }
    if (row.srfkey) {
      activeClassName += ` id-${row.srfkey}`;
    }
    return activeClassName;
  }

  // 表头单元格的 className 的回调方法
  function handleHeaderCellClassName({
    _row,
    column,
    _rowIndex,
    _columnIndex,
  }: {
    _row: IData;
    column: IData;
    _rowIndex: number;
    _columnIndex: number;
  }): string {
    const columnModel = c.model.degridColumns?.find(gridColumn => {
      return gridColumn.codeName === column.property;
    });
    if (
      columnModel &&
      columnModel.headerSysCss &&
      columnModel.headerSysCss.cssName
    ) {
      return columnModel.headerSysCss.cssName;
    }
    return '';
  }

  watch(
    () => c.state.sortQuery,
    newVal => {
      // 监听排序查询条件，手动触发element-plus表格的排序
      if (newVal) {
        const prop = c.state.sortQuery.split(',')[0];
        const sortDir = c.state.sortQuery.split(',')[1];
        if (tableRef.value && prop && sortDir) {
          const order = sortDir === 'desc' ? 'descending' : 'ascending';
          setTimeout(() => {
            tableRef.value?.sort(prop, order);
          });
        }
      }
    },
  );

  return {
    tableRef,
    onRowClick,
    onDbRowClick,
    onSelectionChange,
    onSortChange,
    handleRowClassName,
    handleHeaderCellClassName,
  };
}

/**
 * 使用表格分页组件
 *
 * @author lxm
 * @date 2022-09-06 17:09:09
 * @export
 * @param {GridController} c
 * @returns {*}
 */
export function useAppGridPagination(c: GridController): {
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
  onPageRefresh: () => void;
} {
  function onPageChange(page: number): void {
    if (!page || page === c.state.curPage) {
      return;
    }
    c.state.curPage = page;
    c.load();
  }

  function onPageSizeChange(size: number): void {
    if (!size || size === c.state.size) {
      return;
    }
    c.state.size = size;

    // 当page为第一页的时候切换size不会触发pageChange，需要自己触发加载
    if (c.state.curPage === 1) {
      c.load();
    }
  }

  function onPageRefresh(): void {
    c.load();
  }
  return { onPageChange, onPageSizeChange, onPageRefresh };
}

export function useAppGridBase(
  c: GridController,
  props: IGridProps,
): {
  tableData: Ref<IData>;
  renderColumns: Ref<IDEGridColumn[]>;
  defaultSort: Ref<IData>;
  summaryMethod: ({
    columns,
  }: {
    columns: TableColumnCtx<IData>[];
    data: IData[];
  }) => string[];
} {
  const initSimpleData = (): void => {
    if (!props.data) {
      return;
    }
    c.state.items = props.data;
    c.state.rows = props.data.map(item => {
      const row = new GridRowState(new ControlVO(item), c);
      return row;
    });
  };

  const defaultSort = computed(() => {
    const fieldColumn = Object.values(c.fieldColumns).find(
      item => item.model.appDEFieldId === c.model.minorSortAppDEFieldId,
    );
    return {
      prop: fieldColumn?.model.codeName,
      order:
        c.model.minorSortDir?.toLowerCase() === 'desc'
          ? 'descending'
          : 'ascending',
    };
  });

  // 选中数据回显
  c.evt.on('onCreated', async () => {
    if (props.isSimple) {
      initSimpleData();
      c.state.isLoaded = true;
    }
  });

  watch(
    () => props.data,
    () => {
      if (props.isSimple) {
        initSimpleData();
      }
    },
    {
      deep: true,
    },
  );

  // 表格数据，items和rows更新有时间差，用rows来获取items
  const tableData = computed(() => {
    const { state } = c;
    if (c.model.enableGroup) {
      const result: IData[] = [];
      state.groups.forEach(item => {
        if (!item.children.length) {
          return;
        }
        const children = [...item.children];
        const first = children.shift();
        result.push({
          srfkey: first?.srfkey || item.caption,
          isGroupData: true,
          caption: item.caption,
          first,
          children,
        });
      });
      return result;
    }
    return state.rows.map(row => row.data);
  });

  // 实际绘制的表格列
  const renderColumns = computed(() => {
    if (c.isMultistageHeader) {
      return c.model.degridColumns || [];
    }
    const columns: IDEGridColumn[] = [];
    c.state.columnStates.forEach(item => {
      if (item.hidden) {
        return;
      }
      const columnModel =
        c.fieldColumns[item.key]?.model || c.uaColumns[item.key]?.model;
      if (columnModel) {
        columns.push(columnModel);
      }
    });
    return columns;
  });

  /**
   * 求和计算回调
   * @author lxm
   * @date 2023-08-07 05:21:31
   * @return {*}  {string[]}
   */
  const summaryMethod = ({
    columns,
  }: {
    columns: TableColumnCtx<IData>[];
    data: IData[];
  }): string[] => {
    return columns.map((item, index) => {
      if (index === 0) {
        return c.aggTitle;
      }
      return c.state.aggResult[item.property];
    });
  };
  return { tableData, renderColumns, defaultSort, summaryMethod };
}

export const onStopPropagation = (e: MouseEvent): void => {
  e.stopPropagation();
};
export const onActionClick = async (
  detail: IUIActionGroupDetail,
  event: MouseEvent,
  controller: GridUAColumnController,
  row: GridRowState,
): Promise<void> => {
  controller.grid.setSelection([row.data]);
  await controller.onActionClick(detail, row, event);
};
