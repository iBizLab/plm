import {
  IPanelItemProvider,
  PanelController,
  PanelItemController,
} from '@ibiz-template/runtime';
import { IPanelItem } from '@ibiz/model-core';

export class BreadcrumbExpProvider implements IPanelItemProvider {
  component: string = 'IBizBreadcrumbExp';

  async createController(
    panelItem: IPanelItem,
    panel: PanelController,
    parent: PanelItemController | undefined,
  ): Promise<PanelItemController> {
    const c = new PanelItemController(panelItem, panel, parent);
    await c.init();
    return c;
  }
}
