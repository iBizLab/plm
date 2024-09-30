/* eslint-disable no-else-return */
import { RuntimeError, RuntimeModelError } from '@ibiz-template/core';
import {
  ExpBarControlController,
  INavViewMsg,
  ITreeController,
  ITreeEvent,
  ITreeExpBarController,
  ITreeExpBarEvent,
  ITreeExpBarState,
  ITreeNodeData,
} from '@ibiz-template/runtime';
import { notNilEmpty } from 'qx-util';
import { IDETree, IDETreeNode, ITreeExpBar } from '@ibiz/model-core';

/**
 * 树导航栏控制器
 *
 * @export
 * @class DefaultExpandTreeExpBarController
 * @extends {ExpBarControlController<ITreeExpBar, ITreeExpBarState, ITreeExpBarEvent>}
 * @implements {ITreeExpBarController}
 */
export class DefaultExpandTreeExpBarController
  extends ExpBarControlController<
    ITreeExpBar,
    ITreeExpBarState,
    ITreeExpBarEvent
  >
  implements ITreeExpBarController
{
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
  navStack: IData[] = [];

  get xDataController(): ITreeController {
    const controller = this.view.getController(this.model.xdataControlName!);
    if (!controller) {
      throw new RuntimeModelError(
        this.model,
        `无法获取多数据部件[${this.model.xdataControlName}]控制器`,
      );
    }
    return controller as ITreeController;
  }

  /**
   * 导航栏key
   *
   * @author zk
   * @date 2023-07-10 03:07:11
   * @memberof TreeExpBarController
   */
  navKeyName = '_id' as const;

  /**
   * 有导航视图的节点模型标识集合
   * @author lxm
   * @date 2023-08-10 06:33:14
   * @type {string[]}
   */
  navNodeModelIds: string[] = [];

  /**
   * 组件挂载
   *
   * @protected
   * @return {*}  {Promise<void>}
   * @memberof DefaultExpandTreeExpBarController
   */
  protected async onMounted(): Promise<void> {
    super.onMounted();
    if (this.xDataController) {
      this.xDataController.evt.on('onAfterRefreshParent', _event => {
        this.navDataByStack();
      });
    }
  }

  /**
   * 根据栈数据导航数据
   *
   * @memberof DefaultExpandTreeExpBarController
   */
  navDataByStack(): void {
    const { items } = this.xDataController.state;
    const preNav = this.navStack.find(nav =>
      items.find(item => nav[this.navKeyName] === item[this.navKeyName]),
    );
    if (preNav) {
      const navData: IData = items.find(
        item => preNav[this.navKeyName] === item[this.navKeyName],
      )!;
      this.xDataController.setActive(navData);
      this.xDataController.setSelection([navData]);
    } else {
      const data = items.find(node => {
        // 根节点不显示的时候排除根节点
        if (
          !this.xDataController.model.rootVisible &&
          this.xDataController.state.rootNodes.includes(node)
        ) {
          return false;
        }
        if (this.defaultExpand) {
          return node._id === this.defaultExpand;
        } else {
          // 没有导航视图的时候，返回第一条出现的数据
          if (this.state.noNeedNavView) {
            return true;
          }
          // 需要导航视图的时候，返回第一个配置了导航视图的节点数据
          return this.navNodeModelIds.includes(node._nodeId);
        }
      });
      if (data) {
        this.xDataController.setActive(data);
        this.xDataController.setSelection([data]);
      } else {
        this.navStack = [];
        this.xDataController.setSelection([]);
        this.state.srfnav = '';
        this._evt.emit('onNavViewChange', {
          navViewMsg: {
            key: '',
            isCache: this.isCache,
          },
        });
      }
    }
  }

  /**
   * 获取指定节点模型
   *
   * @param {string} nodeId
   * @return {*}  {(IDETreeNode | undefined)}
   * @memberof TreeExpBarController
   */
  getNodeModel(nodeId: string): IDETreeNode | undefined {
    const { detreeNodes } = this.XDataModel as IDETree;
    let nodeModel: IDETreeNode | undefined;
    if (detreeNodes) {
      detreeNodes.forEach(node => {
        if (node.id === nodeId) {
          nodeModel = node;
        }
      });
    }
    return nodeModel;
  }

  /**
   * 多数据激活
   *
   * @author zk
   * @date 2023-05-29 03:05:36
   * @memberof ExpBarControlController
   */
  xDataActive(event: ITreeEvent['onActive']['event']): void {
    const { nodeData } = event;
    // 树导航处理onActive使用树节点数据
    super.xDataActive({ ...event, data: [nodeData] });
  }

  /**
   *  获取导航视图
   *
   * @author zk
   * @date 2023-06-29 03:06:41
   * @param {IDETabViewPanel} tabViewPanel
   * @return {*}  {Promise<INavViewMsg>}
   * @memberof TabExpPanelController
   */
  public getNavViewMsg(
    node: ITreeNodeData,
    context: IContext,
    params: IParams,
  ): INavViewMsg {
    const nodeId = node._id;
    const deData = node._deData || node;
    const nodeModel = this.getNodeModel(node._nodeId);
    if (!nodeModel) {
      throw new RuntimeError(`找不到${node._nodeId}的节点模型`);
    }
    const result = this.prepareParams(nodeModel, deData, context, params);
    result.context.currentSrfNav = nodeId;
    this.state.srfnav = nodeId;
    return {
      key: nodeId,
      viewId: nodeModel.navAppViewId,
      isCache: this.isCache,
      ...result,
    };
  }

  protected navByFirstItem(): void {
    const data = this.xDataController.state.items.find(node => {
      // 根节点不显示的时候排除根节点
      if (
        !this.xDataController.model.rootVisible &&
        this.xDataController.state.rootNodes.includes(node)
      ) {
        return false;
      }
      if (this.defaultExpand) {
        return node._id === this.defaultExpand;
      } else {
        // 没有导航视图的时候，返回第一条出现的数据
        if (this.state.noNeedNavView) {
          return true;
        }
        // 需要导航视图的时候，返回第一个配置了导航视图的节点数据
        return this.navNodeModelIds.includes(node._nodeId);
      }
    });
    if (!data) {
      return;
    }
    // 默认选中并激活第一项
    this.xDataController.setActive(data);
    this.xDataController.setSelection([data]);
  }

  protected async onCreated(): Promise<void> {
    await super.onCreated();
    if (this.model.controlParam?.ctrlParams?.DEFAULT_EXPAND) {
      const str = this.model.controlParam!.ctrlParams!.DEFAULT_EXPAND;
      this.defaultExpand = this.stringFill(str, this.context, this.params);
    }
    // 初始化带导航的节点标识ids
    const { detreeNodes } = this.XDataModel as IDETree;
    detreeNodes?.forEach(node => {
      if (node.navAppViewId) {
        this.navNodeModelIds.push(node.id!);
      }
    });

    // 计算树的默认展开集合
    if (this.defaultExpand) {
      this.defaultExpandedKeys = this.calcExpandKeys(this.defaultExpand, false);
    }
    if (this.state.srfnav) {
      this.defaultExpandedKeys = this.calcExpandKeys(this.state.srfnav);
    }
  }

  calcExpandKeys(srfnav: string, isPop: boolean = true): string[] {
    const expandedKeys: string[] = [];
    srfnav.split(':').forEach((item, index) => {
      if (index === 0) {
        expandedKeys.push(item);
      } else {
        expandedKeys.push(`${expandedKeys[index - 1]}:${item}`);
      }
    });
    if (isPop) {
      expandedKeys.pop(); // 删除最后一个
    }
    return expandedKeys;
  }

  async onRouterChange(info: { srfnav: string; path: string }): Promise<void> {
    if (this.state.srfnav !== info.srfnav) {
      const expandKeys = this.calcExpandKeys(info.srfnav);
      await this.xDataController.expandNodeByKey(expandKeys);
    }
    await super.onRouterChange(info);
  }

  /**
   * 是否显示部件头部
   * @author lxm
   * @date 2023-08-02 07:54:18
   * @protected
   * @return {*}  {boolean}
   */
  protected calcControlHeaderVisible(): boolean {
    const hasToolbar = !!this.toolbarController;
    if (!hasToolbar && this.layoutPanel) {
      const controller = this.layoutPanel.panelItems.control_toolbar;
      if (controller) {
        controller.state.visible = false;
      }
    }
    return hasToolbar || !!(this.model.showTitleBar && this.model.title);
  }

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
  protected stringFill(
    str: string,
    context?: IContext,
    param?: IParams,
  ): string {
    const contextReg = /\$\{context.[a-zA-Z_$][a-zA-Z0-9_$]{1,}\}/g;
    const paramReg = /\$\{param.[a-zA-Z_$][a-zA-Z0-9_$]{1,}\}/g;
    if (notNilEmpty(str)) {
      if (notNilEmpty(context)) {
        const strArr = str.match(contextReg);
        strArr?.forEach(_key => {
          const key = _key.slice(10, _key.length - 1);
          str = str.replace(`\${context.${key}}`, context![key] || '');
        });
      }
      if (notNilEmpty(param)) {
        const strArr = str.match(paramReg);
        strArr?.forEach(_key => {
          const key = _key.slice(8, _key.length - 1);
          str = str.replace(`\${param.${key}}`, param![key] || '');
        });
      }
    }
    return str;
  }
}
