/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IControlProvider, ScriptFactory } from '@ibiz-template/runtime';
import {
  useControlController,
  useNamespace,
  useUIStore,
} from '@ibiz-template/vue3-util';
import { IDEGrid, IDEGridColumn, IDEGridGroupColumn } from '@ibiz/model-core';
import {
  PropType,
  VNode,
  VNodeArrayChildren,
  defineComponent,
  h,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  ref,
  renderSlot,
  resolveComponent,
  watch,
} from 'vue';
import {
  IGridProps,
  useAppGridBase,
  useITableEvent,
  useAppGridPagination,
} from './grid-control.util';
import { BaselineCompareController } from './baseline-compare.controller';
import './baseline-compare.scss';

/**
 * 绘制成员的attrs
 * @author lxm
 * @date 2024-03-19 03:48:00
 * @param {IDEFormDetail} model
 * @return {*}  {IParams}
 */
function renderAttrs(model: IDEGridColumn, params: IParams): IParams {
  const attrs: IParams = {};
  model.controlAttributes?.forEach(item => {
    if (item.attrName && item.attrValue) {
      attrs[item.attrName!] = ScriptFactory.execSingleLine(item.attrValue!, {
        ...params,
      });
    }
  });
  return attrs;
}

// 绘制除分组列之外的表格列
export function renderColumn(
  c: BaselineCompareController,
  model: IDEGridColumn,
  renderColumns: IDEGridColumn[],
  index: number,
): VNode | null {
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
  // 表格列自定义
  return (
    <el-table-column
      label={model.caption}
      prop={columnName}
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
          if (
            model.columnType === 'UAGRIDCOLUMN' &&
            !['EDIT', 'UNEDIT'].includes(elRow.actionType)
          ) {
            return null;
          }
          if (rowState) {
            const comp = resolveComponent(c.providers[columnName!].component);
            return h(comp, {
              controller: columnC,
              row: rowState,
              key: elRow.tempsrfkey + columnName,
              attrs: renderAttrs(model, {
                ...c.getEventArgs(),
                data: rowState.data,
              }),
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
  c: BaselineCompareController,
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

export const BaselineCompare = defineComponent({
  name: 'BaselineCompare',
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
  setup(props, { slots }) {
    const c = useControlController<BaselineCompareController>(
      (...args) => new BaselineCompareController(...args),
    );
    const ns = useNamespace('baseline-compare');

    const { zIndex } = useUIStore();
    c.state.zIndex = zIndex.increment();
    const curTableRef = ref(); // 当前表格
    const compareTableRef = ref(); // 比较表格
    const select = ref(); // 比较版本 下拉选中值
    const baseSelect = ref(); // 基线版本，从视图参数拿数据
    const compareGroup = ref([]); // 比较组

    // 如果视图参数有值，那么就以视图参数的值为选中值
    if (c.params[c.state.compareline]) {
      select.value = c.params[c.state.compareline];
    }
    if (c.params[c.state.baseline]) {
      baseSelect.value = c.params[c.state.baseline];
    }

    const {
      onRowClick,
      onDbRowClick,
      onSelectionChange,
      onSortChange,
      handleRowClassName,
      handleHeaderCellClassName,
    } = useITableEvent(c);
    const { onPageChange, onPageRefresh, onPageSizeChange } =
      useAppGridPagination(c);

    const renderNoData = (): VNode | null => {
      // 未加载不显示无数据
      const { isLoaded } = c.state;
      if (isLoaded) {
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
    const { tableData, renderColumns, defaultSort, summaryMethod } =
      useAppGridBase(c, props as IGridProps);

    // 绘制表格列
    const renderTableColumn = (
      model: IDEGridColumn,
      index: number,
      compareIndex: number,
    ): VNode | null => {
      if (compareIndex === 0 && model.columnType === 'UAGRIDCOLUMN') {
        return null;
      }
      if (slots[model.id!]) {
        return renderSlot(slots, model.id!, {
          model,
          data: c.state.items,
        });
      }
      return renderChildColumn(c, model, renderColumns.value, index);
    };

    const customRowClass = (data: IData) => {
      const activeClassName = handleRowClassName({ row: data.row });
      if (data.row && data.row.actionType) {
        const rowType = `compareline-type-${data.row.actionType.toLowerCase()}`;
        return `${activeClassName} ${rowType}`;
      }
      return activeClassName;
    };

    // 下拉选择列表值改变
    const selectChange = (value: string) => {
      if (baseSelect.value && value) {
        c.load({
          isInitialLoad: true,
          viewParam: {
            [c.state.baseline]: baseSelect.value,
            [c.state.compareline]: value,
          },
        });
      }
    };

    // 绘制下拉选择比对版本
    const renderSelectCompare = () => {
      return (
        <el-select
          v-model={select.value}
          fit-input-width
          onChange={selectChange}
        >
          {c.state.compareList.map((list: IData) => {
            return (
              <el-option value={list.id} label={list.name}>
                <div class={ns.e('dropdown-select')}>
                  <span>{list.name}</span>
                  {list.id === baseSelect.value ? (
                    <div class={ns.em('dropdown-select', 'last')}>最新版本</div>
                  ) : null}
                </div>
              </el-option>
            );
          })}
        </el-select>
      );
    };

    // 绘制图例
    const renderLegendIcon = () => {
      return (
        <div class={ns.e('legen-icon')}>
          <div class={ns.em('legen-icon', 'add')}>新增</div>
          <div class={ns.em('legen-icon', 'change')}>修改</div>
          <div class={ns.em('legen-icon', 'del')}>删除</div>
        </div>
      );
    };

    // 计算滚动高度并同步
    const computeTopAndCogradient = (event: Event) => {
      if (event) {
        const tableScrollTop = (event.target as any)?.scrollTop;
        curTableRef.value.setScrollTop(tableScrollTop);
        compareTableRef.value.setScrollTop(tableScrollTop);
      }
    };

    // 添加监听
    const addScrollListen = (target: any) => {
      if (target) {
        target.addEventListener('scroll', computeTopAndCogradient);
      }
    };

    // 生命周期-mounted
    onMounted(async () => {
      // 增加滚动监听，保持两边表格滚动一致
      setTimeout(() => {
        const curwarp =
          curTableRef.value?.$refs.bodyWrapper.getElementsByClassName(
            'el-scrollbar__wrap',
          )?.[0];
        const comparewarp =
          compareTableRef.value?.$refs.bodyWrapper.getElementsByClassName(
            'el-scrollbar__wrap',
          )?.[0];
        addScrollListen(curwarp);
        addScrollListen(comparewarp);
      }, 1200);
    });

    watch(
      () => c.state.compareList,
      (newVal: any) => {
        // 视图参数没有传值则默认拿主基线的值
        if (newVal && !select.value) {
          select.value = baseSelect.value;
        }
        if (baseSelect.value && select.value && newVal.length > 0) {
          c.load({
            isInitialLoad: true,
            viewParam: {
              [c.state.baseline]: baseSelect.value,
              [c.state.compareline]: select.value,
            },
          });
        }
      },
      {
        immediate: true,
        deep: true,
      },
    );

    // 自定义行样式
    const CustomCellClass = (data: IData) => {
      if (data.column && data.column.type === 'index') {
        return 'baseline-index';
      }
      if (data.column && data.column.property === 'uagridcolumn1') {
        return 'baseline-uaaction';
      }
    };

    // 自定义表格头行样式
    const customHeaderRowClass = (data: IData) => {
      const header = handleHeaderCellClassName({
        _row: data.row,
        _columnIndex: data._columnIndex,
        _rowIndex: data.rowIndex,
        column: data.column,
      });
      if (data.column && data.column.type === 'index') {
        return `${header} baseline-header baseline-index`;
      }
      return `${header} baseline-header`;
    };

    // 生命周期-onbeforeunmount移除滚动监听
    onBeforeUnmount(() => {
      const curwarp =
        curTableRef.value?.$refs.bodyWrapper.getElementsByClassName(
          'el-scrollbar__wrap',
        )?.[0];
      const comparewarp =
        compareTableRef.value?.$refs.bodyWrapper.getElementsByClassName(
          'el-scrollbar__wrap',
        )?.[0];
      if (curwarp) {
        curwarp.removeEventListener('scroll', computeTopAndCogradient);
      }
      if (comparewarp) {
        comparewarp.removeEventListener('scroll', computeTopAndCogradient);
      }
    });

    onUnmounted(() => {
      zIndex.decrement();
    });

    return {
      c,
      ns,
      curTableRef,
      compareTableRef,
      tableData,
      renderColumns,
      CustomCellClass,
      renderTableColumn,
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
      customHeaderRowClass,
      renderSelectCompare,
      renderLegendIcon,
      customRowClass,
      compareGroup,
      defaultSort,
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
          this.ns.is('single-select', state.singleSelect),
          this.ns.is('empty', state.items.length === 0),
          this.ns.is('enable-customized', this.c.model.enableCustomized),
        ]}
        controller={this.c}
      >
        {
          <div class={[this.ns.b(), this.ns.is('show-page', enablePagingBar)]}>
            <div class={this.ns.e('select')}>
              <div class={this.ns.em('select', 'title')}>
                {this.c.view.model.caption}
              </div>
              <div class={this.ns.em('select', 'right')}>
                {this.renderSelectCompare()}
                <span class={this.ns.em('select', 'separate')}>|</span>
                {this.renderLegendIcon()}
              </div>
            </div>
            <div class={this.ns.e('grid')}>
              {state.compareGroup.map((_group: IData, index: number) => {
                return (
                  <div
                    class={[
                      this.ns.em('grid', _group.id),
                      this.ns.e('version'),
                    ]}
                  >
                    <div class={this.ns.em('version', 'title')}>
                      {_group.name}
                    </div>
                    <div class={this.ns.em('version', 'compare-grid')}>
                      <el-table
                        ref={index === 0 ? 'curTableRef' : 'compareTableRef'}
                        class={this.ns.e('table')}
                        default-sort={this.defaultSort}
                        border
                        show-header={!hideHeader}
                        show-summary={this.c.enableAgg}
                        summary-method={this.summaryMethod}
                        highlight-current-row={state.singleSelect}
                        cell-class-name={this.CustomCellClass}
                        row-class-name={this.customRowClass}
                        header-cell-class-name={this.customHeaderRowClass}
                        row-key={'tempsrfkey'}
                        data={_group.data}
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
                              index === 0 && (
                                <el-table-column
                                  class-name={this.ns.e('row-index')}
                                  label='#'
                                  type='index'
                                  align='center'
                                  width='55'
                                ></el-table-column>
                              ),
                              this.renderColumns.map((model, _index) => {
                                return this.renderTableColumn(
                                  model,
                                  _index,
                                  index,
                                );
                              }),
                            ];
                          },
                        }}
                      </el-table>
                      {this.c.model.enableCustomized &&
                        !hideHeader &&
                        index === 1 && (
                          <div class={this.ns.b('setting-box')}>
                            <iBizGridSetting
                              columnStates={state.columnStates}
                              controller={this.c}
                            ></iBizGridSetting>
                          </div>
                        )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        }
        {enablePagingBar && (
          <iBizPagination
            total={state.total}
            curPage={state.curPage}
            size={state.size}
            totalPages={(state as any).totalPages}
            onChange={this.onPageChange}
            onPageSizeChange={this.onPageSizeChange}
            onPageRefresh={this.onPageRefresh}
          ></iBizPagination>
        )}
      </iBizControlBase>
    );
  },
});
