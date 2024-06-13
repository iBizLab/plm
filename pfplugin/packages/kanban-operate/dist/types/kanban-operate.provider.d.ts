import { IPanelItemProvider, PanelController, PanelItemController } from '@ibiz-template/runtime';
import { IPanelItem } from '@ibiz/model-core';
import { KanbanOperateController } from './kanban-operate.controller';
/**
 * 面板按钮适配器
 *
 * @export
 * @class KanbanOperateProvider
 * @implements {IPanelItemProvider}
 */
export declare class KanbanOperateProvider implements IPanelItemProvider {
    component: string;
    createController(panelItem: IPanelItem, panel: PanelController, parent: PanelItemController | undefined): Promise<KanbanOperateController>;
}
