import { ExpBarControlController, INavViewMsg, ITreeController, ITreeEvent, ITreeExpBarController, ITreeExpBarEvent, ITreeExpBarState, ITreeNodeData } from '@ibiz-template/runtime';
import { IDETreeNode, ITreeExpBar } from '@ibiz/model-core';
/**
 * 树导航栏控制器
 *
 * @export
 * @class DefaultExpandTreeExpBarController
 * @extends {ExpBarControlController<ITreeExpBar, ITreeExpBarState, ITreeExpBarEvent>}
 * @implements {ITreeExpBarController}
 */
export declare class DefaultExpandTreeExpBarController extends ExpBarControlController<ITreeExpBar, ITreeExpBarState, ITreeExpBarEvent> implements ITreeExpBarController {
    defaultExpandedKeys?: string[];
    /**
     * 默认展开
     * 解析控件动态参数DEFAULT_EXPAND后的字符串
     * @type {string}
     * @memberof DefaultExpandTreeExpBarController
     */
    defaultExpand?: string;
    /**
     * 导航栈
     * - 重写防止主项目核心包没有更新导致报错
     * @type {IData[]}
     * @memberof DefaultExpandTreeExpBarController
     */
    navStack: IData[];
    get xDataController(): ITreeController;
    /**
     * 导航栏key
     *
     * @author zk
     * @date 2023-07-10 03:07:11
     * @memberof TreeExpBarController
     */
    navKeyName: "_id";
    /**
     * 有导航视图的节点模型标识集合
     * @author lxm
     * @date 2023-08-10 06:33:14
     * @type {string[]}
     */
    navNodeModelIds: string[];
    /**
     * 组件挂载
     *
     * @protected
     * @return {*}  {Promise<void>}
     * @memberof DefaultExpandTreeExpBarController
     */
    protected onMounted(): Promise<void>;
    /**
     * 根据栈数据导航数据
     *
     * @memberof DefaultExpandTreeExpBarController
     */
    navDataByStack(): void;
    /**
     * 获取指定节点模型
     *
     * @param {string} nodeId
     * @return {*}  {(IDETreeNode | undefined)}
     * @memberof TreeExpBarController
     */
    getNodeModel(nodeId: string): IDETreeNode | undefined;
    /**
     * 多数据激活
     *
     * @author zk
     * @date 2023-05-29 03:05:36
     * @memberof ExpBarControlController
     */
    xDataActive(event: ITreeEvent['onActive']['event']): void;
    /**
     *  获取导航视图
     *
     * @author zk
     * @date 2023-06-29 03:06:41
     * @param {IDETabViewPanel} tabViewPanel
     * @return {*}  {Promise<INavViewMsg>}
     * @memberof TabExpPanelController
     */
    getNavViewMsg(node: ITreeNodeData, context: IContext, params: IParams): INavViewMsg;
    protected navByFirstItem(): void;
    protected onCreated(): Promise<void>;
    calcExpandKeys(srfnav: string, isPop?: boolean): string[];
    onRouterChange(info: {
        srfnav: string;
        path: string;
    }): Promise<void>;
    /**
     * 是否显示部件头部
     * @author lxm
     * @date 2023-08-02 07:54:18
     * @protected
     * @return {*}  {boolean}
     */
    protected calcControlHeaderVisible(): boolean;
    /**
     * 填充字符串
     *
     * @protected
     * @param {string} str
     * @param {IContext} [context]
     * @param {IParams} [param]
     * @return {*}  {string}
     * @memberof DefaultExpandTreeExpBarController
     */
    protected stringFill(str: string, context?: IContext, param?: IParams): string;
}
