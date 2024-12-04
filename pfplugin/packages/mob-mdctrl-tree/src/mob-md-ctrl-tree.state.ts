/* eslint-disable @typescript-eslint/no-explicit-any */
import { IMobMdCtrlState } from '@ibiz-template/runtime';

export interface INodeData {
  /**
   * 行展开状态
   *
   * @type {string}
   * @memberof INodeData
   */
  _expand?: boolean;
  /**
   * 是否为叶子节点
   *
   * @type {boolean}
   * @memberof INodeData
   */
  _leaf?: boolean;
  /**
   * 子数据
   *
   * @type {INodeData[]}
   * @memberof INodeData
   */
  _children?: INodeData[];

  [key: string | symbol]: any;
}

/**
 * 多数据列表树（移动端）状态
 *
 * @export
 * @interface IMobMdCtrlTreeState
 * @extends {IMobMdCtrlState}
 */
export interface IMobMdCtrlTreeState extends IMobMdCtrlState {
  /**
   * 树节点数据
   *
   * @type {INodeData[]}
   * @memberof IMobMdCtrlTreeState
   */
  rootNodes: INodeData[];
}
