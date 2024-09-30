import { IPortalMessage } from '@ibiz-template/core';
import Hierarchy from '@antv/hierarchy';
import { HierarchyResult } from '../../interface';

/**
 * X6图形控制器
 *
 * @author chitanda
 * @date 2023-11-16 18:11:12
 * @export
 * @class X6CellController
 */
export abstract class X6CellController {
  /**
   * 当前x6图形实例
   *
   * @author chitanda
   * @date 2023-11-09 18:11:46
   * @type {Graph}
   */
  protected readonly g: IParams;

  constructor(g: IParams) {
    this.g = g;
  }

  /**
   * 由外部调用进行初始化(不可以重写)
   *
   * @return {*}  {Promise<void>}
   */
  init(): void {
    return this.onInit();
  }

  /**
   * 初始化(子类重写)
   *
   * @protected
   * @return {*}  {void}
   */
  protected onInit(): void {}

  /**
   * 监听消息变更
   *
   * @protected
   * @param {IPortalMessage} msg
   * @return {*}  {void}
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected onMessageChange(msg: IPortalMessage): void {}

  /**
   * 销毁
   *
   * @return {*}  {void}
   */
  destroy(): void {}

  /**
   * 加载图形数据
   *
   * @return {*}  {Promise<void>}
   */
  protected load(): void {}

  /**
   * 初始化数据
   */
  initData(items: IData[]): IData[] {
    if (items && items.length) {
      return items.map((item: IData) => {
        if (item.shape === 'mind-map') {
          return this.getMindMap(item);
        }
        return item as HierarchyResult;
      });
    }
    return [];
  }

  /**
   * 获取思维导图
   */
  getMindMap(item: IData): HierarchyResult {
    return Hierarchy.mindmap(item, {
      direction: 'H',
      getHeight(d: IData) {
        return d.height;
      },
      getWidth(d: IData) {
        return d.width;
      },
      getHGap() {
        return 40;
      },
      getVGap() {
        return 20;
      },
      getSide: () => {
        return 'right';
      },
    });
  }
}
