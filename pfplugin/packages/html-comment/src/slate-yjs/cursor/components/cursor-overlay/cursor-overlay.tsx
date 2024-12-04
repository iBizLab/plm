import { PropType, defineComponent, ref } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import { CursorSelection } from '../cursor-selection/cursor-selection';
import { useCursorOverlayPositions } from '../../hooks';
import { SlateYjs } from '../../../slate-yjs';
import './cursor-overlay.scss';

/**
 * wangEditor 协同编辑光标处理组件（入口组件）
 * - 用法：用该组件将wangEditor编辑器和工具栏包裹起来
 * - 优点：使用定位的方式将用户光标和选区呈现在界面上，不会影响wangEditor编辑器中的内容
 */
export const CursorOverlay = defineComponent({
  name: 'CursorOverlay',
  props: {
    slateYjs: {
      type: Object as PropType<SlateYjs>,
      required: true,
    },
  },
  setup(props) {
    const ns = useNamespace('cursor-overlay');
    const containerRef = ref<HTMLElement>();

    const { overlayData } = useCursorOverlayPositions({
      slateYjs: props.slateYjs,
      containerRef,
    });

    return {
      ns,
      overlayData,
      containerRef,
    };
  },

  render() {
    return (
      <div class={this.ns.b()} ref='containerRef'>
        {this.$slots.default?.()}
        {this.overlayData.map(cursor => {
          return <CursorSelection key={cursor.clientId} {...cursor} />;
        })}
      </div>
    );
  },
});
