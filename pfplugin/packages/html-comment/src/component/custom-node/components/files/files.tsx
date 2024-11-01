import { computed, defineComponent, ref } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import './files.scss';
import { getCustomNodeProps } from '../../utils';
import { getFileSvgByType } from '../../../file-type/file-type';

export const Files = defineComponent({
  name: 'IBizFiles',
  props: getCustomNodeProps(),
  setup(props) {
    const ns = useNamespace('files');
    const hoverToolBarItemKey = ref('');
    const visible = ref(false);
    // 文件
    const file = computed(() => {
      const tempFile = {};
      if (props.data) {
        Object.assign(tempFile, props.data);
      }
      return tempFile as IData;
    });

    // 工具栏
    const toolBars = [
      {
        type: 'download',
        text: '下载',
        color: 'rgb(245,108,108,0.2)',
        icon: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fit="" height="1em" width="1em" preserveAspectRatio="xMidYMid meet" focusable="false"><g stroke-width="1" fill-rule="evenodd"><path d="M7.393 9.953V1.02h1.2v9.06l2.717-2.716.88-.817.817.817-4.95 4.95-4.95-4.95.847-.847 1.16 1.165.004-.004 2.275 2.275zM16 9v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V9h1.2v5.8h13.6V9H16z" id="ajb下载"></path></g></svg>`,
      },
      {
        type: 'separator',
        text: '|',
      },
      {
        type: 'delete',
        text: '删除',
        icon: `<svg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' height='1em' width='1em'> <g stroke-width='1' fill-rule='evenodd'> <path d='M4.002 3.403V1a1 1 0 0 1 1-1h6.003a1 1 0 0 1 1 1v2.403h3.396a.6.6 0 1 1 0 1.2h-1.395V15a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4.603H.6a.6.6 0 1 1 0-1.2h3.4zm8.804 1.205H3.2V14.8h9.605V4.608zM5.202 1.2v2.155h5.603V1.2H5.202zm.6 6.417a.6.6 0 0 1 1.201 0v4.758a.6.6 0 0 1-1.2 0V7.617zm3.202 0a.6.6 0 0 1 1.2 0v4.758a.6.6 0 0 1-1.2 0V7.617z'></path> </g></svg>`,
      },
    ];

    // 处理下载
    const handleDownload = (): void => {
      const url = file.value.url || '';
      if (url) {
        ibiz.util.file.fileDownload(url, file.value.name);
      }
    };

    // 处理删除
    const handleDelete = (): void => {
      props.change('', { isDelete: true });
    };

    // 处理工具栏项点击
    const onToolItemClick = (item: IData): void => {
      if (item.type === 'separator') {
        return;
      }
      // inputRef.value?.focus();
      switch (item.type) {
        case 'download':
          handleDownload();
          break;
        case 'delete':
          handleDelete();
          break;
        default:
          break;
      }
    };

    // 工具栏移入
    const onMouseover = (item: IData): void => {
      hoverToolBarItemKey.value = item.type;
    };

    // 工具栏移出
    const onMouseout = (): void => {
      hoverToolBarItemKey.value = '';
    };

    // 弹框显示
    const onShow = (): void => {
      visible.value = true;
    };

    // 弹框关闭
    const onHide = (): void => {
      visible.value = false;
    };

    return {
      ns,
      file,
      toolBars,
      visible,
      hoverToolBarItemKey,
      onToolItemClick,
      onMouseover,
      onMouseout,
      onShow,
      onHide,
    };
  },
  render() {
    const reference = (
      <div ref='referenceRef' class={this.ns.e('reference')}>
        <span class={this.ns.em('reference', 'file-type')}>
          {getFileSvgByType(this.file.type)}
        </span>
        {this.file.name && (
          <span class={this.ns.em('reference', 'file-name')}>
            {this.file.name}
          </span>
        )}
      </div>
    );

    const editContent = (
      <el-popover
        trigger='click'
        ref='popoverRef'
        width='auto'
        hide-after={0}
        placement='top-start'
        popper-class={[this.ns.e('popover'), `${this.nodeKey}`]}
        onShow={this.onShow}
        onHide={this.onHide}
      >
        {{
          default: () => {
            return (
              <div class={this.ns.be('popover', 'content')}>
                {this.toolBars.map((item: IData) => {
                  return (
                    <div
                      class={[
                        this.ns.be('popover', 'tool-item'),
                        this.ns.be('popover', `tool-item-${item.type}`),
                        this.ns.is(item.type, !!item.type),
                      ]}
                      title={item.text}
                      onClick={() => this.onToolItemClick(item)}
                      onMouseover={() => this.onMouseover(item)}
                      onMouseout={() => this.onMouseout()}
                    >
                      <div
                        class={this.ns.bem('popover', 'tool-item', 'content')}
                        v-html={item.icon || item.text}
                      ></div>
                    </div>
                  );
                })}
              </div>
            );
          },
          reference: () => reference,
        }}
      </el-popover>
    );

    return (
      <div
        ref='files'
        class={[
          this.ns.b(),
          this.readonly ? this.ns.m('readonly') : '',
          this.ns.is(
            'hover-tool-bar-item',
            !!this.hoverToolBarItemKey || this.visible,
          ),
          this.ns.is(this.hoverToolBarItemKey, !!this.hoverToolBarItemKey),
        ]}
      >
        {editContent}
      </div>
    );
  },
});
