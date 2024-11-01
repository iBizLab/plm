/* eslint-disable no-param-reassign */
import {
  ControlVO,
  MDCtrlController,
  MDCtrlLoadParams,
} from '@ibiz-template/runtime';
import { IMobMdCtrlTreeState, INodeData } from './mob-md-ctrl-tree.state';

/**
 * 多数据列表树（移动端）
 *
 * @export
 * @class MobMDCtrlTreeController
 * @extends {MDCtrlController}
 */
export class MobMDCtrlTreeController extends MDCtrlController {
  declare state: IMobMdCtrlTreeState;

  /**
   * 值属性名称
   *
   * @private
   * @type {(string | undefined)}
   * @memberof MobMDCtrlTreeController
   */
  private valueField: string | undefined;

  /**
   * 父属性名称
   *
   * @private
   * @type {(string | undefined)}
   * @memberof MobMDCtrlTreeController
   */
  private parentField: string | undefined;

  /**
   * 初始化state的属性
   *
   * @protected
   * @memberof MobMDCtrlTreeController
   */
  protected initState(): void {
    super.initState();
    this.state.rootNodes = [];
  }

  /**
   * 生命周期-创建完成
   *
   * @protected
   * @return {*}  {Promise<void>}
   * @memberof MobMDCtrlTreeController
   */
  protected async onCreated(): Promise<void> {
    await super.onCreated();
    const { controlParam } = this.model;
    this.valueField = controlParam?.ctrlParams?.VALUEFIELD?.toLowerCase();
    this.parentField = controlParam?.ctrlParams?.PARENTFIELD?.toLowerCase();
  }

  /**
   * 部件加载数据行为 重写
   * - 默认合并 srfshowmode 参数
   * @param {MDCtrlLoadParams} [args={}]
   * @return {*}  {Promise<IData[]>}
   * @memberof MobMDCtrlTreeController
   */
  async load(args: MDCtrlLoadParams = {}): Promise<IData[]> {
    if (this.state.isSimple) {
      return [];
    }
    const silent = args.silent === true;
    if (!silent) {
      await this.startLoading();
    }
    try {
      // *初始加载需要重置分页
      const isInitialLoad = args.isInitialLoad === true;
      const isLoadMore = args.isLoadMore === true;
      if (isInitialLoad) {
        this.state.curPage = 1;
      } else if (isLoadMore) {
        this.state.curPage += 1;
      }

      // *查询参数处理
      const { context } = this.handlerAbilityParams(args);
      const params = await this.getFetchParams(args?.viewParam);
      Object.assign(params, {
        srfshowmode: 'tree',
      });
      const res = await this.service.fetch(context, params);
      // 更新分页数据总条数
      if (typeof res.total === 'number') {
        this.state.total = res.total;
      }
      if (typeof res.totalx === 'number') {
        this.state.totalx = res.totalx;
      }
      if (typeof res.totalPages === 'number') {
        this.state.totalPages = res.totalPages;
      }

      if (isLoadMore) {
        this.state.items.push(...res.data);
      } else {
        this.state.items = res.data;
      }

      await this.afterLoad(args, res.data);

      this.state.isLoaded = true;
      await this._evt.emit('onLoadSuccess', {
        isInitialLoad,
      });
    } catch (error) {
      await this._evt.emit('onLoadError', undefined);
      this.actionNotification('FETCHERROR', {
        error: error as Error,
      });
      throw error;
    } finally {
      if (!silent) {
        await this.endLoading();
      }
    }

    this.state.items.forEach((item, index) => {
      item.srfserialnum = index + 1;
    });

    this.actionNotification('FETCHSUCCESS');
    return this.state.items;
  }

  /**
   * 计算节点数据
   *
   * @memberof MobMDCtrlTreeController
   */
  calcNodes(): void {
    if (this.valueField && this.parentField) {
      const keys: string[] = this.state.items
        .map(node => node[this.valueField!])
        .filter(key => key !== undefined);
      const rootNodes: INodeData[] = this.state.items.filter(
        item => !keys.includes(item[this.parentField!]),
      );
      const setNodeChildren = (nodes: INodeData[]) => {
        nodes.forEach(node => {
          const children = this.state.items.filter(
            item =>
              node[this.valueField!] &&
              item[this.parentField!] === node[this.valueField!],
          );
          if (children.length > 0) {
            setNodeChildren(children);
            node._leaf = false;
          }
          node._children = children;
        });
      };
      setNodeChildren(rootNodes);
      this.state.rootNodes = rootNodes;
    } else {
      this.state.rootNodes = this.state.items;
    }
  }

  /**
   * 部件加载后处理
   *
   * @param {MDCtrlLoadParams} args
   * @param {ControlVO[]} items
   * @return {*}  {Promise<IData[]>}
   * @memberof MobMDCtrlTreeController
   */
  async afterLoad(
    args: MDCtrlLoadParams,
    items: ControlVO[],
  ): Promise<IData[]> {
    await super.afterLoad(args, items);
    this.calcNodes();
    console.log(this.state.rootNodes);
    return items;
  }
}
