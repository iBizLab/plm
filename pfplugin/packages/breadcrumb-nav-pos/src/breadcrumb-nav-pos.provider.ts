import {
  IPanelItemNavPosController,
  IPanelItemProvider,
  PanelController,
  PanelItemController,
} from '@ibiz-template/runtime';
import { IPanelItem } from '@ibiz/model-core';
import { BreadcrumbNavPosController } from './breadcrumb-nav-pos.controller';

/**
 * 面包屑导航占位适配器
 *
 * @export
 * @class NavPosProvider
 * @implements {IPanelItemProvider}
 */
export class BreadcrumbNavPosProvider implements IPanelItemProvider {
  component: string = 'IBizBreadcrumbNavPos';

  /**
   * 创建控制器
   *
   * @param {IPanelItem} panelItem
   * @param {PanelController} panel
   * @param {(PanelItemController | undefined)} parent
   * @return {*}  {Promise<IPanelItemNavPosController>}
   * @memberof BreadcrumbNavPosProvider
   */
  async createController(
    panelItem: IPanelItem,
    panel: PanelController,
    parent: PanelItemController | undefined,
  ): Promise<IPanelItemNavPosController> {
    const c = new BreadcrumbNavPosController(panelItem, panel, parent);
    await c.init();
    return c;
  }
}
