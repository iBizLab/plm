/* eslint-disable vue/no-mutating-props */
/* eslint-disable no-param-reassign */
import {
  h,
  ref,
  VNode,
  computed,
  onMounted,
  defineComponent,
  resolveComponent,
} from 'vue';
import {
  IUIActionGroupDetail,
  IAppDEUIActionGroupDetail,
} from '@ibiz/model-core';
import { useNamespace, useUIStore } from '@ibiz-template/vue3-util';
import {
  Srfuf,
  TreeGridExRowState,
  TreeGridExFieldColumnController,
  UIActionUtil,
} from '@ibiz-template/runtime';
import { isNotNil } from 'ramda';
import TreeGridExEditColumn from './tree-grid-ex-edit-column/tree-grid-ex-edit-column';
import { IBizEditColumnActionToolbar } from '../edit-column-action-toolbar/edit-column-action-toolbar';
import { filterTypes } from '../utils';
import './tree-grid-ex-field-column.scss';

export const TreeGridExFieldColumn = defineComponent({
  name: 'TreeGridExFieldColumn',
  props: {
    controller: {
      type: TreeGridExFieldColumnController,
      required: true,
    },
    row: {
      type: TreeGridExRowState,
      required: true,
    },
  },
  setup(props) {
    const ns = useNamespace('tree-grid-ex-field-column');
    const ns2 = useNamespace('tree-grid-ex-field-edit-column');

    const uIStore = useUIStore();
    const zIndex = uIStore.zIndex.increment();
    const actionToolbarRef = ref();

    const nodeColumn = computed(() => {
      return props.controller.nodeColumnControllerMap.get(
        props.row.data._nodeId,
      );
    });

    const editable = computed(() => {
      return props.row.editColStates[nodeColumn.value!.name].editable;
    });

    const readonly = computed(() => {
      return props.row.editColStates[nodeColumn.value!.name].readonly;
    });

    const setEditable = (flag: boolean): void => {
      props.row.editColStates[nodeColumn.value!.name].editable = flag;
    };

    const onOpenEdit = (event: Event): void => {
      event.stopPropagation();
      setEditable(true);
    };

    onMounted(() => {
      // cell编辑模式：如果是新建行且该列启用行编辑，默认启用编辑态
      const isCreate = (props.row.data as IData).srfuf === Srfuf.CREATE;
      if (isCreate) {
        setEditable(true);
      }
    });

    /** 行数据对应属性列的值 */
    const fieldValue = computed(() => {
      // 非实体节点行的第一列显示文本值
      if (
        props.row.data._nodeType !== 'DE' &&
        props.controller.isFirstShowColumn
      ) {
        return props.row.data._text;
      }
      return (props.row.data as IData)[props.controller.name];
    });

    // 代码表翻译文本
    const codeListText = ref('');
    const onInfoTextChange = (text: string): void => {
      codeListText.value = text;
    };

    const showText = computed(() => {
      const nodeColumnC = nodeColumn.value;
      if (nodeColumnC) {
        // 编辑器的文本值
        if (nodeColumnC.nodeEditItem) {
          return undefined;
        }

        // 代码表的文本值
        if (nodeColumnC.codeList) {
          return codeListText.value;
        }

        // 格式化的值
        return (
          nodeColumnC.formatValue(fieldValue.value) +
          (nodeColumnC.unitName || '')
        );
      }
      return fieldValue.value;
    });

    // tooltip相关
    const tooltip = computed(() => {
      // ellipsis模式且属性有值的时候显示tooltip
      if (
        props.controller.treeGrid.overflowMode === 'ellipsis' &&
        isNotNil(fieldValue.value) &&
        fieldValue.value !== ''
      ) {
        return showText.value;
      }
      return undefined;
    });

    const clickable = computed(() => {
      return (
        fieldValue.value &&
        nodeColumn.value &&
        (nodeColumn.value.isLinkColumn || nodeColumn.value.hasClickAction)
      );
    });

    /**
     * 列文本点击
     * @author lxm
     * @date 2024-01-09 04:11:39
     * @param {MouseEvent} event
     */
    const onTextClick = (event: MouseEvent): void => {
      nodeColumn.value?.onTextClick(props.row, event);
    };

    /**
     * 调用工具栏行为popover关闭
     */
    const handleToobarPopClose = (): void => {
      actionToolbarRef.value?.closeAllPopover();
    };

    /**
     * 列界面行为组点击
     * @author lxm
     * @date 2024-01-11 02:32:48
     * @param {IData} detail
     * @param {MouseEvent} event
     * @return {*}  {Promise<void>}
     */
    const onActionClick = async (
      detail: IUIActionGroupDetail,
      event: MouseEvent,
    ): Promise<void> => {
      event.stopPropagation();
      const ctrl = nodeColumn.value?.treeGrid;
      if (ctrl) {
        actionToolbarRef.value?.openProcessing();
        const eventArgs = ctrl.getEventArgs();
        const nodeParams = (ctrl as IData).parseTreeNodeData(props.row.data);
        const result = await UIActionUtil.exec(
          detail.uiactionId!,
          {
            ...eventArgs,
            ...nodeParams,
            event,
          },
          detail.appId,
        );
        actionToolbarRef.value?.closeProcessing();
        // 行为非取消时才关闭
        if (!result.cancel) handleToobarPopClose();
        if (result.closeView) {
          ctrl.view.closeView();
        } else if (result.refresh) {
          switch (result.refreshMode) {
            // 刷新当前节点的子
            case 1:
              ctrl.refreshNodeChildren(props.row.data);
              break;
            // 刷新当前节点的父节点的子
            case 2:
              ctrl.refreshNodeChildren(props.row.data, true);
              break;
            // 刷新所有节点数据
            case 3:
              ctrl.refresh();
              break;
            default:
          }
        }
      }
    };

    /**
     * 过滤出编辑列
     */
    const editColums = computed(() => {
      return Object.values(props.controller.treeGrid.columns).filter(
        (column: IData) => {
          const tempNodeColumn = column.nodeColumnControllerMap.get(
            props.row.data._nodeId,
          );
          return (
            tempNodeColumn.nodeColumn.enableRowEdit &&
            tempNodeColumn.nodeColumn.id !== nodeColumn.value?.nodeColumn.id
          );
        },
      );
    });

    /**
     * 编辑器值变更事件
     */
    const onDataChange = async (
      tempNodeColumn: IData,
      val: unknown,
      name: string,
    ): Promise<void> => {
      await tempNodeColumn.setRowValue(props.row, val, name);
      // 除特定编辑器外，其他编辑器抛值时应该关闭子
      const type = tempNodeColumn.editor.model.editorType as string;
      if (!filterTypes.includes(type)) {
        handleToobarPopClose();
      }
    };

    /**
     * 编辑器值enter事件 -- 关闭子与父popper,保存当前行数据
     */
    const editorEnter = async (
      tempNodeColumn: IData,
      val: unknown,
      name: string,
    ): Promise<void> => {
      await tempNodeColumn.setRowValue(props.row, val, name);
      handleToobarPopClose();
    };

    return {
      ns,
      ns2,
      zIndex,
      nodeColumn,
      fieldValue,
      showText,
      clickable,
      tooltip,
      editable,
      readonly,
      editColums,
      actionToolbarRef,
      onInfoTextChange,
      onDataChange,
      editorEnter,
      onTextClick,
      onActionClick,
      onOpenEdit,
    };
  },
  render() {
    let content = null;

    // 绘制编辑器
    const renderEditor = (column: IData): VNode | string | undefined => {
      const tempNodeColumn = column.nodeColumnControllerMap.get(
        this.row.data._nodeId,
      );
      const tempFieldName = tempNodeColumn.name;
      const val = (this.row.data as IData)[tempFieldName];
      const readonly = this.row.editColStates[tempFieldName]?.readonly;
      const disabled = this.row.editColStates[tempFieldName]?.disabled;
      return (
        tempNodeColumn.editorProvider &&
        h(resolveComponent(tempNodeColumn.editorProvider!.gridEditor), {
          class: this.ns.e('editor'),
          value: readonly ? tempNodeColumn.formatValue(val) : val,
          data: this.row.data,
          controller: tempNodeColumn.editor,
          overflowMode: tempNodeColumn.overflowMode,
          // eslint-disable-next-line no-shadow
          onChange: (value: unknown, name?: string) =>
            this.onDataChange(tempNodeColumn, value, name || tempFieldName),
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          onEnter: (event: Event) =>
            this.editorEnter(tempNodeColumn, val, tempFieldName), // 待测试
          readonly,
          disabled,
        })
      );
    };

    if (this.nodeColumn?.nodeEditItem) {
      content = (
        <TreeGridExEditColumn
          controller={this.nodeColumn}
          row={this.row}
        ></TreeGridExEditColumn>
      );
    } else if (this.nodeColumn?.codeList) {
      content = (
        <iBizCodeList
          class={this.ns.e('text')}
          codeListItems={this.nodeColumn.codeListItems}
          codeList={this.nodeColumn.codeList}
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
          {this.showText}
        </span>
      );
    }

    let actions;
    if (this.$slots.actions) {
      actions = this.$slots.actions();
    } else if (this.row.columnActionsStates[this.controller.name]) {
      actions = (
        <IBizEditColumnActionToolbar
          ref='actionToolbarRef'
          class={this.ns.e('toolbar')}
          actionDetails={
            this.nodeColumn?.nodeColumn!.deuiactionGroup!
              .uiactionGroupDetails as Array<IAppDEUIActionGroupDetail>
          }
          actionsState={this.row.columnActionsStates[this.controller.name]}
          groupLevelKeys={[50, 100]}
          zIndex={this.zIndex}
          editColums={this.editColums}
          onActionClick={this.onActionClick}
        >
          {{
            editor: (params: IParams) => {
              return renderEditor(params);
            },
          }}
        </IBizEditColumnActionToolbar>
      );
    }

    const editAction = (
      <el-button
        text
        size='small'
        class='hover-action'
        onClick={(e: MouseEvent) => this.onOpenEdit(e)}
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
      </el-button>
    );

    return (
      <div
        class={[
          this.ns.b(),
          this.ns2.b(),
          this.clickable && this.ns.m('clickable'),
          this.ns.m(this.controller.treeGrid.overflowMode),
          this.controller.model.cellSysCss?.cssName,
          this.ns2.is('editable', this.editable),
          this.ns.is('has-action', !!actions),
        ]}
      >
        <div class={this.ns.b('text-container')}>{content}</div>
        <div class={this.ns.b('toolbar-container')}>
          {!this.editable && !this.readonly ? [editAction, actions] : null}
        </div>
      </div>
    );
  },
});
export default TreeGridExFieldColumn;
