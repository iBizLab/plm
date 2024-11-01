import { ITreeNodeData, MDCtrlLoadParams, TreeController } from '@ibiz-template/runtime';
export interface IMobPersonalPickerTreeNodeData extends ITreeNodeData {
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
 * @class MobPersonalPickerTreeController
 * @implements {IControlProvider}
 */
export declare class MobPersonalPickerTreeController extends TreeController {
    selectedData: string;
    protected onCreated(): Promise<void>;
    /**
     * 云系统操作者Map
     *
     * @memberof AttentionController
     */
    operatorMap: Map<any, any>;
    /**
     * 回显映射
     */
    echoMap: IData;
    /**
     * 文件上传路径及下载路径
     */
    urls: {
        uploadUrl: string;
        downloadUrl: string;
    };
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
    /**
     * 树节点点击事件
     *
     * @param {ITreeNodeData} nodeData
     * @returns {*}  {Promise<void>}
     * @memberof TreeController
     */
    onTreeNodeClick(nodeData: ITreeNodeData, event: MouseEvent): Promise<void>;
    /**
     * 获取操作用户列表
     *
     * @return {*}  {Promise<void>}
     * @memberof AttentionController
     */
    getOperatorUserList(): Promise<void>;
}
