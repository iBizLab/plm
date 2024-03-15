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
  TreeController,
  getControlPanel,
} from '@ibiz-template/runtime';
import { RuntimeError } from '@ibiz-template/core';
import { ElTree } from 'element-plus';
import {
  AllowDropType,
  NodeDropType,
} from 'element-plus/es/components/tree/src/tree.type';
import { isNil, clone } from 'ramda';
import {
  findNodeData,
  formatNodeDropType,
  useElTreeUtil,
} from './el-tree-util';
import './list-tree.scss';

export const ListTreeControl = defineComponent({
  name: 'IBizListTreeControl',
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
    const c = useControlController<TreeController>(
      (...args) => new TreeController(...args),
    );

    const cascadeSelect = ref(false);
    const counterData = reactive<IData>({});
    c.evt.on('onCreated', () => {
      if (c.counter) {
        c.counter.onChange((counter: IData) => {
          Object.assign(counterData, counter);
        }, true);
      }
      if (c.controlParams.cascadeselect) {
        cascadeSelect.value = true;
      }
    });

    const ns = useNamespace(`control-${c.model.controlType!.toLowerCase()}`);
    const treeRef = ref<InstanceType<typeof ElTree> | null>(null);
    const treeviewRef = ref<IData | null>(null);

    const treeRefreshKey = ref('');

    // 节点名称编辑相关
    const treeNodeTextInputRef = ref<IData | null>(null);
    const editingNodeKey = ref<string | null>(null);
    const editingNodeText = ref<string | null>(null);

    watch(
      () => treeNodeTextInputRef.value,
      newVal => {
        if (newVal) {
          newVal.$el.getElementsByTagName('input')[0].focus();
        }
      },
    );

    // 计算当前节点是否配置导航视图或者上下文菜单,已配置为true,未配置为false
    const calcNodeAbility = (nodeData: ITreeNodeData): boolean => {
      if ((nodeData as IData)._disableSelect) {
        return false;
      }
      const nodeModel = c.getNodeModel(nodeData._nodeId)!;
      // 节点有配置常用操作的上下文菜单
      const clickActionItem =
        c.contextMenuInfos[nodeData._nodeId]?.clickTBUIActionItem;
      if (nodeModel?.navAppViewId || clickActionItem || nodeData?._children) {
        return true;
      }
      return false;
    };

    /**
     * 编辑当前节点的文本
     * @author lxm
     * @date 2023-12-15 05:46:02
     * @return {*}  {void}
     */
    const editCurrentNodeText = (): void => {
      const currentkey = treeRef.value?.getCurrentKey();
      if (!currentkey || currentkey === editingNodeKey.value) {
        return;
      }
      const nodeData = findNodeData(currentkey, c)!;
      const model = c.getNodeModel(nodeData._nodeId);
      if (model?.allowEditText) {
        editingNodeKey.value = currentkey;
      }
    };

    /**
     * 处理节点文本编辑失效事件
     * @author lxm
     * @date 2023-12-15 05:37:03
     */
    const onNodeTextEditBlur = async () => {
      if (editingNodeKey.value) {
        if (editingNodeText.value) {
          const nodeData = findNodeData(editingNodeKey.value, c)!;
          await c.modifyNodeText(nodeData, editingNodeText.value);
          editingNodeKey.value = null;
          editingNodeText.value = null;
        } else {
          // 取消编辑
          editingNodeKey.value = null;
        }
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
        _disableSelect: (node as IData)._disableSelect,
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
      if (forbidClick || !calcNodeAbility(nodeData)) {
        return;
      }

      // 已经是当前节点，则进入编辑模式
      if (treeRef.value?.getCurrentKey() === nodeData._id) {
        editCurrentNodeText();
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
      if (!calcNodeAbility(nodeData)) {
        return;
      }
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

    /**
     * 处理工具栏绘制项集合
     * @author ljx
     * @date 2024-03-07 10:33:02
     * @param {IDEToolbarItem[]} toolbarItems 上下文菜单配置项集合
     * @param {string} renderPlace 绘制位置区分节点或右键气泡绘制
     * @returns {IDEToolbarItem[]}
     */
    const handleToolBarItems = (
      toolbarItems: IDEToolbarItem[],
      renderPlace: string,
    ): IDEToolbarItem[] => {
      // 绘制项集合
      const renderItems: IDEToolbarItem[] = [];
      toolbarItems?.forEach((action: IDEToolbarItem) => {
        // 行为级别为关键操作时在节点项中绘制 行为级别等于常用操作不绘制 行为级别等于一般操作或不常用操作时在气泡中绘制
        if (
          renderPlace === 'nodeItem' &&
          (action as IParams).actionLevel === 250
        ) {
          renderItems.push(action);
        } else if (
          renderPlace === 'popper' &&
          (action as IParams).actionLevel < 200
        ) {
          renderItems.push(action);
        }
      });
      return renderItems;
    };

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

      const detoolbarItems = handleToolBarItems(
        contextMenuC.model.detoolbarItems,
        'popper',
      );
      const menus: MenuItem[] = calcContextMenuItems(
        detoolbarItems,
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
      const detoolbarItems = handleToolBarItems(
        nodeModel?.decontextMenu?.detoolbarItems,
        'nodeItem',
      );
      const contextMenuModel: IParams = { detoolbarItems };
      const cloneNodeModel = clone(nodeModel);
      Object.assign(
        (cloneNodeModel as IParams).decontextMenu,
        contextMenuModel,
      );

      return (
        <iBizContextMenuControl
          modelData={contextMenuModel}
          groupLevelKeys={[50, 100]}
          nodeModel={cloneNodeModel}
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
     * 处理按键事件
     * @author lxm
     * @date 2023-12-15 05:39:00
     * @param {KeyboardEvent} e
     */
    const keydownHandle = (e: KeyboardEvent) => {
      if (e.code === 'F2' || e.code === 'Enter') {
        editCurrentNodeText();
      }
    };

    onMounted(() => {
      treeviewRef.value?.$el.addEventListener('keydown', keydownHandle);
    });

    onUnmounted(() => {
      treeviewRef.value?.$el.removeEventListener('keydown', keydownHandle);
    });

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
          <div class={ns.b('counter')}>
            <span class={ns.be('counter', 'dot')}>·</span>
            <iBizBadge value={value} />
          </div>
        );
      }
    };

    return {
      c,
      ns,
      treeRef,
      treeviewRef,
      treeNodeTextInputRef,
      treeData,
      treeRefreshKey,
      editingNodeKey,
      editingNodeText,
      cascadeSelect,
      findNodeData,
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
      calcNodeAbility,
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
            class={[this.ns.b('quick-search'), this.ns.b('quick-search')]}
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
    const key = this.c.controlPanel ? 'tree' : 'default';
    slots[key] = () => {
      if (this.c.state.isLoaded && this.treeRefreshKey) {
        return (
          <el-tree
            ref={'treeRef'}
            class={this.ns.is('list1', true)}
            key={this.treeRefreshKey}
            node-key='_id'
            highlight-current
            // 点击节点的时候不展开
            expand-on-click-node={false}
            auto-expand-parent={false}
            show-checkbox={!this.c.state.singleSelect}
            check-strictly={!this.cascadeSelect}
            default-expanded-keys={this.c.state.expandedKeys}
            props={{
              label: '_text',
              children: '_children',
              isLeaf: '_leaf',
              disabled: '_disableSelect',
            }}
            lazy
            load={this.loadData}
            onCheck={this.onCheck}
            onNodeExpand={(data: IData) => {
              this.updateNodeExpand(data, true);
            }}
            onNodeCollapse={(data: IData) => {
              this.updateNodeExpand(data, false);
            }}
            draggable={true}
            allow-drop={this.allowDrop}
            allow-drag={this.allowDrag}
            onNodeDrop={this.handleDrop}
          >
            {{
              default: ({ data }: { node: IData; data: IData }) => {
                const nodeData = this.findNodeData(data._uuid, this.c)!;
                if (!nodeData) {
                  return null;
                }
                const nodeModel = this.c.getNodeModel(nodeData._nodeId)!;

                // 绘制编辑项
                if (this.editingNodeKey === nodeData._id) {
                  return (
                    <div class={[this.ns.b('node'), nodeModel.sysCss?.cssName]}>
                      <el-input
                        v-model={this.editingNodeText}
                        ref='treeNodeTextInputRef'
                        class={this.ns.b('editing-node')}
                        onBlur={() => {
                          this.onNodeTextEditBlur();
                        }}
                        onKeydown={(e: KeyboardEvent) => {
                          e.stopPropagation();
                          if (e.code === 'Enter') {
                            this.onNodeTextEditBlur();
                          }
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
                      context={this.c.context}
                      params={this.c.params}
                    ></iBizControlShell>
                  );
                } else {
                  content = [
                    nodeData._icon ? (
                      <iBizIcon
                        class={this.ns.be('node', 'icon')}
                        icon={nodeData._icon}
                      ></iBizIcon>
                    ) : null,
                    nodeData._textHtml ? (
                      <span
                        class={this.ns.be('node', 'label')}
                        v-html={nodeData._textHtml}
                      ></span>
                    ) : (
                      <span class={this.ns.be('node', 'label')}>
                        {nodeData._text}
                      </span>
                    ),
                  ];
                }

                return (
                  <div
                    onDblclick={evt => this.onNodeDbClick(nodeData, evt)}
                    onClick={evt => this.onNodeClick(nodeData, evt)}
                    onContextmenu={evt => this.onNodeContextmenu(nodeData, evt)}
                    class={[
                      this.ns.b('node'),

                      !this.calcNodeAbility(nodeData)
                        ? this.ns.bm('node', 'disabled')
                        : '',
                      nodeData._leaf
                        ? this.ns.be('node', 'item')
                        : this.ns.be('node', 'group'),
                      nodeModel.sysCss?.cssName,
                    ]}
                  >
                    {content}
                    {this.renderCounter(nodeModel)}
                    {this.renderContextMenu(nodeModel, nodeData)}
                  </div>
                );
              },
            }}
          </el-tree>
        );
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
