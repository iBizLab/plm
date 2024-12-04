/* eslint-disable no-param-reassign */
import { defineComponent, PropType, Ref, ref, watch } from 'vue';
import { useClickOutside, useNamespace } from '@ibiz-template/vue3-util';
import { IButtonContainerState } from '@ibiz-template/runtime';
import { IAppDEUIActionGroupDetail } from '@ibiz/model-core';
import './edit-column-action-toolbar.scss';
import { OnClickOutsideResult } from '@ibiz-template/core';

/**
 * 表格编辑列行为工具栏
 *
 * @description 此组件只管绘制布局及弹框控制能力
 */
export const IBizEditColumnActionToolbar = defineComponent({
  name: 'IBizEditColumnActionToolbar',
  props: {
    actionDetails: {
      type: Array<IAppDEUIActionGroupDetail>,
      required: true,
    },
    actionsState: {
      type: Object as PropType<IButtonContainerState>,
      required: true,
    },
    caption: String,
    mode: {
      type: String as PropType<'dropdown' | 'buttons'>,
      default: 'buttons',
    },
    // 分组的行为级别
    groupLevelKeys: {
      type: Object as PropType<number[]>,
      default: [50],
    },
    editColums: {
      type: Object as PropType<IData>,
      required: true,
    },
    showCommonAction: {
      type: Boolean,
      default: true,
    },
    zIndex: Number,
    popperClass: String,
  },
  emits: ['saveAll', 'actionClick'],
  setup(props, { emit }) {
    const ns = useNamespace('edit-column-action-toolbar');
    const ns2 = useNamespace('edit-column-action-toolbar');

    const popoverVisible = ref(false);

    /**
     * 控制一级pop显示隐藏
     */
    const topLevelVisible = ref(false);

    /**
     * 二级pop是否被打开
     */
    const childLevelVisible = ref(false);

    /**
     * 二级pop的Ref，排除外部点击时使用
     */
    const childLevelRef = ref();

    /**
     * 界面行为组的Ref，有特殊界面行为时包含内部编辑器以及其他界面行为，排除外部点击时使用
     */
    const actionRef = ref();

    /**
     * 行为是否在处理
     */
    const processing = ref(false);

    /**
     * 转换多语言
     */
    props.actionDetails?.forEach(detail => {
      if (detail.capLanguageRes && detail.capLanguageRes.lanResTag) {
        detail.caption = ibiz.i18n.t(
          detail.capLanguageRes.lanResTag,
          detail.caption,
        );
      }
      if (detail.tooltipLanguageRes && detail.tooltipLanguageRes.lanResTag) {
        detail.tooltip = ibiz.i18n.t(
          detail.tooltipLanguageRes.lanResTag,
          detail.tooltip,
        );
      }
    });

    /**
     * 平铺行为
     */
    const expandDetails: Ref<IAppDEUIActionGroupDetail[]> = ref([]);

    /**
     * 分组行为
     */
    const groupDetails: Ref<IAppDEUIActionGroupDetail[]> = ref([]);

    /**
     * 初始化数据
     */
    const initData = (): void => {
      groupDetails.value = [];
      expandDetails.value = [];
      if (props.actionDetails) {
        props.actionDetails.forEach(detail => {
          if (!props.showCommonAction && detail.actionLevel === 200) {
            return;
          }
          if (
            props.groupLevelKeys.findIndex(
              item => item === detail.actionLevel,
            ) !== -1
          ) {
            groupDetails.value.push(detail);
          } else {
            expandDetails.value.push(detail);
          }
        });
      }
    };

    watch(
      () => props.showCommonAction,
      () => {
        initData();
      },
      { immediate: true },
    );

    /**
     * 行为项分组实例
     */
    const groupButtonRef = ref();

    /**
     * 打开子popper
     */
    const openTopLevel = (): void => {
      topLevelVisible.value = true;
    };

    /**
     * 关闭子popper
     */
    const closeTopLevel = (): void => {
      topLevelVisible.value = false;
    };

    /**
     * 打开子popper
     */
    const openChildLevel = (): void => {
      childLevelVisible.value = true;
    };

    /**
     * 关闭子popper
     */
    const closeChildLevel = (): void => {
      childLevelVisible.value = false;
    };

    /**
     * 开启界面行为正在处理
     */
    const openProcessing = (): void => {
      processing.value = true;
    };

    /**
     * 关闭界面行为正在处理
     */
    const closeProcessing = (): void => {
      processing.value = false;
    };

    /**
     * 关闭所有的popover
     */
    const closeAllPopover = (): void => {
      closeChildLevel();
      topLevelVisible.value = false;
    };

    // 行为点击事件抛出去执行 此组件只管绘制布局及弹框控制能力
    const handleClick = async (
      detail: IAppDEUIActionGroupDetail,
      event: MouseEvent,
    ): Promise<void> => {
      event.stopPropagation();
      emit('actionClick', detail, event);
    };

    /**
     * 计算行为项类名
     */
    const calcActionItemClass = (item: IAppDEUIActionGroupDetail): string[] => {
      const { actionLevel } = item;
      return [
        ns.e('item'),
        ns.is('disabled', false),
        ns.em('item', `level-${actionLevel}`),
        ns.is(`level-${actionLevel}`, true),
      ];
    };

    /**
     * 点击外部时关闭popper
     */
    const handleOutSideClick = (): void => {
      if (!childLevelVisible.value) {
        topLevelVisible.value = false;
      }
    };

    /**
     * 子popover点击
     */
    const onChildLevelClick = (event: Event): void => {
      event.stopPropagation();
      event.preventDefault();
    };

    /**
     * 顶级popover消失时保存全部
     */
    const onTopLevelPopHide = (): void => {
      emit('saveAll');
    };

    // 点击外部时回调
    const onTopLevelPopShow = (): void => {
      const eles = childLevelRef.value;

      const funcs: OnClickOutsideResult = useClickOutside(
        actionRef.value,
        async () => {
          // 界面行为没有在处理中时，才关闭
          if (!processing.value) {
            handleOutSideClick();
            if (!topLevelVisible.value) {
              funcs.stop();
            }
          }
        },
        {
          ignore: [eles],
        },
      );
    };

    return {
      ns,
      ns2,
      actionRef,
      childLevelRef,
      expandDetails,
      groupDetails,
      groupButtonRef,
      popoverVisible,
      topLevelVisible,
      handleClick,
      openTopLevel,
      closeTopLevel,
      openChildLevel,
      closeChildLevel,
      closeAllPopover,
      openProcessing,
      closeProcessing,
      onChildLevelClick,
      onTopLevelPopHide,
      onTopLevelPopShow,
      calcActionItemClass,
    };
  },
  render() {
    const { $slots } = this;

    /**
     * 绘制编辑列
     */
    const renderEditColumn = (): JSX.Element | null => {
      // 找到所有编辑列属性并依次绘制出来排除自身
      const tempEdits = this.editColums.map((column: IData) => {
        const { caption } = column.model;
        const sysImage = column.model.sysImage || { cssClass: 'fa fa-bars' };
        return (
          <el-popover
            placement='right-start'
            width='280'
            teleported={false}
            offset={16}
            trigger='click'
          >
            {{
              reference: () => {
                return (
                  <div
                    class={this.ns.bem('popper', 'action-group', 'edit-column')}
                  >
                    <div class={this.ns.bem('popper', 'action-group', 'icon')}>
                      <iBizIcon icon={sysImage}></iBizIcon>
                    </div>
                    <span>{caption}</span>
                  </div>
                );
              },
              default: () => {
                return (
                  <div
                    onMouseenter={this.openChildLevel}
                    onMouseleave={this.closeChildLevel}
                    ref='childLevelRef'
                    onClick={(event: Event) => this.onChildLevelClick(event)}
                  >
                    {$slots.editor && $slots?.editor(column)}
                  </div>
                );
              },
            }}
          </el-popover>
        );
      });

      return tempEdits.length > 0 ? (
        <div class={this.ns.be('popper', 'edit-group')}>{tempEdits}</div>
      ) : null;
    };

    /**
     * 绘制行为项配置的分割线
     */
    const renderDivider = (isExpand: boolean): JSX.Element => {
      return (
        <el-divider
          class={this.ns.e('separator')}
          border-style='double'
          direction={isExpand ? 'vertical' : 'horizontal'}
        />
      );
    };

    /**
     * 绘制行为项
     */
    const renderActionItem = (
      action: IAppDEUIActionGroupDetail,
      isExpand = true,
    ): (JSX.Element | false | undefined)[] => {
      return [
        action.addSeparator && renderDivider(isExpand),
        <el-button
          text
          size='small'
          onClick={(e: MouseEvent): Promise<void> =>
            this.handleClick(action, e)
          }
          title={action.tooltip}
          disabled={this.actionsState[action.id!].disabled}
          class={this.calcActionItemClass(action)}
        >
          <div
            class={[
              this.ns.em('item', 'icon'),
              this.ns.is('has-caption', action.showCaption && !!action.caption),
              this.ns.is('has-icon', action.showIcon && !!action.sysImage),
            ]}
          >
            {action.showIcon && action.sysImage && (
              <iBizIcon icon={action.sysImage}></iBizIcon>
            )}
          </div>
          <div
            class={[
              this.ns.em('item', 'label'),
              this.ns.is('has-caption', action.showCaption && !!action.caption),
              this.ns.is('has-icon', action.showIcon && !!action.sysImage),
            ]}
          >
            {action.showCaption ? action.caption : ''}
          </div>
        </el-button>,
      ];
    };

    /**
     * 绘制行为组
     */
    const renderActions = (
      items: IAppDEUIActionGroupDetail[],
      isExpand = true,
    ): JSX.Element | ((false | JSX.Element | undefined)[] | null)[] => {
      if (isExpand) {
        return items.map(detail => {
          if (this.actionsState[detail.id!]?.visible) {
            return renderActionItem(detail, isExpand);
          }
          return null;
        });
      }

      let editColumn: JSX.Element | null = null;
      const actionItems: (false | JSX.Element | undefined)[][] = [];
      items.forEach((action: IAppDEUIActionGroupDetail) => {
        if (
          action.uiactionId &&
          action.uiactionId.includes('get_editor_column')
        ) {
          editColumn = renderEditColumn();
        } else if (this.actionsState[action.id!].visible) {
          actionItems.push(renderActionItem(action, isExpand));
        }
      });
      return (
        <div class={this.ns.be('popper', 'action-group')} ref='actionRef'>
          {editColumn}
          {...actionItems}
        </div>
      );
    };

    /**
     * 绘制分组
     */
    const renderGroup = (): JSX.Element[] | null => {
      if (this.groupDetails.length === 0) {
        return null;
      }
      // 子项所有项都隐藏，父项也应该隐藏
      const pvisible =
        this.groupDetails.findIndex(item => {
          return this.actionsState[item.id!].visible === true;
        }) !== -1;
      if (!pvisible) {
        return null;
      }
      // 当前项禁用或子项所有项都禁用，父项也应该禁用
      const pdisabled =
        this.groupDetails.findIndex(item => {
          return this.actionsState[item.id!].disabled === false;
        }) === -1;
      return [
        <el-button
          size='small'
          text
          disabled={pdisabled}
          ref='groupButtonRef'
          class={[
            this.ns.e('item'),
            this.ns.is('group-button', true),
            this.ns.is('expand', this.topLevelVisible),
          ]}
        >
          {{
            icon: () => (
              <ion-icon
                class={this.ns.e('icon')}
                name='ellipsis-vertical'
                title={ibiz.i18n.t('component.actionToolbar.more')}
              />
            ),
          }}
        </el-button>,
        <el-popover
          placement='right-start'
          width='280'
          virtual-ref={this.groupButtonRef}
          trigger='click'
          v-model:visible={this.topLevelVisible}
          popper-class={this.ns.b('popper')}
          virtual-triggering
          popper-style={{ zIndex: this.zIndex }}
          onShow={() => {
            this.onTopLevelPopShow();
          }}
          onHide={() => {
            this.onTopLevelPopHide();
          }}
        >
          {renderActions(this.groupDetails, false)}
        </el-popover>,
      ];
    };

    if (!this.actionsState?.visible) {
      return;
    }

    return (
      <div
        class={[this.ns.b(), this.ns.m('buttons')]}
        onClick={(e): void => e.stopPropagation()}
      >
        {renderActions(this.expandDetails)}
        {renderGroup()}
      </div>
    );
  },
});

export default IBizEditColumnActionToolbar;
