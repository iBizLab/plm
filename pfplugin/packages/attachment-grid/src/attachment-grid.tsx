/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useControlController, useNamespace } from '@ibiz-template/vue3-util';
import {
  defineComponent,
  h,
  PropType,
  resolveComponent,
  VNode,
  VNodeArrayChildren,
} from 'vue';
import {
  IDEGrid,
  IDEGridColumn,
  IDEGridGroupColumn,
  IUIActionGroupDetail,
} from '@ibiz/model-core';
import {
  GridUAColumnController,
  IColumnState,
  IControlProvider,
} from '@ibiz-template/runtime';
import {
  IGridProps,
  onActionClick,
  onStopPropagation,
  useAppGridBase,
  useITableEvent,
  usePagination,
} from './grid-control.util';
import { useRowEditPopover } from './use-row-edit-popover';
import { AttachGridController } from './attachment-grid.controller';
import './attachment-grid.scss';

// 绘制除分组列之外的表格列
export function renderColumn(
  c: AttachGridController,
  model: IDEGridColumn,
  renderColumns: IDEGridColumn[],
  index: number,
): VNode | null {
  if (model.hideDefault) {
    return null;
  }
  const { codeName: columnName, width } = model;
  const columnC = c.columns[columnName!];
  const columnState = c.state.columnStates.find(
    item => item.key === columnName,
  )!;

  // 如果没有配置自适应列，则最后一列变为自适应列
  const widthFlexGrow =
    columnC.isAdaptiveColumn ||
    (!c.hasAdaptiveColumn && index === renderColumns.length - 1);
  const widthName = widthFlexGrow ? 'min-width' : 'width';
  let className = '';
  if (model.columnType === 'UAGRIDCOLUMN') {
    className = 'attachment-ua-column';
  }
  // 表格列自定义
  return (
    <el-table-column
      label={model.caption}
      prop={columnName}
      class-name={className}
      label-class-name={className}
      {...{ [widthName]: width }}
      fixed={columnState.fixed}
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
            if (model.columnType === 'UAGRIDCOLUMN') {
              const ns = useNamespace('grid-ua-column');
              const uiactionGroupDetails =
                (columnC as GridUAColumnController).model.deuiactionGroup
                  ?.uiactionGroupDetails || [];
              const dropdownActions = uiactionGroupDetails.filter(
                detail => detail.actionLevel !== 250,
              );
              const commonActions = uiactionGroupDetails.filter(
                detail => detail.actionLevel === 250,
              );
              return (
                <div class={[ns.b(), columnC.model.cellSysCss?.cssName]}>
                  {commonActions.length && (
                    <iBizActionToolbar
                      onDblclick={onStopPropagation}
                      onClick={onStopPropagation}
                      action-details={commonActions}
                      actions-state={
                        rowState.uaColStates[columnC.model.codeName!]
                      }
                      onActionClick={(
                        detail: IUIActionGroupDetail,
                        event: MouseEvent,
                      ) => {
                        onActionClick(
                          detail,
                          event,
                          columnC as GridUAColumnController,
                          rowState,
                        );
                      }}
                    ></iBizActionToolbar>
                  )}
                  {dropdownActions.length && (
                    <iBizActionToolbar
                      onDblclick={onStopPropagation}
                      onClick={onStopPropagation}
                      mode='dropdown'
                      caption='· · ·'
                      action-details={dropdownActions}
                      actions-state={
                        rowState.uaColStates[columnC.model.codeName!]
                      }
                      onActionClick={(
                        detail: IUIActionGroupDetail,
                        event: MouseEvent,
                      ) => {
                        onActionClick(
                          detail,
                          event,
                          columnC as GridUAColumnController,
                          rowState,
                        );
                      }}
                    ></iBizActionToolbar>
                  )}
                </div>
              );
            }
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
  c: AttachGridController,
  model: IDEGridColumn,
  renderColumns: IDEGridColumn[],
  index: number,
): VNode | null {
  if (model.columnType === 'GROUPGRIDCOLUMN') {
    const childColumns =
      (model as IDEGridGroupColumn).degridColumns?.filter(
        item => !item.hideDefault,
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

export const AttachmentGridControl = defineComponent({
  name: 'AttachmentGridControl',
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
    const c = useControlController(
      (...args) => new AttachGridController(...args),
    );
    const ns = useNamespace(`control-${c.model.controlType!.toLowerCase()}`);
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
      return null;
    };
    const { tableData, renderColumns, defaultSort, summaryMethod } =
      useAppGridBase(c, props as IGridProps);

    const { renderPopover } = useRowEditPopover(tableRef, c);

    const onColumnStateClick = (columnState: IColumnState) => {
      c.setColumnVisible(columnState);
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

    return {
      c,
      ns,
      tableRef,
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
      renderPopover,
      defaultSort,
      onColumnStateClick,
      renderBatchToolBar,
    };
  },
  render() {
    if (!this.c.state.isCreated) {
      return;
    }
    const { state } = this.c;
    const { hideHeader, enablePagingBar } = this.c.model;
    return (
      <iBizControlBase
        class={[
          this.ns.is('show-header', !hideHeader),
          this.ns.is('enable-page', enablePagingBar),
          this.ns.is('enable-group', this.c.model.enableGroup),
        ]}
        controller={this.c}
      >
        {
          <el-table
            ref={'tableRef'}
            class={[this.ns.e('table'), this.ns.is('attachment', true)]}
            default-sort={this.defaultSort}
            border
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
        }
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
        {this.c.model.enableCustomized && !hideHeader && (
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
