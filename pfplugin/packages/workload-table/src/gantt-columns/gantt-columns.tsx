import { defineComponent, PropType, computed } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import {
  convertNavData,
  GridController,
  IGridRowState,
  OpenAppViewCommand,
} from '@ibiz-template/runtime';
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

    let navContext: IData = {};
    let navParam: IData = {};
    const openView: string = c.model.controlParam?.ctrlParams?.OPENVIEW;
    if (c.model.controlParam?.ctrlParams) {
      const ctrlParams = c.model.controlParam.ctrlParams;
      Object.keys(ctrlParams).forEach(p => {
        if (p.toUpperCase().startsWith('SRFNAVPARAM.')) {
          const [, k] = p.split('.');
          Object.assign(navParam, { [k.toLowerCase()]: ctrlParams[p] });
        } else if (p.toUpperCase().startsWith('SRFNAVCTX.')) {
          const [, k] = p.split('.');
          Object.assign(navContext, { [k.toLowerCase()]: ctrlParams[p] });
        }
      });
    }
    const panel = computed(() => {
      let layoutPanel: IPanel | undefined;
      c.model.controlRenders?.forEach(item => {
        if (item.renderType === 'LAYOUTPANEL' && item.id === 'gantt_column') {
          layoutPanel = item.layoutPanel;
        }
      });
      return layoutPanel;
    });

    /**
     * 计算导航参数
     * @param data
     */
    const calcNavParam = (data: IData) => {
      let context = c.context.clone();
      let params = { ...c.params };
      if (Object.keys(navContext).length > 0) {
        const navData = convertNavData(navContext, data, c.params, c.context);
        Object.assign(context, navData);
      }
      if (Object.keys(navParam).length > 0) {
        const navData = convertNavData(navParam, data, c.params, c.context);
        Object.assign(params, navData);
      }
      return { context, params };
    };

    const onClick = async (
      rowState: IGridRowState,
      column: IDate,
      event: MouseEvent,
    ): Promise<void> => {
      let stopPropagation =
        (rowState.data[column.date] && panel.value) || openView;
      if (stopPropagation) {
        event.stopPropagation();
        event.preventDefault();
      }
      if (openView) {
        const { context, params } = calcNavParam(
          Object.assign(rowState.data.clone(), { date: column.date }),
        );
        ibiz.commands.execute(
          OpenAppViewCommand.TAG,
          openView,
          context,
          params,
        );
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

    const renderDefault = (
      rowState: IGridRowState,
      column: IDate,
    ): JSX.Element => {
      const row = rowState.data;
      return (
        <div class={[ns.e('default'), ns.e('column')]}>
          <div
            class={[
              'time',
              ns.is('today', column.isToday),
              ns.is('weekend', column.isWeekend),
              ns.is('clickable', openView ? true : false),
            ]}
            onClick={e => onClick(rowState, column, e)}
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
              const rowState = c.findRowState(row);
              if (rowState) {
                return renderDefault(rowState, column);
              }
              return null;
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
