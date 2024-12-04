/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable prefer-destructuring */

import {
  useNamespace,
  useControlController,
  route2routePath,
} from '@ibiz-template/vue3-util';
import {
  defineComponent,
  nextTick,
  onActivated,
  onBeforeUnmount,
  PropType,
  ref,
  VNode,
  watch,
} from 'vue';
import { IDETree } from '@ibiz/model-core';
import { ITreeNodeData } from '@ibiz-template/runtime';
import { useRoute } from 'vue-router';
import { TabGroupSelectTreeController } from './tab-group-select-tree.controller';
import './tab-group-select-tree.scss';

export const TabGroupSelectTree = defineComponent({
  name: 'TabGroupSelectTree',
  props: {
    modelData: { type: Object as PropType<IDETree>, required: true },
    context: { type: Object as PropType<IContext>, required: true },
    params: { type: Object as PropType<IParams>, default: () => ({}) },
    /**
     * 部件行数据默认激活模式
     * - 0 不激活
     * - 1 单击激活
     * - 2 双击激活(默认值)
     *
     * @type {(number | 0 | 1 | 2)}
     */
    mdctrlActiveMode: { type: Number, default: 2 },

    /**
     * 是否为单选
     * - true 单选
     * - false 多选
     *
     * @type {(Boolean)}
     */
    singleSelect: { type: Boolean, default: true },
  },
  setup() {
    const c = useControlController(
      (...args) => new TabGroupSelectTreeController(...args),
      { excludePropsKeys: ['data'] },
    );

    const ns = useNamespace('tab-group-select-tree');

    // 分组数据
    const items = ref<ITreeNodeData[]>([]);

    // 当前选择分页
    const activeName = ref<string>('');

    // 当前选择分组节点的数据
    const currentNode = ref<ITreeNodeData>();

    // 存储各分页选择情况
    const selectMap = ref<IData>({});

    // 所有节点数据
    const allNodes = ref<ITreeNodeData[]>([]);

    const route = useRoute();

    // 加载数据
    const loadData = async (): Promise<void> => {
      if (!items.value || items.value.length === 0) {
        const nodes = await c.loadNodes();
        nodes.forEach((node: ITreeNodeData) => {
          allNodes.value.push(node);
          if (node._children) {
            allNodes.value.push(...node._children);
          }
        });
        items.value = nodes;
      }
      if (
        items.value &&
        items.value.length > 0 &&
        items.value[0]._children &&
        items.value[0]._children.length > 0
      ) {
        await Promise.all(
          items.value[0]._children.map(async (child: ITreeNodeData) => {
            const nodes = await c.loadNodes(child);
            allNodes.value.push(...nodes);
          }),
        );

        // 如果activeName.value存在，表示只是分页切换
        if (activeName.value) {
          // 找到分页的子数据
          const target = items.value[0]._children.find(
            (child: ITreeNodeData) => {
              return child._id === activeName.value;
            },
          );
          // 导航的节点数据
          if (target && target._children && target._children.length) {
            if (selectMap.value[activeName.value]) {
              // 走之前的激活
              currentNode.value = target._children.find(
                (child: ITreeNodeData) => {
                  return child._id === selectMap.value[activeName.value];
                },
              );
            } else {
              // 拿第一个
              currentNode.value = target._children[0];
            }
          } else {
            // 拿分页本身
            currentNode.value = target;
          }
          if (currentNode.value) {
            const theme = await c.getNodeThemeModel(currentNode.value);
            c.onNodeClick({ ...currentNode.value, srfthememodel: theme });
          }
        } else {
          // 查看路由，如果根据路由的srfnav能找到对应的节点，则重新根据节点去进行导航，找不到就走默认，拿第一个数据进行导航，如果第一个有子，则拿子项的第一个进行导航
          const depth = c.view.modal.routeDepth;
          if (depth) {
            const routePath = route2routePath(route);
            const { srfnav } = routePath.pathNodes[depth! - 1];
            if (srfnav) {
              // 走的刷新，根据已有导航参数进行回显
              const navTarget = allNodes.value.find((item: ITreeNodeData) => {
                return item._id === srfnav;
              });
              if (navTarget) {
                if (navTarget._children && navTarget._children.length > 0) {
                  currentNode.value = navTarget._children[0];
                  activeName.value = navTarget._id;
                  selectMap.value[activeName.value] =
                    navTarget._children[0]._id;
                } else if (navTarget._parent) {
                  const isRoot = c.isRoot(navTarget._parent._id);
                  if (isRoot) {
                    activeName.value = navTarget._id;
                  } else {
                    activeName.value = navTarget._parent._id;
                    selectMap.value[activeName.value] = navTarget._id;
                  }
                }
                if (currentNode.value) {
                  const theme = await c.getNodeThemeModel(currentNode.value);
                  c.onNodeClick({ ...currentNode.value, srfthememodel: theme });
                }
                return;
              }
            }
          }
          const first = items.value[0]._children[0];
          activeName.value = first._id;
          if (first._children && first._children.length > 0) {
            currentNode.value = first._children[0];
            selectMap.value[activeName.value] = currentNode.value._id;
          } else {
            currentNode.value = first;
          }
          if (currentNode.value) {
            const theme = await c.getNodeThemeModel(currentNode.value);
            c.onNodeClick({ ...currentNode.value, srfthememodel: theme });
          }
        }
      }
    };

    const mergeParam = async () => {
      if (currentNode.value) {
        const theme = await c.getNodeThemeModel(currentNode.value);
        c.onNodeClick({ ...currentNode.value, srfthememodel: theme });
      }
    };

    // 初始加载数据
    c.evt.on('onMounted', async () => {
      await loadData();
    });

    let isNoRoute = false;
    if (
      c.view.layoutPanel &&
      c.view.layoutPanel.panelItems &&
      c.view.layoutPanel.panelItems.nav_pos
    ) {
      const navpos = c.view.layoutPanel.panelItems.nav_pos;
      if ((navpos as IData).rawItemParams) {
        isNoRoute = (navpos as IData).rawItemParams.expmode === 'NO_ROUTE';
      }
    }

    const routeWatch = watch(
      () => route.fullPath,
      () => {
        if (isNoRoute) {
          return;
        }
        const depth = c.view.modal.routeDepth;
        if (depth) {
          const routePath = route2routePath(route);
          const { srfnav, viewName } = routePath.pathNodes[depth! - 1];
          // 路由变化，根据已有导航参数进行回显
          if (c.view.model.codeName !== viewName) {
            return;
          }

          if (srfnav && currentNode.value && srfnav !== currentNode.value._id) {
            const navTarget = allNodes.value.find((item: ITreeNodeData) => {
              return item._id === srfnav;
            });
            if (navTarget) {
              currentNode.value = navTarget;
              if (navTarget._children && navTarget._children.length > 0) {
                currentNode.value = navTarget._children[0];
                activeName.value = navTarget._id;
                selectMap.value[activeName.value] = navTarget._children[0]._id;
              } else if (navTarget._parent) {
                const isRoot = c.isRoot(navTarget._parent._id);
                if (isRoot) {
                  activeName.value = navTarget._id;
                } else {
                  activeName.value = navTarget._parent._id;
                  selectMap.value[activeName.value] = navTarget._id;
                }
              }
              mergeParam();
            }
          }
        }
      },
      {
        immediate: true,
      },
    );

    // 重新进入时回显离开时的页面
    onActivated(async () => {
      if (currentNode.value) {
        if (currentNode.value._nodeType !== 'STATIC') {
          const theme = await c.getNodeThemeModel(currentNode.value);
          c.onNodeClick({ ...currentNode.value, srfthememodel: theme });
        } else {
          nextTick(() => {
            c.onNodeClick(currentNode.value!);
          });
        }
      } else {
        loadData();
      }
    });

    onBeforeUnmount(() => {
      routeWatch?.();
    });

    // 下拉选择
    const onSelect = async (
      value: string,
      tab: ITreeNodeData,
    ): Promise<void> => {
      // 得到当前点击的点
      const target = tab._children?.find((child: ITreeNodeData) => {
        return child._id === value;
      });
      if (target) {
        currentNode.value = target;
        const theme = await c.getNodeThemeModel(currentNode.value);
        c.onNodeClick({ ...target, srfthememodel: theme });
      }
    };

    // 分页切换
    const onTabChange = async (child: ITreeNodeData): Promise<void> => {
      if (activeName.value === child._id) {
        return;
      }
      activeName.value = child._id;
      let theme = null;
      if (child._children && child._children.length > 0) {
        // 判断当前分页是否已导航过
        if (selectMap.value[activeName.value]) {
          currentNode.value = child._children.find((item: ITreeNodeData) => {
            return item._id === selectMap.value[activeName.value];
          });
        } else {
          selectMap.value[activeName.value] = child._children[0]._id;
          currentNode.value = child._children[0];
        }
        theme = await c.getNodeThemeModel(currentNode.value!);
      } else {
        currentNode.value = child;
      }
      await c.onNodeClick({ ...currentNode.value, srfthememodel: theme });
    };

    // 绘制分页下的分组下拉
    const renderSelectList = (tab: ITreeNodeData): VNode | undefined => {
      if (
        activeName.value === tab._id &&
        tab._children &&
        tab._children.length > 0
      ) {
        // 先格式化数据
        tab._children.forEach((child: IData) => {
          if (child._deData) {
            child.text = child._deData.caption || child._deData.srfmajortext;
          } else {
            child.text = child._text || child.srfmajortext;
          }
          child.value = child._id;
        });
        return (
          <van-dropdown-menu class={ns.b('select-list')}>
            <van-dropdown-item
              v-model={selectMap.value[tab._id]}
              options={tab._children}
              onChange={(value: string) => onSelect(value, tab)}
            />
          </van-dropdown-menu>
        );
      }
    };

    // 绘制分页
    const renderTabs = (): VNode | undefined => {
      if (items.value && items.value.length > 0 && items.value[0]._children) {
        return (
          <div
            class={[
              ns.b('tabs'),
              {
                [ns.bm('tabs', 'default')]:
                  c.controlParams.tabmode !== 'EQUALLY',
              },
              {
                [ns.bm('tabs', 'equally')]:
                  c.controlParams.tabmode === 'EQUALLY',
              },
            ]}
          >
            {items.value[0]._children.map((child: ITreeNodeData) => {
              const caption = child._text || child.srfmajortext;
              return (
                <div
                  class={[
                    ns.be('tabs', 'item'),
                    ns.is('selected', activeName.value === child._id),
                  ]}
                  onClick={() => onTabChange(child)}
                >
                  <span class={ns.bem('tabs', 'item', 'caption')}>
                    {caption}
                  </span>
                  {renderSelectList(child)}
                </div>
              );
            })}
          </div>
        );
      }
    };

    return { ns, c, renderTabs };
  },
  render() {
    return (
      <iBizControlBase controller={this.c}>
        {this.c.state.isCreated && this.c.state.isLoaded && (
          <div class={this.ns.b()}>{this.renderTabs()}</div>
        )}
      </iBizControlBase>
    );
  },
});
