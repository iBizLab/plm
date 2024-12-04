/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useControlController, useNamespace } from '@ibiz-template/vue3-util';
import {
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  PropType,
  Ref,
  ref,
} from 'vue';
import { createUUID } from 'qx-util';
import { IDEChart } from '@ibiz/model-core';
import { init } from 'echarts';
import { ControlController, IControlProvider } from '@ibiz-template/runtime';
import { ChartGridController } from './chart-grid-controller';
import './chart-grid.scss';

const ChartGrid = defineComponent({
  name: 'ChartGrid',
  props: {
    modelData: { type: Object as PropType<IDEChart>, required: true },
    context: { type: Object as PropType<IContext>, required: true },
    params: { type: Object as PropType<IParams>, default: () => ({}) },
    provider: { type: Object as PropType<IControlProvider> },
    mdctrlActiveMode: { type: Number, default: undefined },
    loadDefault: { type: Boolean, default: true },
  },
  setup() {
    const c = useControlController(
      (...args: ConstructorParameters<typeof ControlController>) =>
        new ChartGridController(...args),
    );
    const ns = useNamespace('chart-grid');
    const chartRef = ref();
    const tableRef = ref();
    const isCollapse = ref(false);
    const maxHeight = ref(320);
    const uuid = createUUID();

    const showTotal = ref(false);
    const showPercent = ref(false);
    const totalRow: Ref<any[]> = ref([]);
    const exporting = ref(false);

    const gridpos = ref('bottom');

    if (c.model.dechartDataGrid?.dataGridPos) {
      gridpos.value = c.model.dechartDataGrid.dataGridPos.toLocaleLowerCase();
    }

    c._evt.on('onExportCanvas', async () => {
      exporting.value = true;
      await nextTick();
      const content: HTMLElement | null = document.querySelector(`.${ns.b()}`);
      if (content) {
        // 设置高度，防止截图缺失
        let totalHeight = 0;
        const { children } = content;
        for (let i = 0; i < children.length; i++) {
          totalHeight += (children[i] as HTMLElement).offsetHeight;
        }
        content.style.height = `${totalHeight}px`;
        const fileName = c.view.model.caption;
        await (ibiz.util as IData).html2canvas.exportCanvas(content, {
          fileName,
        });
        content.style.height = '';
      }
      exporting.value = false;
    });

    const setHeight = async () => {
      await nextTick();
      const el = document.getElementById(uuid);
      if (el) {
        const height = el.offsetHeight;
        maxHeight.value = height;
      }
    };

    onMounted(() => {
      const chart = init(chartRef.value);
      c.initChart(chart);
      window.addEventListener('resize', setHeight);
      setHeight();
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', setHeight);
    });

    const headerStyle = () => {
      const style = {};
      Object.assign(style, {
        height: '50px',
        color: '#333',
        fontWeight: 400,
        backgroundColor: '#F5F5F5',
      });
      return style;
    };

    const collapse = async () => {
      isCollapse.value = !isCollapse.value;
      await nextTick();
      c.resizeChart();
    };

    const handleTotal = () => {
      const headers = (c.state as any).gridHeaders;
      if (!headers.length) {
        return null;
      }
      let total = 0;
      const totalObj = {
        srfpercent: '100%',
      };
      (c.state as any).cloneItems.forEach((item: any) => {
        total += Number(item.count);
      });
      const tempid = headers[0].id;
      Object.assign(totalObj, {
        [tempid]: '合计',
        count: total,
      });
      return totalObj;
    };

    // 处理表格数据
    const handleGridData = () => {
      const items = (c.state as any).cloneItems;
      if (showTotal.value) {
        const tempObj = handleTotal();
        return [tempObj, ...items];
      }
      return items;
    };

    // 计算表格高度
    const computeHeight = () => {
      if (['top', 'bottom'].includes(gridpos.value)) {
        return maxHeight.value / 2 - 16;
      }
      return maxHeight.value - 16;
    };

    const renderCollapseIcon = () => {
      if (isCollapse.value) {
        if (['left', 'right'].includes(gridpos.value)) {
          return <i class='fa fa-angle-right' aria-hidden='true'></i>;
        }
        return <i class='fa fa-angle-up' aria-hidden='true'></i>;
      }
      return <i class='fa fa-angle-down' aria-hidden='true'></i>;
    };

    return {
      c,
      ns,
      uuid,
      exporting,
      headerStyle,
      isCollapse,
      collapse,
      chartRef,
      showTotal,
      showPercent,
      tableRef,
      maxHeight,
      totalRow,
      gridpos,
      handleTotal,
      computeHeight,
      renderCollapseIcon,
      handleGridData,
    };
  },
  render() {
    return (
      <iBizControlBase controller={this.c}>
        <div
          class={[
            this.ns.b(),
            this.ns.b(this.gridpos),
            this.ns.is('exporting', this.exporting),
          ]}
          id={this.uuid}
        >
          <el-empty
            class={[
              this.ns.e('empty'),
              this.ns.is('no-data', this.c.state.items.length === 0),
            ]}
            description='暂无数据'
          />
          <div
            ref='chartRef'
            class={[
              this.ns.e('chart'),
              this.ns.be(this.gridpos, 'chart'),
              this.ns.is('no-data', this.c.state.items.length === 0),
            ]}
          >
            {ibiz.i18n.t('control.chart.chartPlaceholder')}
          </div>
          <div
            class={[
              this.ns.e('grid'),
              this.ns.be(this.gridpos, 'grid'),
              { [this.ns.e('is-colllapse')]: this.isCollapse },
            ]}
          >
            {(this.c.state as any).showGridCaption ? (
              <div class={[this.ns.e('caption')]}>
                <div class={this.ns.em('caption', 'title')}>表格</div>
                <div class={this.ns.em('caption', 'collapse-end')}>
                  <div class={this.ns.em('caption', 'collapse-form')}>
                    {(this.c.state as any).showGridTotal ? (
                      <el-checkbox
                        v-model={this.showTotal}
                        label='显示合计'
                        size='large'
                      />
                    ) : null}
                    {(this.c.state as any).showGridPrcent ? (
                      <el-checkbox
                        v-model={this.showPercent}
                        label='显示百分比'
                        size='large'
                      />
                    ) : null}
                  </div>
                  <span
                    class={this.ns.em('caption', 'collapse-icon')}
                    onClick={this.collapse}
                  >
                    {this.renderCollapseIcon()}
                  </span>
                </div>
              </div>
            ) : null}
            {this.isCollapse ? null : (
              <div
                class={[
                  this.ns.e('table'),
                  this.ns.be(this.gridpos, 'table'),
                  this.ns.is(
                    'show-grid-caption',
                    (this.c.state as any).showGridCaption,
                  ),
                ]}
              >
                <el-table
                  ref='tableRef'
                  data={this.handleGridData()}
                  border
                  max-height={
                    !this.exporting
                      ? this.computeHeight() -
                        ((this.c.state as any).showGridCaption ? 72 : 0)
                      : ''
                  }
                  style={{ width: '100%' }}
                  header-row-class-name={this.ns.e('grid-header')}
                  header-row-style={this.headerStyle}
                >
                  {(this.c.state as any).gridHeaders &&
                    (this.c.state as any).gridHeaders.map(
                      (_column: IData, index: number) => {
                        return (
                          <el-table-column
                            prop={_column.id}
                            align={index === 0 ? 'left' : 'center'}
                            header-align='center'
                            // width={index === 0 ? '' : 250}
                            label={_column.name}
                          >
                            {{
                              default: (data: any) => {
                                const { row, column } = data;
                                return (
                                  <div title={row[column.property]}>
                                    {row[column.property]}
                                    {_column.allowPercent &&
                                    this.showPercent ? (
                                      <span class='percent'>
                                        ({row.srfpercent})
                                      </span>
                                    ) : null}
                                  </div>
                                );
                              },
                            }}
                          </el-table-column>
                        );
                      },
                    )}
                </el-table>
              </div>
            )}
          </div>
        </div>
      </iBizControlBase>
    );
  },
});

export default ChartGrid;
