/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-param-reassign */
import {
  ITreeEvent,
  TreeController,
  ITreeState,
  ITreeNodeData,
  calcDeCodeNameById,
  Srfuf,
  MDCtrlRemoveParams,
  handleAllSettled,
  getChildNodeRSs,
} from '@ibiz-template/runtime';
import { IDETree, IDETreeDataSetNode, IDETreeNode } from '@ibiz/model-core';
import {
  IPortalMessage,
  RuntimeError,
  RuntimeModelError,
} from '@ibiz-template/core';
import { isNil } from 'ramda';
import { findNodeData } from './el-tree-util';

export type DropNodeRSEx = {
  minorEntityId: string;
  pickupDEFName: string;
  childDETreeNodeId: string;
  detreeNodeRSParams: Array<IData> | undefined;
};

interface IGroupTreeStateEx extends ITreeState {
  /**
   * 新建节点模型
   *
   * @type {Object}
   * @memberof IGroupTreeStateEx
   */
  newingNodeModel: IDETreeNode | undefined | null;

  /**
   * 新建节点文本
   *
   * @type {string | null}
   * @memberof IGroupTreeStateEx
   */
  newingNodeText: string | null;

  /**
   * 新建节点默认值
   *
   * @type {IParams | null}
   * @memberof IGroupTreeStateEx
   */
  newingNodeDefault: IParams | null;

  /**
   * 编辑节点Key值
   *
   * @type {string | null}
   * @memberof IGroupTreeStateEx
   */
  editingNodeKey: string | null;

  /**
   * 编辑节点文本
   *
   * @type {string | null}
   * @memberof IGroupTreeStateEx
   */
  editingNodeText: string | null;

  /**
   * 编辑节点默认值
   *
   * @type {IParams | null}
   * @memberof IGroupTreeStateEx
   */
  editingNodeDefault: IParams | null;
}

export class GroupTreeController<
  T extends IDETree = IDETree,
  S extends ITreeState = ITreeState,
  E extends ITreeEvent = ITreeEvent,
