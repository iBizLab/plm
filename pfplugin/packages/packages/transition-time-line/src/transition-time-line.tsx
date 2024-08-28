import { useControlController, useNamespace } from '@ibiz-template/vue3-util';
import { defineComponent, PropType, ref, VNode, watch } from 'vue';
import { ILayoutPanel, ISysCalendar } from '@ibiz/model-core';
import './transition-time-line.scss';
import { ICalendarItemData, IControlProvider } from '@ibiz-template/runtime';
import dayjs from 'dayjs';
import { TransitionTimeLineController } from './controller';

export const TransitionTimeLine = defineComponent({
  name: 'IBizTransitionTimeLine',
  props: {
    modelData: { type: Object as PropType<ISysCalendar>, required: true },
    context: { type: Object as PropType<IContext>, required: true },
    params: { type: Object as PropType<IParams>, default: () => ({}) },
    provider: { type: Object as PropType<IControlProvider> },
    mdctrlActiveMode: { type: Number, default: undefined },
    loadDefault: { type: Boolean, default: true },
  },
  setup() {
    const c = useControlController(
      (...args) => new TransitionTimeLineController(...args),
    );
    const ns = useNamespace(`transition-time-line`);
    const calendarRef = ref<IData>();

    const selectDate = (tag: string): void => {
      if (!calendarRef.value) return;
      calendarRef.value.selectDate(tag);
    };

    watch(
      () => c.state.selectedDate,
      (oldVal: Date, newVal: Date) => {
        const oldDateString = dayjs(oldVal).format('YYYY-MM');
        const newDateString = dayjs(newVal).format('YYYY-MM');
        // 月份相同不加载数据
        if (oldDateString === newDateString) {
          return;
        }
        c.load();
      },
    );

    /**
     * 计算数据项样式
     *
     * @author zk
     * @date 2023-08-08 11:08:29
     * @param {ICalendarItemData} data
     * @return {*}  {IData}
     */
    const calcItemStyle = (data: ICalendarItemData): IData => {
      return {
        color: data.color,
        backgroundColor: data.bkColor,
      };
    };

    /**
     * 计算当前值显示位置
     */
    const calcCurrent = (): number => {
      switch (c.tempMinorSortDir) {
        case 'asc':
          return c.state.items!.length - 1;
        default:
          return 0;
      }
    };

    return {
      c,
      ns,
      calendarRef,
      selectDate,
      calcItemStyle,
      calcCurrent,
    };
  },
  render() {
    // 绘制项布局面板
    const renderPanelItem = (
      item: ICalendarItemData,
      modelData: ILayoutPanel,
    ): VNode => {
      const { context, params } = this.c;
      // 是否选中数据
      const findIndex = this.c.state.selectedData.findIndex(data => {
        return data.deData.srfkey === item.deData.srfkey;
      });
      const itemClass = [
        this.ns.b('item'),
        this.ns.is('active', findIndex !== -1),
      ];
      const style = this.calcItemStyle(item);
      return (
        <iBizControlShell
          class={itemClass}
          data={item.deData}
          modelData={modelData}
          context={context}
          params={params}
          style={style}
          onClick={(e: MouseEvent): Promise<void> => {
            e.stopPropagation();
            return this.c.onRowClick(item);
          }}
          onDblclick={(e: MouseEvent): Promise<void> => {
            e.stopPropagation();
            return this.c.onDbRowClick(item);
          }}
        ></iBizControlShell>
      );
    };

    // 绘制默认列表项
    const renderDefaultItem = (item: ICalendarItemData): VNode => {
      // 是否选中数据
      const findIndex = this.c.state.selectedData.findIndex(data => {
        return data.deData.srfkey === item.deData.srfkey;
      });
      const itemClass = [
        this.ns.b('item'),
        this.ns.is('active', findIndex !== -1),
      ];
      const style = this.calcItemStyle(item);
      return (
        <div
          class={itemClass}
          key={item.deData.srfkey}
          style={style}
          onClick={(): Promise<void> => this.c.onRowClick(item)}
          onDblclick={(): Promise<void> => this.c.onDbRowClick(item)}
        >
          {item.text}
        </div>
      );
    };

    /**
     * 无数据
     * @param {*} VNode
     * @return {*}
     * @author: zhujiamin
     * @Date: 2023-11-22 14:46:37
     */
    const renderNoData = (): VNode | false => {
      // 未加载不显示无数据
      const { isLoaded } = this.c.state;
      return (
        isLoaded && (
          <iBizNoData
            text={this.c.model.emptyText}
            emptyTextLanguageRes={this.c.model.emptyTextLanguageRes}
          ></iBizNoData>
        )
      );
    };

    /**
     * 绘制时间轴日历
     * @return {*}
     * @author: zhujiamin
     * @Date: 2023-11-22 14:18:25
     */
    const renderTimeLine = (): JSX.Element => {
      return (
        <div class={this.ns.b('timeline-content')}>
          {this.c.state.items.length > 0
            ? this.c.state.items.map(
                (item: ICalendarItemData, index: number) => {
                  const model = this.c.model.sysCalendarItems?.find(
                    calendarItems => {
                      return item.itemType === calendarItems.itemType;
                    },
                  );
                  let current;
                  const currentIndex = this.calcCurrent();
                  if (index === currentIndex) {
                    current = (
                      <div class={this.ns.be('timeline-content', 'current')}>
                        当前
                      </div>
                    );
                  }
                  return model?.layoutPanel ? (
                    <div
                      class={[
                        this.ns.be('timeline-content', 'item-box'),
                        index === currentIndex ? 'is-current' : '',
                      ]}
                    >
                      {current}
                      {renderPanelItem(item, model.layoutPanel)}
                    </div>
                  ) : (
                    renderDefaultItem(item)
                  );
                },
              )
            : renderNoData()}
        </div>
      );
    };

    const renderCalendar = (): JSX.Element => {
      return <div class={this.ns.b()}>{renderTimeLine()}</div>;
    };

    return (
      <iBizControlBase controller={this.c}>{renderCalendar()}</iBizControlBase>
    );
  },
});
