import { defineComponent, PropType, computed } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import { GridController } from '@ibiz-template/runtime';
import { IPanel } from '@ibiz/model-core';
import dayjs from 'dayjs';
import { IDate } from '../util';
import './gantt-columns.scss';

export const GanttColumns = defineComponent({
  name: 'GanttColumns',
  props: {
    controller: {
      type: Object as PropType<GridController>,
      required: true,
    },
    columns: {
      type: Array as PropType<IDate[]>,
      required: true,
    },
  },
  setup(props) {
    const ns = useNamespace('gantt-column');
    const c = props.controller;

    const panel = computed(() => {
      let layoutPanel: IPanel | undefined;
      c.model.controlRenders?.forEach(item => {
        if (item.renderType === 'LAYOUTPANEL' && item.id === 'gantt_column') {
          layoutPanel = item.layoutPanel;
        }
      });
      return layoutPanel;
    });

    const onClick = (evt: MouseEvent, stopPropagation: boolean): void => {
      if (stopPropagation) {
        evt.stopPropagation();
        evt.preventDefault();
      }
    };

    const renderNodePanel = (item: IData): JSX.Element => {
      return (
        <iBizControlShell
          data={item}
          modelData={panel.value}
          context={c.context}
          params={c.params}
        ></iBizControlShell>
      );
    };

    const renderHeader = (column: IDate): JSX.Element => {
      return (
        <div class={[ns.e('header'), ns.e('column')]}>
          <div
            class={[
              'time',
              ns.is('today', column.isToday),
              ns.is('weekend', column.isWeekend),
            ]}
          >
            <div class='week'>{column.week}</div>
            <div class='date'>{dayjs(column.date).format('MM/DD')}</div>
          </div>
        </div>
      );
    };

    const renderDefault = (row: IData, column: IDate): JSX.Element => {
      return (
        <div class={[ns.e('default'), ns.e('column')]}>
          <div
            class={[
              'time',
              ns.is('today', column.isToday),
              ns.is('weekend', column.isWeekend),
            ]}
            onClick={e => onClick(e, row[column.date] && panel.value)}
          >
            {row[column.date] ? (
              <el-popover
                trigger='click'
                disabled={!panel.value}
                placement='bottom'
                width='auto'
                popper-style={{ 'min-width': '300px' }}
              >
                {{
                  reference: () => {
                    return <div class='duration'>{row[column.date]}</div>;
                  },
                  default: () => {
                    return renderNodePanel(row);
                  },
                }}
              </el-popover>
            ) : null}
          </div>
        </div>
      );
    };

    const renderColumn = (column: IDate): JSX.Element => {
      return (
        <el-table-column
          className={ns.b()}
          min-width={60}
          align='center'
          type='gantt'
          prop={column.date}
        >
          {{
            header: () => {
              return renderHeader(column);
            },
            default: ({ row }: IData) => {
              return renderDefault(row, column);
            },
          }}
        </el-table-column>
      );
    };

    return { ns, renderColumn };
  },
  render() {
    return this.columns.map(column => {
      return this.renderColumn(column);
    });
  },
});
export default GanttColumns;
