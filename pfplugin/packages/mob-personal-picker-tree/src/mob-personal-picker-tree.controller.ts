/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { isElementSame, recursiveIterate } from '@ibiz-template/core';
import { IDETree } from '@ibiz/model-core';
import {
  CodeListItem,
  ITreeEvent,
  ITreeNodeData,
  ITreeState,
  MDCtrlLoadParams,
  TreeController,
} from '@ibiz-template/runtime';

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
export class MobPersonalPickerTreeController<
  T extends IDETree = IDETree,
  S extends IMobPersonalPickerTreeState = IMobPersonalPickerTreeState,
  E extends ITreeEvent = ITreeEvent,
> extends TreeController<T, S, E> {
  public selectedData: string = '';

  get simpleList(): any {
    if (this.view.modal.mode === 'EMBED' && this.view.parentView) {
      const simplelist = this.view.parentView.getController('simplelist');
      if (simplelist) {
        return simplelist;
      }
    }
    return null;
  }

  protected async onCreated(): Promise<void> {
    super.onCreated();
    const { selectedData, selecteddata } = this.params;

    this.selectedData =
      selectedData ||
      selecteddata ||
      this.view.params.selectedData ||
      this.view.params.selecteddata;

    delete this.params.selectedData;
    delete this.params.selecteddata;
    delete this.view.params.selectedData;
    delete this.view.params.selecteddata;
  }

  /**
   * 云系统操作者Map
   *
   * @memberof AttentionController
   */
  public operatorMap = new Map();

  /**
   * 回显映射
   */
  public echoMap: IData = {
    valueField: 'user_id',
    textField: 'name',
  };

  /**
   * 文件上传路径及下载路径
   */
  public urls: {
    uploadUrl: string;
    downloadUrl: string;
  } = {
    uploadUrl: '',
    downloadUrl: '',
  };

  protected initState(): void {
    super.initState();
    // 根节点初始化
    this.state.tabNodes = [];
  }

  protected async onMounted(): Promise<void> {
    await this.getOperatorUserList();
    await super.onMounted();
    this.urls = ibiz.util.file.calcFileUpDownUrl(this.context, this.params);
  }

  /**
   * 处理回显选中
   * @description 第一次load加载成功后执行,后续节点加载不会执行
   * @memberof ControlController
   */
  handleDefaultSelect(): void {
    const selection = this.selectedData ? JSON.parse(this.selectedData) : [];

    if (selection && selection.length > 0) {
      this.state.selectedData.push(...selection);
      this._evt.emit('onSelectionChange', {
        data: this.state.selectedData,
      });
    }
  }

  /**
   * 部件参数解析
   * @protected
   * @memberof ControlController
   */
  protected handleControlParams(): void {
    super.handleControlParams();
    if (this.controlParams.echomap) {
      this.echoMap = JSON.parse(this.controlParams.echomap);
    }
  }

  /**
   * 树部件加载，从根节点开始重新加载
   */
  async load(args: MDCtrlLoadParams = {}): Promise<ITreeNodeData[]> {
    // 适配查询loading效果
    ibiz.loading.showRedirect();
    const nodes = await super.load(args);
    ibiz.loading.hideRedirect();
    return nodes;
  }

  /**
   * 树节点点击事件
   *
   * @param {ITreeNodeData} nodeData
   * @returns {*}  {Promise<void>}
   * @memberof TreeController
   */
  async onTreeNodeClick(
    nodeData: ITreeNodeData,
    event: MouseEvent,
  ): Promise<void> {
    // 设置导航数据
    this.setNavData(nodeData);
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
    if (!nodeData._disableSelect) {
      // 选中相关处理
      const { selectedData } = this.state;
      // 选中里没有则添加，有则删除
      const filterArr = selectedData.filter(item => item._id !== nodeData._id);
      if (filterArr.length === selectedData.length) {
        this.setSelection(
          this.state.singleSelect
            ? [nodeData]
            : selectedData.concat([nodeData]),
        );
      } else {
        // 先删除
        // 删除时，删除simplelist里面的相同项
        if (this.simpleList) {
          this.simpleList.handleRemove(nodeData._deData);
        }
        this.setSelection(filterArr);
      }
    }

    // 激活事件
    if (this.state.mdctrlActiveMode === 1) {
      await this.setActive(nodeData);
    }
  }

  /**
   * 初始化绘制数据
   */
  initNodeItems(): void {
    this.state.items = [];
    this.state.tabNodes = [];

    const rootChildren = this.state.rootNodes[0]._children || [];
    this.state.items.push(this.state.rootNodes[0]);
    rootChildren?.forEach((tabNode: ITreeNodeData, index: number) => {
      this.state.items.push(tabNode);
      this.state.tabNodes[index] = [];
      if (tabNode._children) {
        recursiveIterate(
          { _children: tabNode._children },
          (node: IMobPersonalPickerTreeNodeData) => {
            const parentLevel =
              node._parent && node._parent._level !== undefined
                ? node._parent._level + 1
                : 0;
            // 计算层级
            node._level = parentLevel;
            this.state.items.push(node);
            this.state.tabNodes[index].push(node);
          },
          { childrenFields: ['_children'] },
        );
      }
    });
  }

  /**
   * loadNodes加载完子数据之后的处理
   * @author lxm
   * @date 2023-12-22 02:37:50
   * @param {IMobPersonalPickerTreeNodeData[]} nodes 加载回来的子数据
   * @return {*}  {Promise<void>}
   */
  async afterLoadNodes(nodes: IMobPersonalPickerTreeNodeData[]): Promise<void> {
    this.initNodeItems();
    // 重新计算展开节点标识
    if (nodes) {
      this.state.expandedKeys = this.calcExpandedKeys(nodes);
    }
  }

  /**
   * 设置选中项
   *
   * @param {{ _id: string }[]} selection
   * @memberof MobPersonalPickerTreeController
   */
  setSelection(selection: { _id: string }[]): void {
    const tempSelected: ITreeNodeData[] = [];
    selection.forEach((item: IData) => {
      const node = this.state.items.find((_item: IData) => {
        return _item._id === item._id;
      });
      if (node) {
        tempSelected.push(node);
      } else {
        tempSelected.push(item as ITreeNodeData);
      }
    });

    const { selectedData } = this.state;
    // 检查新的选中数据和旧的是否一致，不一致才变更。
    if (!isElementSame(selectedData, tempSelected)) {
      this.state.selectedData = tempSelected;
      this._evt.emit('onSelectionChange', {
        data: tempSelected,
      });
    }
    // 根据数据计算工具栏权限和状态
    const data = selection?.[0];
    this.batchToolbarController?.calcButtonState(
      data,
      this.model.appDataEntityId,
    );
    this.quickToolbarController?.calcButtonState(
      data,
      this.model.appDataEntityId,
    );
  }

  /**
   * 获取操作用户列表
   *
   * @return {*}  {Promise<void>}
   * @memberof AttentionController
   */
  async getOperatorUserList(): Promise<void> {
    const app = await ibiz.hub.getApp(this.context.srfappid);
    let dataItems: readonly CodeListItem[] = [];
    dataItems = await app.codeList.get(
      'SysOperator',
      this.context,
      this.params,
    );
    // 构建一个map,避免后续匹配数据时循环花时间
    this.operatorMap = new Map(
      dataItems.map((item: CodeListItem) => [item.value, item]),
    );
  }
}
