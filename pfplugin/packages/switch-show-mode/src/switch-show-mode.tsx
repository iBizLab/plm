/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useNamespace } from '@ibiz-template/vue3-util';
import { IPanelButton } from '@ibiz/model-core';
import { defineComponent, PropType, computed, ref } from 'vue';
import { SwitchShowModeController } from './switch-show-mode.controller';
import './switch-show-mode.scss';

export const SwitchShowMode = defineComponent({
  name: 'IBizSwitchShowMode',
  props: {
    modelData: {
      type: Object as PropType<IPanelButton>,
      required: true,
    },
    controller: {
      type: SwitchShowModeController,
      required: true,
    },
  },
  setup(props) {
    const ns = useNamespace('switch-show-mode');

    const { renderMode, codeName, itemStyle } = props.modelData;

    const { state } = props.controller;

    // 下拉项数据集合
    const dropdownItems = ref([
      {
        _icon: {},
        _text: '视图',
        _showCaption: true,
        _className: 'item-view',
      },
      {
        _icon: {},
        _text: '',
        _showCaption: true,
        _className: 'item-divider',
      },
      {
        _icon: {
          htmlStr: `<svg t="1706002902701" class="icon" viewBox="0 0 1088 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1501" width="1em" height="1em"><path d="M480 64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32v-128a32 32 0 0 0-32-32h-128zM192 704h32A96 96 0 0 1 320 800v128A96 96 0 0 1 224 1024h-128A96 96 0 0 1 0 928v-128A96 96 0 0 1 96 704H128V512a64 64 0 0 1 64-64h320V320h-32A96 96 0 0 1 384 224v-128A96 96 0 0 1 480 0h128A96 96 0 0 1 704 96v128A96 96 0 0 1 608 320H576v128h320a64 64 0 0 1 64 64v192h32a96 96 0 0 1 96 96v128a96 96 0 0 1-96 96h-128a96 96 0 0 1-96-96v-128a96 96 0 0 1 96-96h32V512H576v192h32a96 96 0 0 1 96 96v128A96 96 0 0 1 608 1024h-128A96 96 0 0 1 384 928v-128A96 96 0 0 1 480 704H512V512H192v192z m672 64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32v-128a32 32 0 0 0-32-32h-128z m-384 0a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32v-128a32 32 0 0 0-32-32h-128z m-384 0a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32v-128a32 32 0 0 0-32-32h-128z" p-id="1502"></path></svg>`,
        },
        _text: '树状',
        showMode: 'tree',
        _showCaption: true,
        selected: true,
      },
      {
        _icon: {
          cssClass: 'fa fa-reorder',
        },
        _text: '平铺',
        showMode: 'grid',
        _showCaption: true,
        selected: false,
      },
    ]);

    // 选中值
    const selected = ref<IParams>(dropdownItems.value[2]);

    let isText = false;
    if (Object.is(renderMode, 'LINK')) {
      isText = true;
    }

    const buttonType = computed(() => {
      if (Object.is(renderMode, 'LINK')) {
        return null;
      }
      switch (itemStyle) {
        case 'PRIMARY':
          return 'primary';
        case 'SUCCESS':
          return 'success';
        case 'INFO':
          return 'info';
        case 'WARNING':
          return 'warning';
        case 'DANGER':
          return 'danger';
        case 'INVERSE':
          return 'info';
        default:
          return null;
      }
    });

    /**
     * 处理选中状态
     */
    const handleSelected = (params: IParams) => {
      dropdownItems.value.forEach((detail: IParams) => {
        if (params?.showMode === detail?.showMode) {
          Object.assign(detail, { selected: true });
        } else {
          Object.assign(detail, { selected: false });
        }
      });
      selected.value = params;
    };

    /**
     * 处理点击
     */
    const handleButtonClick = async (
      event: MouseEvent,
      params: IParams,
    ): Promise<void> => {
      // 过滤激活项及展示项
      if (params?.showMode === selected.value?.showMode || !params?.showMode) {
        return;
      }
      try {
        state.loading = true;
        await props.controller.onActionClick(event, params);
        handleSelected(params);
        props.controller.onClick();
      } finally {
        state.loading = false;
      }
    };

    /**
     * 绘制内容项
     */
    const renderContentItem = (_args: IParams) => {
      const { _icon, _text, _showCaption } = _args;
      return (
        <div
          class={[
            ns.b('content'),
            _args?._className,
            _args?.selected ? ns.be('content', 'selected') : '',
          ]}
          onClick={event => {
            handleButtonClick(event, _args);
          }}
        >
          <iBizIcon class={ns.bm('content', 'icon')} icon={_icon} />
          {_showCaption ? (
            <span class={ns.bm('content', 'caption')}>{_text}</span>
          ) : (
            ''
          )}
        </div>
      );
    };

    return {
      ns,
      isText,
      buttonType,
      codeName,
      state,
      dropdownItems,
      selected,
      handleButtonClick,
      renderContentItem,
    };
  },
  render() {
    if (this.state.visible) {
      return (
        <div
          class={[
            this.ns.b(),
            this.ns.m(this.codeName),
            this.ns.is('loading', this.state.loading),
            ...this.controller.containerClass,
          ]}
        >
          <el-dropdown trigger='click' popper-class={this.ns.b('popper')}>
            {{
              default: () => (
                <el-button
                  type={this.buttonType}
                  text={this.isText}
                  disabled={this.state.disabled}
                  loading={this.state.loading}
                >
                  {this.renderContentItem(this.selected)}
                </el-button>
              ),
              dropdown: () => (
                <el-dropdown-menu>
                  {{
                    default: () =>
                      this.dropdownItems.map((detail: IParams) => {
                        return (
                          <el-dropdown-item>
                            {this.renderContentItem(detail)}
                          </el-dropdown-item>
                        );
                      }),
                  }}
                </el-dropdown-menu>
              ),
            }}
          </el-dropdown>
        </div>
      );
    }
    return null;
  },
});
export default SwitchShowMode;
