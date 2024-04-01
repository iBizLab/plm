/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useControlController, useNamespace } from '@ibiz-template/vue3-util';
import {
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  PropType,
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

    const setHeight = async () => {
      await nextTick();
      const el = document.getElementById(uuid);
      if (el) {
        const height = el.offsetHeight / 2 - 16;
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

    return {
      c,
      ns,
      uuid,
      headerStyle,
      isCollapse,
      collapse,
      chartRef,
      tableRef,
      maxHeight,
    };
  },
  render() {
    return (
      <iBizControlBase controller={this.c}>
        <div class={this.ns.b()} id={this.uuid}>
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
              this.ns.is('no-data', this.c.state.items.length === 0),
            ]}
          >
            {ibiz.i18n.t('control.chart.chartPlaceholder')}
          </div>
          <div
            class={[
              this.ns.e('grid'),
              { [this.ns.e('is-colllapse')]: this.isCollapse },
            ]}
          >
            {(this.c.state as any).showGridCaption ? (
              <div class={[this.ns.e('caption')]}>
                <div class={this.ns.em('caption', 'title')}>表格</div>
                <div
                  class={this.ns.em('caption', 'collapse-icon')}
                  onClick={this.collapse}
                >
                  {this.isCollapse ? (
                    <i class='fa fa-angle-up' aria-hidden='true'></i>
                  ) : (
                    <i class='fa fa-angle-down' aria-hidden='true'></i>
                  )}
                </div>
              </div>
            ) : null}
            {this.isCollapse ? null : (
              <div
                class={[
                  this.ns.e('table'),
                  this.ns.is(
                    'show-grid-caption',
                    (this.c.state as any).showGridCaption,
                  ),
                ]}
              >
                <el-table
                  ref='tableRef'
                  data={(this.c.state as any).cloneItems}
                  border
                  max-height={
                    this.maxHeight -
                    ((this.c.state as any).showGridCaption ? 72 : 0)
                  }
                  style={{ width: '100%' }}
                  header-row-class-name={this.ns.e('grid-header')}
                  header-row-style={this.headerStyle}
                >
                  {(this.c.state as any).gridHeaders &&
                    (this.c.state as any).gridHeaders.map(
                      (column: IData, index: number) => {
                        return (
                          <el-table-column
                            prop={column.id}
                            align={index === 0 ? 'left' : 'center'}
                            header-align='center'
                            width={index === 0 ? '' : 320}
                            label={column.name}
                          ></el-table-column>
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
