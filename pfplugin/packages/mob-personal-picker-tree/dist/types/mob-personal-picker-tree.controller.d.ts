import { IDETree } from '@ibiz/model-core';
import { ITreeEvent, ITreeNodeData, ITreeState, MDCtrlLoadParams, TreeController } from '@ibiz-template/runtime';
export interface IMobPersonalPickerTreeNodeData extends ITreeNodeData {
    /**
     * 节点展开
     * @type {boolean}
     */
    _defaultExpand: boolean;
    /**
     * 树节点层级
     *
     * @type {number}
     */
    _level: number;
    /**
     * 父节点数据对象
     *
     * @type {IMobPersonalPickerTreeNodeData}
     * @memberof IMobPersonalPickerTreeNodeData
     */
    _parent?: IMobPersonalPickerTreeNodeData;
}
export interface IMobPersonalPickerTreeState extends ITreeState {
    /**
     * 用于切换的数据
     * @type {Array<IMobPersonalPickerTreeNodeData[]>}
     */
    tabNodes: Array<IMobPersonalPickerTreeNodeData[]>;
}
/**
 * 移动端人员选择树控制器
 *
 * @export
 * @class MobPersonalPickerTreeController
 * @implements {IControlProvider}
 */
export declare class MobPersonalPickerTreeController<T extends IDETree = IDETree, S extends IMobPersonalPickerTreeState = IMobPersonalPickerTreeState, E extends ITreeEvent = ITreeEvent> extends TreeController<T, S, E> {
    selectedData: string;
    get simpleList(): any;
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
    protected initState(): void;
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
     * 初始化绘制数据
     */
    initNodeItems(): void;
    /**
     * loadNodes加载完子数据之后的处理
     * @author lxm
     * @date 2023-12-22 02:37:50
     * @param {IMobPersonalPickerTreeNodeData[]} nodes 加载回来的子数据
     * @return {*}  {Promise<void>}
     */
    afterLoadNodes(nodes: IMobPersonalPickerTreeNodeData[]): Promise<void>;
    /**
     * 设置选中项
     *
     * @param {{ _id: string }[]} selection
     * @memberof MobPersonalPickerTreeController
     */
    setSelection(selection: {
        _id: string;
    }[]): void;
    /**
     * 获取操作用户列表
     *
     * @return {*}  {Promise<void>}
     * @memberof AttentionController
     */
    getOperatorUserList(): Promise<void>;
}
