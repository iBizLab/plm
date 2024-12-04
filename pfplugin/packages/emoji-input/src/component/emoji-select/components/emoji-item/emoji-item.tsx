import { PropType, defineComponent, computed } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import './emoji-item.scss';

export const EmojiItem = defineComponent({
  name: 'IBizEmojiItem',
  props: {
    emoji: {
      type: Object as PropType<IData>,
      required: true,
      default: () => {},
    },
    size: {
      type: Number,
      required: true,
    },
    withBorder: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    const ns = useNamespace('emoji-item');

    // 用于动态计算表情的样式大小
    const styleSize = computed(() => {
      return {
        fontSize: `${props.size - 5}px`,
        lineHeight: `${props.size}px`,
        height: `${props.size}px`,
        width: `${props.size}px`,
      };
    });

    // 点击表情项
    const onClick = () => {
      emit('click', props.emoji);
    };

    return { ns, styleSize, onClick };
  },
  render() {
    return (
      <span
        class={[this.ns.b(), this.ns.is('border', this.withBorder)]}
        style={this.styleSize}
        onClick={this.onClick}
        v-html={this.emoji.data}
      />
    );
  },
});
