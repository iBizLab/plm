/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { defineComponent, PropType } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import {
  calcEstimatedWorkload,
  calcRemainingWorkload,
  calcWorkItemCount,
} from '../../utils/capacity-calc';
import './top-level-cell.scss';

export const TopLevelCell = defineComponent({
  name: 'TopLevelCell',
  props: {
    cellData: {
      type: Object,
      required: true,
      default: () => {},
    },
    showText: {
      type: Boolean,
      required: true,
      default: true,
    },
    capacityConfig: {
      type: Object as PropType<IParams>,
      default: () => {},
    },
  },
  emits: ['cellClick'],
  setup(props, { emit }) {
    const ns = useNamespace('top-level-cell');

    /**
     * 处理工作日点击
     */
    const onClick = (e: MouseEvent) => {
      e.stopPropagation();
      emit('cellClick', props.cellData);
    };

    /**
     * 计算工时百分比并生成clip-path样式
     */
    const generateClipPath = (
      actualHours: number,
      allowedHours: number,
      totalHeight = 100,
    ) => {
      const actualHeightPercentage = (actualHours / allowedHours) * totalHeight;
      const remainingHeightPercentage = totalHeight - actualHeightPercentage;

      return `polygon(0px ${remainingHeightPercentage}%, 100% ${remainingHeightPercentage}%, 100% ${totalHeight}%, 0px ${totalHeight}%)`;
    };

    /**
     * 计算样式
     */
    const calcStyle = (num: number, capacity: number) => {
      // TODO 临时样式背景颜色
      const style = {};
      if (num < capacity) {
        Object.assign(style, {
          'clip-path': generateClipPath(num, capacity),
        });
      }
      return style;
    };

    /**
     * 计算类名
     */
    const calcClassName = (num: number, capacity: number) => {
      // TODO 临时样式背景颜色
      let className: string[] = [];
      if (num === 0) {
        return [];
      }
      if (num > capacity) {
        className = [ns.em('caption', 'exceed')];
      }
      if (num === capacity) {
        className = [ns.em('caption', 'saturation')];
      }
      if (num < capacity) {
        className = [ns.em('caption', 'standard')];
      }
      return className;
    };

    /**
     * 根据容量计算方式类型计算显示值
     */
    const onCapacityCalc = () => {
      const { column, row } = props.cellData;
      switch (props.capacityConfig.calcType) {
        case 'WORKITEMCOUNT':
          return calcWorkItemCount(column.date, row.data._children);
        case 'ESTIMATEDWORKLOAD':
          return calcEstimatedWorkload(
            props.capacityConfig.weekdays,
            column.date,
            row.data._children,
            props.capacityConfig.fieldName,
          );
        case 'REMAININGWORKLOAD':
          return calcRemainingWorkload(
            props.capacityConfig.weekdays,
            column.date,
            row.data._children,
            props.capacityConfig.fieldName,
          );
        default:
          break;
      }
    };

    const renderContent = () => {
      const { column } = props.cellData;
      // 显示内容与背景颜色
      if (!column) {
        return '';
      }
      const num = onCapacityCalc() || 0;

      const style = calcStyle(num, props.capacityConfig.dayCapacity);
      const className = calcClassName(num, props.capacityConfig.dayCapacity);
      return (
        <div class={[ns.e('caption'), ...className]} onClick={e => onClick(e)}>
          {props.showText ? (
            <span class={[ns.em('caption', 'text')]}>{String(num)}</span>
          ) : (
            ''
          )}
          <div class={[ns.em('caption', 'bkg')]} style={style}></div>
        </div>
      );
    };
    return { ns, renderContent };
  },
  render() {
    return <div class={this.ns.b()}>{this.renderContent()}</div>;
  },
});
