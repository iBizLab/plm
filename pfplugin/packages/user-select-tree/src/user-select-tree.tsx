/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-nested-ternary */
import { useControlController, useNamespace } from '@ibiz-template/vue3-util';
import {
  computed,
  defineComponent,
  nextTick,
  onMounted,
  onUnmounted,
  PropType,
  reactive,
  Ref,
  ref,
  resolveComponent,
  VNode,
  watch,
} from 'vue';
import { MenuItem } from '@imengyu/vue3-context-menu';
import { createUUID } from 'qx-util';
import { cloneDeep, debounce } from 'lodash-es';
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
import './user-select-tree.scss';
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
  useAppTreeBase,
  useElTreeUtil,
  findChildItems,
  renderTextPhoto,
  stringToHexColor,
} from './el-tree-util';
import { UserSelectTreeController } from './user-select-tree.controller';

export const UserSelectTree = defineComponent({
  name: 'UserSelectTree',
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
    data: { type: Array<ITreeNodeData>, required: false },
  },
  emits: ['nodeClick'],
  setup(props, { emit }) {
    const c = useControlController<UserSelectTreeController>(
      (...args) => new UserSelectTreeController(...args),
    );

    useAppTreeBase(c, props);

    const loadErrorAvatars: Ref<string[]> = ref([]);
    const cascadeSelect = ref(false);
    const counterData = reactive<IData>({});
    const fn = (counter: IData) => {
      Object.assign(counterData, counter);
    };
    c.evt.on('onCreated', () => {
      if (c.counter) {
        c.counter.onChange(fn, true);
      }
      if (c.controlParams.cascadeselect) {
        cascadeSelect.value = true;
      }
    });

    onUnmounted(() => {
      c.counter?.offChange(fn);
    });

    const ns = useNamespace(`control-${c.model.controlType!.toLowerCase()}`);
    const ns1 = useNamespace('user-select-tree');
    const treeRef = ref<InstanceType<typeof ElTree> | null>(null);
    const treeviewRef = ref<IData | null>(null);

    const treeRefreshKey = ref('');

    // 节点名称编辑相关
    const treeNodeTextInputRef = ref<IData | null>(null);
    const editingNodeKey = ref<string | null>(null);
    const editingNodeText = ref<string | null>(null);

    // 新建树节点相关
    const newTreeNodeText = ref<string | null>(null);
    const newNodeModel = ref<IDETreeNode | null>(null);
    const newDefaultValue = ref<IParams | null>(null);
    c.evt.on('onNewTreeNode', args => {
      const { nodeModel, defaultValue } = args;
      newNodeModel.value = nodeModel;
      newDefaultValue.value = defaultValue;
      editingNodeKey.value = null;
      editingNodeText.value = null;
    });

    watch(
      () => treeNodeTextInputRef.value,
      newVal => {
        if (newVal) {
          newVal.$el.getElementsByTagName('input')[0].focus();
        }
      },
    );

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
     * 处理节点文本编辑/新建事件
     * @author lxm
     * @date 2023-12-15 05:37:03
     */
    const onNodeTextEditBlur = async () => {
      // 树节点编辑
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
      // 树节点新建
      if (newNodeModel.value) {
        if (newTreeNodeText.value) {
          const { textAppDEFieldId, id } = newNodeModel.value as IParams;
          const _text = newTreeNodeText.value;
          const nodeData = { _deData: {} };
          Object.assign(nodeData, { _nodeId: id, _text });
          if (newDefaultValue.value) {
            Object.assign(nodeData._deData, newDefaultValue.value);
          }
          Object.assign(nodeData._deData, { [textAppDEFieldId]: _text });
          await c.createDeNodeData([nodeData]);
        }
        newNodeModel.value = null;
        newTreeNodeText.value = null;
        newDefaultValue.value = null;
      }
    };

    /**
     * 处理键盘ESC事件
     * @author tony001
     * @date 2023-12-15 05:37:03
     */
    const onNodeTextEditEsc = async () => {
      // 树节点编辑框
      if (editingNodeKey.value) {
        editingNodeKey.value = null;
        editingNodeText.value = null;
      }
      // 新建树节点编辑框
      if (newNodeModel.value) {
        newNodeModel.value = null;
        newTreeNodeText.value = null;
        newDefaultValue.value = null;
      }
    };

    /**
     * 处理新建节点键盘事件
     * @author tony001
     * @date 2023-12-15 05:37:03
     */
    const handleEditKeyDown = (e: KeyboardEvent) => {
      e.stopPropagation();
      if (e.code === 'Enter' || e.keyCode === 13) {
        onNodeTextEditBlur();
      }
      if (e.code === 'Escape' || e.keyCode === 27) {
        onNodeTextEditEsc();
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
        _disableSelect: node._disableSelect,
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

    watch(
      () => c.state.expandedKeys,
      () => {
        updateUI();
      },
      { deep: true },
    );

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
      if (props.isSimple) {
        // simple模式
        let children: ITreeNodeData[] = [];
        if (item.level === 0) {
          const tempNodes = c.state.items.find((_item: IData) => {
            return _item.isRoot;
          });
          if (tempNodes) {
            children = [tempNodes];
          }
        } else {
          children = findChildItems(
            c,
            props.modelData,
            item,
          ) as ITreeNodeData[];
        }
        item._children = children;
        callback(toElNodes(children));
        updateUI();
        return;
      }
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

    const readonly = computed(() => {
      return !!(
        c.context.srfreadonly === true || c.context.srfreadonly === 'true'
      );
    });

    /**
     * 节点单击事件
     */
    const onNodeClick = (
      nodeData: ITreeNodeData,
      data: IData,
      evt: MouseEvent,
    ) => {
      evt.stopPropagation();
      // 设计态时向上抛出节点点击事件
      if (c.runMode === 'DESIGN') {
        emit('nodeClick', { nodeData, evt });
      }
      if (nodeData._disableSelect) return;
      if (forbidClick) {
        return;
      }

      // 已经是当前节点，则进入编辑模式
      if (treeRef.value?.getCurrentKey() === nodeData._id && !readonly.value) {
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
      if (props.isSimple) {
        treeRef.value!.setCurrentKey(data?._id || undefined);
      } else {
        c.onTreeNodeClick(nodeData, evt);
      }
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

    const iBizRawItem = resolveComponent('IBizRawItem');
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
        let menuItem: MenuItem | undefined = {};
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
          const group = item as IDETBGroupItem;
          if (group.detoolbarItems?.length) {
            menuItem.children = calcContextMenuItems(
              group.detoolbarItems!,
              nodeData,
              evt,
              menuState,
            );
          }
          // 分组项配置界面行为组
          if (group.uiactionGroup && group.groupExtractMode) {
            const menuItems = group.uiactionGroup.uiactionGroupDetails
              ?.filter(detail => {
                const detailState: IButtonState = menuState[detail.id!];
                return detailState.visible;
              })
              .map(detail => {
                const detailState: IButtonState = menuState[detail.id!];
                const { sysImage } = detail as IData;
                return {
                  label: detail.showCaption ? detail.caption : undefined,
                  icon: detail.showIcon ? (
                    <iBizIcon icon={sysImage}></iBizIcon>
                  ) : undefined,
                  disabled: detailState.disabled,
                  clickableWhenHasChildren: true,
                  onClick: () => {
                    ContextMenu.closeContextMenu();
                    c.doUIAction(
                      detail.uiactionId!,
                      nodeData,
                      evt,
                      detail.appId,
                    );
                  },
                };
              });
            switch (group.groupExtractMode) {
              case 'ITEMS':
                menuItem.children = menuItems;
                break;
              case 'ITEMX':
                if (menuItems) {
                  menuItem = menuItems[0];
                  menuItem.children = menuItems.slice(1);
                }
                break;
              case 'ITEM':
              default:
                menuItem = undefined;
                if (menuItems) {
                  result.push(...menuItems);
                }
                break;
            }
          }
        }
        if (menuItem) {
          result.push(menuItem);
        }
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
        throw new RuntimeError(
          ibiz.i18n.t('control.common.noFoundNode', { id: data._uuid }),
        );
      }
      if (props.isSimple) {
        // 之前处理过节点数据的_id，避免循环嵌套进入死循环，这里需要对_id在再次进行处理保证选中展开效果
        const tempData = cloneDeep(nodeData);
        tempData._id = data._id;
        c.onExpandChange(tempData as ITreeNodeData, expanded);
      } else {
        c.onExpandChange(nodeData as ITreeNodeData, expanded);
      }
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
        return <iBizBadge class={ns.e('counter')} value={value} />;
      }
    };

    //  绘制新增节点
    const renderNewNode = () => {
      if (!newNodeModel.value) {
        return null;
      }
      return (
        <div class={[ns.b('new-node'), newNodeModel.value.sysCss?.cssName]}>
          {newNodeModel.value?.sysImage ? (
            <iBizIcon
              class={ns.be('node', 'icon')}
              icon={newNodeModel.value?.sysImage}
            ></iBizIcon>
          ) : null}
          <el-input
            v-model={newTreeNodeText.value}
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
    };

    // 头像加载失败
    const onAvatarLoadError = (key: string) => {
      loadErrorAvatars.value.push(key);
    };

    // 绘制头像
    const renderAvatar = (nodeData: ITreeNodeData) => {
      const { _icon: icon, _text: text, _leaf: leaf } = nodeData;
      if (!icon) {
        if (!leaf) {
          return null;
        }
        return (
          <div
            class={ns1.e('avatar')}
            style={`background-color:${stringToHexColor(text)}`}
          >
            {renderTextPhoto(text)}
          </div>
        );
      }
      if (icon && icon.imagePath) {
        try {
          const imgs = JSON.parse(icon.imagePath);
          if (
            Array.isArray(imgs) &&
            imgs.length > 0 &&
            loadErrorAvatars.value.indexOf(imgs[0].id) === -1
          ) {
            return (
              <img
                class={ns1.e('avatar')}
                src={imgs[0]}
                alt=''
                onError={() => onAvatarLoadError(imgs[0].id)}
              />
            );
          }
          return (
            <div
              class={ns1.e('avatar')}
              style={`background-color:${stringToHexColor(text)}`}
            >
              {renderTextPhoto(text)}
            </div>
          );
        } catch (error) {
          return (
            <iBizIcon class={ns.be('node', 'icon')} icon={icon}></iBizIcon>
          );
        }
      }
    };

    return {
      c,
      ns,
      ns1,
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
      renderNewNode,
      handleEditKeyDown,
      renderAvatar,
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
    const key = this.c.controlPanel ? 'tree' : 'default';
    slots[key] = () => {
      if (this.c.state.isLoaded && this.treeRefreshKey) {
        return [
          <el-tree
            ref={'treeRef'}
            class={[this.ns.b('tree'), this.ns1.b()]}
            key={this.treeRefreshKey}
            node-key='_id'
            highlight-current
            // 点击节点的时候不展开
            expand-on-click-node={false}
            auto-expand-parent={false}
            show-checkbox={!this.c.state.singleSelect}
            check-strictly={!this.cascadeSelect && this.checkStrictly}
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
                          this.handleEditKeyDown(e);
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
                    this.renderAvatar(nodeData),
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
                    onClick={evt => this.onNodeClick(nodeData, data, evt)}
                    onContextmenu={evt => this.onNodeContextmenu(nodeData, evt)}
                    class={[
                      this.ns.b('node'),
                      nodeData._disableSelect
                        ? this.ns.bm('node', 'disabled')
                        : '',
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
          </el-tree>,
          this.renderNewNode(),
          this.c.state.enableNavView && this.c.state.showNavIcon ? (
            !this.c.state.showNavView ? (
              <ion-icon
                class={this.ns.e('nav-icon')}
                title={ibiz.i18n.t('component.controlNavigation.showNav')}
                name='eye-outline'
                onClick={() => this.c.onShowNavViewChange()}
              ></ion-icon>
            ) : (
              <ion-icon
                class={this.ns.e('nav-icon')}
                title={ibiz.i18n.t('component.controlNavigation.hiddenNav')}
                name='eye-off-outline'
                onClick={() => this.c.onShowNavViewChange()}
              ></ion-icon>
            )
          ) : null,
        ];
      }
    };

    return (
      <iBizControlNavigation controller={this.c}>
        <iBizControlBase
          ref={'treeviewRef'}
          controller={this.c}
          v-loading={this.c.state.isLoading}
        >
          {slots}
        </iBizControlBase>
      </iBizControlNavigation>
    );
  },
});
