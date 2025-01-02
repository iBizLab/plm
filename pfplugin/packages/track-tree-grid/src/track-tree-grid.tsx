/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useControlController, useNamespace } from '@ibiz-template/vue3-util';
import { computed, defineComponent, PropType, ref } from 'vue';
import { IDETree, IDETreeNode } from '@ibiz/model-core';
import {
  IControlProvider,
  ITreeNodeData,
  getControlPanel,
} from '@ibiz-template/runtime';
import './track-tree-grid.scss';
import {
  expandIcon,
  expandAllIcon,
  stowAllIcon,
  cloumSettingIcon,
} from './icon';
import {
  ITrackTreeGridDETreeNode,
  ITrackTreeGridNodeData,
  TrackTreeGridController,
} from './track-tree-grid.controller';

export const TrackTreeGrid = defineComponent({
  name: 'IBizTrackTreeGridControl',
  props: {
    modelData: { type: Object as PropType<IDETree>, required: true },
    context: { type: Object as PropType<IContext>, required: true },
    params: { type: Object as PropType<IParams>, default: () => ({}) },
    provider: { type: Object as PropType<IControlProvider> },
    /**
     * 部件行数据默认激活模式
     * - 0 不激活
     * - 1 单击激活
     * - 2 双击激活(默认值)
     *
     * @type {(number | 0 | 1 | 2)}
     */
    mdctrlActiveMode: { type: Number, default: undefined },

    /**
     * 是否为单选
     * - true 单选
     * - false 多选
     *
     * @type {(Boolean)}
     */
    singleSelect: { type: Boolean, default: undefined },
    navigational: { type: Boolean, default: undefined },
    defaultExpandedKeys: { type: Array as PropType<string[]> },
    loadDefault: { type: Boolean, default: true },
    checkStrictly: { type: Boolean, default: true },
    isSimple: { type: Boolean, default: false },
    data: { type: Array<ITrackTreeGridNodeData>, required: false },
  },
  emits: ['nodeClick'],
  setup() {
    const c = useControlController<TrackTreeGridController>(
      (...args) => new TrackTreeGridController(...args),
    );

    const ns = useNamespace(`track-tree-grid`);

    /** 展开所有 */
    const expandAll = ref(false);

    /** 树展示数据 */
    const treeData = computed(() => {
      if (!c.state.isLoaded) {
        return [];
      }
      return c.state.rootNodes.reduce<ITreeNodeData[]>((result, nodeData) => {
        if (nodeData._children) {
          return result.concat(nodeData._children);
        }
        return result;
      }, []);
    });

    /** 表格列数据 */
    const tableModelCloums = ref<ITrackTreeGridDETreeNode[]>([]);
    if (c.model.detreeNodes) {
      tableModelCloums.value = c.model.detreeNodes
        ?.filter(
          (nodeModel: IDETreeNode) =>
            nodeModel.treeNodeType === 'STATIC' && !nodeModel.rootNode,
        )
        .map((item: IData) => {
          let enableSetting = false;
          // 获取用户标记配置，判断节点是否启用配置
          if (item.userTag) {
            const [param, vlaue] = item.userTag.split('=');
            if (param === 'ENABLESETTING') {
              enableSetting = vlaue === 'true';
            }
          }
          return { ...item, enableSetting, visible: true };
        }) as ITrackTreeGridDETreeNode[];
    }

    /** 表格行数据 */
    const tableRows = computed((): ITrackTreeGridNodeData[] => {
      const nodeData = treeData.value[0] || {};
      return (nodeData._children || []) as ITrackTreeGridNodeData[];
    });

    /**
     * 节点单击事件
     */
    const onNodeClick = (nodeData: ITrackTreeGridNodeData, evt: MouseEvent) => {
      evt.stopPropagation();
      if (nodeData._disableSelect) return;
      c.onTreeNodeClick(nodeData, evt);
    };

    /**
     * 节点双击事件
     */
    const onNodeDbClick = (
      nodeData: ITrackTreeGridNodeData,
      evt: MouseEvent,
    ) => {
      evt.stopPropagation();
      if (nodeData._disableSelect) return;
      c.onDbTreeNodeClick(nodeData);
    };

    /** 行展开收缩切换 */
    const onRowExpandItem = (nodeData: IData) => {
      Object.assign(nodeData, { _expanded: !nodeData._expanded });
      nodeData._children?.forEach((item: IData) => {
        onRowExpandItem(item);
      });
    };

    /** 处理展开所有 */
    const handleExpandAll = (nodeData: IData) => {
      Object.assign(nodeData, { _expanded: expandAll.value });
      nodeData._children?.forEach((item: IData) => {
        handleExpandAll(item);
      });
    };

    /** 所有项展开收缩切换 */
    const onExpandAll = () => {
      expandAll.value = !expandAll.value;
      handleExpandAll(treeData.value[0] || {});
    };

    /** 绘制布局面板 */
    const renderLayoutPanel = (nodeData: IData) => {
      const nodeModel = c.getNodeModel(nodeData._nodeId) || {};
      const layoutPanel = getControlPanel(nodeModel);
      if (layoutPanel) {
        return (
          <iBizControlShell
            data={{ ...nodeData._deData, expanded: !!nodeData._expanded }}
            modelData={layoutPanel}
            context={c.context}
            params={c.params}
          ></iBizControlShell>
        );
      }
      return null;
    };

    /** 绘制单元格展开项 */
    const renderCellExpandItem = (nodeData: ITrackTreeGridNodeData) => {
      return (
        <div class={[ns.e('expand-item')]}>
          {renderLayoutPanel(nodeData) || nodeData._text}
        </div>
      );
    };

    /** 绘制默认单元格 */
    const renderDefaultCell = (item: ITrackTreeGridNodeData) => {
      const { _text, _children = [], _expanded } = item;
      const sum = _children ? _children.length : 0;
      let content = renderLayoutPanel({
        ..._children[0],
        _expanded,
        _deData: { sum },
      }) || [
        <span class={ns.em('default-cell', 'num')}>{sum}</span>,
        <span class={ns.em('default-cell', 'caption')}>{`个${_text}`}</span>,
      ];
      // 如果为展开
      if (_expanded) {
        content = _children.map((nodeData: IData) => {
          return renderCellExpandItem(nodeData as ITrackTreeGridNodeData);
        });
      }
      return <div class={[ns.e('default-cell')]}>{content}</div>;
    };

    /** 绘制首列单元格 */
    const renderFirstCell = (item: ITrackTreeGridNodeData) => {
      return (
        <div class={[ns.e('first-cell')]}>
          {renderLayoutPanel(item) || (
            <span class={ns.em('first-cell', 'text')}>{item._text}</span>
          )}
        </div>
      );
    };

    /** 绘制单元格 */
    const renderCell = (
      nodeData: ITrackTreeGridNodeData,
      isFirst: boolean = false,
    ) => {
      // 如果为需求
      return (
        <div
          class={[ns.e('cell'), ns.is('expand', nodeData._expanded)]}
          onDblclick={evt => onNodeDbClick(nodeData, evt)}
          onClick={evt => onNodeClick(nodeData, evt)}
        >
          {isFirst ? renderFirstCell(nodeData) : renderDefaultCell(nodeData)}
        </div>
      );
    };

    /** 绘制行 */
    const renderRow = (
      modelCloums: ITrackTreeGridDETreeNode[],
      row: ITrackTreeGridNodeData,
    ) => {
      const cloums = row._children || [];
      return (
        <div class={[ns.e('row'), ns.is('expand', row._expanded)]}>
          <div class={ns.em('row', 'header')}>
            <div class={ns.em('row', 'expand')}>
              <span
                class={ns.em('row', 'expand-icon')}
                onClick={() => onRowExpandItem(row)}
              >
                {expandIcon()}
              </span>
            </div>
            {renderCell(row, true)}
          </div>
          <div class={ns.em('row', 'body')}>
            {modelCloums.map((cloum: ITrackTreeGridDETreeNode) => {
              // 通过节点标识获取当前列的数据
              const cell =
                cloums.find(
                  (item: ITreeNodeData) => item._nodeId === cloum.id,
                ) || {};
              return (
                cloum.visible &&
                cloum.enableSetting &&
                renderCell(cell as ITrackTreeGridNodeData)
              );
            })}
          </div>
        </div>
      );
    };

    /** 绘制表格内容 */
    const renderTableBody = (
      modelCloums: ITrackTreeGridDETreeNode[],
      rows: ITrackTreeGridNodeData[],
    ) => {
      return (
        <div
          class={ns.e('table-body')}
          style={{ minWidth: `${modelCloums.length * 20}rem` }}
        >
          <div class={ns.em('table-body', 'scollor')}>
            {rows.map((row: ITrackTreeGridNodeData) =>
              renderRow(modelCloums, row),
            )}
          </div>
        </div>
      );
    };

    /** 绘制表格头 */
    const renderTableHeader = (cloums: ITrackTreeGridDETreeNode[]) => {
      return (
        <div
          class={ns.e('header')}
          style={{ minWidth: `${cloums.length * 20}rem` }}
        >
          {cloums.map((cloum: IData, index: number) => {
            return (
              cloum.visible && (
                <div class={ns.em('header', 'cell')}>
                  {!index && (
                    <div
                      class={ns.em('header', 'expand-switch')}
                      title={expandAll.value ? '全部收起' : '全部展开'}
                      onClick={onExpandAll}
                    >
                      {expandAll.value ? stowAllIcon() : expandAllIcon()}
                    </div>
                  )}
                  <div class={ns.em('header', 'caption')}>{cloum.text}</div>
                </div>
              )
            );
          })}
        </div>
      );
    };

    /** 绘制表格 */
    const renderTable = () => {
      return (
        <div class={ns.e('table')}>
          {/* 头部 */}
          {renderTableHeader(tableModelCloums.value)}
          {/* 内容区 */}
          {renderTableBody(tableModelCloums.value, tableRows.value)}
        </div>
      );
    };

    /** 绘制列设置 */
    const renderCloumSetting = () => {
      return (
        <el-dropdown
          trigger='click'
          placement='bottom-start'
          class={ns.b('cloum-setting')}
          popper-class={ns.be('cloum-setting', 'popper')}
        >
          {{
            default: () => (
              <span class={ns.be('cloum-setting', 'content')}>
                <span class={ns.bem('cloum-setting', 'content', 'icon')}>
                  {cloumSettingIcon()}
                </span>
                <span class={ns.bem('cloum-setting', 'content', 'text')}>
                  设置
                </span>
              </span>
            ),
            dropdown: () => (
              <el-dropdown-menu>
                {tableModelCloums.value.map((cloum: IData) => {
                  return (
                    cloum.enableSetting && (
                      <el-dropdown-item>
                        <div
                          class={ns.bem('cloum-setting', 'popper', 'content')}
                        >
                          {cloum.sysImage && (
                            <iBizIcon
                              icon={cloum.sysImage}
                              class={ns.bem('cloum-setting', 'popper', 'icon')}
                            />
                          )}
                          <span
                            class={ns.bem('cloum-setting', 'popper', 'text')}
                          >
                            {cloum.text}
                          </span>
                          <el-switch
                            class={ns.bem('cloum-setting', 'popper', 'switch')}
                            v-model={cloum.visible}
                          />
                        </div>
                      </el-dropdown-item>
                    )
                  );
                })}
              </el-dropdown-menu>
            ),
          }}
        </el-dropdown>
      );
    };

    /** 绘制工具栏 */
    const renderToolbar = () => {
      return (
        <div class={ns.e('toolbar')}>
          <div class={ns.em('toolbar', 'item')}>{renderCloumSetting()}</div>
          <div class={ns.em('toolbar', 'item')}>
            <div class={ns.em('total')}>
              <span class={ns.em('total', 'sum')}>
                {tableRows.value.length}
              </span>
              <span class={ns.em('total', 'caption')}>个需求</span>
            </div>
          </div>
        </div>
      );
    };

    /** 绘制内容 */
    const renderContent = () => {
      return (
        <div class={ns.b()}>
          {renderToolbar()} {renderTable()}
        </div>
      );
    };

    return {
      c,
      ns,
      renderContent,
    };
  },
  render() {
    const slots: IData = {};
    const key = 'default';
    slots[key] = () => {
      if (this.c.state.isLoaded) {
        return this.renderContent();
      }
    };
    return (
      <iBizControlNavigation controller={this.c}>
        <iBizControlBase
          ref={'treeviewRef'}
          controller={this.c}
          v-loading={!this.c.view.state.isLoading && this.c.state.isLoading}
        >
          {slots}
        </iBizControlBase>
      </iBizControlNavigation>
    );
  },
});
