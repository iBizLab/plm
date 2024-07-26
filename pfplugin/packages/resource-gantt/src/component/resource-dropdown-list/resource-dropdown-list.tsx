/* eslint-disable prefer-destructuring */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { IPanelRawItem } from '@ibiz/model-core';
import { defineComponent, ref, onMounted, PropType, computed } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import './resource-dropdown-list.scss';
import { Controller } from './controller';
import { ClockSvg, CorrectSvg, HourglassSvg, TaskSvg } from '../../icons';

export const ResourceDropdownList = defineComponent({
  name: 'IBizResourceDropdownList',
  props: {
    modelData: {
      type: Object as PropType<IPanelRawItem>,
      required: true,
    },
    controller: {
      type: Controller,
      required: true,
    },
  },
  setup(props) {
    const ns = useNamespace('dropdown');
    const ns2 = useNamespace('resource-dropdown-list');
    const c = props.controller;
    const tempStyle = ref('');
    const curValue = ref<IData>({});
    const items = ref<IData[]>([]);
    const capacityCalc = [
      {
        label: '容量计算',
      },
      {
        calcType: 'WORKITEMCOUNT',
        weekdays: '${weekday}',
        dayCapacityVal: '${day_capacity.work_item_count}',
        label: '工作项数量',
        icon: TaskSvg,
      },
      {
        calcType: 'ESTIMATEDWORKLOAD',
        weekdays: '${weekday}',
        dayCapacityVal: '${day_capacity.estimated_workload}',
        fieldName: 'estimated_workload',
        label: '预估工时',
        icon: ClockSvg,
      },
      {
        calcType: 'REMAININGWORKLOAD',
        weekdays: '${weekday}',
        dayCapacityVal: '${day_capacity.remaining_workload}',
        fieldName: 'remaining_workload',
        label: '剩余工时',
        icon: HourglassSvg,
      },
    ];

    const { rawItem } = props.modelData;

    if (rawItem && rawItem.cssStyle) {
      tempStyle.value = rawItem.cssStyle;
    }

    // 类名控制
    const classArr = computed(() => {
      const { id } = props.modelData;
      const result: Array<string | false> = [ns.b(), ns2.b(), ns.m(id)];
      result.push(...props.controller.containerClass);
      return result;
    });

    onMounted(() => {
      items.value = capacityCalc;
      curValue.value = capacityCalc[1];
    });

    const handleItemClick = (select: IParams) => {
      curValue.value = select;
      const item: IParams = {};
      Object.assign(item, select);
      delete item.icon;
      if (
        props.controller.panel.panelItems &&
        props.controller.panel.panelItems.gantt
      ) {
        const gantt = props.controller.panel.panelItems.gantt as IParams;
        gantt.control.capacityCalcChange(item);
      }
    };

    const renderContent = () => {
      return (
        <el-dropdown
          trigger='click'
          class={ns2.b('dropdown')}
          popper-class={ns2.b('dropdown-popper')}
        >
          {{
            default: () => (
              <span class={ns2.be('dropdown', 'content')}>
                {curValue.value.icon && (
                  <span class={ns2.bem('dropdown', 'content', 'icon')}>
                    {curValue.value.icon()}
                  </span>
                )}
                <span class={ns2.bem('dropdown', 'content', 'text')}>
                  {curValue.value.label}
                </span>
              </span>
            ),
            dropdown: () => (
              <el-dropdown-menu>
                {{
                  default: () => {
                    return items.value.map(item => {
                      return (
                        <el-dropdown-item onClick={() => handleItemClick(item)}>
                          <div class={ns2.be('dropdown-popper', 'content')}>
                            {item.icon && (
                              <span
                                class={ns2.bem(
                                  'dropdown-popper',
                                  'content',
                                  'icon',
                                )}
                              >
                                {item.icon()}
                              </span>
                            )}
                            <span
                              class={ns2.bem(
                                'dropdown-popper',
                                'content',
                                'text',
                              )}
                            >
                              {item.label}
                            </span>
                            {curValue.value.calcType === item.calcType && (
                              <span
                                class={ns2.bem(
                                  'dropdown-popper',
                                  'content',
                                  'correct',
                                )}
                              >
                                {CorrectSvg()}
                              </span>
                            )}
                          </div>
                        </el-dropdown-item>
                      );
                    });
                  },
                }}
              </el-dropdown-menu>
            ),
          }}
        </el-dropdown>
      );
    };

    return {
      ns,
      ns2,
      c,
      curValue,
      items,
      classArr,
      tempStyle,
      handleItemClick,
      renderContent,
    };
  },

  render() {
    return (
      <div class={this.classArr} style={this.tempStyle}>
        {this.renderContent()}
      </div>
    );
  },
});