> extends TreeController {
  /**
   * 状态对象
   *
   * @type {IGroupTreeStateEx}
   * @memberof GroupTreeController
   */
  declare state: IGroupTreeStateEx;

  protected initState(): void {
    super.initState();
    // 新建相关
    this.state.newingNodeModel = null;
    this.state.newingNodeText = null;
    this.state.newingNodeDefault = null;
    // 节点名称编辑相关
    this.state.editingNodeKey = null;
    this.state.editingNodeText = null;
    this.state.editingNodeDefault = null;
  }

  /**
   * 临时取消监听
   *
   * @protected
   * @param {IData} msg
   * @memberof GroupTreeController
   */
  protected onDataChange(msg: IData): void {
    // todo
  }

  /**
   *  初始化节点拖入关系处理
   */
  protected initDropNodeRss(): void {
    this.model.detreeNodes?.forEach(node => {
      if (!node.allowDrop) {
        return;
      }
      const infos: Array<DropNodeRSEx> = [];
      const nodeRSs = getChildNodeRSs(this.model, {
        parentId: node.id,
        hasQuery: false,
      });
      nodeRSs.forEach((nodeRS: IData) => {
        if (nodeRS.parentDER1N?.pickupDEFName) {
          const childNode = this.getNodeModel(nodeRS.childDETreeNodeId!);
          if (childNode?.treeNodeType === 'DE' && childNode.appDataEntityId) {
            infos.push({
              minorEntityId: childNode.appDataEntityId,
              pickupDEFName: nodeRS.parentDER1N.pickupDEFName.toLowerCase(),
              childDETreeNodeId: nodeRS.childDETreeNodeId!,
              detreeNodeRSParams: nodeRS.detreeNodeRSParams,
            });
          }
        }
      });

      if (infos.length > 0) {
        this.dropNodeRss.set(node.id!, infos);
      }
    });
  }

  /**
   * 编辑指定节点的文本
   * @author ljx
   * @date 2023-12-27 05:46:02
   * @return {*}  {void}
   */
  public updateTreeNode({
    nodeKey,
    defaultValue,
  }: {
    nodeKey: string;
    defaultValue: IParams;
  }): void {
    if (!nodeKey || nodeKey === this.state.editingNodeKey) {
      return;
    }
    const nodeData = findNodeData(nodeKey, this)!;
    const model = this.getNodeModel(nodeData._nodeId);
    if (model?.allowEditText) {
      this.state.editingNodeKey = nodeData._id;
      this.state.editingNodeText = nodeData._text;
      this.state.editingNodeDefault = defaultValue;
      // 置空新建态
      this.state.newingNodeModel = null;
      this.state.newingNodeText = null;
      this.state.newingNodeDefault = null;
    }
  }

  /**
   * 删除指定节点
   * @author ljx
   * @date 2023-12-27 05:46:02
   * @return {*}  {void}
   */
  public removeTreeNode(nodeKey: string): void {
    if (!nodeKey || nodeKey === this.state.editingNodeKey) {
      return;
    }
    const nodeData = findNodeData(nodeKey, this)!;
    const arg = {
      context: this.context || {},
      params: this.params || {},
      data: [nodeData],
    };
    this.onRemoveTreeNode(arg);
  }

  /**
   * 新建树节点
   * @author ljx
   * @date 2023-12-27 05:46:02
   * @return {*}  {void}
   */
  public newTreeNode({
    nodeType,
    defaultValue = {},
  }: {
    nodeType: string;
    defaultValue: IParams;
  }): void {
    const nodeModel = this.getNodeModel(nodeType);
    this.state.newingNodeModel = nodeModel;
    this.state.newingNodeDefault = defaultValue;
    // 置空编辑态状态
    this.state.editingNodeKey = null;
    this.state.editingNodeText = null;
    this.state.editingNodeDefault = null;
  }

  /**
   * 创建实体节点数据
   * @author ljx
   * @date 2023-12-27 04:19:36
   * @protected
   * @param {ITreeNodeData[]} nodeDatas 节点数据集合
   * @return {*}  {Promise<void>}
   */
  async createDeNodeData(nodeDatas: IData[]): Promise<void> {
    const app = ibiz.hub.getApp(this.context.srfappid);
    await Promise.all(
      nodeDatas.map(async node => {
        const model = this.getNodeModel(node._nodeId)!;
        const _deData = node._deData!;
        const tempContext = this.context.clone();
        // 调用接口创建数据
        const res = await app.deService.exec(
          model.appDataEntityId!,
          'create',
          tempContext,
          _deData,
        );

        // 更新完之后更新state里的数据。
        if (res.data) {
          this.refresh();
        }
      }),
    );
  }

  /**
   * 创建树节点
   * @author ljx
   * @date 2023-12-27 04:32:52
   * @return {*}  {Promise<void>}
   */
  async onCreateTreeNode(): Promise<void> {
    const { textAppDEFieldId, id } = this.state.newingNodeModel as IParams;
    const _text = this.state.newingNodeText;
    const nodeData = { _deData: {} };
    Object.assign(nodeData, { _nodeId: id, _text });
    Object.assign(nodeData._deData, { [textAppDEFieldId]: _text });
    if (this.state.newingNodeDefault) {
      Object.assign(nodeData._deData, this.state.newingNodeDefault);
    }
    Object.assign(nodeData._deData, { [textAppDEFieldId]: _text });
    await this.createDeNodeData([nodeData]);
    this.state.newingNodeModel = null;
    this.state.newingNodeText = null;
    this.state.newingNodeDefault = null;
  }

  /**
   * 修改节点文本
   * @param nodeData 节点数据
   * @param _text 节点文本
   */
  async onModifyTreeNode(nodeData: IData, _text: string): Promise<void> {
    const model = this.getNodeModel(nodeData._nodeId) as IData;
    if (!model.allowEditText) {
      throw new RuntimeModelError(model, '树节点没有配置编辑模式：名称');
    }
    if (nodeData._nodeType !== 'DE') {
      throw new RuntimeError('不是实体树节点数据');
    }
    if (nodeData._text !== _text) {
      nodeData._text = _text;
      if (this.state.editingNodeDefault) {
        const keys = Object.keys(this.state.editingNodeDefault);
        if (keys && keys.length > 0) {
          keys.forEach((key: string) => {
            if (isNil(nodeData._deData[key]))
              nodeData._deData[key] = (
                this.state.editingNodeDefault as IParams
              )[key];
          });
        }
      }
      await this.updateDeNodeData([nodeData as ITreeNodeData]);
    }
    // 通知实体数据变更
    this.emitDEDataChange('update', nodeData._deData!);
    this.state.editingNodeKey = null;
    this.state.editingNodeText = null;
    this.state.editingNodeDefault = null;
  }

  /**
   * 删除树节点
   * @param args 参数
   * @returns
   */
  async onRemoveTreeNode(args?: MDCtrlRemoveParams): Promise<void> {
    const { context, params, data } = this.handlerAbilityParams(args);
    const model = this.getNodeModel(data[0]._nodeId);
    // 删除确认提示
    if (args?.silent !== true) {
      const del = await ibiz.confirm.error({
        title: '数据删除',
        desc: '确认删除数据？',
      });
      if (!del) {
        return;
      }
    }

    await this._evt.emit('onBeforeRemove', undefined);
    await this.startLoading();
    let needRefresh = false;
    try {
      const deName = calcDeCodeNameById(
        (model as IDETreeNode).appDataEntityId!,
      );
      // 新建未保存的数据直接走后续删除处理逻辑
      await handleAllSettled(
        data.map(async item => {
          // 新建未保存的数据直接走后续删除处理逻辑
          if (item.srfuf !== Srfuf.CREATE) {
            const tempContext = context.clone();
            tempContext[deName] = item.srfkey;
            // 删除后台的数据
            await await ibiz.hub
              .getApp((model as IDETreeNode).appId)
              .deService.exec(
                (model as IDETreeNode).appDataEntityId!,
                'remove',
                tempContext,
                data,
                params,
              );
            needRefresh = true;
          }

          this.afterRemove(item);
        }),
      );
      if (args?.silent !== true) {
        this.actionNotification('REMOVESUCCESS', {
          data,
          default: `数据[${data
            .map(item => item.srfmajortext)
            .join('、')}]删除成功!`,
        });
      }

      // 刷新数据，补全这一页缺少的数据
      if (needRefresh && !args?.notRefresh) {
        await this.refresh();
      }
    } catch (error) {
      await this._evt.emit('onRemoveError', undefined);
      this.actionNotification('REMOVEERROR', {
        error: error as Error,
        data,
      });
      throw error;
    } finally {
      await this.endLoading();
    }
    this.state.selectedData = [];
    await this._evt.emit('onRemoveSuccess', undefined);
  }

  /**
   * 计算是否允许拖入
   * @param draggingNode
   * @param dropNode
   * @param type
   * @returns
   */
  calcAllowDrop(
    draggingNode: ITreeNodeData,
    dropNode: ITreeNodeData,
    type: 'inner' | 'prev' | 'next',
  ): boolean {
    const draggingNodeModel = this.getNodeModel(draggingNode._nodeId)!;
    // * 移入的情况
    if (type === 'inner') {
      return !!this.findDropNodeRS(
        dropNode._nodeId!,
        draggingNodeModel.appDataEntityId!,
      );
    }
    // * 前后的情况

    // 父相同的情况下,就是排序，看当前节点是否能排序
    if (draggingNode._parent?._id === dropNode._parent?._id) {
      const currentNodeModel = this.getNodeModel(dropNode._nodeId)!;
      return currentNodeModel?.allowOrder === true;
    }

    // 没有父就是根节点，根节点没有上层关系，无法换父
    if (!dropNode._parent) {
      return false;
    }

    // 拖入目标节点父节点为根节点，允许拖拽
    if (dropNode._parent && dropNode._parent._id) {
      const parentNodeModel = this.getNodeModel(dropNode._parent._nodeId)!;
      if (parentNodeModel.rootNode) {
        return true;
      }
    }

    // 父不一样的时候需要判断能否移入到对方的父节点内
    return !!this.findDropNodeRS(
      dropNode._parent!._nodeId!,
      draggingNodeModel.appDataEntityId!,
    );
  }

  /**
   * 处理节点拖入事件
   * @param draggingNode
   * @param dropNode
   * @param dropType
   */
  async onNodeDrop(
    draggingNode: ITreeNodeData,
    dropNode: ITreeNodeData,
    dropType: 'inner' | 'prev' | 'next',
  ): Promise<void> {
    if (
      dropType === 'inner' &&
      !dropNode._leaf &&
      dropNode._children === undefined
    ) {
      await this.expandNodeByKey([dropNode._id]);
    }
    // 是否刷新父节点
    const refreshParent = !(dropType === 'inner');
    /** 修改的树节点数据 */
    const modifiedNodeDatas: ITreeNodeData[] = [];
    const draggingNodeModel = this.getNodeModel(draggingNode._nodeId)!;
    const dropInNode = dropType === 'inner' ? dropNode : dropNode._parent!;
    // 父节点是否是根节点
    let parentIsRoot: boolean = false;
    const dropInNodeModel = this.getNodeModel(dropInNode._nodeId)!;
    if (dropInNodeModel.rootNode) {
      parentIsRoot = true;
    }
    // 是否变更父节点
    const isChangedParent = dropInNode?._id !== draggingNode._parent?._id;
    let orderNodeModel = this.getNodeModel(dropNode._nodeId)!;

    // * 处理切换父节点
    if (
      dropType === 'inner' ||
      dropNode._parent?._id !== draggingNode._parent?._id ||
      parentIsRoot
    ) {
      const draggingNodeRes: IData[] = [];
      // eslint-disable-next-line no-restricted-syntax
      for (const dropNodeRs of this.dropNodeRss.values()) {
        draggingNodeRes.push(
          ...dropNodeRs.filter(singleNodeRs => {
            return (
              // 修复子关系情况，根上也存在当前实体数据
              singleNodeRs.minorEntityId === draggingNodeModel.appDataEntityId
            );
          }),
        );
      }
      if (parentIsRoot && isChangedParent) {
        if (draggingNodeRes) {
          draggingNodeRes.forEach((draggingNodeRe: IData) => {
            draggingNode._deData![draggingNodeRe.pickupDEFName] = null;
          });
          modifiedNodeDatas.push(draggingNode);
          orderNodeModel = this.getNodeModel(draggingNodeModel.id!)!;
        }
      } else {
        const dropNodeRs = this.findDropNodeRS(
          dropInNode._nodeId,
          draggingNodeModel.appDataEntityId!,
        ) as DropNodeRSEx;
        if (dropNodeRs) {
          // 重置关系字段数据
          if (draggingNodeRes) {
            draggingNodeRes.forEach((draggingNodeRe: IData) => {
              draggingNode._deData![draggingNodeRe.pickupDEFName] = null;
            });
          }
          // 修改关系属性的值为父节点的主键和树节点id
          draggingNode._deData![dropNodeRs.pickupDEFName] = dropInNode._value;
          if (dropNodeRs.detreeNodeRSParams) {
            dropNodeRs.detreeNodeRSParams.forEach(param => {
              if (
                param.name &&
                param.value &&
                draggingNode._deData?.hasOwnProperty(
                  param.name.toLowerCase(),
                ) &&
                dropInNode._deData?.hasOwnProperty(param.value.toLowerCase())
              ) {
                draggingNode._deData![param.name!.toLowerCase()] =
                  dropInNode._deData![param.value!.toLowerCase()];
              }
            });
          }
          modifiedNodeDatas.push(draggingNode);
          orderNodeModel = this.getNodeModel(dropNodeRs.childDETreeNodeId)!;
        }
      }
    }

    // *修改节点数据
    // 所有情况都先从原来的父的子集合里删除自己
    const originArr = draggingNode._parent!._children!;
    originArr.splice(originArr.indexOf(draggingNode), 1);

    if (dropType === 'inner') {
      // 移入时放到最后
      if (!dropNode._children) {
        dropNode._children = [];
        dropNode._leaf = true;
        this.state.expandedKeys.push(dropNode._id);
      }

      dropNode._children.push(draggingNode);
    } else {
      // 非插入时，放入指定节点前后
      let insertIndex = dropInNode._children!.indexOf(dropNode);
      if (dropType === 'next') {
        insertIndex += 1;
      }
      dropInNode._children!.splice(insertIndex, 0, draggingNode);
    }

    //* 变更父节点后的，拖动节点调整
    if (dropType === 'inner' || isChangedParent) {
      // 更改父节点
      draggingNode._parent = dropInNode;
      // 修改指向的节点模型
      draggingNode._nodeId = orderNodeModel.id!;
      // 维护拖拽的节点和其子孙的展开，维护拖入节点的展开
      this.state.expandedKeys = this.calcExpandedKeys([dropInNode]);
    }

    // *处理排序
    const { sortAppDEFieldId, sortDir, allowOrder } =
      orderNodeModel as IDETreeDataSetNode;
    if (allowOrder === true) {
      // 有排序属性才处理排序
      if (!sortAppDEFieldId) {
        throw new RuntimeModelError(orderNodeModel, '缺少配置排序属性');
      }
      const sortField = sortAppDEFieldId.toLowerCase();
      const isAsc = sortDir === 'ASC';

      const changedArr = [...dropInNode._children!].filter(
        (treeNode: ITreeNodeData) => {
          return treeNode._nodeType === 'DE';
        },
      );

      // 降序把数组反转,保证两个数组都是从小到大排
      if (!isAsc) {
        changedArr.reverse();
      }

      /**
       * 获取下一个100的倍数
       * @author lxm
       * @date 2023-09-11 10:03:46
       * @param {number} num
       * @return {*}  {number}
       */
      const getNextSort = (num: number): number => {
        return num + (100 - (num % 100));
      };

      const getSort = (deData: IData): number => {
        return (deData[sortField] as number) || 0;
      };

      let lastSort: number;
      changedArr.forEach((item, index) => {
        const deData = item._deData!;
        if (lastSort === undefined) {
          // 第一次出现要调整顺序的时候一定是从拖拽节点开始
          if (item === draggingNode) {
            // 如果时第一个，则排序值为100
            if (index === 0) {
              lastSort = 100;
            } else {
              // 最后一个时，把前一个的排序值加100
              lastSort = getNextSort(getSort(changedArr[index - 1]._deData!));
            }
            deData[sortField] = lastSort;

            // 修改父的时候可能已经加入进去了
            if (modifiedNodeDatas.indexOf(item) === -1) {
              modifiedNodeDatas.push(item);
            }
          }
        } else {
          if (lastSort >= getSort(deData)) {
            deData[sortField] = getNextSort(lastSort);
            modifiedNodeDatas.push(item);
          }
          // 更新上一个排序值
          lastSort = getSort(deData);
        }
      });
    }

    await this.updateDeNodeData(modifiedNodeDatas);

    // *通知界面修改移入的父节点的子节点数据
    this._evt.emit('onAfterNodeDrop', { isChangedParent });

    // 刷新节点
    this.refreshNodeChildren(dropNode, refreshParent);
    // 刷新后清空选中 修复选中值闪烁
    this.setSelection([]);
  }

  /**
   * 检测实体数据变更
   *
   * @author tony001
   * @date 2024-03-29 11:03:30
   * @protected
   * @param {IPortalMessage} msg
   * @return {*}  {void}
   */
  protected onDEDataChange(msg: IPortalMessage): void {
    // msg.triggerKey 不为空，且与当前控制器的triggerKey一致时，则不处理
    if (!isNil(msg.triggerKey) && msg.triggerKey === this.triggerKey) {
      return;
    }

    // 新增数据不刷新
    if (msg.subtype === 'OBJECTCREATED') {
      return;
    }

    const data = msg.data as IData;
    const findNode = this.state.items.find(
      item =>
        item._nodeType === 'DE' &&
        item._deData &&
        item._deData.srfdecodename === data.srfdecodename &&
        item._deData.srfkey === data.srfkey,
    );

    if (!findNode) {
      return;
    }

    this.doNextActive(() => this.refreshNodeChildren(findNode, true), {
      key: `refresh${findNode._id}`,
    });
  }
}
