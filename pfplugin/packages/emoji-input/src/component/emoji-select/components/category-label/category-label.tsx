import { defineComponent } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import './category-label.scss';

export const CategoryLabel = defineComponent({
  name: 'IBizCategoryLabel',
  props: {
    name: {
      type: String,
      default: '',
    },
  },
  emits: ['select'],
  setup() {
    const ns = useNamespace('emoji-category-label');
    return { ns };
  },
  render() {
    return <div class={this.ns.b()}>{this.name}</div>;
  },
});
