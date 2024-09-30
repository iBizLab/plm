import { ITreeController, ITreeNodeData } from '@ibiz-template/runtime';
import { ElTree } from 'element-plus';
import { NodeDropType } from 'element-plus/es/components/tree/src/tree.type';
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
export declare function findNodeData(key: string, c: ITreeController): ITreeNodeData | undefined;
export declare function useElTreeUtil(treeRef: Ref<InstanceType<typeof ElTree> | null>, c: ITreeController): {
    getTreeInstance: () => InstanceType<typeof ElTree> | null;
    updateUI: () => void;
    triggerNodeExpand: (id: string) => boolean | undefined;
};
/**
 * 格式化dropType
 * @author lxm
 * @date 2023-12-14 02:13:10
 * @export
 * @param {NodeDropType} dropType
 * @return {*}  {('inner' | 'prev' | 'next')}
 */
export declare function formatNodeDropType(dropType: NodeDropType): 'inner' | 'prev' | 'next';
