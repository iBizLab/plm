import { defineComponent, ref, watch } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import dayjs from 'dayjs';
import './date-select.scss';
import { getCustomNodeProps } from '../../utils';

export const DateSelect = defineComponent({
  name: 'IBizDateSelect',
  props: getCustomNodeProps(),
  emits: ['change'],
  setup(props) {
    const ns = useNamespace('date-select');

    // 时间选择实例
    const dateRef = ref();
    // 使用 ref 创建响应式数据
    const dateVal = ref('');
    // 初始化赋值
    if (props.data) {
      dateVal.value = dayjs(props.data).format('YYYY-MM-DD');
    }

    // 当元素第一次创建时，需自动聚焦并打开弹框
    if (props.isFocus) {
      watch(dateRef, newVal => {
        if (newVal && newVal.focus) {
          newVal.focus();
        }
      });
    }

    // 处理时间选择改变
    const handleChange = (value: string | Date): void => {
      const date = dayjs(value).format('YYYY-MM-DD');
      dateVal.value = date;
      // 使用定时器修复抛值销毁元素后弹框定位异常，等待弹框销毁后再抛值
      let time: NodeJS.Timeout | null = setTimeout(() => {
        props.change(date);
        clearTimeout(time!);
        time = null;
      }, 200);
    };

    return {
      ns,
      dateVal,
      dateRef,
      handleChange,
    };
  },
  render() {
    return (
      <div class={[this.ns.b(), this.readonly ? this.ns.m('readonly') : '']}>
        <el-date-picker
          ref='dateRef'
          popper-class={[this.ns.e('popover'), `${this.nodeKey}`]}
          v-model={this.dateVal}
          onChange={this.handleChange}
        />
      </div>
    );
  },
});
