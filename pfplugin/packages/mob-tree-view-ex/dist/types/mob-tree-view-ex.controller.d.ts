import { ITreeNodeData, MDCtrlLoadParams, TreeController } from '@ibiz-template/runtime';
export interface IMobTreeViewExNodeData extends ITreeNodeData {
    /**
     * 节点展开
     * @type {boolean}
     */
    _defaultExpand: boolean;
}
/**
 * 移动端人员选择树控制器
 *
 * @export
 * @class MobTreeViewExController
 * @implements {IControlProvider}
 */
export declare class MobTreeViewExController extends TreeController {
    /**
     * 回显映射
     */
    echoMap: IData;
    protected onMounted(): Promise<void>;
    /**
     * 处理回显选中
     * @description 第一次load加载成功后执行,后续节点加载不会执行
     * @memberof ControlController
     */
    handleDefaultSelect(): void;
    /**
     * 部件参数解析
     * @protected
     * @memberof ControlController
     */
    protected handleControlParams(): void;
    /**
     * 树部件加载，从根节点开始重新加载
     */
    load(args?: MDCtrlLoadParams): Promise<ITreeNodeData[]>;
}
