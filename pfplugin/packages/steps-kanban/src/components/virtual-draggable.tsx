/* eslint-disable prefer-destructuring */
/* eslint-disable default-case */
/* eslint-disable no-plusplus */
/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { computed, defineComponent, onMounted, ref, watch } from 'vue';
import draggable from 'vuedraggable';

export const VirtualDraggable = defineComponent({
  name: 'VirtualDraggable',
  components: {
    draggable,
  },
  props: {
    items: {
      type: Array<IData>,
      required: true,
    },
    count: {
      type: Number,
      default: 6,
    },
    itemSize: {
      type: Number,
      default: 160,
    },
  },
  emits: ['change'],
  setup(props, { emit }) {
    const end = ref(props.count);

    const draggableRef = ref();
    const scrollbarRef = ref();

    const virtualData = computed(() => {
      return props.items.slice(0, end.value);
    });

    const onChange = (evt: IData) => {
      emit('change', evt);
    };

    onMounted(() => {
      if (draggableRef.value) {
        const ele = draggableRef.value.$el;
        const cHeight = props.items.length * props.itemSize + 16;
        ele.style.height = `${Math.max(cHeight, ele.offsetHeight)}px`;
      }
    });

    watch(
      props.items,
      () => {
        if (draggableRef.value) {
          const ele = draggableRef.value.$el;
          if (props.items.length) {
            const cHeight = props.items.length * props.itemSize + 16;
            ele.style.height = `${Math.max(cHeight, ele.offsetHeight)}px`;
          } else {
            ele.style.height = 'inherit';
          }
        }
      },
      { immediate: true },
    );

    const handleScroll = ({ scrollTop }: { scrollTop: number }) => {
      const count = Math.floor(scrollTop / props.itemSize);
      end.value = count + props.count;
    };

    return { draggableRef, scrollbarRef, virtualData, handleScroll, onChange };
  },
  render() {
    return (
      <el-scrollbar ref='scrollbarRef' noresize onScroll={this.handleScroll}>
        <draggable
          ref='draggableRef'
          modelValue={this.virtualData}
          onChange={this.onChange}
          {...this.$attrs}
        >
          {{ ...this.$slots }}
        </draggable>
      </el-scrollbar>
    );
  },
});

export default VirtualDraggable;
