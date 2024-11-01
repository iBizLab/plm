import {
  IPanelItemProvider,
  PanelController,
  PanelItemController,
} from '@ibiz-template/runtime';
import { IPanelItem } from '@ibiz/model-core';
import { MobIdentifierTitleController } from './mob-identifier-title.controller';

export class MobIdentifierTitleProvider implements IPanelItemProvider {
  component: string = 'MobIdentifierTitle';

  async createController(
    panelItem: IPanelItem,
    panel: PanelController,
    parent: PanelItemController | undefined,
  ): Promise<MobIdentifierTitleController> {
    const c = new MobIdentifierTitleController(panelItem, panel, parent);
    await c.init();
    return c;
  }
}
