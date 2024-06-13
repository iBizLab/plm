/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { PropType, computed, defineComponent, ref } from 'vue';
import {
  IAppDEUIActionGroupDetail,
  IUIActionGroupDetail,
} from '@ibiz/model-core';
import { useNamespace } from '@ibiz-template/vue3-util';
import {
  TreeGridExFieldColumnController,
  TreeGridExRowState,
} from '@ibiz-template/runtime';
import { isNotNil } from 'ramda';
import './resource-gantt-ex-field-column.scss';
import { IBizResourceActionToolbar, TotalProgress } from '../index';

export const ResourceGanttExFieldColumn = defineComponent({
  name: 'IBizResourceGanttExFieldColumn',
  props: {
    controller: {
      type: TreeGridExFieldColumnController,
      required: true,
    },
    row: {
      type: TreeGridExRowState,
      required: true,
    },
    parentRow: {
      type: Object as PropType<TreeGridExRowState | undefined>,
    },
    column: {
      type: Object as PropType<IData>,
    },
    weekdays: {
      type: Array as PropType<number[]>,
      default: () => [],
    },
    dayCapacity: {
      type: Number,
      default: 0,
    },
    capacityCalc: {
      type: Object,
      required: true,
      default: () => {},
    },
    groupConfig: {
      type: Object as PropType<IData>,
      required: true,
      default: () => {},
    },
    dateRange: {
      type: Object,
      required: true,
      default: () => {},
    },
    level: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const ns = useNamespace('tree-grid-ex-field-column');
    const ns2 = useNamespace('resource-gantt-ex-field-column');

    const nodeColumn = computed(() => {
      return props.controller.nodeColumnControllerMap.get(
        props.row.data._nodeId,
      );
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
    const onInfoTextChange = (text: string) => {
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
     * 列界面行为组点击
     * @author lxm
     * @date 2024-01-11 02:32:48
     * @param {IUIActionGroupDetail} detail
     * @param {MouseEvent} event
     * @return {*}  {Promise<void>}
     */
    const onActionClick = async (
      detail: IUIActionGroupDetail,
      event: MouseEvent,
    ): Promise<void> => {
      await nodeColumn.value?.onActionClick(detail, props.row, event);
    };

    /**
     * 检查当前行数据在父行的子数组中是否是第一次出现
     * @param {TreeGridExRowState} parentRow - 父行数据
     * @param {TreeGridExRowState} row - 当前行数据
     * @returns {boolean} - 如果是第一次出现则返回true，否则返回false
     */
    const isFirst = (
      parentRow: TreeGridExRowState,
      row: TreeGridExRowState,
      groupConfig: IData,
    ) => {
      const { data } = parentRow;
      if (data && data._children && data._children.length > 1) {
        const findItem = data._children.find(
          (item: IData) =>
            row.data &&
            item._deData &&
            row.data._deData &&
            item._deData[groupConfig.groupField] ===
              row.data._deData[groupConfig.groupField],
        );
        return findItem && row.data._id === findItem._id;
      }
      return false;
    };

    /**
     * 计算项目ID在父行的子数组中出现的次数
     * @param {TreeGridExRowState} parentRow - 父行数据
     * @param {TreeGridExRowState} row - 当前行数据
     * @returns {number} - 项目ID出现的次数
     */
    const calcProjectTCount = (
      parentRow: TreeGridExRowState,
      row: TreeGridExRowState,
      groupConfig: IData,
    ) => {
      const { data } = parentRow;
      if (data && data._children && data._children.length > 1) {
        return data._children.reduce((count: number, item: IData) => {
          if (
            row.data &&
            item._deData &&
            row.data._deData &&
            item._deData[groupConfig.groupField] ===
              row.data._deData[groupConfig.groupField]
          ) {
            return count + 1;
          }
          return count;
        }, 0);
      }
      return 0;
    };

    /**
     * 计算合并单元格的类名
     * @returns {string} - 合并单元格的类名
     */
    const calcMergeClass = computed(() => {
      let className = '';
      const { parentRow, row, level } = props;
      if (
        level > 1 &&
        parentRow &&
        calcProjectTCount(parentRow, row, props.groupConfig) > 1
      ) {
        className = isFirst(parentRow, row, props.groupConfig)
          ? 'first-index'
          : 'no-first-index';
      }
      return className;
    });

    /**
     * 计算合并单元格的样式
     * @returns {Object} - 合并单元格的样式对象
     */
    const calcMergeStyle = computed(() => {
      const tempStyle = {};
      const { level, parentRow, row } = props;
      if (level && level > 1 && parentRow) {
        const count = calcProjectTCount(parentRow, row, props.groupConfig);
        if (count > 1) {
          const rowHeight = 46; // 每行的高度
          const totalBorderWidth = 5; // 父元素边框总宽度
          const tempHeight = rowHeight * count - totalBorderWidth;
          Object.assign(tempStyle, { height: `${tempHeight}px` });
        }
      }
      return tempStyle;
    });

    return {
      ns,
      ns2,
      nodeColumn,
      fieldValue,
      showText,
      clickable,
      tooltip,
      calcMergeClass,
      calcMergeStyle,
      onInfoTextChange,
      onTextClick,
      onActionClick,
    };
  },
  render() {
    let content = null;

    if (this.nodeColumn?.nodeEditItem) {
      content = (
        <iBizTreeGridExEditColumn
          controller={this.nodeColumn}
          row={this.row}
        ></iBizTreeGridExEditColumn>
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
        <IBizResourceActionToolbar
          class={this.ns.e('toolbar')}
          actionDetails={
            this.nodeColumn?.nodeColumn!.deuiactionGroup!
              .uiactionGroupDetails as IAppDEUIActionGroupDetail[]
          }
          actionsState={this.row.columnActionsStates[this.controller.name]}
          mode={'dropdown'}
          popperClass={this.ns2.b('popper')}
          groupLevelKeys={[]}
          onActionClick={this.onActionClick}
        ></IBizResourceActionToolbar>
      );
    }

    let progress = null;
    if (this.level === 1) {
      progress = (
        <TotalProgress
          row={this.row}
          weekdays={this.weekdays}
          dayCapacity={this.dayCapacity}
          capacityCalc={this.capacityCalc}
          dateRange={this.dateRange}
        />
      );
    }
    return (
      <div
        class={[
          this.ns.b(),
          this.ns2.b(),
          this.clickable && this.ns.m('clickable'),
          this.ns.m(this.controller.treeGrid.overflowMode),
          this.controller.model.cellSysCss?.cssName,
          this.ns.is('has-action', !!actions),
          this.row?.data._children && this.row?.data._children?.length === 0
            ? 'no-children'
            : '',
          this.calcMergeClass,
        ]}
        style={this.calcMergeStyle}
      >
        <div
          class={[this.ns.b('text-container'), this.ns2.b('text-container')]}
        >
          {content}
        </div>
        {actions}
        {progress}
      </div>
    );
  },
});
export default ResourceGanttExFieldColumn;
