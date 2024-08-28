/* eslint-disable array-callback-return */
import { PropType, computed, defineComponent } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import { CaretPosition, CursorData, SelectionRect } from '../../types';
import { addAlpha } from '../../util';
import { CursorCaret } from '../cursor-caret/cursor-caret';
import './cursor-selection.scss';

/**
 * 光标选区组件
 * - 用于绘制一个用户的光标选区和光标
 */
export const CursorSelection = defineComponent({
  name: 'CursorSelection',
  props: {
    data: Object as PropType<CursorData>,
    selectionRects: Array as PropType<SelectionRect[]>,
    caretPosition: Object as PropType<CaretPosition | null>,
  },
  setup(props) {
    const ns = useNamespace('cursor-selection');

    const selectionStyle = computed(() => {
      return {
        backgroundColor: addAlpha(props.data!.color, 0.5),
      };
    });

    return {
      ns,
      selectionStyle,
    };
  },
  render() {
    if (!this.data) {
      return null;
    }
    return (
      <>
        {this.selectionRects?.map((position, i) => {
          return (
            <div
              style={{ ...this.selectionStyle, ...position }}
              class={this.ns.b()}
              key={i}
            />
          );
        })}
        {this.caretPosition && (
          <CursorCaret caretPosition={this.caretPosition} data={this.data} />
        )}
      </>
    );
  },
});
