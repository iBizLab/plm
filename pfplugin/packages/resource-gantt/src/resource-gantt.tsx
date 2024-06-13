/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
import { useControlController, useNamespace } from '@ibiz-template/vue3-util';
import {
  computed,
  defineComponent,
  PropType,
  resolveComponent,
  VNode,
  h,
  onMounted,
  getCurrentInstance,
  ref,
  Ref,
} from 'vue';
import {
  IDEGantt,
  IDETBGroupItem,
  IDETBRawItem,
  IDETBUIActionItem,
  IDEToolbarItem,
  IDETreeColumn,
} from '@ibiz/model-core';
import {
  IControlProvider,
  IGanttNodeData,
  IButtonState,
  IButtonContainerState,
  TreeGridExFieldColumnController,
} from '@ibiz-template/runtime';
import { createUUID } from 'qx-util';
import dayjs from 'dayjs';
import './resource-gantt.scss';
import {
  TopLevelCell,
  ResourceGanttColumnHead,
  ResourceGanttExFieldColumn,
} from './component';
import { ResourceGanttController } from './resource-gantt.controller';
import {
  formatDate,
  getWeekday,
  isToday,
  isWorkDay,
  getCapacityConfig,
  dynamicMatch,
} from './utils/common';

export const ResourceGanttControl = defineComponent({
  name: 'IBizResourceGanttControl',
  props: {
    modelData: { type: Object as PropType<IDEGantt>, required: true },
    context: { type: Object as PropType<IContext>, required: true },
    params: { type: Object as PropType<IParams>, default: () => ({}) },
    provider: { type: Object as PropType<IControlProvider> },
    loadDefault: { type: Boolean, default: true },
    mdctrlActiveMode: { type: Number, default: undefined },
    singleSelect: { type: Boolean, default: undefined },
  },
  setup(props) {
    const c = useControlController<ResourceGanttController>(
      (...args) => new ResourceGanttController(...args),
    );

    const ganttRef: Ref<IData | undefined> = ref();

    const ganttBoxRef: Ref<IData | undefined> = ref();

    // 是否初始化
    const isInited: Ref<boolean> = ref(false);
    const ns = useNamespace(`control-${c.model.controlType!.toLowerCase()}`);
    const ns2 = useNamespace(`control-resource-gantt`);

    // 搜索过滤值
    const searchFilterValue = ref();

    // 滑块移动
    const sliderMove = ref(false);

    const ganttId = ref();
    ganttId.value = createUUID();

    const iBizRawItem = resolveComponent('IBizRawItem');
    const iBizIcon = resolveComponent('IBizIcon');
    // const IBizTopLevelCell = resolveComponent('TopLevelCell');

    let forbidClick: boolean = false;

    const selection: IGanttNodeData[] = [];

    const color = [
      'blue',
      'light-blue',
      'blue-cyan',
      'pink',
      'purple',
      'violet',
      'indigo',
      'cyan',
      'teal',
      'green',
      'light-green',
      'lime',
      'yellow',
      'amber',
      'orange',
      'grey',
      'sky-blue',
    ];

    // 动态加载gantt组件
    const app = getCurrentInstance()?.appContext.app;
    onMounted(() => {
      const importGantt = () => import('@ibiz-template-plugin/gantt');
      importGantt().then(value => {
        const defaltModule = value.default;
        app?.use(defaltModule);
        isInited.value = true;
      });
    });

    const getVarValue = (varName: string) => {
      const root = document.documentElement;
      return getComputedStyle(root).getPropertyValue(varName);
    };

    const ganttStyle = computed(() => {
      const style = {
        primaryColor:
          c.state.ganttStyle?.primaryColor || getVarValue('--ibiz-color-bg-0'),
        textColor:
          c.state.ganttStyle?.textColor || getVarValue('--ibiz-color-text-2'),
      };
      return style;
    });

    const sliderColor = computed(() => {
      const nodeColor: IData = {};
      c.model.detreeNodes?.forEach((node, index) => {
        const colorIndex = index % color.length;
        nodeColor[node.id!] = `rgba(${getVarValue(
          `--ibiz-${color[colorIndex]}-0`,
        )}, 1)`;
      });
      return nodeColor;
    });

    /**
     * 处理仅顶部节点显示
     */
    const handleOnlyTopNodes = () => {
      let tempData: IData[] = c.state.rootNodes;
      if (!c.model.rootVisible) {
        tempData = c.state.rootNodes[0]?._children || [];
      }
      return tempData.map((item: IData) => {
        const tempItem: IData = {};
        Object.assign(tempItem, item);
        if (tempItem._children) {
          tempItem._children = null;
        }
        return tempItem;
      });
    };

    /**
     * 部件是否在加载状态
     */
    const loading = computed(() => {
      if (c.state.isLoaded) {
        return c.state.isLoading;
      }
      return false;
    });

    /**
     * 实际呈现的数据
     */
    const data = computed(() => {
      if (c.state.onlyTopNodes) {
        return handleOnlyTopNodes();
      }
      return c.model.rootVisible
        ? c.state.rootNodes
        : (c.state.rootNodes[0]?._children as IData[])?.filter(
            item =>
              !searchFilterValue.value ||
              (item.name as string).includes(searchFilterValue.value),
          );
    });

    /**
     * 实际绘制的表格列
     */
    const columns = computed(() => {
      const columnsModel: IDETreeColumn[] = [];
      c.state.columnStates.forEach(item => {
        const columnModel = c.columns[item.key]?.model;
        if (!item.hidden && columnModel) {
          columnsModel.push(columnModel);
        }
      });
      return columnsModel;
    });

    const locale = computed(() => {
      return ibiz.i18n.getLang().toLowerCase();
    });

    /**
     * 多选时选中节点变更
     *
     * @param {boolean} state 当前复选框状态
     * @param {IGanttNodeData} item 当前数据
     */
    const onCheck = (state: boolean, item: IGanttNodeData) => {
      if (state) {
        selection.push(item);
      } else {
        const index = selection.findIndex(
          selected => selected._id === item._id,
        );
        if (index > -1) {
          selection.splice(index, 1);
        }
      }
      c.setSelection(selection);
    };

    /**
     * 节点单击事件
     *
     * @param {IGanttNodeData} nodeData
     * @return {*}
     */
    const onNodeClick = (nodeData: IGanttNodeData, evt: MouseEvent) => {
      if (forbidClick || sliderMove.value) {
        sliderMove.value = false;
        return;
      }

      c.onTreeNodeClick(nodeData, evt);
      forbidClick = true;
      setTimeout(() => {
        forbidClick = false;
      }, 200);
    };

    /**
     * 节点双击事件
     *
     * @param {IGanttNodeData} nodeData
     */
    const onNodeDbClick = (nodeData: IGanttNodeData) => {
      c.onDbTreeNodeClick(nodeData);
    };

    /**
     * 处理节点展开
     *
     * @param {IGanttNodeData} nodeData
     */
    const onNodeExpand = (nodeData: IGanttNodeData) => {
      c.onExpandChange(nodeData, true);
      if (nodeData && !nodeData._children) {
        c.refreshNodeChildren(nodeData);
      }
    };

    /**
     * 处理节点折叠
     *
     * @param {IGanttNodeData} nodeData
     */
    const onNodeCollapse = (nodeData: IGanttNodeData) => {
      c.onExpandChange(nodeData, false);
    };

    c.evt.on('onNewRow', event => {
      if (ganttRef.value) {
        const nodeData = event.row.data;
        ganttRef.value.setExpand(nodeData);
      }
    });

    /**
     * 全屏切换
     */
    const fullscreenChange = () => {
      ganttRef.value?.fullscreenChange();
    };

    // 全屏切换
    c._evt.on('onFullscreenChange', event => {
      fullscreenChange();
    });

    /**
     * 处理头部搜索
     */
    const onHeadSearch = (value: string) => {
      searchFilterValue.value = value;
    };

    /**
     * 全部展开状态切换
     */
    const onExpandAllChange = (state: boolean) => {
      c.state.expandAll = state;
    };

    /**
     * 处理单元格点击
     */
    const onCellClick = (cellData: IData) => {
      console.log('抛值内容', cellData);
    };

    /**
     * 滑块移动
     *
     * @param {IData[]} sliders
     */
    const onSliderMove = (sliders: IData[]) => {
      const nodeData: IGanttNodeData = sliders[0]?.row;
      const newValue = {
        begin: nodeData._beginDataItemValue
          ? dayjs(nodeData._beginDataItemValue).format('YYYY-MM-DD HH:mm:ss')
          : undefined,
        end: nodeData._endDataItemValue
          ? dayjs(nodeData._endDataItemValue).format('YYYY-MM-DD HH:mm:ss')
          : undefined,
      };
      sliderMove.value = true;
      c.modifyNodeTime(nodeData, newValue);
    };

    /**
     * 计算上下文菜单组件配置项集合
     *
     * @param {IDEToolbarItem[]} toolbarItems
     * @param {IGanttNodeData} nodeData
     * @param {MouseEvent} evt
     * @param {IButtonContainerState} menuState
     * @return {*}  {IParams[]}
     */
    const calcContextMenuItems = (
      toolbarItems: IDEToolbarItem[],
      nodeData: IGanttNodeData,
      evt: MouseEvent,
      menuState: IButtonContainerState,
    ): IParams[] => {
      const result: IParams[] = [];
      toolbarItems.forEach(item => {
        if (item.itemType === 'SEPERATOR') {
          result.push({
            divided: 'self',
          });
          return;
        }

        const buttonState = menuState[item.id!] as IButtonState;
        if (buttonState && !buttonState.visible) {
          return;
        }

        // 除分隔符之外的公共部分
        const menuItem: IParams = {};
        if (item.showCaption && item.caption) {
          menuItem.label = item.caption;
        }
        if (item.sysImage && item.showIcon) {
          menuItem.icon = <iBizIcon icon={item.sysImage}></iBizIcon>;
        }

        // 界面行为项
        if (item.itemType === 'DEUIACTION') {
          menuItem.disabled = buttonState.disabled;
          menuItem.clickClose = true;
          const { uiactionId } = item as IDETBUIActionItem;
          if (uiactionId) {
            menuItem.onClick = () => {
              c.doUIAction(uiactionId, nodeData, evt, item.appId);
            };
          }
        } else if (item.itemType === 'RAWITEM') {
          const { rawItem } = item as IDETBRawItem;
          if (rawItem) {
            menuItem.label = (
              <iBizRawItem rawItem={item as IDETBRawItem}></iBizRawItem>
            );
          }
        } else if (item.itemType === 'ITEMS') {
          // 分组项绘制子菜单
          if ((item as IDETBGroupItem).detoolbarItems?.length) {
            menuItem.children = calcContextMenuItems(
              (item as IDETBGroupItem).detoolbarItems!,
              nodeData,
              evt,
              menuState,
            );
          }
        }
        result.push(menuItem);
      });

      return result;
    };

    /**
     * 上下文菜单相关
     */
    let ContextMenu: IData;
    c.evt.on('onMounted', () => {
      // 有上下文菜单时加载组件
      if (Object.values(c.contextMenus).length > 0) {
        const importMenu = () => import('@imengyu/vue3-context-menu');
        importMenu().then(value => {
          ContextMenu = value.default;
          if (ContextMenu.default && !ContextMenu.showContextMenu) {
            ContextMenu = ContextMenu.default;
          }
        });
      }
    });

    /**
     * 节点右键菜单点击事件
     *
     * @param {IGanttNodeData} nodeData
     * @param {MouseEvent} evt
     */
    const onNodeContextmenu = async (
      nodeData: IGanttNodeData,
      evt: MouseEvent,
    ) => {
      evt.stopPropagation();
      evt.preventDefault();
      const nodeModel = c.getNodeModel(nodeData._nodeId);
      if (!nodeModel?.decontextMenu) {
        return;
      }
      const contextMenuC = c.contextMenus[nodeModel.decontextMenu.id!];

      if (!contextMenuC.model.detoolbarItems) {
        return;
      }

      // 更新菜单的权限状态
      await contextMenuC.calcButtonState(
        nodeData._deData || (nodeData.srfkey ? nodeData : undefined),
        nodeModel.appDataEntityId,
      );
      const menuState = contextMenuC.state.buttonsState;

      const menus: IParams[] = calcContextMenuItems(
        contextMenuC.model.detoolbarItems,
        nodeData,
        evt,
        menuState,
      );
      if (!menus.length) {
        return;
      }

      ContextMenu.showContextMenu({
        x: evt.x,
        y: evt.y,
        customClass: ns.b('context-menu'),
        items: menus,
      });
    };

    const renderNoData = (): VNode | false => {
      // 未加载不显示无数据
      const { isLoaded } = c.state;
      return (
        isLoaded && (
          <iBizNoData
            text={c.model.emptyText}
            emptyTextLanguageRes={c.model.emptyTextLanguageRes}
          ></iBizNoData>
        )
      );
    };

    /**
     * 绘制表格列
     * @param model
     * @param index
     * @returns
     */
    const renderColumn = (model: IDETreeColumn, index: number): VNode => {
      const { caption, codeName, width, headerSysCss, align } = model;
      const columnC = c.columns[codeName!] as TreeGridExFieldColumnController;
      return (
        <x-gantt-column
          label={caption}
          prop={codeName}
          width={width && width > 30 ? width : 30}
          center={align?.toLowerCase() === 'center'}
        >
          {{
            title: (titleData: IData) => {
              const { label } = titleData;
              return codeName === 'name' ? (
                <ResourceGanttColumnHead
                  key={codeName}
                  model={model}
                  controller={c}
                  titleData={titleData}
                  expandAll={c.state.expandAll}
                  class={headerSysCss?.cssName}
                  onExpandAllChange={onExpandAllChange}
                  onHeadSearch={onHeadSearch}
                />
              ) : (
                <div class={headerSysCss?.cssName}>{label}</div>
              );
            },
            default: (cellData: IData): VNode | null => {
              const { row, column, level } = cellData;
              const rowState = c.getRowState(row._id);
              if (rowState) {
                if (codeName === 'name') {
                  const { weekdays, dayCapacity } = getCapacityConfig(
                    rowState,
                    c.state.capacityConfig,
                  );
                  let parentRowState;
                  if (row._parent) {
                    parentRowState = c.getRowState(row._parent._id);
                  }
                  return (
                    <ResourceGanttExFieldColumn
                      controller={columnC}
                      weekdays={weekdays}
                      dayCapacity={dayCapacity}
                      capacityCalc={c.state.capacityCalc}
                      dateRange={c.state.dateRange as IParams}
                      groupConfig={c.state.groupConfig}
                      row={rowState}
                      parentRow={parentRowState}
                      column={column}
                      level={level}
                      key={rowState.data._uuid + codeName}
                    />
                  );
                }
                const comp = resolveComponent(c.providers[codeName!].component);
                return h(comp, {
                  controller: columnC,
                  row: rowState,
                  key: rowState.data._uuid + codeName,
                });
              }
              return null;
            },
          }}
        </x-gantt-column>
      );
    };

    /**
     * 绘制滑块
     *
     * @return {*}
     */
    const renderSlider = () => {
      return (
        <x-gantt-slider
          allow-link={false}
          move={c.state.sliderDraggable}
          resize-left={c.state.sliderDraggable}
          resize-right={c.state.sliderDraggable}
          move-by-unit={true}
          slider-limit={c.state.sliderLimit}
        >
          {{
            content: ({
              row,
              level,
              left,
            }: {
              row: IGanttNodeData;
              level: number;
              left: number;
            }): VNode | void => {
              if (level !== 1) {
                const caption = dynamicMatch(
                  c.state.sliderShowContent,
                  row._deData || {},
                ).replace(/^"(.*?)"$/, '$1');
                const marginLeft = left < 0 ? `${-left}px` : '';
                return (
                  <div
                    class={[ns.e('slider'), ns2.e('slider')]}
                    style={{
                      background: sliderColor.value[row._nodeId],
                    }}
                    onClick={evt => onNodeClick(row, evt)}
                    onDblclick={() => onNodeDbClick(row)}
                    onContextmenu={evt => onNodeContextmenu(row, evt)}
                  >
                    {caption && (
                      <div
                        class={ns2.em('slider', 'caption')}
                        style={{ marginLeft }}
                        title={caption}
                        v-html={caption}
                      ></div>
                    )}
                  </div>
                );
              }
            },
          }}
        </x-gantt-slider>
      );
    };

    /**
     * 绘制内容
     * @returns
     */
    const renderContent = () => {
      const _columns = columns.value.map((model, index) => {
        return renderColumn(model, index);
      });
      const slider = renderSlider();
      return [..._columns, slider];
    };

    /**
     * 绘制甘特列单元格
     */
    const renderGanttCell = (cellData: IData) => {
      if (cellData.level === 1) {
        const rowState: IParams = c.getRowState(cellData.row._id) || {};
        const { weekdays, dayCapacity } = getCapacityConfig(
          rowState,
          c.state.capacityConfig,
        );

        if (isWorkDay(cellData.column.date, weekdays)) {
          const tempData = {};
          Object.assign(tempData, { ...cellData, row: rowState });
          return (
            <TopLevelCell
              cellData={tempData}
              showText={c.state.showCapacity!}
              capacityCalc={c.state.capacityCalc}
              weekdays={weekdays}
              dayCapacity={dayCapacity}
              onCellClick={onCellClick}
            />
          );
        }
      }
    };

    /**
     * 绘制甘特列头
     */
    const renderGanttTitle = (titleData: IData) => {
      const { column } = titleData;
      const weekday = getWeekday(column.date);
      const curDate = formatDate(column.date, 'MM/DD');
      return (
        <div
          class={[
            ns.b('column-title'),
            isToday(column.date) ? ns.be('column-title', 'today') : '',
          ]}
        >
          <div class={ns.be('column-title', 'top')}>{weekday}</div>
          <div class={ns.be('column-title', 'bottom')}>{curDate}</div>
        </div>
      );
    };

    return {
      c,
      ns,
      ns2,
      fullscreenChange,
      ganttRef,
      ganttBoxRef,
      isInited,
      ganttId,
      data,
      locale,
      columns,
      onCheck,
      loading,
      ganttStyle,
      onNodeClick,
      onNodeDbClick,
      onNodeExpand,
      onNodeCollapse,
      renderContent,
      renderGanttCell,
      renderGanttTitle,
      onSliderMove,
      renderNoData,
    };
  },
  render() {
    if (!this.isInited) {
      return null;
    }
    return (
      <iBizControlBase
        ref='ganttBoxRef'
        controller={this.c}
        class={[
          this.ns.b(),
          this.ns2.b(),
          !this.data?.length ? this.ns.m('empty') : '',
        ]}
        v-loading={this.loading}
      >
        <x-gantt
          ref='ganttRef'
          id={this.ganttId}
          data-id='_id'
          data={this.data}
          row-height={46}
          show-expand={true}
          expand-all={this.c.state.expandAll}
          start-key='_beginDataItemValue'
          end-key='_endDataItemValue'
          children='_children'
          leaf='_leaf'
          dateRange={this.c.state.dateRange}
          showWeekdays={this.c.state.showWeekdays}
          locale={this.locale}
          header-height={46}
          showCheckbox={!this.c.state.singleSelect}
          showToday={false}
          showWeekend={false}
          onNodeExpand={this.onNodeExpand}
          onNodeCollapse={this.onNodeCollapse}
          onRowClick={this.onNodeClick}
          onRowDblClick={this.onNodeDbClick}
          onRowChecked={this.onCheck}
          onMoveSlider={this.onSliderMove}
          primaryColor={this.ganttStyle.primaryColor}
          headerStyle={{ textColor: this.ganttStyle.textColor }}
        >
          {{
            default: () => {
              return this.renderContent();
            },
            ganttCell: (data: IData) => {
              return this.renderGanttCell(data);
            },
            ganttTitle: (data: IData) => {
              return this.renderGanttTitle(data);
            },
            empty: () => {
              return this.renderNoData();
            },
          }}
        </x-gantt>
      </iBizControlBase>
    );
  },
});
