/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { PropType, defineComponent } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import './categories.scss';

export const Categories = defineComponent({
  name: 'IBizCategories',
  props: {
    categories: {
      type: Array as PropType<IData[]>,
      required: true,
      default: () => [],
    },
    current: {
      type: String,
      required: true,
    },
  },
  emits: ['select'],
  setup(props, { emit }) {
    const ns = useNamespace('emoji-categories');

    // 选择表情分类
    const onSelect = (category: IData) => {
      emit('select', category);
    };

    return { ns, onSelect };
  },
  render() {
    return (
      <div class={this.ns.b()}>
        {this.categories.map((category: IData) => {
          return (
            <div
              class={[
                this.ns.e('category'),
                this.ns.is('active', category.name === this.current),
              ]}
              onClick={() => this.onSelect(category)}
            >
              <span
                class={this.ns.em('category', 'svg')}
                title={category.label}
                v-html={category.icon}
              />
            </div>
          );
        })}
      </div>
    );
  },
});
