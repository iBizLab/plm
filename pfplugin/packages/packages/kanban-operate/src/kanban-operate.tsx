import { useNamespace } from '@ibiz-template/vue3-util';
import {
  IAppDEUIActionGroupDetail,
  IPanelButton,
  IUIActionGroupDetail,
} from '@ibiz/model-core';
import { defineComponent, PropType, computed, ref } from 'vue';
import { KanbanOperateController } from './kanban-operate.controller';
import { UIActionUtil } from '@ibiz-template/runtime';
import './kanban-operate.scss';

export const KanbanOperate = defineComponent({
  name: 'IBizKanbanOperate',
  props: {
    modelData: {
      type: Object as PropType<IPanelButton>,
      required: true,
    },
    controller: {
      type: KanbanOperateController,
      required: true,
    },
  },
  setup(props) {
    const ns = useNamespace('panel-button');
    const c = props.controller;
    /**
     * 快捷操作入口按钮
     */
    const buttonRef = ref();

    /**
     * 点击快捷操作按钮打开的popover
     */
    const popoverRef = ref();

    /**
     * 一般行为级别popover
     */
    const actionRef = ref();

    /**
     * 常用级别行为popover
     */
    const useactionRef = ref();

    /**
     * popover是否显示
     */
    const popoverRefVisible = ref(false);

    /**
     * 行为是否正在处理，正在处理中popover不消失
     */
    const processing = ref(false);

    /**
     * 获取模型数据
     */
    const {
      caption,
      captionItemName,
      renderMode,
      showCaption,
      sysImage,
      codeName,
      itemStyle,
      tooltip,
      buttonCssStyle,
    } = props.modelData;

    const { panel } = props.controller;

    /**
     * 设置按钮直接样式
     */
    const tempStyle = ref('');

    if (buttonCssStyle) {
      tempStyle.value = buttonCssStyle;
    }

    /**
     * 计算标题
     */
    const captionText = computed(() => {
      if (captionItemName && panel.data) {
        return panel.data[captionItemName.toLowerCase()];
      }
      return caption;
    });

    /**
     * 设置按钮绘制模式
     */
    let isText = false;
    if (Object.is(renderMode, 'LINK')) {
      isText = true;
    }

    /**
     * 计算按钮类型
     */
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

    const handleActionVisible = (item: IData): boolean => {
      const actionconfig = c.uaState[item.id];
      if (
        actionconfig &&
        actionconfig.disabled === false &&
        actionconfig.visible === true
      ) {
        return true;
      }
      return false;
    };

    /**
     * 处理行为级别,分为关键行为组,常用行为组和一般行为组，常用行为组都为打开编辑表单的界面行为
     * @returns {keyActions,deActions}
     */
    const handleActionLevel = () => {
      const { actionModel } = c;
      const keyActions: IUIActionGroupDetail[] = [];
      const useActions: IUIActionGroupDetail[] = [];
      const deActions: IUIActionGroupDetail[] = [];

      if (actionModel && actionModel.deuiactionGroup) {
        const { uiactionGroupDetails } = actionModel.deuiactionGroup;
        uiactionGroupDetails.forEach((detail: IUIActionGroupDetail) => {
          if (detail.actionLevel === 250) {
            keyActions.push(detail);
          } else if (detail.actionLevel === 200) {
            useActions.push(detail);
          } else {
            deActions.push(detail);
          }
        });
      }

      return { deActions, useActions, keyActions };
    };

    const handleEvent = (
      detail: IUIActionGroupDetail,
      event: any,
      element?: Element | null,
    ) => {
      const e = { ...event };
      if (element) {
        const actionEl = element.querySelector(`.${detail.id!}`);
        if (actionEl) {
          e.target = actionEl;
        }
      }
      return e;
    };

    /**
     * 界面行为点击
     * @param detail 行为详情
     * @param event
     */
    const onActionClick = async (
      detail: IUIActionGroupDetail,
      event: MouseEvent,
      element?: Element | null,
    ): Promise<void> => {
      event.stopPropagation();
      processing.value = true;
      const params: any = {
        context: panel.context,
        params: panel.params,
        data: [panel.inputData],
        view: panel.view,
        event: handleEvent(detail, event, element),
      };
      await UIActionUtil.execAndResolved(
        detail.uiactionId!,
        params,
        detail.appId,
      );
      processing.value = false;
    };

    /**
     * 点击快捷按钮
     * @param event
     */
    const handleButtonClick = async (event: MouseEvent): Promise<void> => {
      props.controller.onClick();
    };

    /**
     * 计算行为按钮样式类
     */
    const calcActionItemClass = (item: IAppDEUIActionGroupDetail) => {
      const { actionLevel } = item;
      return [
        item.id,
        ns.e('item'),
        ns.is('disabled', false),
        ns.em('item', `level-${actionLevel}`),
      ];
    };

    /**
     * 绘制关键行为
     * @param keyActions
     * @returns
     */
    const renderKeyActions = (
      keyActions: IUIActionGroupDetail[],
    ): JSX.Element | null => {
      if (keyActions.length === 0) return null;
      return (
        <div class={ns.be('poper-content', 'keyaction')}>
          {keyActions.map((action: IUIActionGroupDetail) => {
            return (
              <el-button
                class={[
                  ns.bem('poper-content', 'keyaction', 'action'),
                  ...calcActionItemClass(action),
                  { 'no-access': !handleActionVisible(action) },
                ]}
                text
                size='small'
                onClick={(e: MouseEvent) => onActionClick(action, e, null)}
                title={action.tooltip || action.caption}>
                {action.showIcon && (action as any).sysImage ? (
                  <iBizIcon icon={(action as any).sysImage}></iBizIcon>
                ) : (
                  <iBizIcon icon='fa fa-save'></iBizIcon>
                )}
              </el-button>
            );
          })}
        </div>
      );
    };

    /**
     * 绘制一般行为
     * @param deActions
     * @returns
     */
    const renderDefaultActions = (
      deActions: IUIActionGroupDetail[],
    ): JSX.Element | null => {
      if (deActions.length === 0) return null;
      return (
        <div class={ns.be('poper-content', 'deaction')} ref={actionRef}>
          {deActions.map((action: IUIActionGroupDetail) => {
            if (handleActionVisible(action)) {
              return (
                <div
                  class={[
                    ns.bem('poper-content', 'deaction', 'action'),
                    ...calcActionItemClass(action),
                    { 'no-access': !handleActionVisible(action) },
                  ]}
                  onClick={(e: MouseEvent) =>
                    onActionClick(action, e, actionRef.value)
                  }
                  title={action.tooltip || action.caption}>
                  {action.showIcon && (action as any).sysImage ? (
                    <iBizIcon icon={(action as any).sysImage}></iBizIcon>
                  ) : (
                    <i class='ibiz-icon fa fa-ravelry' aria-hidden='true'></i>
                  )}
                  <span
                    class={ns.bem('poper-content', 'deaction', 'action-text')}>
                    {action.showCaption
                      ? (action as any).capLanguageRes
                        ? ibiz.i18n.t(
                            (action as any).capLanguageRes.lanResTag,
                            action.caption,
                          )
                        : action.caption
                      : ''}
                  </span>
                </div>
              );
            }
            return null;
          })}
        </div>
      );
    };

    /**
     * @description 绘制常用操作，这里的界面行为都是用来打开编辑表单的
     * @author 姜林君
     * @date 2024/03/13 16:03:44
     */
    const renderUseAvtions = (deActions: IUIActionGroupDetail[]) => {
      if (deActions.length === 0) return null;
      return (
        <div class={ns.be('poper-content', 'useaction')} ref={useactionRef}>
          {deActions.map((action: IUIActionGroupDetail) => {
            return (
              <div
                class={[
                  ns.bem('poper-content', 'useaction', 'action'),
                  ...calcActionItemClass(action),
                  { 'no-access': !handleActionVisible(action) },
                ]}
                onClick={(e: MouseEvent) =>
                  onActionClick(action, e, useactionRef.value)
                }
                title={action.tooltip || action.caption}>
                {action.showIcon && (action as any).sysImage ? (
                  <iBizIcon icon={(action as any).sysImage}></iBizIcon>
                ) : (
                  <i class='ibiz-icon fa fa-ravelry' aria-hidden='true'></i>
                )}
                <span
                  class={ns.bem('poper-content', 'useaction', 'action-text')}>
                  {action.showCaption
                    ? (action as any).capLanguageRes
                      ? ibiz.i18n.t(
                          (action as any).capLanguageRes.lanResTag,
                          action.caption,
                        )
                      : action.caption
                    : ''}
                </span>
              </div>
            );
          })}
        </div>
      );
    };

    /**
     *  绘制poper弹窗内容
     * @returns
     */
    const renderPoperContent = () => {
      const { keyActions, useActions, deActions } = handleActionLevel();
      return (
        <div class={ns.b('poper-content')}>
          {renderKeyActions(keyActions)}
          {renderUseAvtions(useActions)}
          {renderDefaultActions(deActions)}
        </div>
      );
    };

    /**
     * 绘制快捷按钮
     * @returns
     */
    const renderBtn = () => {
      return (
        <div>
          <el-tooltip
            popperClass={ns.b('title')}
            effect='dark'
            content={tooltip}
            placement='top'
            show-arrow>
            <el-button
              ref='buttonRef'
              type={buttonType.value}
              text={isText}
              onClick={handleButtonClick}>
              <div class={ns.b('content')}>
                <iBizIcon class={ns.bm('content', 'icon')} icon={sysImage} />
                {showCaption ? (
                  <span class={ns.bm('content', 'caption')}>{captionText}</span>
                ) : (
                  ''
                )}
              </div>
            </el-button>
          </el-tooltip>
        </div>
      );
    };

    /**
     * 阻止默认和冒泡事件
     * @param event
     */
    const stopEvent = (event: Event) => {
      event.stopPropagation();
      event.preventDefault();
    };

    /**
     * 控制popover显示逻辑
     */
    const isVisible = computed({
      get() {
        return popoverRefVisible.value || processing.value;
      },
      set(value: boolean) {
        popoverRefVisible.value = value;
      },
    });

    return {
      ns,
      isText,
      captionText,
      buttonType,
      showCaption,
      sysImage,
      codeName,
      tooltip,
      handleButtonClick,
      buttonCssStyle,
      tempStyle,
      itemStyle,
      buttonRef,
      popoverRef,
      popoverRefVisible,
      renderPoperContent,
      renderBtn,
      stopEvent,
      processing,
      isVisible,
    };
  },
  render() {
    return (
      <div
        class={[
          this.ns.b(),
          this.ns.m(this.codeName),
          this.itemStyle && this.ns.m(this.itemStyle.toLowerCase()),
          this.ns.is('show-popover', this.isVisible),
          ...this.controller.containerClass,
        ]}
        onClick={this.stopEvent}
        style={this.tempStyle}>
        <el-popover
          ref='popoverRef'
          disabled={this.controller.state.readonly}
          v-model:visible={this.isVisible}
          popperClass={[this.ns.b('one-popover')]}
          width={278}
          placement='right-start'
          trigger='click'>
          {{
            reference: () => {
              return this.renderBtn();
            },
            default: () => {
              return this.renderPoperContent();
            },
          }}
        </el-popover>
      </div>
    );
  },
});
export default KanbanOperate;
