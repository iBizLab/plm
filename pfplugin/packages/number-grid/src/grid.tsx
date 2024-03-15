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
  resolveComponent,
  VNode,
  VNodeArrayChildren,
  watch,
} from 'vue';
import {
  IDEGrid,
  IDEGridColumn,
  IDEGridGroupColumn,
  IDETreeGrid,
} from '@ibiz/model-core';
import { GridController, IControlProvider } from '@ibiz-template/runtime';
import { toNumber, isArray } from 'lodash-es';
import {
  IGridProps,
  useAppGridBase,
  useITableEvent,
  usePagination,
} from './grid-control.util';
import { useRowEditPopover } from './use-row-edit-popover';
import { NumberTreeGridController } from './tree-grid.controller';
import { NumberGridController } from './grid.controller';
import './grid.scss';

// 绘制除分组列之外的表格列
export function renderColumn(
  c: GridController,
  model: IDEGridColumn,
  renderColumns: IDEGridColumn[],
  index: number,
): VNode | null {
  const { codeName: columnName, width } = model;
  const columnC = c.columns[columnName!];
  const columnState = c.state.columnStates.find(
    item => item.key === columnName,
  )!;

  const hasAdaptiveColumn = renderColumns.find(
    column => c.columns[column.codeName!].isAdaptiveColumn,
  );

  // 如果没有配置自适应列，则最后一列变为自适应列
  const widthFlexGrow =
    columnC.isAdaptiveColumn ||
    (!hasAdaptiveColumn && index === renderColumns.length - 1);

  const widthName = widthFlexGrow ? 'min-width' : 'width';

  // 为树表时，当前列type值为index时，展开列将在下一列绘制
  let type = 'default';
  if (
    (c as IParams)?.expandColumnIndex &&
    index < toNumber((c as IParams)?.expandColumnIndex)
  ) {
    type = 'index';
  }
  // 表格列自定义
  return (
    <el-table-column
      label={model.caption}
      prop={columnName}
      {...{ [widthName]: width }}
      fixed={columnState.fixed}
      sortable={model.enableSort ? 'custom' : false}
      align={model.align?.toLowerCase() || 'center'}
      type={type}
    >
      {{
        default: ({ row }: IData): VNode | null => {
          const elRow = row; // element表格数据
          if (row.isGroupData) {
            if (index !== 0) {
              return null;
            }
            return (
              <div class='group-column'>
                <ion-icon class='group-icon' name={row.groupIcon}></ion-icon>
                {row.caption}
              </div>
            );
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

export const NumberGridControl = defineComponent({
  name: 'IBizNumberGridControl',
  props: {
    modelData: {
      type: Object as PropType<IDEGrid | IDETreeGrid>,
      required: true,
    },
    context: { type: Object as PropType<IContext>, required: true },
    params: { type: Object as PropType<IParams>, default: () => ({}) },
    provider: { type: Object as PropType<IControlProvider> },
    mdctrlActiveMode: { type: Number, default: undefined },
    singleSelect: { type: Boolean, default: undefined },
    rowEditOpen: { type: Boolean, default: undefined },
    isSimple: { type: Boolean, required: false },
    data: { type: Array<IData>, required: false },
    loadDefault: { type: Boolean, default: true },
  },
  setup(props) {
    let c!: NumberGridController | NumberTreeGridController;

    const initController = (): void => {
      if (props.modelData.controlType === 'TREEGRID') {
        c = useControlController<NumberTreeGridController>(
          (...args) => new NumberTreeGridController(...args),
        );
      } else {
        c = useControlController<NumberGridController>(
          (...args) => new NumberGridController(...args),
        );
      }
    };

    initController();

    const { zIndex } = useUIStore();
    c.state.zIndex = zIndex.increment();

    // 继承表格部件样式
    const ns = useNamespace(`control-grid`);

    // 绑定树表格样式
    const ns2 = computed(() => {
      if (props.modelData.controlType === 'TREEGRID') {
        return useNamespace(`control-${c.model.controlType!.toLowerCase()}`);
      }
      return undefined;
    });

    const ns3 = useNamespace('number-grid');

    const {
      tableRef,
      onRowClick,
      onDbRowClick,
      onSortChange,
      isSelected,
      curSelectedData,
      getSelection,
      handleRowClassName,
      treeGirdItems,
      treeGirdData,
      handleHeaderCellClassName,
    } = useITableEvent(c);

    const { onPageChange, onPageRefresh, onPageSizeChange } = usePagination(c);

    const showTreeGrid = computed(() => {
      if (props.modelData.controlType === 'TREEGRID') {
        return (c as NumberTreeGridController).state.showTreeGrid;
      }
      return false;
    });

    //  触发节点加载数据
    const loadData = async (
      item: IData,
      _row: unknown,
      callback: (nodes: IData[]) => void,
    ): Promise<void> => {
      const items = treeGirdItems.value.filter(
        data =>
          item[(c as NumberTreeGridController).treeGridValueField] ===
          data[(c as NumberTreeGridController).treeGridParentField],
      );
      callback(items);
    };

    let oldShowTr: HTMLElement[] = [];

    const getShowTr = (): HTMLElement[] => {
      const show: HTMLElement[] = [];
      if (tableRef.value) {
        const tableEl = tableRef.value.$el as HTMLElement;
        const allTr = tableEl.getElementsByClassName(
          'el-table__row',
        ) as unknown as HTMLElement[];
        allTr.forEach(element => {
          if (element.style.display !== 'none') {
            show.push(element);
          }
        });
      }
      return show;
    };

    const setNumber = (time: number = 0): void => {
      setTimeout(() => {
        const newShowTr = getShowTr();
        if (newShowTr.length !== oldShowTr.length) {
          oldShowTr = newShowTr;
          newShowTr.forEach((element, index) => {
            const child = element.firstChild as HTMLElement;
            if (child.className.includes('ibiz-number-grid__first-column')) {
              const numberCaption = child.getElementsByClassName(
                'ibiz-number-grid__number--caption',
              )[0];
              if (numberCaption) {
                (numberCaption as HTMLElement).innerText = `${
                  (c.state.curPage - 1) * c.state.size + (index + 1)
                }`;
              }
            }
          });
        }
      }, time);
    };

    const onExpandChange = (row: IData, state: boolean): void => {
      setNumber();
      (c as IData).setRowExpand(row, state);
    };

    onMounted(() => {
      const { controlType, enableGroup } = c.model;
      if (controlType === 'GRID' && enableGroup) {
        setNumber(1000);
      }
    });

    watch(
      () => showTreeGrid.value,
      (newVal, oldVal) => {
        // 切换显示模式的时候清除所有的选中项
        if (newVal !== oldVal) {
          curSelectedData.value = [];
          c.setSelection([]);
        }
      },
    );

    const calcTreeGridSelectable = (): IData[] => {
      const selectable: IData[] = [...treeGirdData.value];
      const setSelectable = (parent: IData): void => {
        const items = treeGirdItems.value.filter(
          data =>
            data[(c as NumberTreeGridController).treeGridParentField] &&
            parent[(c as NumberTreeGridController).treeGridValueField] ===
              data[(c as NumberTreeGridController).treeGridParentField],
        );
        if (items.length > 0) {
          selectable.push(...items);
          items.forEach(item => {
            setSelectable(item);
          });
        }
      };
      treeGirdData.value.forEach(item => {
        setSelectable(item);
      });
      return selectable;
    };

    const getAllSelectable = (): IData[] => {
      let selectable: IData[] = [];
      if (showTreeGrid.value) {
        selectable = calcTreeGridSelectable();
      } else {
        selectable = [...tableData.value];
        if (c.model.enableGroup) {
          tableData.value.forEach(item => {
            selectable.push(...item._children);
          });
        }
      }
      return selectable;
    };

    const isAllSelected = (): boolean => {
      const rows = getAllSelectable();
      let state: boolean = false;
      if (rows.length > 0) {
        const noSelection = rows.filter(row => !isSelected(row));
        state = noSelection.length === 0;
      }
      return state;
    };

    const toggleAllSelection = (): void => {
      const rows = getAllSelectable();
      const selection: IData[] = curSelectedData.value.filter(
        item => !rows.find(row => row.tempsrfkey === item.tempsrfkey),
      );
      if (!isAllSelected()) {
        selection.push(...rows);
      }
      curSelectedData.value = selection;
      c.setSelection(getSelection());
    };

    const toggleRowSelection = (row: IData): void => {
      toggleRowStatus(curSelectedData.value, row);
      c.setSelection(getSelection());
    };

    const onClickEvent = (e: MouseEvent): void => {
      e.stopPropagation();
    };

    const toggleRowStatus = (statusArr: IData[], row: IData): void => {
      const { controlType, enableGroup } = c.model;
      const index = statusArr.findIndex(s => s.tempsrfkey === row.tempsrfkey);
      const included = index !== -1;
      if (included) {
        statusArr.splice(index, 1);
        if (controlType === 'GRID' && enableGroup) {
          if (isArray(row._children)) {
            (row._children as IData[]).forEach(child => {
              const _index = statusArr.indexOf(child);
              if (_index !== -1) {
                statusArr.splice(_index, 1);
              }
            });
          } else {
            // 计算该组是否取消选中
            tableData.value.forEach(item => {
              const noSelected = (item._children as IData[]).find(
                child => !statusArr.includes(child),
              );
              const _index = statusArr.findIndex(
                s => s.tempsrfkey === item.tempsrfkey,
              );
              if (noSelected && _index !== -1) {
                statusArr.splice(_index, 1);
              }
            });
          }
        }
      } else {
        statusArr.push(row);
        if (controlType === 'GRID' && enableGroup) {
          if (isArray(row._children)) {
            (row._children as IData[]).forEach(child => {
              const _index = statusArr.indexOf(child);
              if (_index === -1) {
                statusArr.push(child);
              }
            });
          } else {
            // 计算该组是否全部选中
            tableData.value.forEach(item => {
              const noSelected = (item._children as IData[]).find(
                child => !statusArr.includes(child),
              );
              const _index = statusArr.findIndex(
                s => s.tempsrfkey === item.tempsrfkey,
              );
              if (!noSelected && _index === -1) {
                statusArr.unshift(item);
              }
            });
          }
        }
      }
    };

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
            ns3.b('batch-toolbar'),
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

    /**
     * 绘制第一列
     *
     */
    const renderFirstColumn = (): JSX.Element => {
      const widthName = renderColumns.value.length ? 'width' : 'min-width';
      return (
        <el-table-column
          class-name={ns3.e('first-column')}
          {...{ [widthName]: 80 }}
          align='center'
          fixed='left'
          type='index'
        >
          {{
            header: () => {
              return (
                <div class={ns3.e('number')}>
                  {c.state.singleSelect ? (
                    <span>序号</span>
                  ) : (
                    <el-checkbox
                      size='large'
                      indeterminate={
                        c.state.selectedData.length > 0 && !isAllSelected()
                      }
                      modelValue={isAllSelected()}
                      onChange={() => toggleAllSelection()}
                    />
                  )}
                </div>
              );
            },
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            default: ({ row, column, $index }: IData) => {
              const index = (c.state.curPage - 1) * c.state.size + ($index + 1);
              if (c.state.singleSelect) {
                return (
                  <div class={ns3.e('number')}>
                    <span>{index}</span>
                  </div>
                );
              }
              return (
                <div
                  class={ns3.e('number')}
                  onClick={(e: MouseEvent) => onClickEvent(e)}
                >
                  <span class={ns3.em('number', 'caption')}>{index}</span>
                  <el-checkbox
                    size='large'
                    class={ns3.em('number', 'checkbox')}
                    modelValue={isSelected(row)}
                    onChange={() => toggleRowSelection(row)}
                  />
                </div>
              );
            },
          }}
        </el-table-column>
      );
    };

    onUnmounted(() => {
      zIndex.decrement();
    });

    return {
      c,
      ns,
      ns2,
      ns3,
      tableRef,
      tableData,
      treeGirdData,
      loadData,
      showTreeGrid,
      renderColumns,
      onDbRowClick,
      onRowClick,
      onExpandChange,
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
      renderBatchToolBar,
      renderFirstColumn,
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
          this.ns.b(),
          this.ns2?.b(),
          this.ns3.b(),
          this.ns.is('show-header', !hideHeader),
          this.ns.is('enable-page', enablePagingBar),
          this.ns.is('enable-group', this.c.model.enableGroup),
          this.ns.is('single-select', state.singleSelect),
          this.ns.is('enable-customized', this.c.model.enableCustomized),
        ]}
        controller={this.c}
      >
        {
          <el-table
            border
            ref={'tableRef'}
            row-key={'tempsrfkey'}
            class={this.ns.e('table')}
            default-sort={this.defaultSort}
            show-header={!hideHeader}
            show-summary={this.c.enableAgg}
            summary-method={this.summaryMethod}
            highlight-current-row={state.singleSelect}
            row-class-name={this.handleRowClassName}
            header-cell-class-name={this.handleHeaderCellClassName}
            data={this.showTreeGrid ? this.treeGirdData : this.tableData}
            onRowClick={this.onRowClick}
            onRowDblclick={this.onDbRowClick}
            onSortChange={this.onSortChange}
            onExpandChange={this.onExpandChange}
            tooltip-effect={'light'}
            default-expand-all={this.c.defaultExpandAll}
            tree-props={{ children: '_children', hasChildren: '_hasChildren' }}
            load={this.loadData}
            lazy={this.showTreeGrid}
          >
            {{
              empty: this.renderNoData,
              default: (): VNodeArrayChildren => {
                return [
                  this.renderFirstColumn(),
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
          <div class={[this.ns.b('setting-box'), this.ns3.b('setting-box')]}>
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
