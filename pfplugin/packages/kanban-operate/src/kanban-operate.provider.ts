import {
  IPanelItemProvider,
  PanelController,
  PanelItemController,
} from '@ibiz-template/runtime';
import { IPanelItem } from '@ibiz/model-core';
import { KanbanOperateController } from './kanban-operate.controller';

/**
 * 面板按钮适配器
 *
 * @export
 * @class KanbanOperateProvider
 * @implements {IPanelItemProvider}
 */
export class KanbanOperateProvider implements IPanelItemProvider {
  component: string = 'IBizKanbanOperate';

  async createController(
    panelItem: IPanelItem,
    panel: PanelController,
    parent: PanelItemController | undefined,
  ): Promise<KanbanOperateController> {
    const c = new KanbanOperateController(panelItem, panel, parent);
    await c.init();
    return c;
  }
}
