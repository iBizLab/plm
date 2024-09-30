import { defineComponent } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import './case-steps-cell.scss';

export const CaseStepsCell = defineComponent({
  name: 'CaseStepsCell',
  props: {
    width: {
      type: Number,
    },
    align: {
      validator: (value: string) => {
        return ['left', 'center', 'right'].includes(value);
      },
    },
  },
  setup() {
    const ns = useNamespace('case-steps-cell');

    return { ns };
  },
  render() {
    return (
      <div
        class={[
          this.ns.b(),
          this.ns.is('center', this.align === 'center'),
          this.ns.is('left', this.align === 'left'),
          this.ns.is('right', this.align === 'right'),
        ]}
        style={{ width: `${this.width}px` }}
      >
        {this.$slots.default?.()}
      </div>
    );
  },
});
