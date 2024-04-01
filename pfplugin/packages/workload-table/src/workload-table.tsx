/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  useControlController,
  useNamespace,
  useUIStore,
} from '@ibiz-template/vue3-util';
import {
  computed,
  defineComponent,
  h,
  onMounted,
  onUnmounted,
  PropType,
  Ref,
  ref,
  resolveComponent,
  VNode,
  VNodeArrayChildren,
} from 'vue';
import { IDEGrid, IDEGridColumn, IDEGridGroupColumn } from '@ibiz/model-core';
import { GridController, IControlProvider } from '@ibiz-template/runtime';
import {
  IGridProps,
  useAppGridBase,
  useGridHeaderStyle,
  useITableEvent,
  usePagination,
} from './grid-control.util';
import { useRowEditPopover } from './use-row-edit-popover';
import GanttColumns from './gantt-columns/gantt-columns';
import { WorkloadTableController } from './workload-table.controller';
import './workload-table.scss';

// 绘制除分组列之外的表格列
export function renderColumn(
  c: GridController,
  model: IDEGridColumn,
  renderColumns: IDEGridColumn[],
  index: number,
): VNode | null {
  const { codeName: columnName, width } = model;
  const columnC = c.columns[columnName!];

  const widthName = columnC.isAdaptiveColumn ? 'min-width' : 'width';
  // 表格列自定义
  return (
    <el-table-column
      label={model.caption}
      prop={columnName}
      {...{ [widthName]: width }}
      fixed='left'
      sortable={model.enableSort ? 'custom' : false}
      align={model.align?.toLowerCase() || 'center'}
    >
      {{
        default: ({ row }: IData): VNode | null => {
          let elRow = row; // element表格数据
          if (row.isGroupData) {
            // 有第一条数据时，分组那一行绘制第一条数据
            elRow = row.first;
          }
          const rowState = c.findRowState(elRow);
          if (rowState) {
            const comp = resolveComponent(c.providers[columnName!].component);
            return h(comp, {
              controller: columnC,
              row: rowState,
              key: elRow.tempsrfkey + columnName,
            });
          }
          return null;
        },
      }}
    </el-table-column>
  );
}

// 绘制表格列
export function renderChildColumn(
  c: GridController,
  model: IDEGridColumn,
  renderColumns: IDEGridColumn[],
  index: number,
): VNode | null {
  if (model.columnType === 'GROUPGRIDCOLUMN') {
    const childColumns =
      (model as IDEGridGroupColumn).degridColumns?.filter(
        item => !item.hideDefault && !item.hiddenDataItem,
      ) || [];
    const { width } = model;
    const align = model.align?.toLowerCase() || 'center';
    return (
      <el-table-column
        prop={model.codeName}
        label={model.caption}
        min-width={width}
        align={align}
      >
        {{
          default: (): VNodeArrayChildren => {
            return childColumns.map((column, index2) => {
              return renderChildColumn(c, column, renderColumns, index2);
            });
          },
        }}
      </el-table-column>
    );
  }
  return renderColumn(c, model, renderColumns, index);
}

