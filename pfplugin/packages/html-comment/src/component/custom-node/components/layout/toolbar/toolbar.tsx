import { defineComponent, PropType } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import { IModal, IModalData } from '@ibiz-template/runtime';
import './toolbar.scss';

export const LayoutToolBar = defineComponent({
  name: 'IBizLayoutToolBar',
  props: {
    modal: { type: Object as PropType<IModal>, required: true },
  },
  setup(props) {
    const ns = useNamespace('layout-toolbar');
    const toolBars = [
      {
        type: 'delete',
        text: '删除',
        icon: `<svg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' height='1em' width='1em'> <g stroke-width='1' fill-rule='evenodd'> <path d='M4.002 3.403V1a1 1 0 0 1 1-1h6.003a1 1 0 0 1 1 1v2.403h3.396a.6.6 0 1 1 0 1.2h-1.395V15a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4.603H.6a.6.6 0 1 1 0-1.2h3.4zm8.804 1.205H3.2V14.8h9.605V4.608zM5.202 1.2v2.155h5.603V1.2H5.202zm.6 6.417a.6.6 0 0 1 1.201 0v4.758a.6.6 0 0 1-1.2 0V7.617zm3.202 0a.6.6 0 0 1 1.2 0v4.758a.6.6 0 0 1-1.2 0V7.617z'></path> </g></svg>`,
      },
    ];

    // 处理提示弹框的删除
    const handleDelete = async (): Promise<void> => {
      if (props.modal) {
        const modalData: IModalData = {
          ok: true,
          data: [{ value: '', params: { isDelete: true } }],
        };
        props.modal?.dismiss(modalData);
      }
    };

    // 处理工具栏项点击
    const handleToolItemClick = (item: IData): void => {
      if (item.type === 'separator') {
        return;
      }
      switch (item.type) {
        case 'delete':
          handleDelete();
          break;
        default:
          break;
      }
    };

    // 绘制工具栏
    const renderToolBar = (): JSX.Element => {
      return (
        <div class={ns.e('content')}>
          {toolBars.map((item: IData) => {
            return (
              <div
                class={[ns.e('tool-item'), ns.e(`tool-item-${item.type}`)]}
                title={item.text}
                onClick={() => handleToolItemClick(item)}
              >
                <div
                  class={ns.em('tool-item', 'content')}
                  v-html={item.icon || item.text}
                ></div>
              </div>
            );
          })}
        </div>
      );
    };

    return {
      ns,
      renderToolBar,
    };
  },
  render() {
    return <div class={[this.ns.b()]}>{this.renderToolBar()}</div>;
  },
});
