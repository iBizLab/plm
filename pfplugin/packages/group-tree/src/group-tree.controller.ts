/* eslint-disable no-lonely-if */
/* eslint-disable no-else-return */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-param-reassign */
import {
  TreeController,
  ITreeState,
  ITreeNodeData,
  calcDeCodeNameById,
  Srfuf,
  MDCtrlRemoveParams,
  handleAllSettled,
  getChildNodeRSs,
  MDCtrlLoadParams,
} from '@ibiz-template/runtime';
import {
  IControl,
  IDETree,
  IDETreeDataSetNode,
  IDETreeNode,
} from '@ibiz/model-core';
import {
  IPortalMessage,
  RuntimeError,
  RuntimeModelError,
} from '@ibiz-template/core';
import { isNil } from 'ramda';
import { ref } from 'vue';
import { findNodeData } from './el-tree-util';
import { GroupTreeEvent } from './group-tree.event';

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
  E extends GroupTreeEvent = GroupTreeEvent,
> extends TreeController<IDETree, ITreeState, GroupTreeEvent> {
  /**
   * 状态对象
   *
   * @type {IGroupTreeStateEx}
   * @memberof GroupTreeController
   */
  declare state: IGroupTreeStateEx;

  /**
   * 底部工具栏
   *
   * @type {(IControl | undefined)}
   * @memberof GroupTreeController
   */
  public bottomToolbar: IControl | undefined = undefined;

  /**
   * 隐藏节点id
   *
   * @type {string}
   * @memberof GroupTreeController
   */
  public hiddenNodeId: string = '';

  /**
   * 绘制模式
   *
   * @type {('tree' | 'listTree')}
   * @memberof GroupTreeController
   */
  public renderMode: 'tree' | 'listTree' = 'tree';

  /**
   * 是否正在过滤
   *
   * @memberof GroupTreeController
   */
  public isFilter = ref(false);

  /**
   * 重新初始化
   *
   * @protected
   * @return {*}  {Promise<void>}
   * @memberof GroupTreeController
   */
  protected async onCreated(): Promise<void> {
    await super.onCreated();
    const controls = this.view.model.viewLayoutPanel?.controls || [];
    this.bottomToolbar = controls.find(c => c.name === 'toolbar');
    const { ctrlParams = {} } = this.model.controlParam as IData;
    if (ctrlParams.HIDDENNODEID) {
      this.hiddenNodeId = ctrlParams.HIDDENNODEID;
    }
    if (ctrlParams.RENDERMODE) {
      this.renderMode = ctrlParams.RENDERMODE;
    }
  }

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
    const readonly = !!(
      this.context.srfreadonly === true || this.context.srfreadonly === 'true'
    );
    if (!nodeKey || nodeKey === this.state.editingNodeKey || readonly) {
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

        this.emitDEDataChange('create', res.data);
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
    const dropNodeModel = this.getNodeModel(dropNode._nodeId)!;
    // * 移入的情况
    if (type === 'inner') {
      return !!this.findDropNodeRS(
        dropNode._nodeId!,
        draggingNodeModel.appDataEntityId!,
      );
    } else {
      // * 前后的情况，不同实体之间不能排序
      if (draggingNodeModel.appDataEntityId !== dropNodeModel.appDataEntityId) {
        return false;
      }
    }

    // 父相同的情况下,就是排序，看当前节点是否能排序
    if (draggingNode._parent?._id === dropNode._parent?._id) {
      const currentNodeModel = this.getNodeModel(dropNode._nodeId)!;
      return currentNodeModel?.allowOrder === true;
    }

    // 没有父就是根节点，根节点没有上层关系，无法换父
    if (!dropNode._parent) {
      return false;
    }

    // TODO 新增逻辑拖入目标节点父节点为根节点，允许拖拽
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

    const draggingNodeModel = this.getNodeModel(draggingNode._nodeId)!;
    const dropInNode = dropType === 'inner' ? dropNode : dropNode._parent!;
    const isChangedParent =
      dropType === 'inner' ||
      dropNode._parent?._id !== draggingNode._parent?._id;
    let orderNodeModel = this.getNodeModel(dropNode._nodeId)!;
    const isEntityChange =
      draggingNodeModel.appDataEntityId !== orderNodeModel.appDataEntityId;

    // TODO 新增 判断父节点是否是根节点
    let parentIsRoot: boolean = false;
    const dropInNodeModel = this.getNodeModel(dropInNode._nodeId)!;
    if (dropInNodeModel.rootNode) {
      parentIsRoot = true;
    }

    // TODO 重写 处理切换父节点
    if (isChangedParent || parentIsRoot) {
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
          orderNodeModel = this.getNodeModel(dropNodeRs.childDETreeNodeId)!;
        }
      }
      // 维护拖拽的节点和其子孙的展开，维护拖入节点的展开
      this.state.expandedKeys = this.calcExpandedKeys([dropInNode]);
      await this.updateDeNodeData([draggingNode]);
    }

    // 拖入节点或实体不同时刷新目标父节点
    if (dropType === 'inner' || isEntityChange) {
      if (isChangedParent) {
        await this.refreshNodeChildren(draggingNode, true);
      }
      await this.refreshNodeChildren(dropInNode, true);
    } else {
      // 移动排序
      const { moveAppDEActionId, appDataEntityId, allowOrder } =
        orderNodeModel as IDETreeDataSetNode;
      if (allowOrder) {
        if (!moveAppDEActionId) {
          throw new RuntimeModelError(
            this.model,
            ibiz.i18n.t('runtime.controller.common.md.noMoveDataCconfig'),
          );
        }
        const moveParams = {
          srftargetkey: dropNode.srfkey,
          srfmovetype: dropType === 'prev' ? 'MOVEBEFORE' : 'MOVEAFTER',
        };
        const app = ibiz.hub.getApp(this.context.srfappid);
        const deName = calcDeCodeNameById(appDataEntityId!);
        const tempContext = this.context.clone();
        tempContext[deName] = draggingNode.srfkey;
        const res = await app.deService.exec(
          appDataEntityId!,
          moveAppDEActionId,
          tempContext,
          moveParams,
        );
        if (res.ok) {
          this.emitDEDataChange('update', draggingNode._deData!);
          if (isChangedParent) {
            await this.refreshNodeChildren(draggingNode, true);
          }
          await this.refreshNodeChildren(dropInNode);
        }
      }
    }
    // TODO 刷新后清空选中 修复选中值闪烁
    this.state.selectedData = [];
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
    // msg.triggerKey与当前控制器的triggerKey一致时，则不处理
    if (msg.triggerKey === this.triggerKey) {
      return;
    }

    const data = msg.data as IData;
    // 新增数据刷新根数据
    if (msg.subtype === 'OBJECTCREATED') {
      const hasCurEntity = this.model.detreeNodes?.find(item => {
        if (item.appDataEntityId) {
          const codeName = calcDeCodeNameById(item.appDataEntityId);
          if (data.srfdecodename === codeName) {
            return true;
          }
        }
        return false;
      });
      if (hasCurEntity) {
        this.refresh();
      }
      return;
    }

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

  async afterLoad(args: MDCtrlLoadParams, items: IData[]): Promise<IData[]> {
    return super.afterLoad(args, items);
  }

  /**
   * 重写节点点击事件
   *
   * @param {ITreeNodeData} nodeData
   * @param {MouseEvent} event
   * @return {*}  {Promise<void>}
   * @memberof GroupTreeController
   */
  async onTreeNodeClick(
    nodeData: ITreeNodeData,
    event: MouseEvent,
  ): Promise<void> {
    // 节点有配置常用操作的上下文菜单时，触发界面行为，后续逻辑都不走
    const clickActionItem =
      this.contextMenuInfos[nodeData._nodeId]?.clickTBUIActionItem;
    if (clickActionItem) {
      return this.doUIAction(
        clickActionItem.uiactionId!,
        nodeData,
        event,
        clickActionItem.appId,
      );
    }

    // 导航的时候，没有导航视图的时候，节点后续点击逻辑都不走，也不选中
    if (this.state.navigational) {
      const nodeModel = this.getNodeModel(nodeData._nodeId);
      if (!nodeModel?.navAppViewId) {
        return;
      }
    }

    // 单选时，单击才会触发选中逻辑,禁止选择的时候不触发
    if (this.state.singleSelect && !nodeData._disableSelect) {
      this.setSelection([nodeData]);
    }

    // 激活事件
    if (this.state.mdctrlActiveMode === 1) {
      await this.setActive(nodeData);
    }
  }

  /**
   * 过滤节点
   *
   * @param {string} nodeTag
   * @memberof GroupTreeController
   */
  public async changeTreeState(nodeTag: string): Promise<void> {
    if (nodeTag && nodeTag === 'draft') {
      this.isFilter.value = true;
      this.evt.emit('onFilterNode', { nodeTag });
    } else {
      this.resetTreeState();
    }
  }

  /**
   *  重置过滤状态
   *
   * @author tony001
   * @date 2024-04-12 15:04:44
   * @param {boolean} state
   */
  public resetTreeState(): void {
    if (this.isFilter.value) {
      // 还原工具栏和搜索栏状态
      this.evt.emit('onResetSate', {});
      // 还原过滤状态
      this.isFilter.value = false;
    }
  }

  /**
   * 重写刷新
   *
   * @author tony001
   * @date 2024-04-12 15:04:53
   * @return {*}  {Promise<void>}
   */
  async refresh(): Promise<void> {
    super.refresh();
    this.resetTreeState();
  }
}