export const WorkloadTableControl = defineComponent({
  name: 'IBizWorkloadTableControl',
  props: {
    modelData: { type: Object as PropType<IDEGrid>, required: true },
    context: { type: Object as PropType<IContext>, required: true },
    params: { type: Object as PropType<IParams>, default: () => ({}) },
    provider: { type: Object as PropType<IControlProvider> },
    /**
     * 部件行数据默认激活模式
     * - 0 不激活
     * - 1 单击激活
     * - 2 双击激活(默认值)
     *
     * @type {(number | 0 | 1 | 2)}
     */
    mdctrlActiveMode: { type: Number, default: undefined },
    singleSelect: { type: Boolean, default: undefined },
    rowEditOpen: { type: Boolean, default: undefined },
    isSimple: { type: Boolean, required: false },
    data: { type: Array<IData>, required: false },
    loadDefault: { type: Boolean, default: true },
  },
  setup(props) {
    const c = useControlController<WorkloadTableController>(
      (...args) => new WorkloadTableController(...args),
    );
    const ns = useNamespace(`control-${c.model.controlType!.toLowerCase()}`);

    const ns2 = useNamespace(`workload-table`);

    const { zIndex } = useUIStore();
    c.state.zIndex = zIndex.increment();

    const ganttRef: Ref<IData | undefined> = ref(undefined);

    const {
      tableRef,
      onRowClick,
      onDbRowClick,
      onSelectionChange,
      onSortChange,
      handleRowClassName,
      handleHeaderCellClassName,
    } = useITableEvent(c);

    const { onPageChange, onPageRefresh, onPageSizeChange } = usePagination(c);

    const { headerCssVars } = useGridHeaderStyle(tableRef, ns);

    const renderNoData = (): VNode | null => {
      // 未加载不显示无数据
      const { isLoaded } = c.state;
      if (isLoaded) {
        const quickToolbar = c.model.controls?.find(
          item => item.name === `${c.model.name}_quicktoolbar`,
        );
        if (quickToolbar) {
          return (
            <iBizToolbarControl
              modelData={quickToolbar}
              context={c.context}
              params={c.params}
              class={ns.b('quick-toolbar')}
            ></iBizToolbarControl>
          );
        }
        return (
          <iBizNoData
            text={c.model.emptyText}
            emptyTextLanguageRes={c.model.emptyTextLanguageRes}
          ></iBizNoData>
        );
      }
      // 给null 表格会绘制默认的无数据
      return <div></div>;
    };
    const {
      tableData,
      renderColumns,
      defaultSort,
      summaryMethod,
      ganttSummaryMethod,
    } = useAppGridBase(c, props as IGridProps);

    const { renderPopover } = useRowEditPopover(tableRef, c);

    const ganttWrapRef = computed(() => {
      return ganttRef.value?.scrollBarRef.wrapRef;
    });

    const tableWrapRef = computed(() => {
      return tableRef.value?.scrollBarRef.wrapRef;
    });

    const getLeftWidth = (init: boolean = false): number => {
      let width: number = 0;
      if (init) {
        renderColumns.value.forEach(c => (width += c.width || 0));
      } else {
        const columns: IData[] = tableRef.value?.store.states.columns.value;
        if (columns?.length > 0) {
          columns.forEach(c => (width += c.realWidth || c.width));
        }
      }
      return width;
    };

    const calcTableWidth = (init: boolean = false) => {
      setTimeout(() => {
        const tableEl = tableRef.value?.$el as HTMLElement;
        if (tableEl) {
          tableEl.style.width = `${getLeftWidth(init)}px`;
        }
        const ganttEl = ganttRef.value?.$el as HTMLElement;
        if (ganttEl) {
          ganttEl.style.width = `calc(100% - ${getLeftWidth(init)}px)`;
        }
      }, 300);
    };

    const handleScroll = (name: 'gantt' | 'table') => {
      if (name === 'gantt') {
        tableRef.value!.setScrollTop(ganttWrapRef.value!.scrollTop);
      } else {
        ganttRef.value!.setScrollTop(tableWrapRef.value!.scrollTop);
      }
    };

    const handleGanttScroll = () => {
      handleScroll('gantt');
    };

    const handleTableScroll = () => {
      handleScroll('table');
    };

    const onHeaderDragend = () => {
      calcTableWidth();
    };

    // 绘制批操作工具栏
    const renderBatchToolBar = (): VNode | undefined => {
      const batchToolbar = c.model.controls?.find(item => {
        return item.name === `${c.model.name!}_batchtoolbar`;
      });
      if (!batchToolbar || c.state.singleSelect) {
        return;
      }
      return (
        <div
          class={[
            ns.b('batch-toolbar'),
            ns.is('show', c.state.selectedData.length > 0),
          ]}
        >
          <div class={ns.b('batch-toolbar-content')}>
            <div class={ns.b('batch-toolbar-text')}>
              已选中{c.state.selectedData.length}项
            </div>
            <div class={ns.b('batch-toolbar-separator')}>|</div>
            <iBizToolbarControl
              modelData={batchToolbar}
              context={c.context}
              params={c.params}
              class={ns.b('batch-toolbar-items')}
            ></iBizToolbarControl>
          </div>
        </div>
      );
    };

    onMounted(() => {
      calcTableWidth(true);
      setTimeout(() => {
        if (ganttWrapRef.value) {
          ganttWrapRef.value.addEventListener('scroll', handleGanttScroll);
        }
        if (tableWrapRef.value) {
          tableWrapRef.value.addEventListener('scroll', handleTableScroll);
        }
      }, 300);
    });

    onUnmounted(() => {
      zIndex.decrement();
      if (ganttWrapRef.value) {
        ganttWrapRef.value.removeEventListener('scroll', handleGanttScroll);
      }
      if (tableWrapRef.value) {
        tableWrapRef.value.removeEventListener('scroll', handleTableScroll);
      }
    });

    return {
      c,
      ns,
      ns2,
      tableRef,
      ganttRef,
      tableData,
      renderColumns,
      onDbRowClick,
      onRowClick,
      onSelectionChange,
      onSortChange,
      onPageChange,
      onPageSizeChange,
      onPageRefresh,
      handleRowClassName,
      handleHeaderCellClassName,
      renderNoData,
      summaryMethod,
      ganttSummaryMethod,
      renderPopover,
      defaultSort,
      renderBatchToolBar,
      headerCssVars,
      onHeaderDragend,
    };
  },
  render() {
    if (!this.c.state.isCreated) {
      return;
    }
    const { state } = this.c;
    const { hideHeader, enablePagingBar, enableCustomized, enableGroup } =
      this.c.model;
    return (
      <iBizControlBase
        class={[
          this.ns2.b(),
          this.ns.is('show-header', !hideHeader),
          this.ns.is('enable-page', enablePagingBar),
          this.ns.is('enable-group', enableGroup),
          this.ns.is('single-select', state.singleSelect),
          this.ns.is('empty', state.items.length === 0),
          this.ns.is('enable-customized', enableCustomized),
        ]}
        controller={this.c}
        style={this.headerCssVars}
      >
        <div class={this.ns2.e('container')}>
          <el-table
            ref={'tableRef'}
            class={[this.ns.e('table'), this.ns2.e('left')]}
            default-sort={this.defaultSort}
            border
            onHeaderDragend={this.onHeaderDragend}
            show-header={!hideHeader}
            show-summary={this.c.enableAgg}
            summary-method={this.summaryMethod}
            highlight-current-row={state.singleSelect}
            row-class-name={this.handleRowClassName}
            header-cell-class-name={this.handleHeaderCellClassName}
            row-key={'tempsrfkey'}
            data={this.tableData}
            onRowClick={this.onRowClick}
            onRowDblclick={this.onDbRowClick}
            onSelectionChange={this.onSelectionChange}
            onSortChange={this.onSortChange}
            tooltip-effect={'light'}
          >
            {{
              empty: this.renderNoData,
              default: (): VNodeArrayChildren => {
                return [
                  !state.singleSelect && (
                    <el-table-column
                      class-name={this.ns.e('selection')}
                      type='selection'
                      width='55'
                    ></el-table-column>
                  ),
                  this.renderColumns.map((model, index) => {
                    return renderChildColumn(
                      this.c,
                      model,
                      this.renderColumns,
                      index,
                    );
                  }),
                ];
              },
              append: () => {
                return this.renderPopover();
              },
            }}
          </el-table>
          <el-table
            ref={'ganttRef'}
            class={[this.ns.e('table'), this.ns2.e('right')]}
            default-sort={this.defaultSort}
            border
            show-header={!hideHeader}
            show-summary={this.c.enableAgg}
            summary-method={this.ganttSummaryMethod}
            highlight-current-row={state.singleSelect}
            row-class-name={this.handleRowClassName}
            header-cell-class-name={this.handleHeaderCellClassName}
            row-key={'tempsrfkey'}
            data={this.tableData}
            onRowClick={this.onRowClick}
            onRowDblclick={this.onDbRowClick}
            onSelectionChange={this.onSelectionChange}
            onSortChange={this.onSortChange}
            tooltip-effect={'light'}
          >
            {{
              empty: () => {
                return <div></div>;
              },
              default: () => {
                return [
                  <GanttColumns
                    controller={this.c}
                    columns={this.c.state.ganttColumns}
                  ></GanttColumns>,
                ];
              },
            }}
          </el-table>
        </div>
        {enablePagingBar && (
          <iBizPagination
            total={state.total}
            curPage={state.curPage}
            size={state.size}
            onChange={this.onPageChange}
            onPageSizeChange={this.onPageSizeChange}
            onPageRefresh={this.onPageRefresh}
          ></iBizPagination>
        )}
        {enableCustomized && !hideHeader && (
          <div class={this.ns.b('setting-box')}>
            <iBizGridSetting
              columnStates={state.columnStates}
              controller={this.c}
            ></iBizGridSetting>
          </div>
        )}
        {this.renderBatchToolBar()}
      </iBizControlBase>
    );
  },
});
