import { PropType, computed, defineComponent } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import { CaretPosition, CursorData } from '../../types';
import './cursor-caret.scss';

/**
 * 光标组件
 * - 用于绘制绘制用户光标
 */
export const CursorCaret = defineComponent({
  name: 'CursorCaret',
  props: {
    data: {
      type: Object as PropType<CursorData>,
      required: true,
    },
    caretPosition: Object as PropType<CaretPosition>,
  },
  setup(props) {
    const ns = useNamespace('cursor-caret');
    const caretStyle = computed(() => {
      return {
        ...props.caretPosition,
        background: props.data.color,
      };
    });

    const labelStyle = computed(() => {
      return {
        transform: 'translateY(-100%)',
        background: props.data.color,
      };
    });

    return {
      ns,
      caretStyle,
      labelStyle,
    };
  },
  render() {
    return (
      <div style={this.caretStyle} class={this.ns.b()}>
        <div class={this.ns.e('text')} style={this.labelStyle}>
          {this.data.name}
        </div>
      </div>
    );
  },
});
