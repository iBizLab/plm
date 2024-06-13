/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useControlController, useNamespace } from '@ibiz-template/vue3-util';
import {
  computed,
  defineComponent,
  nextTick,
  onMounted,
  onUnmounted,
  PropType,
  reactive,
  ref,
  resolveComponent,
  VNode,
  watch,
} from 'vue';
import { MenuItem } from '@imengyu/vue3-context-menu';
import { createUUID } from 'qx-util';
import { debounce } from 'lodash-es';
import {
  IDETBGroupItem,
  IDETBRawItem,
  IDETBUIActionItem,
  IDEToolbarItem,
  IDETree,
  IDETreeNode,
} from '@ibiz/model-core';
import {
  IButtonContainerState,
  IButtonState,
  IControlProvider,
  ITreeNodeData,
  getControlPanel,
} from '@ibiz-template/runtime';
import './group-tree.scss';
import { RuntimeError } from '@ibiz-template/core';
import { ElTree } from 'element-plus';
import {
  AllowDropType,
  NodeDropType,
} from 'element-plus/es/components/tree/src/tree.type';
import { isNil } from 'ramda';
import {
  findNodeData,
  formatNodeDropType,
  useElTreeUtil,
} from './el-tree-util';
import { GroupTreeController } from './group-tree.controller';

