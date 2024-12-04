import { defineComponent, onUnmounted, PropType, ref } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import { IPanelRawItem } from '@ibiz/model-core';
import { ITreeNodeData, PanelItemController } from '@ibiz-template/runtime';
import './breadcrumb-exp.scss';

export const BreadcrumbExp = defineComponent({
  name: 'IBizBreadcrumbExp',
  props: {
    modelData: {
      type: Object as PropType<IPanelRawItem>,
      required: true,
    },
    controller: {
      type: PanelItemController,
      required: true,
    },
  },
  setup(prop) {
    const ns = useNamespace('breadcrumb-exp');
    const c = prop.controller;

    // 树控制器
    let tree: IData;

    // 节点数据
    const items = ref<ITreeNodeData[]>([]);

    // 获取父级节点和自身
    const getTopNodes = (node: ITreeNodeData): ITreeNodeData[] => {
      if (node._parent && node._parent._nodeId !== 'root') {
        return [...getTopNodes(node._parent), node];
      }
      return [node];
    };

    // 处理节点选中改变
    const handleSelectionChange = () => {
      if (!tree) {
        return;
      }
      const node = tree.state?.selectedData?.[0];
      if (!node) {
        items.value = [];
        return;
      }

      items.value = getTopNodes(node);
    };

    // 处理节点点击
    const handleClick = (item: ITreeNodeData, e: MouseEvent) => {
      if (!tree) {
        return;
      }
      tree.onTreeNodeClick?.(item, e);
    };

    // 父视图
    const parentView = c.panel.view?.parentView;

    if (parentView) {
      const treeExpBar = (
        parentView.layoutPanel?.panelItems?.treeexpbar as IData
      )?.control;
      if (treeExpBar) {
        tree = treeExpBar.xDataController;
        if (tree) {
          tree.evt.on('onSelectionChange', handleSelectionChange);
          handleSelectionChange();
        }
      }
    }

    onUnmounted(() => {
      tree?.evt.off('onSelectionChange', handleSelectionChange);
    });

    return {
      c,
      ns,
      items,
      handleClick,
    };
  },
  render() {
    return (
      <div class={this.ns.b()}>
        {this.items.map((item, i) => {
          return (
            <div
              class={[
                this.ns.b('item'),
                this.ns.is('active', i === this.items.length - 1),
              ]}
            >
              <div
                class={this.ns.b('item-content')}
                onClick={(e: MouseEvent) => {
                  e.stopPropagation();
                  if (i === this.items.length - 1) {
                    return;
                  }
                  this.handleClick(item, e);
                }}
              >
                {item._icon ? (
                  <iBizIcon
                    class={this.ns.be('item', 'icon')}
                    icon={item._icon}
                  ></iBizIcon>
                ) : null}
                <div class={this.ns.be('item', 'text')}>{item._text || ''}</div>
              </div>

              {i !== this.items.length - 1 && (
                <div class={this.ns.be('item', 'separator')}>/</div>
              )}
            </div>
          );
        })}
      </div>
    );
  },
});
