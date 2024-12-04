import {
  IPanelItemProvider,
  PanelController,
  PanelItemController,
} from '@ibiz-template/runtime';
import { IPanelItem } from '@ibiz/model-core';
import { Controller } from './controller';

/**
 * 面板属性适配器
 *
 * @export
 * @class Provider
 * @implements {IPanelItemProvider}
 */
export class Provider implements IPanelItemProvider {
  component: string = 'IBizPanelResourceState';

  async createController(
    panelItem: IPanelItem,
    panel: PanelController,
    parent: PanelItemController | undefined,
  ): Promise<Controller> {
    const c = new Controller(panelItem, panel, parent);
    await c.init();
    return c;
  }
}
