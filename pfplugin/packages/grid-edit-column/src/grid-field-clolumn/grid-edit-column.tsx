/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-nested-ternary */
import {
  VNode,
  computed,
  defineComponent,
  h,
  ref,
  resolveComponent,
  onMounted,
  Ref,
  onUnmounted,
} from 'vue';
import {
  CodeListItem,
  GridColumnController,
  GridRowState,
  IUILogicParams,
  Srfuf,
  SysUIActionTag,
  UIActionUtil,
} from '@ibiz-template/runtime';
import { useClickOutside, useNamespace } from '@ibiz-template/vue3-util';
import {
  IAppDEUIActionGroupDetail,
  IUIActionGroupDetail,
} from '@ibiz/model-core';
import { isNotNil } from 'ramda';
import { OnClickOutsideResult, RuntimeError } from '@ibiz-template/core';
import { useCellEdit } from './cell-edit';
import { useRowEdit } from './row-edit';
import { useAllEdit } from './all-edit';
import './grid-edit-column.scss';
import { GridEditColumnController } from './grid-edit-column.controller';

export const GridEditColumn = defineComponent({
  name: 'GridEditColumn',
  props: {
    controller: {
      type: GridEditColumnController,
      required: true,
    },
    row: {
      type: GridRowState,
      required: true,
    },
  },
  setup(props) {
    const ns = useNamespace('grid-edit-column');

    const componentRef = ref();

    const containerRef = ref();

    const c = props.controller;

    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    const fieldName = c.editItem?.codeName!;

    // 二级pop是否被打开
    const overchild = ref(false);

    // 控制一级pop显示隐藏
    const visible = ref(false);

    // 二级pop的Ref，排除外部点击时使用
    const childRef = ref();

    // 界面行为组的Ref，有特殊界面行为时包含内部编辑器以及其他界面行为，排除外部点击时使用
    const actionRef = ref();

    // 一级pop的Ref
    const popperRef = ref();

    // 行为等级
    const LevelKeys = [50, 100];

    // 行为是否在处理
    const processing = ref(false);

    const { zIndex } = props.controller.grid.state;

    const pickerData: Ref<readonly CodeListItem[]> = ref([]);
    const pickerValue = ref('');
    let picking = false;

    // 点击外部
    let funcs: OnClickOutsideResult;

    const userData = props.row.data.srfUserData;
    const getPickerData = async () => {
      const { srfuf } = props.row.data;
      if (srfuf === Srfuf.CREATE && userData) {
        pickerData.value = await c.loadUserCodeList(userData);
        pickerValue.value = userData.defaultValue;
        c.curPickerId = userData.defaultValue;
      }
    };
    getPickerData();

    // 平铺行为
    const expandDetails = computed(() => {
      const { deuiactionGroup } = c.model;
      if (deuiactionGroup?.uiactionGroupDetails) {
        return deuiactionGroup.uiactionGroupDetails.filter(
          detail =>
            LevelKeys.findIndex(item => item === detail.actionLevel) === -1,
        );
      }
      return [];
    });

    // 分组行为
    const groupDetails = computed(() => {
      const { deuiactionGroup } = c.model;
      if (deuiactionGroup?.uiactionGroupDetails) {
        return deuiactionGroup.uiactionGroupDetails.filter(
          detail =>
            LevelKeys.findIndex(item => item === detail.actionLevel) !== -1,
        );
      }
      return [];
    });

    // 树表格 树状时显示常用操作，非树状时不显示常用操作
    const showCommonAction = computed(() => {
      if (
        c.grid.model.controlType === 'TREEGRID' &&
        !(c.grid.state as IData).showTreeGrid
      ) {
        return false;
      }
      return true;
    });

    // 编辑器值变更事件
    const rowDataChange = async (
      val: unknown,
      name?: string,
    ): Promise<void> => {
      await c.setRowValue(props.row, val, name);
    };

    const useByShowMode = (): {
      gridEditItemProps: IData;
      editorProps: IData;
    } => {
      switch (ibiz.config.grid.editShowMode) {
        case 'cell':
          return useCellEdit(props, componentRef);
        case 'row':
          return useRowEdit(props, componentRef);
        case 'all':
          return useAllEdit(props, componentRef);
        default:
          throw new RuntimeError(`${ibiz.config.grid.editShowMode}暂未支持`);
      }
    };

    const { gridEditItemProps, editorProps } = useByShowMode();

    const setEditable = (flag: boolean): void => {
      props.row.editColStates[c.fieldName].editable = flag;
    };

    onMounted(() => {
      // cell编辑模式：如果是新建行且该列启用行编辑，默认启用编辑态
      const isCreate = props.row.data.srfuf === Srfuf.CREATE;
      if (isCreate) {
        setEditable(true);
      }
      if (containerRef.value) {
        funcs = useClickOutside(containerRef, async () => {
          if (!picking && !editorProps.readonly) {
            c.hasDropdown = false;
            editorProps.onBlur();
          }
        });
      }
    });

    onUnmounted(() => {
      if (funcs && funcs.stop) {
        funcs.stop();
      }
    });

    /**
     * 单元格点击事件
     *
     * @author lxm
     * @date 2022-09-28 18:09:27
     * @param {MouseEvent} event
     */
    const onCellClick = (event: MouseEvent): void => {
      if (props.controller.hasAction) {
        event.stopPropagation();
        // 阻止触发行点击
        props.controller.triggerAction(props.row, event);
      }
    };

    /**
     * 文本点击事件
     *
     * @author zk
     * @date 2023-07-13 12:07:53
     * @param {MouseEvent} event
     */
    const onTextClick = (event: MouseEvent): void => {
      // 阻止触发行点击
      if (props.controller.isLinkColumn) {
        event.stopPropagation();
        props.controller.openLinkView(props.row, event);
      }
    };

    /**
     * 获取脚本代码html
     * @param {*} computed
     * @return {*}
     * @author: zhujiamin
     * @Date: 2023-08-15 11:34:31
     */
    const CustomHtml = computed(() => {
      return c.getCustomHtml(props.row);
    });

    const actionsState = computed(
      () => props.row.uiActionGroupStates[c.model.codeName!],
    );

    const fieldValue = computed(
      () => props.row.data[props.controller.model.codeName!.toLowerCase()],
    );

    const formatValue = computed(() => c.formatValue(fieldValue.value));

    const infoText = ref<string | undefined>(undefined);

    const onInfoTextChange = (text: string): void => {
      infoText.value = text;
    };

    // tooltip相关
    const tooltip = computed(() => {
      if (
        props.controller.grid.overflowMode === 'ellipsis' &&
        isNotNil(fieldValue.value) &&
        fieldValue.value !== ''
      ) {
        return infoText.value
          ? infoText.value
          : formatValue.value + (props.controller.model.unitName || '');
      }
      return undefined;
    });

    const handleEvent = (detail: IUIActionGroupDetail, event: Event): Event => {
      const e = { ...event };
      if (actionRef.value) {
        const actionEl = actionRef.value.querySelector(`.${detail.id!}`);
        if (actionEl) {
          e.target = actionEl;
        }
      }
      return e;
    };

    // 界面行为点击
    const onActionClick = async (
      detail: IUIActionGroupDetail,
      event: MouseEvent,
    ): Promise<void> => {
      event.stopPropagation();

      processing.value = true;
      const params = {
        context: c.context,
        params: c.params,
        data: [props.row.data],
        view: c.grid.view,
        event: handleEvent(detail, event),
      };
      const result = await UIActionUtil.exec(
        detail.uiactionId!,
        params as unknown as IUILogicParams,
        detail.appId,
      );
      // 不是取消操作就关闭popper
      if (!result.cancel) {
        visible.value = false;
      }
      processing.value = false;
      if (result.closeView) {
        params.view.modal.ignoreDismissCheck = true;
        params.view.closeView({ ok: true });
      } else if (result.refresh) {
        switch (result.refreshMode) {
          case 1:
            params.view.callUIAction(SysUIActionTag.REFRESH);
            break;
          case 2:
            params.view.parentView?.callUIAction(SysUIActionTag.REFRESH);
            break;
          case 3:
            params.view.getTopView()?.callUIAction(SysUIActionTag.REFRESH);
            break;
          default:
        }
      }
    };

    // 编辑器值变更事件
    const onDataChange = async (
      editController: GridEditColumnController,
      val: unknown,
      name?: string,
    ): Promise<void> => {
      const _name: string =
        name || (editController.editItem.codeName as string);
      await c.setRowValue(props.row, val, _name);
      // 除特定编辑器外，其他编辑器抛值时应该关闭子
      const type = editController.editor.model.editorType as string;
      if (
        ![
          'TEXTBOX',
          'PASSWORD',
          'TEXTAREA',
          'TEXTAREA_10',
          'NUMBER',
          'SOLIDER',
          'STEPPER',
        ].includes(type)
      ) {
        isLeaveChild();
        visible.value = false;
      }
    };

    // 编辑器值enter事件 -- 关闭子与父popper,保存当前行数据
    const editorEnter = (): void => {
      isLeaveChild();
      visible.value = false;
      c.grid.saveAll();
    };

    // 绘制编辑器
    const renderEditor = (editController: GridColumnController) => {
      const tempFieldName = (editController as GridEditColumnController)
        .editItem.codeName!;
      const val = props.row.data[tempFieldName];
      const readonly = props.row.editColStates[tempFieldName]?.readonly;
      const disabled = props.row.editColStates[tempFieldName]?.disabled;
      return (
        (editController as GridEditColumnController).editorProvider &&
        h(
          resolveComponent(
            (editController as GridEditColumnController).editorProvider!
              .gridEditor,
          ),
          {
            class: ns.e('editor'),
            value: readonly
              ? (editController as GridEditColumnController).formatValue(val)
              : val,
            data: props.row.data,
            controller: (editController as GridEditColumnController).editor,
            overflowMode: c.grid.overflowMode,
            // eslint-disable-next-line no-shadow
            onChange: (val: unknown, name?: string) =>
              onDataChange(
                editController as GridEditColumnController,
                val,
                name,
              ),
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onEnter: (event: Event) => editorEnter(),
            readonly,
            disabled,
          },
        )
      );
    };

    // 鼠标进入子popper
    const isOverChild = (): void => {
      overchild.value = true;
    };

    // 鼠标离开子popper
    const isLeaveChild = (): void => {
      overchild.value = false;
    };

    // 子popover点击
    const childClick = (event: Event): void => {
      event.stopPropagation();
      event.preventDefault();
    };

    const onOpenEdit = (event: Event): void => {
      event.stopPropagation();
      setEditable(true);
    };

    // 绘制编辑列
    const renderEditColumn = (): JSX.Element | null => {
      // 找到所有编辑列属性并依次绘制出来排除自身
      const colums = Object.values(c.grid.columns).filter(
        (column: GridColumnController) => {
          return column.enableRowEdit && column.model.id !== c.model.id;
        },
      );
      const tempEdits = colums.map((column: GridColumnController) => {
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
                    class={ns.bem(
                      'actions-popper',
                      'action-group',
                      'edit-column',
                    )}
                  >
                    <iBizIcon icon={sysImage}></iBizIcon>
                    {caption}
                  </div>
                );
              },
              default: () => {
                return (
                  <div
                    onMouseenter={isOverChild}
                    onMouseleave={isLeaveChild}
                    ref={childRef}
                    onClick={(event: Event) => childClick(event)}
                  >
                    {renderEditor(column)}
                  </div>
                );
              },
            }}
          </el-popover>
        );
      });

      return tempEdits.length > 0 ? (
        <div class={ns.be('actions-popper', 'edit-group')}>{tempEdits}</div>
      ) : null;
    };

    // 绘制行为项
    const renderActionItem = (action: IAppDEUIActionGroupDetail) => {
      return (
        <el-button
          text
          size='small'
          onClick={(e: MouseEvent) => onActionClick(action, e)}
          title={
            (action as IParams).tooltipLanguageRes
              ? ibiz.i18n.t(
                  (action as IParams).tooltipLanguageRes.lanResTag,
                  action.tooltip,
                )
              : action.tooltip
          }
          disabled={actionsState.value[action.id!].disabled}
          class={calcActionItemClass(action)}
        >
          {action.showIcon && action.sysImage && (
            <div class={ns.be('action', 'icon')}>
              <iBizIcon icon={action.sysImage}></iBizIcon>
            </div>
          )}
          {action.showCaption
            ? (action as IParams).capLanguageRes
              ? ibiz.i18n.t(
                  (action as IParams).capLanguageRes.lanResTag,
                  action.caption,
                )
              : action.caption
            : ''}
        </el-button>
      );
    };

    // 绘制界面行为 -- 前面有判断，所以这里直接绘制就行
    const renderUIActions = () => {
      let editColumn: VNode | null = null;
      const actionItems: VNode[] = [];
      groupDetails.value.forEach((action: IAppDEUIActionGroupDetail) => {
        if (
          action.uiactionId &&
          action.uiactionId.includes('get_editor_column')
        ) {
          editColumn = renderEditColumn();
        } else if (actionsState.value[action.id!].visible) {
          actionItems.push(renderActionItem(action));
        }
      });
      return (
        <div class={ns.be('actions-popper', 'action-group')} ref={actionRef}>
          {editColumn}
          {...actionItems}
        </div>
      );
    };

    // 点击外部时回调
    const parentPopClick = (): void => {
      const eles = childRef.value;
      const funcs: OnClickOutsideResult = useClickOutside(
        actionRef,
        async _evt => {
          // 界面行为没有在处理中时，才关闭
          if (!processing.value) {
            handleOutSideClick();
            if (!visible.value) {
              funcs.stop();
            }
          }
        },
        {
          ignore: [eles],
        },
      );
    };

    // 点击打开popper
    const openParentPop = (event: Event): void => {
      event.stopPropagation();
      visible.value = !visible.value;
    };

    // popover消失时保存全部
    const saveAll = (): void => {
      c.grid.saveAll();
    };

    const calcActionItemClass = (item: IAppDEUIActionGroupDetail): string[] => {
      const { actionLevel } = item;
      return [
        item.id as string,
        ns.e('item'),
        ns.is('disabled', false),
        ns.em('item', `level-${actionLevel}`),
      ];
    };

    const renderPopover = (): JSX.Element => {
      return (
        <el-popover
          visible={visible.value}
          popperClass={ns.b('actions-popper')}
          placement='right-start'
          width='280'
          trigger='click'
          onShow={() => {
            parentPopClick();
          }}
          onHide={() => {
            saveAll();
          }}
          popper-style={{ zIndex }}
          ref={popperRef}
        >
          {{
            reference: () => {
              return (
                <el-button
                  text
                  size='small'
                  class='hover-action'
                  onClick={(event: Event) => openParentPop(event)}
                  title='更多'
                >
                  {{
                    icon: () => <ion-icon name='ellipsis-vertical-outline' />,
                  }}
                </el-button>
              );
            },
            default: () => {
              return renderUIActions();
            },
          }}
        </el-popover>
      );
    };

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const expandActions = () => {
      // eslint-disable-next-line array-callback-return
      return expandDetails.value.map((action: IAppDEUIActionGroupDetail) => {
        if (
          actionsState.value[action.id!].visible &&
          (action.actionLevel === 250 ||
            (showCommonAction.value && action.actionLevel === 200))
        ) {
          return (
            <el-button
              text
              size='small'
              onClick={(e: MouseEvent) => onActionClick(action, e)}
              title={
                (action as IParams).tooltipLanguageRes
                  ? ibiz.i18n.t(
                      (action as IParams).tooltipLanguageRes.lanResTag,
                      action.tooltip,
                    )
                  : action.tooltip
              }
              disabled={actionsState.value[action.id!].disabled}
              class={calcActionItemClass(action)}
            >
              {action.showIcon && action.sysImage && (
                <iBizIcon icon={action.sysImage}></iBizIcon>
              )}
              {action.showCaption
                ? (action as IParams).capLanguageRes
                  ? ibiz.i18n.t(
                      (action as IParams).capLanguageRes.lanResTag,
                      action.caption,
                    )
                  : action.caption
                : ''}
            </el-button>
          );
        }
      });
    };

    // 绘制界面行为弹出框
    const renderActions = (): IData[] => {
      const { enableRowEdit, deuiactionGroup } = c.model;
      const actionItems: IData[] = [];
      if (enableRowEdit) {
        actionItems.push(
          <el-button
            text
            size='small'
            class='hover-action'
            onClick={(e: MouseEvent) => onOpenEdit(e)}
            title='编辑'
          >
            <svg
              viewBox='0 0 16 16'
              xmlns='http://www.w3.org/2000/svg'
              height='1em'
              width='1em'
              preserveAspectRatio='xMidYMid meet'
              focusable='false'
            >
              <g id='aiuaction/edit' stroke-width='1' fill-rule='evenodd'>
                <path
                  d='M2 8.34L10.71 0 15 4.17 6.538 13H2V8.34zm1.2.512V11.8h2.826l7.283-7.6-2.606-2.533L3.2 8.852zM0 16v-1.2h16V16H0z'
                  id='aiu编辑'
                ></path>
              </g>
            </svg>
          </el-button>,
        );
      }
      if (deuiactionGroup) {
        actionItems.push(expandActions());
        if (groupDetails.value.length > 0) {
          actionItems.push(renderPopover());
        }
      }
      return actionItems;
    };

    // 点击外部时关闭popper
    const handleOutSideClick = (): void => {
      if (!overchild.value) {
        visible.value = false;
      }
    };

    const handleSelect = (item: IData) => {
      pickerValue.value = item.id;
      c.curPickerId = item.id;
    };

    const onVisibleChange = async (dropVisible: boolean) => {
      picking = dropVisible;
    };

    const renderPicker = () => {
      if (pickerData.value.length > 0) {
        return (
          <el-dropdown
            onVisibleChange={onVisibleChange}
            onCommand={(command: IData) => handleSelect(command)}
          >
            {{
              default: (): VNode => (
                <iBizCodeList
                  class={ns.e('text')}
                  codeListItems={pickerData.value}
                  codeList={c.userCodeList}
                  value={pickerValue.value}
                ></iBizCodeList>
              ),
              dropdown: (): VNode => (
                <el-dropdown-menu>
                  {pickerData.value.map(item => {
                    return (
                      <el-dropdown-item title={item.tooltip} command={item}>
                        <iBizCodeList
                          class={ns.e('text')}
                          codeListItems={pickerData.value}
                          codeList={c.userCodeList}
                          value={item.id}
                        ></iBizCodeList>
                      </el-dropdown-item>
                    );
                  })}
                </el-dropdown-menu>
              ),
            }}
          </el-dropdown>
        );
      }
    };

    return {
      ns,
      componentRef,
      containerRef,
      fieldName,
      gridEditItemProps,
      rowDataChange,
      editorProps,
      onCellClick,
      onTextClick,
      onInfoTextChange,
      onActionClick,
      renderActions,
      CustomHtml,
      fieldValue,
      formatValue,
      tooltip,
      renderPicker,
    };
  },
  render() {
    const c = this.controller;
    let content = null;
    if (c.isCustomCode) {
      content = (
        <span class={this.ns.e('script')} v-html={this.CustomHtml}></span>
      );
    } else if (c.codeList) {
      content = (
        <iBizCodeList
          class={this.ns.e('text')}
          codeListItems={c.codeListItems}
          codeList={c.codeList}
          value={this.fieldValue}
          onClick={this.onTextClick}
          onInfoTextChange={this.onInfoTextChange}
          title={this.tooltip}
        ></iBizCodeList>
      );
    } else {
      content = (
        <span
          class={this.ns.e('text')}
          title={this.tooltip}
          onClick={this.onTextClick}
        >
          {this.formatValue}
          {this.fieldValue != null && c.model.unitName}
        </span>
      );
    }
    const editContent = (
      <iBizGridEditItem
        {...{
          ref: 'componentRef',
          required: !c.editItem.allowEmpty,
          error: this.row.errors[this.fieldName],
          overflowMode: this.controller.grid.overflowMode,
          class: this.ns.m('edit-item'),
          ...this.gridEditItemProps,
        }}
      >
        {c.editorProvider &&
          h(resolveComponent(c.editorProvider.gridEditor), {
            class: this.ns.e('editor'),
            value: this.row.data[this.fieldName],
            data: this.row.data,
            controller: c.editor,
            overflowMode: c.grid.overflowMode,
            onChange: this.rowDataChange,
            onInfoTextChange: this.onInfoTextChange,
            title: this.tooltip,
            ...this.editorProps,
          })}
      </iBizGridEditItem>
    );
    return (
      <div
        ref='containerRef'
        class={[
          this.ns.b(),
          c.clickable(this.row) && this.ns.m('clickable'),
          this.ns.m(this.controller.grid.overflowMode),
          this.controller.model.cellSysCss?.cssName,
          this.ns.is('has-action', !!c.model.deuiactionGroup),
        ]}
        onClick={this.onCellClick}
      >
        {c.model.enableRowEdit ? (
          <div class={this.ns.b('edit-container')}>
            {editContent}
            {this.renderPicker()}
          </div>
        ) : (
          <div class={this.ns.b('text-container')}>{content}</div>
        )}
        {!(c.model.enableRowEdit && !this.editorProps.readonly) &&
        this.editorProps.cellEditable ? (
          <div class={this.ns.b('toolbar-container')}>
            {this.renderActions()}
          </div>
        ) : null}
      </div>
    );
  },
});
