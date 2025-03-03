import { IDETree, IDETreeNode } from '@ibiz/model-core';
import {
  ITreeController,
  ITreeEvent,
  ITreeNodeData,
  ITreeState,
  TreeController,
} from '@ibiz-template/runtime';
import { TrackTreeGridService } from './track-tree-grid.service';

export type DropNodeRS = {
  minorEntityId: string;
  pickupDEFName: string;
  childDETreeNodeId: string;
};

export interface ITrackTreeGridDETreeNode extends IDETreeNode {
  /**
   * 是否显示
   * @type {boolean}
   */
  visible: boolean;

  /**
   * 允许配置
   * @type {boolean}
   */
  enableSetting: boolean;
}

export interface ITrackTreeGridNodeData extends ITreeNodeData {
  /**
   * 节点展开
   * @type {boolean}
   */
  _expanded: boolean;
}

/**
 * 跟踪树表格部件控制器
 * @export
 * @class TrackTreeGridController
 * @extends {TrackTreeGridController<IDETree, ITreeState, ITreeEvent>}
 * @implements {ITreeController}
 */
export class TrackTreeGridController<
    T extends IDETree = IDETree,
    S extends ITreeState = ITreeState,
    E extends ITreeEvent = ITreeEvent,
  >
  extends TreeController<T, S, E>
  implements ITreeController<T, S, E>
{
  declare service: TrackTreeGridService;

  /**
   * 初始化对应类型的部件服务
   * @author lxm
   * @date 2023-12-21 11:25:33
   * @protected
   * @return {*}  {Promise<void>}
   */
  protected async initService(): Promise<void> {
    this.service = new TrackTreeGridService(this.model);
    await this.service.init(this.context);
  }
}
