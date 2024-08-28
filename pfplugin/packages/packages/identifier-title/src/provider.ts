import {
  IPanelItemProvider,
  PanelController,
  PanelItemController,
} from '@ibiz-template/runtime';
import { IPanelItem } from '@ibiz/model-core';
import { IdentifierTitleController } from './identifier-title-controller';

export class IdentifierTitleProvider implements IPanelItemProvider {
  component: string = 'IdentifierTitle';

  async createController(
    panelItem: IPanelItem,
    panel: PanelController,
    parent: PanelItemController | undefined,
  ): Promise<IdentifierTitleController> {
    const c = new IdentifierTitleController(panelItem, panel, parent);
    await c.init();
    return c;
  }
}
