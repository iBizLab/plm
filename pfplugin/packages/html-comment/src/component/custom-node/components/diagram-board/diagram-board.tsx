import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import { mindMapData, topToolBars } from './config';
import './diagram-board.scss';
import { getCustomNodeProps } from '../../utils';
import { X6Controller } from './controller';
import { MindMapData } from './interface';

export const DiagramBoard = defineComponent({
  name: 'IBizDiagramBoard',
  props: getCustomNodeProps(),
  emits: ['change'],
  setup(props) {
    const ns = useNamespace('diagram-board');

    // 图表框
    const diagramBoxRef = ref();
    // 图表
    const diagramRef = ref();
    // 激活态
    const diagramBoxActivate = ref(false);
    // 工具栏绘制数据
    const topToolBar = ref();
    topToolBar.value = topToolBars();

    let c: X6Controller;
    let defaultData: MindMapData[] = mindMapData();

    if (props.data) {
      const { data } = props.data;
      defaultData = data as MindMapData[];
    }

    // 处理销毁
    const handleDestroy = async (): Promise<void> => {
      c?.destroy();
    };

    // 初始化
    const initGraph = (): void => {
      if (props.isFocus) {
        diagramBoxRef.value?.focus();
      }
      const { offsetWidth, offsetHeight } = diagramBoxRef.value;
      // 获取父容器宽高
      c = new X6Controller(
        diagramRef.value,
        { width: offsetWidth, height: offsetHeight },
        { ns, nodeKey: props.nodeKey, readonly: props.readonly, defaultData },
      );
      c.evt.on('onNodeBlur', (): void => {
        props.change({ data: c?.defaultData }, { isUpdate: true });
      });
    };

    // 处理删除
    const handleDelete = (): void => {
      handleDestroy();
      // 组织失去焦点抛值
      c.internalFocus = true;
      props.change('', { isDelete: true });
    };

    // 处理工具栏点击
    const onTopToolItemClick = (item: IData): void => {
      switch (item.type) {
        case 'delete':
          handleDelete();
          break;
        case 'panning':
          c.togglePanning();
          break;
        default:
          break;
      }
    };

    // 获知工具栏
    const renderTopToolBar = (): JSX.Element => {
      return (
        <div class={ns.b('top-tool-bar')}>
          {topToolBar.value.map((item: IData) => {
            return (
              <div
                class={[
                  ns.be('top-tool-bar', 'item'),
                  ns.be('top-tool-bar', `item-${item.type}`),
                ]}
                title={item.text}
                onClick={() => onTopToolItemClick(item)}
              >
                <div
                  class={ns.bem('top-tool-bar', 'item', 'content')}
                  v-html={item.icon || item.text}
                ></div>
              </div>
            );
          })}
        </div>
      );
    };

    // 获取焦点
    const onFocus = async (): Promise<void> => {
      if (!diagramBoxActivate.value) {
        diagramBoxActivate.value = true;
      }
    };

    // 失去焦点
    const onBlur = (): void => {
      if (c) {
        c.clearSelection();
        if (c.internalFocus) {
          return;
        }
        props.change({ data: c?.defaultData });
        diagramBoxActivate.value = false;
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _this = this;
    // 创建一个 MutationObserver 实例
    let observer: ResizeObserver | null = new ResizeObserver(() => {
      // 检查是否有子节点变化，通常表明元素已经渲染
      if (diagramBoxRef.value && diagramBoxRef.value.offsetWidth !== 0) {
        initGraph.bind(_this)();
        // 如果只需要触发一次，可以调用 observer.disconnect() 停止监听
        observer!.disconnect();
        observer = null;
      }
    });

    onMounted(() => {
      if (diagramRef.value) {
        observer!.observe(diagramRef.value);

        diagramBoxRef.value.addEventListener('click', () => {
          c.clearSelection();
          diagramBoxRef.value?.focus();
        });

        diagramBoxRef.value.addEventListener('keydown', (event: IParams) => {
          c.internalFocus = false;
          if (event.key === 'Backspace' || event.key === 'Delete') {
            if (c && c.selection && c.selection.length > 0) {
              if (c.removeNode(c.selection[0].data.id)) {
                c.clearSelection();
                c.refresh();
              }
            }
          }
        });
      }
    });

    onUnmounted(() => {
      handleDestroy();
    });

    return {
      ns,
      diagramRef,
      diagramBoxRef,
      diagramBoxActivate,
      onFocus,
      onBlur,
      renderTopToolBar,
    };
  },
  render() {
    return (
      <div
        ref='diagramBoxRef'
        class={[
          this.ns.b(),
          this.readonly ? this.ns.m('readonly') : '',
          this.ns.is('activated', this.diagramBoxActivate),
        ]}
        tabindex='0'
        onFocus={this.onFocus}
        onBlur={this.onBlur}
      >
        {!this.readonly && this.diagramBoxActivate
          ? this.renderTopToolBar()
          : ''}
        <div id={`diagram-${this.nodeKey}`} ref='diagramRef'></div>
      </div>
    );
  },
});
