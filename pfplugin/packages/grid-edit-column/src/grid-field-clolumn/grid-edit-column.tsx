/* eslint-disable vue/no-mutating-props */
/* eslint-disable no-param-reassign */
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
import { useNamespace } from '@ibiz-template/vue3-util';
import {
  IAppDEUIActionGroupDetail,
  IUIActionGroupDetail,
} from '@ibiz/model-core';
import { isNotNil } from 'ramda';
import { RuntimeError } from '@ibiz-template/core';
import { useCellEdit } from './cell-edit';
import { useRowEdit } from './row-edit';
import { useAllEdit } from './all-edit';
import { GridEditColumnController } from './grid-edit-column.controller';
import IBizEditColumnActionToolbar from '../edit-column-action-toolbar/edit-column-action-toolbar';
import { filterTypes } from '../utils';
import './grid-edit-column.scss';

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

    const actionToolbarRef = ref();

    const componentRef = ref();

    const c = props.controller;

    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    const fieldName = c.editItem?.codeName!;

    const { zIndex } = props.controller.grid.state;

    const pickerData: Ref<readonly CodeListItem[]> = ref([]);
    const pickerValue = ref('');
    let picking = false;

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

    /**
     * 调用工具栏行为popover关闭
     */
    const handleToobarPopClose = (): void => {
      actionToolbarRef.value?.closeAllPopover();
    };

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

    /**
     * 找到所有编辑列属性并依次绘制出来排除自身
     */
    const editColums = Object.values(c.grid.columns).filter(
      (column: GridColumnController) => {
        return column.enableRowEdit && column.model.id !== c.model.id;
      },
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

    // 界面行为点击
    const onActionClick = async (
      detail: IUIActionGroupDetail,
      event: MouseEvent,
    ): Promise<void> => {
      event.stopPropagation();
      actionToolbarRef.value?.openProcessing();
      const params = {
        context: c.context,
        params: c.params,
        data: [props.row.data],
        view: c.grid.view,
        event,
      };
      const result = await UIActionUtil.exec(
        detail.uiactionId!,
        params as unknown as IUILogicParams,
        detail.appId,
      );
      actionToolbarRef.value?.closeProcessing();
      // 行为非取消时才关闭
      if (!result.cancel) handleToobarPopClose();
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
      if (!filterTypes.includes(type)) {
        handleToobarPopClose();
      }
    };

    // 编辑器值enter事件 -- 关闭子与父popper,保存当前行数据
    const editorEnter = (): void => {
      handleToobarPopClose();
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

    const onOpenEdit = (event: Event): void => {
      event.stopPropagation();
      setEditable(true);
    };

    // popover消失时保存全部
    const onSaveAll = (): void => {
      c.grid.saveAll();
    };

    /**
     * 绘制界面行为弹出框
     */
    const renderActions = () => {
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

      if (deuiactionGroup?.uiactionGroupDetails) {
        actionItems.push(
          <IBizEditColumnActionToolbar
            ref='actionToolbarRef'
            class={ns.e('toolbar')}
            actionDetails={
              deuiactionGroup?.uiactionGroupDetails as Array<IAppDEUIActionGroupDetail>
            }
            actionsState={props.row.uiActionGroupStates[c.model.codeName!]}
            groupLevelKeys={[50, 100]}
            zIndex={zIndex}
            editColums={editColums}
            showCommonAction={showCommonAction.value}
            onActionClick={onActionClick}
            onSaveAll={onSaveAll}
          >
            {{
              editor: (editController: GridColumnController) => {
                return renderEditor(editController);
              },
            }}
          </IBizEditColumnActionToolbar>,
        );
      }
      return actionItems;
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
      picking,
      componentRef,
      actionToolbarRef,
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
