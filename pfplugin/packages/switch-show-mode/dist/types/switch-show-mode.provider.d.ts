import { IPanelItemProvider, PanelController, PanelItemController } from '@ibiz-template/runtime';
import { IPanelItem } from '@ibiz/model-core';
import { SwitchShowModeController } from './switch-show-mode.controller';
/**
 * 面板按钮适配器
 *
 * @export
 * @class SwitchShowModeProvider
 * @implements {IPanelItemProvider}
 */
export declare class SwitchShowModeProvider implements IPanelItemProvider {
    component: string;
    createController(panelItem: IPanelItem, panel: PanelController, parent: PanelItemController | undefined): Promise<SwitchShowModeController>;
}
