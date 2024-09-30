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
import {
  getElementOffsetTop,
  getElementDistanceToBottom,
} from '../../utils/common';
import { IBizResourceActionToolbar, TotalProgress } from '../index';
import { ResourceGanttController } from '../../resource-gantt.controller';

export const ResourceGanttExFieldColumn = defineComponent({
  name: 'IBizResourceGanttExFieldColumn',
  props: {
    controller: {
      type: TreeGridExFieldColumnController,
      required: true,
    },
    gantt: {
      type: ResourceGanttController,
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
    capacityConfig: {
      type: Object as PropType<IParams>,
      required: true,
      default: () => {},
    },
    groupConfig: {
      type: Object as PropType<IData>,
      required: true,
      default: () => {},
    },
    ganttPosition: {
      type: Object as PropType<IParams>,
      required: true,
      default: () => {},
    },
    virtualTableVal: {
      type: Array as PropType<IData[]>,
      default: () => [],
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
    isTopFirstIndex: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const ns = useNamespace('tree-grid-ex-field-column');
    const ns2 = useNamespace('resource-gantt-ex-field-column');
    const columnRef = ref();
    const contentStyle = ref<IParams>({});

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
     * 判断虚拟表格内是否有值
     */
    const isVirtual = (key: string) => {
      return props.virtualTableVal.find((item: IData) => item.data._id === key);
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
        // 如果虚拟表格内没有 则没有绘制
        if (findItem && !isVirtual(findItem._id)) {
          // 拿虚拟表格内第一个项目值进行判断
          const virtualItem = props.virtualTableVal.find(
            (item: IData) =>
              row.data &&
              item.data._deData &&
              row.data._deData &&
              item.data._deData[groupConfig.groupField] ===
                row.data._deData[groupConfig.groupField],
          );
          return virtualItem && row.data._id === virtualItem.data._id;
        }
        return findItem && row.data._id === findItem._id;
      }
      return false;
    };

    /**
     * 计算项目ID在父行的子数组中对比虚拟表格出现的次数
     */
    const calcVirtuallyCount = (
      parentRow: TreeGridExRowState,
      row: TreeGridExRowState,
      groupConfig: IData,
    ) => {
      const { data } = parentRow;
      if (data && data._children && data._children.length > 1) {
        const index = data._children.findIndex(
          (item: IData) =>
            row.data &&
            item._deData &&
            row.data._deData &&
            item._deData[groupConfig.groupField] ===
              row.data._deData[groupConfig.groupField] &&
            row.data._id === item._id,
        );
        if (index !== -1 && isFirst(parentRow, row, props.groupConfig)) {
          const children = data._children.slice(index);
          return children.reduce((count: number, item: IData) => {
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
      }
      return 0;
    };

    /**
     * 计算项目ID在父行的子数组中出现的次数
     * @param {TreeGridExRowState} parentRow - 父行数据
     * @param {TreeGridExRowState} row - 当前行数据
     * @returns {number} - 项目ID出现的次数
     */
    const calcProjectCount = (
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

    function findParentWithClass(element: HTMLElement, className: string) {
      let el = element;
      // 遍历DOM树直到找到匹配的节点或到达根节点
      while (el && el.nodeType === 1) {
        // 确保element是元素节点
        if (el.classList.contains(className)) {
          // 如果当前元素具有指定的类名，则返回该元素
          return el;
        }
        // 否则，继续向上查找父节点
        el = el.parentNode as HTMLElement;
      }
      // 如果没有找到匹配的节点，则返回null
      return null;
    }

    const calcContentStyle = () => {
      contentStyle.value = {};
      if (columnRef.value) {
        const el = findParentWithClass(columnRef.value, 'xg-table-row');
        if (el) {
          const { ganttPosition } = props;
          const rowHeight = 46;
          let rowTop = getElementOffsetTop(el);
          let bottom = getElementDistanceToBottom(el);
          if (rowTop < ganttPosition.top + rowHeight) {
            rowTop = ganttPosition.top + rowHeight;
          }
          if (bottom < ganttPosition.bottom) {
            bottom = ganttPosition.bottom;
          }
          const viewportHeight =
            window.innerHeight || document.documentElement.clientHeight;
          const height = viewportHeight - rowTop - bottom;
          // top定位
          const top = height / 2 + rowTop - rowHeight / 2;
          // 总的顶部定位大于行顶部定位，总的行高大于甘特图高度
          if (top > rowTop) {
            contentStyle.value = { position: 'fixed', top: `${top}px` };
          }
        }
      }
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
        calcProjectCount(parentRow, row, props.groupConfig) > 1
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
      if (
        level &&
        level > 1 &&
        parentRow &&
        parentRow.data._children &&
        parentRow.data._children.length > 1
      ) {
        const count = calcVirtuallyCount(parentRow, row, props.groupConfig);
        if (count > 1) {
          const rowHeight = 46; // 每行的高度
          const totalBorderWidth = 20; // 父元素边框总宽度
          const tempHeight = rowHeight * count - totalBorderWidth;
          Object.assign(tempStyle, { height: `${tempHeight}px` });
          calcContentStyle();
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
      columnRef,
      contentStyle,
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
          class={[this.ns.e('text'), this.ns2.e('text')]}
          title={this.tooltip}
          onClick={this.onTextClick}
          style={this.contentStyle}
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
          controller={this.gantt}
          capacityConfig={this.capacityConfig}
          dateRange={this.dateRange}
        />
      );
    }
    return (
      <div
        ref='columnRef'
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
          this.isTopFirstIndex ? 'top-first-index' : '',
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
