import { useNamespace } from '@ibiz-template/vue3-util';
import { PropType, defineComponent, onMounted, ref, watch } from 'vue';
import './virtual-list.scss';

export const VirtualList = defineComponent({
  name: 'VirtualList',
  props: {
    items: {
      // 数据源
      type: Array as PropType<IData>,
      default: () => [],
    },
    itemHeight: {
      // 每行高度
      type: Number,
      default: 36,
    },
    showNum: {
      // 可视数量
      type: Number,
      default: 20,
    },
  },
  emits: ['scrollEvent'],
  setup(props, { emit }) {
    const ns = useNamespace('team-select-virtual-list');
    const contentHeight = ref(36);
    const contentBox = ref();
    const showList = ref([]);
    const top = ref(0);
    const startIndex = ref(0);
    const endIndex = ref(0);
    const scrollTop = ref(0);
    // 计算可视区域数据
    const getShowList = (): void => {
      startIndex.value = Math.floor(scrollTop.value / props.itemHeight); // 可视区域第一条数据的索引
      endIndex.value = startIndex.value + props.showNum; // 可视区域最后一条数据的后面那条数据的索引
      showList.value = props.items.slice(startIndex.value, endIndex.value); // 可视区域显示的数据，即最后要渲染的数据。
      const offsetY = scrollTop.value - (scrollTop.value % props.itemHeight); // 在这需要获得一个可以被itemHeight整除的数来作为item的偏移量，这样随机滑动时第一条数据都是完整显示的
      top.value = offsetY;
    };
    // 监听滚动事件，实时计算scrollTop
    const onScroll = (): void => {
      scrollTop.value = contentBox.value.scrollTop; // element.scrollTop方法可以获取到卷起的高度
      getShowList();
      scrollEvent(contentHeight.value, scrollTop.value);
    };
    // 抛出滚动事件
    const scrollEvent = (cntHeight: number, scrTop: number): void => {
      emit('scrollEvent', cntHeight, scrTop);
    };
    onMounted(() => {
      // 等待dom渲染完毕
      setTimeout(() => {
        // eslint-disable-next-line no-restricted-globals
        scroll();
      }, 1000);
    });

    watch(
      () => props.items,
      () => {
        contentHeight.value = props.itemHeight * props.items.length;
        getShowList();
      },
      {
        immediate: true,
        deep: true,
      },
    );
    return {
      ns,
      contentHeight,
      showList,
      contentBox,
      top,
      onScroll,
    };
  },
  render() {
    return (
      <div
        ref='contentBox'
        class={this.ns.b()}
        onScroll={() => this.onScroll()}
      >
        <div
          class={this.ns.e('container')}
          style={`height:${this.contentHeight}px;`}
        >
          <div class={this.ns.e('content')} style={`top:${this.top}px;`}>
            {this.showList.map((item: IData, index: number) => {
              return (
                <div key={index} class={this.ns.m('item')}>
                  {this.$slots.default
                    ? this.$slots.default({
                        ...item,
                        // eslint-disable-next-line object-shorthand
                        index: index,
                      })
                    : item.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  },
});
