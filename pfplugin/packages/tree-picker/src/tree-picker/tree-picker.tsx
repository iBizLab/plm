import { defineComponent, ref, watch } from 'vue';
import {
  getDropdownProps,
  getEditorEmits,
  useNamespace,
} from '@ibiz-template/vue3-util';
import { CodeListEditorController, CodeListItem } from '@ibiz-template/runtime';
import './tree-picker.scss';

export const IBizTreePicker = defineComponent({
  name: 'IBizTreePicker',
  props: getDropdownProps<CodeListEditorController>(),
  emits: getEditorEmits(),
  setup(props, { emit }) {
    const ns = useNamespace('tree-picker');
    const c = props.controller;

    // 是否已加载代码表
    const isLoadedCodeList = ref(false);

    // 代码表项
    const codeListItems = ref<readonly CodeListItem[]>([]);

    // 树组件
    const tree = ref();

    // 节点映射
    const nodeMap = new Map();

    // 父节点映射
    const parentMap = new Map();

    // 处理树节点
    const handleTreeNodes = (
      nodes: readonly CodeListItem[],
      parent?: CodeListItem,
    ) => {
      if (!nodes.length) {
        return;
      }

      nodes.forEach(node => {
        nodeMap.set(node.value, node);
        parentMap.set(node.value, parent);
        if (node.children) {
          handleTreeNodes(node.children, node);
        }
      });
    };

    // 是否选中所有子节点
    const isAllChildrenSelected = (node: CodeListItem, keys: string[]) => {
      if (!node.children || !node.children.length) {
        return true;
      }

      return node.children.every(child => keys.includes(`${child.value}`));
    };

    // 递归处理节点
    const traverse = (node: CodeListItem, keys: string[]) => {
      // 递归检查所有子节点
      if (node.children) {
        node.children.forEach(child => {
          traverse(child, keys);
        });
      }

      if (!isAllChildrenSelected(node, keys)) {
        // 如果子节点没有全部选中，则从选中的 key 中删除该节点的 key
        const index = keys.indexOf(`${node.value}`);
        if (index !== -1) {
          keys.splice(index, 1);
        }
      }
    };

    // 处理值变更
    const handleValueChange = () => {
      const keys: string[] = [];
      if (typeof props.value === 'string') {
        keys.push(...props.value.split(',').filter(Boolean));
      }
      const nodes = keys.map(key => nodeMap.get(key)).filter(Boolean);
      nodes.forEach(node => {
        traverse(node, keys);
      });
      if (tree.value) {
        tree.value.setCheckedKeys(keys);
      }
    };

    watch(
      () => props.value,
      async () => {
        if (!isLoadedCodeList.value) {
          codeListItems.value = await c.loadCodeList(props.data);
          handleTreeNodes(codeListItems.value || []);
          isLoadedCodeList.value = true;
        }
        handleValueChange();
      },
      { immediate: true },
    );

    // 获取顶层节点和自身
    const getTopNodes = (node: CodeListItem): CodeListItem[] => {
      if (parentMap.get(node.value)) {
        return [...getTopNodes(parentMap.get(node.value)), node];
      }

      return [node];
    };

    // 处理选中
    const handleCheck = (
      _node: CodeListItem,
      option: { checkedNodes: CodeListItem[] },
    ) => {
      const map = new Map();
      const nodes = option.checkedNodes || [];
      nodes.forEach(node => {
        const topNodes = getTopNodes(node);
        topNodes.forEach(topNode => {
          if (topNode && topNode.value && !map.has(topNode.value)) {
            map.set(topNode.value, topNode);
          }
        });
      });
      const value = [...map.keys()].join(',');
      emit('change', value);
    };

    return {
      ns,
      c,
      tree,
      codeListItems,
      handleCheck,
    };
  },
  render() {
    return (
      <div class={[this.ns.b(), this.disabled && this.ns.m('disabled')]}>
        <el-tree
          ref='tree'
          data={this.codeListItems}
          show-checkbox={true}
          node-key='value'
          props={{
            label: 'text',
            children: 'children',
            disabled: () => {
              return this.disabled ? 'value' : '';
            },
          }}
          onCheck={this.handleCheck}
        >
          {{
            default: ({ data }: { data: CodeListItem }) => {
              return (
                <div class={this.ns.b('item')}>
                  {data.sysImage?.imagePath ? (
                    <iBizIcon
                      class={this.ns.be('item', 'icon')}
                      icon={data.sysImage}
                    ></iBizIcon>
                  ) : (
                    <iBizIcon
                      class={this.ns.be('item', 'icon')}
                      icon={{ cssClass: 'fa fa-file-text-o' }}
                    ></iBizIcon>
                  )}
                  <span class={this.ns.be('item', 'text')}>
                    {data.text || ''}
                  </span>
                </div>
              );
            },
          }}
        </el-tree>
      </div>
    );
  },
});