export const GroupTreeControl = defineComponent({
  name: 'IBizGroupTreeControl',
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
  },
  setup() {
    const c = useControlController<GroupTreeController>(
      (...args) => new GroupTreeController(...args),
    );

    const readonly = computed(() => {
      return !!(
        c.context.srfreadonly === true || c.context.srfreadonly === 'true'
      );
    });

    const counterData = reactive<IData>({});
    c.evt.on('onCreated', () => {
      if (c.counter) {
        c.counter.onChange((counter: IData) => {
          Object.assign(counterData, counter);
        }, true);
      }
    });

    const ns = useNamespace(`control-group-tree`);
    const ns2 = useNamespace(`control-${c.model.controlType!.toLowerCase()}`);
    const treeRef = ref<InstanceType<typeof ElTree> | null>(null);
    const treeviewRef = ref<IData | null>(null);

    const treeRefreshKey = ref('');

    // 节点名称编辑相关
    const treeNodeTextInputRef = ref<IData | null>(null);

    watch(
      () => treeNodeTextInputRef.value,
      newVal => {
        if (newVal) {
          newVal.$el.getElementsByTagName('input')[0].focus();
        }
      },
    );

    /**
     * 处理节点文本编辑失效事件
     * @author ljx
     * @date 2023-12-27 05:37:03
     */
    const onNodeTextEditBlur = async () => {
      if (c.state.editingNodeKey) {
        if (c.state.editingNodeText) {
          const nodeData = findNodeData(c.state.editingNodeKey, c)!;
          await c.onModifyTreeNode(nodeData, c.state.editingNodeText);
        } else {
          // 取消编辑
          c.state.editingNodeKey = null;
        }
      }
      // 新建逻辑相关
      if (c.state.newingNodeText) {
        c.onCreateTreeNode();
      } else {
        // 取消编辑
        c.state.newingNodeModel = null;
      }
    };

    /**
     * 处理节点文本编辑ESC事件
     * @author ljx
     * @date 2024-02-27 10:37:03
     */
    const onNodeTextEditEsc = async () => {
      // 树节点编辑框
      if (c.state.editingNodeKey) {
        // 取消编辑
        c.state.editingNodeKey = null;
      }
      // 新建树节点编辑框
      if (c.state.newingNodeModel) {
        // 取消编辑
        c.state.newingNodeModel = null;
        c.state.newingNodeText = '';
      }
    };

    const { updateUI, triggerNodeExpand } = useElTreeUtil(treeRef, c);

    /**
     * 创建新的节点对象，隔离组件数据和controller数据
     * @author lxm
     * @date 2023-08-30 09:35:25
     * @param {ITreeNodeData[]} nodes
     * @return {*}  {IData[]}
     */
    const toElNodes = (nodes: ITreeNodeData[]): IData[] => {
      return nodes.map(node => ({
        _id: node._id,
        _uuid: node._uuid,
        _leaf: node._leaf,
        _text: node._text,
      }));
    };

    // el-treeUI更新子节点
    c.evt.on('onAfterRefreshParent', event => {
      if (treeRef.value) {
        const { parentNode, children } = event;
        const elNodes = toElNodes(children);
        treeRef.value!.updateKeyChildren(parentNode._id, elNodes);
        updateUI();
      }
    });

    c.evt.on('onAfterNodeDrop', event => {
      if (event.isChangedParent) {
        // 变更父节点的时候强刷
        treeRefreshKey.value = createUUID();
      }
    });

    /** 树展示数据 */
    const treeData = computed(() => {
      if (!c.state.isLoaded) {
        return [];
      }
      return c.model.rootVisible
        ? c.state.rootNodes
        : c.state.rootNodes.reduce<ITreeNodeData[]>((result, nodeData) => {
            if (nodeData._children) {
              return result.concat(nodeData._children);
            }
            return result;
          }, []);
    });

    // 根节点数据变更时重绘tree
    watch(treeData, (newVal, oldVal) => {
      if (newVal !== oldVal) {
        treeRefreshKey.value = createUUID();
      }
    });

    /**
     * 触发节点加载数据
     * @author lxm
     * @date 2023-05-29 09:16:07
     * @param {IData} item
     * @param {(nodes: IData[]) => void} callback
     */
    const loadData = async (
      item: IData,
      callback: (nodes: IData[]) => void,
    ) => {
      let nodes: ITreeNodeData[];
      if (item.level === 0) {
        nodes = treeData.value;
        ibiz.log.debug('初始加载');
      } else {
        const nodeData = findNodeData(item.data._uuid, c)!;
        if (nodeData._children) {
          ibiz.log.debug('节点展开加载-本地', nodeData);
          nodes = nodeData._children;
        } else {
          ibiz.log.debug('节点展开加载-远程', nodeData);
          nodes = await c.loadNodes(nodeData);
        }
      }
      ibiz.log.debug('给树返回值', nodes);

      callback(toElNodes(nodes));
      updateUI();
    };

    // 值变更优化，加载成功后的值变更需要等渲染完成之后执行，其他情况不用
    let selectionWait = false;
    c.evt.on('onLoadSuccess', () => {
      selectionWait = true;
      setTimeout(() => {
        selectionWait = false;
      }, 200);
    });

    // 选中数据回显
    c.evt.on('onSelectionChange', async () => {
      if (selectionWait) {
        await nextTick();
      }
      if (c.state.singleSelect) {
        treeRef.value!.setCurrentKey(c.state.selectedData[0]?._id || undefined);
      } else {
        // el-tree，会把没选中的反选，且不触发check事件
        treeRef.value!.setCheckedKeys(
          c.state.selectedData.map(item => item._id),
        );
      }
    });

    /**
     * 多选时选中节点变更
     */
    const onCheck = (
      nodeData: ITreeNodeData,
      opts: { checkedNodes: ITreeNodeData[] },
    ) => {
      const { checkedNodes } = opts;
      c.setSelection(checkedNodes);
    };

    let forbidClick: boolean = false;
    /**
     * 节点单击事件
     */
    const onNodeClick = (nodeData: ITreeNodeData, evt: MouseEvent) => {
      evt.stopPropagation();
      if (nodeData._disableSelect) return;
      if (forbidClick) {
        return;
      }

      // 已经是当前节点，则进入编辑模式
      if (treeRef.value?.getCurrentKey() === nodeData._id && !readonly.value) {
        const currentkey = treeRef.value?.getCurrentKey();
        c.updateTreeNode({ nodeKey: currentkey, defaultValue: {} });
      }

      // 多选的时候设置节点的当前节点
      if (!c.state.singleSelect) {
        treeRef.value?.setCurrentKey(nodeData._id);
      }

      // 导航树节点不配置导航视图的时候，只切换展开状态
      if (c.state.navigational) {
        const nodeModel = c.getNodeModel(nodeData._nodeId);
        if (!nodeModel?.navAppViewId) {
          const expanded = triggerNodeExpand(nodeData._id);
          c.onExpandChange(nodeData, expanded!);
        }
      }

      c.onTreeNodeClick(nodeData, evt);
      forbidClick = true;
      setTimeout(() => {
        forbidClick = false;
      }, 200);
    };

    /**
     * 节点双击事件
     */
    const onNodeDbClick = (nodeData: ITreeNodeData, evt: MouseEvent) => {
      evt.stopPropagation();
      if (nodeData._disableSelect) return;
      c.onDbTreeNodeClick(nodeData);
    };

    // *上下文菜单相关 /
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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const iBizRawItem = resolveComponent('IBizRawItem');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const iBizIcon = resolveComponent('IBizIcon');

    /**
     * 计算上下文菜单组件配置项集合
     */
    const calcContextMenuItems = (
      toolbarItems: IDEToolbarItem[],
      nodeData: ITreeNodeData,
      evt: MouseEvent,
      menuState: IButtonContainerState,
    ): MenuItem[] => {
      const result: MenuItem[] = [];
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
        // 上下文菜单行为级别大于等于常用操作不展示
        if ((item as IData).actionLevel > 100) {
          return;
        }

        // 除分隔符之外的公共部分
        const menuItem: MenuItem = {};
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
     * 节点右键菜单点击事件
     */
    const onNodeContextmenu = async (
      nodeData: ITreeNodeData,
      evt: MouseEvent,
    ) => {
      // 阻止原生浏览器右键菜单打开
      evt.preventDefault();
      evt.stopPropagation();
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

      const menus: MenuItem[] = calcContextMenuItems(
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

    /**
     * 绘制上下文菜单触发图标
     * @param nodeModel
     * @param nodeData
     * @returns
     */
    const renderContextMenu = (
      nodeModel: IDETreeNode,
      nodeData: ITreeNodeData,
    ) => {
      if (!nodeModel?.decontextMenu?.detoolbarItems?.length) {
        return;
      }

      // 只有一个界面行为项时，且是点击触发的界面行为时，不绘制。。。
      const menuInfo = c.contextMenuInfos[nodeModel.id!];
      if (menuInfo.clickTBUIActionItem && menuInfo.onlyOneActionItem) {
        return null;
      }

      return (
        <iBizContextMenuControl
          modelData={nodeModel.decontextMenu}
          groupLevelKeys={[50, 100]}
          nodeModel={nodeModel}
          nodeData={nodeData}
          context={c.context}
          onActionClick={(detail: IDETBUIActionItem, e: MouseEvent) =>
            c.doUIAction(detail.uiactionId!, nodeData, e, detail.appId)
          }
        ></iBizContextMenuControl>
      );
    };

    const updateNodeExpand = (data: IData, expanded: boolean) => {
      const nodeData = findNodeData(data._uuid, c);
      if (!nodeData) {
        throw new RuntimeError(`没有找到_uuid为${data._uuid}的节点`);
      }
      c.onExpandChange(nodeData, expanded);
    };

    const debounceSearch = debounce(() => {
      c.load();
    }, 500);

    const onInput = (value: string): void => {
      c.state.query = value;
      debounceSearch();
    };

    // 拖拽相关
    const allowDrop = (
      draggingNode: IData,
      dropNode: IData,
      type: AllowDropType,
    ) => {
      const draggingNodeData = findNodeData(draggingNode.data._uuid, c)!;
      const dropNodeData = findNodeData(dropNode.data._uuid, c)!;
      const result = c.calcAllowDrop(draggingNodeData, dropNodeData, type);
      return result;
    };

    const allowDrag = (draggingNode: IData) => {
      const nodeData = findNodeData(draggingNode.data._uuid, c)!;
      return c.calcAllowDrag(nodeData);
    };

    /**
     * 处理拖入完成事件
     * @author lxm
     * @date 2023-12-15 05:37:10
     * @param {IData} draggingNode
     * @param {IData} dropNode
     * @param {NodeDropType} dropType
     */
    const handleDrop = (
      draggingNode: IData,
      dropNode: IData,
      dropType: NodeDropType,
    ) => {
      const type = formatNodeDropType(dropType);
      const draggingNodeData = findNodeData(draggingNode.data._uuid, c)!;
      const dropNodeData = findNodeData(dropNode.data._uuid, c)!;
      c.onNodeDrop(draggingNodeData, dropNodeData, type);
    };

    /**
     * 处理编辑框按键事件
     */
    const handleEditKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.keyCode === 13) {
        e.stopPropagation();
        onNodeTextEditBlur();
      }
      if (e.key === 'Escape' || e.keyCode === 27) {
        e.stopPropagation();
        onNodeTextEditEsc();
      }
    };

    /**
     * 处理按键事件
     * @author lxm
     * @date 2023-12-15 05:39:00
     * @param {KeyboardEvent} e
     */
    const keydownHandle = (e: KeyboardEvent) => {
      if (e.code === 'F2' || e.code === 'Enter') {
        const currentkey = treeRef.value?.getCurrentKey();
        c.updateTreeNode(currentkey);
      }
    };

    const onBack = async () => {
      c.evt.emit('onBack', {});
      c.isFilter.value = false;
      if (treeRef.value) {
        treeRef.value.filter('');
      }
    };

    onMounted(() => {
      treeviewRef.value?.$el.addEventListener('keydown', keydownHandle);
      c.evt.on('onFilterNode', async (event: IData) => {
        const { nodeTag } = event;
        if (nodeTag) {
          c.isFilter.value = true;
        }
        if (treeRef.value) {
          treeRef.value.filter(`${nodeTag}@`);
        }
      });
      c.evt.on('onResetSate', async () => {
        c.evt.emit('onBack', {});
        c.isFilter.value = false;
        if (treeRef.value) {
          treeRef.value.filter('');
        }
      });
      c.evt.on('onLoadSuccess', () => {
        if (c.isFilter.value) {
          c.evt.emit('onFilterNode', { nodeTag: 'draft' });
        } else {
          c.evt.emit('onResetSate', {});
        }
      });
    });

    onUnmounted(() => {
      treeviewRef.value?.$el.removeEventListener('keydown', keydownHandle);
    });

    const filterNode = (value: string, data: IData) => {
      const id: string = data._id || '';
      return id.includes(value);
    };

    const customNodeClass = (data: IData) => {
      if (data._id === 'root:draft_parent') {
        return 'draft_parent';
      }
      return null;
    };

    const renderCounter = (nodeModel: IDETreeNode) => {
      if (nodeModel.counterId) {
        const value = counterData[nodeModel.counterId];
        if (isNil(value)) {
          return null;
        }
        if (nodeModel.counterMode === 1 && value === 0) {
          return null;
        }
        return (
          <div class={ns.em('counter', 'box')}>
            <span class={ns.e('dot')}>·</span>
            <iBizBadge class={ns.e('counter')} value={value} />
          </div>
        );
      }
    };

    const renderFilter = () => {
      if (!c.isFilter.value) {
        return null;
      }
      return (
        <div class={ns.b('filter')}>
          <div class={ns.be('filter', 'header')} onClick={onBack}>
            <ion-icon name='arrow-back-outline'></ion-icon>返回
          </div>
        </div>
      );
    };

    const renderNewNode = (nodeData?: ITreeNodeData) => {
      if (!c.state.newingNodeModel) {
        return null;
      }
      const { parent_id } = c.state.newingNodeDefault || {};
      if (parent_id) {
        if (!nodeData) {
          return null;
        }
        const { _value } = nodeData || {};
        if (_value !== parent_id) {
          return null;
        }
      }
      if (!parent_id && nodeData) {
        return null;
      }
      return (
        <div class={[ns.be('node', 'newing')]}>
          {c.state.newingNodeModel?.sysImage ? (
            <iBizIcon
              class={ns.be('node', 'icon')}
              icon={c.state.newingNodeModel?.sysImage}
            ></iBizIcon>
          ) : null}
          <el-input
            v-model={c.state.newingNodeText}
            ref='treeNodeTextInputRef'
            class={ns.b('editing-node')}
            onBlur={onNodeTextEditBlur}
            onKeydown={(e: KeyboardEvent) => {
              handleEditKeyDown(e);
            }}
          ></el-input>
        </div>
      );
    };

    const renderTree = () => {
      return (
        <div class={[ns.b('content'), ns.is('filter', c.isFilter.value)]}>
          {renderFilter()}
          <div class={[ns.b('tree-box'), ns.is('filter', c.isFilter.value)]}>
            <el-tree
              ref={'treeRef'}
              key={treeRefreshKey.value}
              class={[
                ns2.b('tree'),
                ns.is('list-tree', c.renderMode === 'listTree'),
              ]}
              node-key='_id'
              highlight-current
              // 点击节点的时候不展开
              expand-on-click-node={false}
              auto-expand-parent={false}
              show-checkbox={!c.state.singleSelect}
              check-strictly
              default-expanded-keys={c.state.expandedKeys}
              props={{
                label: '_text',
                children: '_children',
                isLeaf: '_leaf',
                class: customNodeClass,
              }}
              lazy
              load={loadData}
              onCheck={onCheck}
              onNodeExpand={(data: IData) => {
                updateNodeExpand(data, true);
              }}
              onNodeCollapse={(data: IData) => {
                updateNodeExpand(data, false);
              }}
              draggable={!readonly.value}
              allow-drop={allowDrop}
              allow-drag={allowDrag}
              onNodeDrop={handleDrop}
              filter-node-method={filterNode}
            >
              {{
                default: ({ data }: { node: IData; data: IData }) => {
                  const nodeData = findNodeData(data._uuid, c)!;
                  if (!nodeData) {
                    return null;
                  }
                  const nodeModel = c.getNodeModel(nodeData._nodeId)!;

                  // 绘制编辑项
                  if (
                    c.state.editingNodeKey === nodeData._id &&
                    !readonly.value
                  ) {
                    console.log(555, readonly.value);
                    return (
                      <div class={[ns.b('node'), nodeModel.sysCss?.cssName]}>
                        {nodeData._icon ? (
                          <iBizIcon
                            class={ns.be('node', 'icon')}
                            icon={nodeData._icon}
                          ></iBizIcon>
                        ) : null}
                        <el-input
                          v-model={c.state.editingNodeText}
                          ref='treeNodeTextInputRef'
                          class={ns.b('editing-node')}
                          onBlur={() => {
                            onNodeTextEditBlur();
                          }}
                          onKeydown={(e: KeyboardEvent) => {
                            handleEditKeyDown(e);
                          }}
                        ></el-input>
                      </div>
                    );
                  }

                  const layoutPanel = getControlPanel(nodeModel);

                  let content;
                  if (layoutPanel) {
                    content = (
                      <iBizControlShell
                        data={nodeData}
                        modelData={layoutPanel}
                        context={c.context}
                        params={c.params}
                      ></iBizControlShell>
                    );
                  } else {
                    content = [
                      nodeData._icon ? (
                        <iBizIcon
                          class={ns.be('node', 'icon')}
                          icon={nodeData._icon}
                        ></iBizIcon>
                      ) : null,
                      nodeData._textHtml ? (
                        <span
                          class={ns.be('node', 'label')}
                          v-html={nodeData._textHtml}
                        ></span>
                      ) : (
                        <span class={ns.be('node', 'label')}>
                          {nodeData._text}
                        </span>
                      ),
                    ];
                  }

                  return [
                    <div
                      onDblclick={evt => onNodeDbClick(nodeData, evt)}
                      onClick={evt => onNodeClick(nodeData, evt)}
                      onContextmenu={evt => onNodeContextmenu(nodeData, evt)}
                      class={[
                        ns.b('node'),
                        ns.is(
                          'hidden',
                          Object.is(c.hiddenNodeId, nodeData._nodeId) &&
                            !c.isFilter.value,
                        ),
                        nodeData._leaf
                          ? ns.be('node', 'item')
                          : ns.be('node', 'group'),
                        nodeModel.sysCss?.cssName,
                      ]}
                    >
                      {content}
                      {renderCounter(nodeModel)}
                      {renderContextMenu(nodeModel, nodeData)}
                    </div>,
                    renderNewNode(nodeData),
                  ];
                },
              }}
            </el-tree>
            {renderNewNode()}
          </div>
        </div>
      );
    };

    return {
      c,
      ns,
      treeRef,
      treeviewRef,
      treeNodeTextInputRef,
      treeData,
      treeRefreshKey,
      findNodeData,
      handleEditKeyDown,
      onCheck,
      onNodeClick,
      onNodeDbClick,
      onNodeContextmenu,
      loadData,
      renderContextMenu,
      renderCounter,
      updateNodeExpand,
      onInput,
      allowDrop,
      allowDrag,
      handleDrop,
      onNodeTextEditBlur,
      renderTree,
    };
  },
  render() {
    const slots: IData = {
      searchbar: () => {
        if (!this.c.enableQuickSearch) {
          return null;
        }
        return (
          <el-input
            model-value={this.c.state.query}
            class={this.ns.b('quick-search')}
            placeholder={this.c.state.placeHolder}
            onInput={this.onInput}
          >
            {{
              prefix: (): VNode => {
                return (
                  <ion-icon class={this.ns.e('search-icon')} name='search' />
                );
              },
            }}
          </el-input>
        );
      },
    };
    if (this.c.bottomToolbar) {
      slots.toolbar = () => {
        return (
          <iBizControlShell
            modelData={this.c.bottomToolbar}
            context={this.c.context}
            params={this.c.params}
          ></iBizControlShell>
        );
      };
    }
    const key = this.c.controlPanel ? 'tree' : 'default';
    slots[key] = () => {
      if (this.c.state.isLoaded && this.treeRefreshKey) {
        return this.renderTree();
      }
    };

    return (
      <iBizControlBase
        ref={'treeviewRef'}
        controller={this.c}
        v-loading={this.c.state.isLoading}
      >
        {slots}
      </iBizControlBase>
    );
  },
});
