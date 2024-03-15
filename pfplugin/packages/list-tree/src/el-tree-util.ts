/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { RuntimeError } from '@ibiz-template/core';
import { ITreeController, ITreeNodeData } from '@ibiz-template/runtime';
import { ElTree } from 'element-plus';
import { NodeDropType } from 'element-plus/es/components/tree/src/tree.type';
import { debounce } from 'lodash-es';
import { Ref } from 'vue';

/**
 * 根据id查找树节点数据对象
 * @author lxm
 * @date 2023-09-28 03:45:35
 * @export
 * @param {string} key (数据的_uuid 或者 _id)
 * @param {ITreeController} c
 * @return {*}  {(ITreeNodeData | undefined)}
 */
export function findNodeData(
  key: string,
  c: ITreeController,
): ITreeNodeData | undefined {
  const find = c.state.items.find(item => item._id === key);
  if (find) {
    return find;
  }
  return c.state.items.find(item => item._uuid === key);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useElTreeUtil(
  treeRef: Ref<InstanceType<typeof ElTree> | null>,
  c: ITreeController,
) {
  const getTreeInstance = () => {
    const elTree = treeRef.value;
    if (!elTree) {
      throw new RuntimeError('找不到el-tree实例对象');
    }
    return elTree;
  };

  const _updateUI = () => {
    const elTree = treeRef.value;
    if (!elTree) {
      setTimeout(() => {
        _updateUI();
      }, 200);
      return;
    }
    // 设置节点展开
    Object.values(elTree.store.nodesMap).forEach(node => {
      const shouldExpanded = c.state.expandedKeys.includes(node.data._id);
      if (shouldExpanded !== node.expanded) {
        if (shouldExpanded) {
          node.expand();
        } else {
          node.collapse();
        }
      }
    });
    // 设置选中状态。
    if (c.state.singleSelect) {
      treeRef.value!.setCurrentKey(c.state.selectedData[0]?._id || undefined);
    } else {
      // el-tree，会把没选中的反选，且不触发check事件
      elTree.setCheckedKeys(c.state.selectedData.map(item => item._id));
    }
  };

  /**
   * 更新树的UI状态，如选中状态和展开状态。
   * 在树组件的loadData和调用updateKeyChildren之后去更新
   * 加了防抖，所以尽可能多的调用，确保状态 todo
   * @author lxm
   * @date 2023-09-28 03:36:44
   */
  const updateUI = debounce(_updateUI, 500) as typeof _updateUI;

  /**
   * 切换节点的展开
   * @author lxm
   * @date 2023-11-08 03:57:27
   * @param {string} id
   */
  const triggerNodeExpand = (id: string): boolean | undefined => {
    const elTree = getTreeInstance();
    const target = elTree.store.nodesMap[id];
    if (target) {
      if (target.expanded) {
        target.collapse();
        return false;
      }
      target.expand();
      return true;
    }
  };

  return { getTreeInstance, updateUI, triggerNodeExpand };
}

/**
 * 格式化dropType
 * @author lxm
 * @date 2023-12-14 02:13:10
 * @export
 * @param {NodeDropType} dropType
 * @return {*}  {('inner' | 'prev' | 'next')}
 */
export function formatNodeDropType(
  dropType: NodeDropType,
): 'inner' | 'prev' | 'next' {
  switch (dropType) {
    case 'inner':
      return 'inner';
    case 'before':
      return 'prev';
    case 'after':
      return 'next';
    default:
      throw new RuntimeError(`暂不支持dropType:${dropType}`);
  }
}
