import { computed, defineComponent, nextTick, onMounted, Ref, ref } from 'vue';
import {
  useNamespace,
  getEditorEmits,
  getDateRangeProps,
} from '@ibiz-template/vue3-util';
import dayjs from 'dayjs';
import { DropdownSelectDateRangeController } from './mob-dropdown-select-daterange.controller';
import './mob-dropdown-select-daterange.scss';
import {
  calcCurMonthRange,
  calcCurQuarterDateRange,
  calcCurWeekDateRange,
  formatRangeText,
} from './mob-dropdown-select-daterange.util';

export const DropdownSelectDateRange = defineComponent({
  name: 'DropdownSelectDateRange',
  props: getDateRangeProps<DropdownSelectDateRangeController>(),
  emits: getEditorEmits(),
  setup(props, { emit }) {
    const ns = useNamespace('dropdown-select-daterange');
    const c = props.controller;

    // 显示文本
    const rangeText = ref('');

    // 下拉选中项
    const selectValue = ref();

    // 下拉范围选择菜单
    const dateRangeSelectRef = ref();

    // 模态显示
    const show = ref(false);

    // 下拉选项
    const selectOptions = [
      {
        text: '本周',
        value: 'WEEK',
      },
      {
        text: '本月',
        value: 'MONTH',
      },
      {
        text: '本季度',
        value: 'QUARTER',
      },
    ];

    // 编辑器模型
    const editorModel = c.model;

    // 数据
    let items: string[] = [];

    // 值格式化串
    const format = ref('YYYY-MM-DD');
    // eslint-disable-next-line prefer-destructuring
    const valueFormat = c!.valueFormat;
    if (valueFormat) {
      format.value = valueFormat;
    }

    // 值分割符
    let valueSeparator = ',';

    if (editorModel.editorParams) {
      if (editorModel.editorParams.valueSeparator) {
        valueSeparator = editorModel.editorParams.valueSeparator;
      }
    }

    // 关系表单项集合
    const refFormItem: Ref<string[]> = ref([]);
    const { editorItems } = editorModel;
    if (editorItems && editorItems.length > 0) {
      const editorItemNames: string[] = editorItems.map(
        (item: IData) => item.id,
      );
      refFormItem.value = editorItemNames;
    }

    // 处理值变更
    const emitFunc = (value: string, index: number) => {
      const formatVal = dayjs(value).format(format.value);
      if (format.value && formatVal !== 'Invalid Date') {
        items[index] = formatVal;
      } else {
        items[index] = value;
      }
      if (items.length === 2) {
        emit('change', items.join(valueSeparator));
      }
      if (refFormItem.value) {
        const valueName = refFormItem.value[index];
        if (valueName) {
          emit('change', value, valueName);
        }
      }
    };

    // 打开自定义选择
    const openSelect = () => {
      show.value = true;
    };

    // 处理时间范围格式
    const handleDateRange = (dates: Date[]) => {
      dates.forEach((date: Date, index: number) => {
        const value = dayjs(date).format(format.value);
        emitFunc(value, index);
      });
    };

    // 下拉值改变
    const onChange = (type: 'WEEK' | 'MONTH' | 'QUARTER' | 'CUSTOM') => {
      switch (type) {
        case 'WEEK': {
          const range = calcCurWeekDateRange();
          rangeText.value = formatRangeText(range);
          const { start, end } = range;
          handleDateRange([start, end]);
          break;
        }
        case 'MONTH': {
          const range = calcCurMonthRange();
          rangeText.value = formatRangeText(range);
          const { start, end } = range;
          handleDateRange([start, end]);
          break;
        }
        case 'QUARTER': {
          const range = calcCurQuarterDateRange();
          rangeText.value = formatRangeText(range);
          const { start, end } = range;
          handleDateRange([start, end]);
          break;
        }
        case 'CUSTOM':
        default:
          // 默认自定义，打开日历模式选择时间范围
          openSelect();
          break;
      }
    };

    // 关闭模态
    const onCancel = () => {
      show.value = false;
    };

    // 保存
    const onSave = (daterange: string[]) => {
      // 值清空时默认回到本周的时间
      if (!daterange || (daterange[0] === '' && daterange[1] === '')) {
        const range = calcCurWeekDateRange();
        rangeText.value = formatRangeText(range);
        selectValue.value = 'WEEK';
        const { start, end } = range;
        handleDateRange([start, end]);
      } else {
        daterange.forEach((value: string, index: number) => {
          const date = dayjs(value).format(format.value);
          emitFunc(date, index);
        });
        const dateObj: IData = {
          start: new Date(daterange[0]),
          end: new Date(daterange[1]),
        };
        rangeText.value = formatRangeText(dateObj);
      }
      show.value = false;
    };

    // 开始时间、结束时间 数组
    const valueArray = computed(() => {
      if (refFormItem.value && refFormItem.value.length > 0) {
        const array = refFormItem.value.map((name: string) => {
          return props.data[name] || '';
        });
        return array;
      }
      if (props.value && typeof props.value === 'string') {
        items = props.value.split(valueSeparator);
        return props.value.split(valueSeparator);
      }
      return [];
    });

    // 点击自定义
    const onClickCustom = () => {
      selectValue.value = 'CUSTOM';
      if (dateRangeSelectRef.value) {
        // 关闭下拉
        dateRangeSelectRef.value.toggle();
      }
      openSelect();
    };

    onMounted(() => {
      if (
        valueArray.value.length === 0 ||
        (valueArray.value[0] === '' && valueArray.value[1] === '')
      ) {
        selectValue.value = 'WEEK';
        const range = calcCurWeekDateRange();
        rangeText.value = formatRangeText(range);
        nextTick(() => {
          const { start, end } = range;
          handleDateRange([start, end]);
        });
      }
    });

    return {
      ns,
      c,
      rangeText,
      selectValue,
      selectOptions,
      show,
      dateRangeSelectRef,
      valueArray,
      openSelect,
      onChange,
      onCancel,
      onClickCustom,
      onSave,
    };
  },
  render() {
    return (
      <div class={this.ns.b()}>
        <van-field class={this.ns.e('input')}>
          {{
            input: (
              <van-dropdown-menu ref='SelectRef'>
                <van-dropdown-item
                  ref='dateRangeSelectRef'
                  v-model={this.selectValue}
                  options={this.selectOptions}
                  onChange={this.onChange}
                >
                  {{
                    title: () => {
                      return <div>{this.rangeText}</div>;
                    },
                    default: () => {
                      return (
                        <div
                          class={[
                            this.ns.e('custom'),
                            this.ns.is(
                              'selected',
                              this.selectValue === 'CUSTOM',
                            ),
                          ]}
                          onClick={this.onClickCustom}
                        >
                          <div class={this.ns.em('custom', 'text')}>自定义</div>
                          <van-icon
                            name='success'
                            class={[
                              this.ns.em('custom', 'icon'),
                              this.ns.is(
                                'selected',
                                this.selectValue === 'CUSTOM',
                              ),
                            ]}
                          />
                        </div>
                      );
                    },
                  }}
                </van-dropdown-item>
              </van-dropdown-menu>
            ),
            rightIcon: () => {
              return <van-icon name='arrow-down' />;
            },
          }}
        </van-field>
        <van-popup
          v-model:show={this.show}
          position='left'
          class={this.ns.e('calendar')}
          style={{ height: '100%' }}
        >
          {{
            default: () => {
              return (
                <iBizDateRangeCalendar
                  onCancel={this.onCancel}
                  value={this.valueArray}
                  onSave={this.onSave}
                  type='range'
                ></iBizDateRangeCalendar>
              );
            },
          }}
        </van-popup>
      </div>
    );
  },
});
