/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { PropType, computed, defineComponent, ref, watch } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import './total-progress.scss';
import { TreeGridExRowState } from '@ibiz-template/runtime';
import {
  calcEstimatedWorkload,
  calcRemainingWorkload,
  calcWorkItemCount,
} from '../../utils/capacity-calc';
import { isWorkDay } from '../../utils/common';

export const TotalProgress = defineComponent({
  name: 'TotalProgress',
  props: {
    row: {
      type: TreeGridExRowState,
      required: true,
    },
    capacityConfig: {
      type: Object as PropType<IParams>,
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

    /**
     * 根据容量计算方式类型计算显示值
     */
    const onCapacityCalc = (
      capacityConfig: IParams,
      currentDate: Date,
      children: IData[],
    ): number => {
      switch (capacityConfig.calcType) {
        case 'WORKITEMCOUNT':
          return calcWorkItemCount(currentDate, children);
        case 'ESTIMATEDWORKLOAD':
          return calcEstimatedWorkload(
            capacityConfig.weekdays,
            currentDate,
            children,
            capacityConfig.fieldName,
          );
        case 'REMAININGWORKLOAD':
          return calcRemainingWorkload(
            capacityConfig.weekdays,
            currentDate,
            children,
            capacityConfig.fieldName,
          );
        default:
          return 0;
      }
    };

    const handleCount = (
      capacityConfig: IParams,
      children: IData[],
      dateRange: IParams,
    ): IData => {
      const { start, end } = dateRange;
      let totalDay = 0;
      let totalCount = 0;
      let temDenominator = 0;
      if (children.length > 0) {
        const currentDate = new Date(start);

        // 遍历日期
        while (currentDate <= new Date(end)) {
          if (isWorkDay(currentDate, props.capacityConfig.weekdays)) {
            totalDay += 1;
            const val = onCapacityCalc(capacityConfig, currentDate, children);
            totalCount = Math.round((totalCount + val) * 10) / 10;
          }
          // 将日期增加一天
          currentDate.setDate(currentDate.getDate() + 1);
        }
        temDenominator = totalDay * capacityConfig.dayCapacity;
      }
      return { numerator: totalCount, denominator: temDenominator };
    };

    watch(
      [() => props.row, () => props.capacityConfig],
      () => {
        const tempVal = handleCount(
          props.capacityConfig,
          props.row.data._children || [],
          props.dateRange,
        );
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
