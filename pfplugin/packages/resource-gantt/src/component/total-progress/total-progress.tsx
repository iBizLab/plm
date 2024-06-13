/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { PropType, computed, defineComponent, ref, watch } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import './total-progress.scss';
import { TreeGridExRowState } from '@ibiz-template/runtime';
import { calcWorkItemCount } from '../../utils/capacity-calc';
import { isWorkDay } from '../../utils/common';

export const TotalProgress = defineComponent({
  name: 'TotalProgress',
  props: {
    row: {
      type: TreeGridExRowState,
      required: true,
    },
    weekdays: {
      type: Array as PropType<Array<number>>,
      default: () => [],
    },
    dayCapacity: {
      type: Number,
      default: 0,
    },
    capacityCalc: {
      type: Object,
      required: true,
      default: () => {},
    },
    dateRange: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  setup(props) {
    const ns = useNamespace('total-progress');
    const numerator = ref(0);
    const denominator = ref(0);
    const percentage = computed(() => {
      return (numerator.value / denominator.value) * 100;
    });

    const handleWorkItemCount = (
      dayCapacity: number,
      children: IData[],
    ): IData => {
      const { start, end } = props.dateRange;
      let totalDay = 0;
      let totalCount = 0;
      let temDenominator = 0;
      if (children.length > 0) {
        const currentDate = new Date(start);

        // 遍历日期
        while (currentDate <= new Date(end)) {
          if (isWorkDay(currentDate, props.weekdays)) {
            totalDay += 1;
            totalCount += calcWorkItemCount(currentDate, children);
          }
          // 将日期增加一天
          currentDate.setDate(currentDate.getDate() + 1);
        }
        temDenominator = totalDay * dayCapacity;
      }
      return { numerator: totalCount, denominator: temDenominator };
    };
    /**
     * 根据容量计算方式类型计算显示值
     */
    const onCapacityCalc = (): IData => {
      switch (props.capacityCalc.calcType) {
        case 'WORKITEMCOUNT':
          return handleWorkItemCount(
            props.dayCapacity,
            props.row.data._children!,
          );
        default:
          return { numerator: 0, denominator: 0 };
      }
    };

    watch(
      () => props.row,
      () => {
        const tempVal = onCapacityCalc();
        numerator.value = tempVal.numerator;
        denominator.value = tempVal.denominator;
      },
      { immediate: true, deep: true },
    );
    return { ns, numerator, denominator, percentage };
  },
  render() {
    return (
      <div class={this.ns.b()}>
        <span class={this.ns.e('caption')}>
          {this.numerator} / {this.denominator}
        </span>
        <el-progress percentage={this.percentage} />
      </div>
    );
  },
});
