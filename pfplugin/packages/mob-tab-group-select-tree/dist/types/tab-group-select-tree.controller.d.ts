import { ITreeNodeData, TreeController } from '@ibiz-template/runtime';
export declare class TabGroupSelectTreeController extends TreeController {
    /**
     * 获取分组节点的theme_model数据
     *
     * @param {ITreeNodeData} target
     * @return {*}  {(Promise<IData | undefined>)}
     * @memberof TabGroupSelectTreeController
     */
    getNodeThemeModel(target: ITreeNodeData): Promise<IData | undefined>;
    /**
     * 节点点击
     *
     * @param {ITreeNodeData} nodeData
     * @return {*}  {Promise<void>}
     * @memberof TabGroupSelectTreeController
     */
    onNodeClick(nodeData: IData): Promise<void>;
    /**
     * 判断当前节点是否为根节点
     *
     * @memberof TabGroupSelectTreeController
     */
    isRoot(id: string): boolean;
    /**
     * 设置激活 -- 重写方法，避免导航栏调用该方法
     *
     * @param {ITreeNodeData} _item
     * @return {*}  {Promise<void>}
     * @memberof TabGroupSelectTreeController
    //  */
    setActive(_item: ITreeNodeData): Promise<void>;
    /**
     *  设置选择--重写方法，避免导航栏调用该方法
     *
     * @param {{ _id: string }[]} _selection
     * @memberof TabGroupSelectTreeController
     */
    setSelection(_selection: {
        _id: string;
    }[]): void;
}
