import { IPanelItemProvider, PanelController, PanelItemController } from '@ibiz-template/runtime';
import { IPanelItem } from '@ibiz/model-core';
import { CustomUserInfoController } from './custom-user-info.controller';
/**
 * 用户信息适配器
 *
 * @export
 * @class CustomUserInfoProvider
 * @implements {IPanelItemProvider}
 */
export declare class CustomUserInfoProvider implements IPanelItemProvider {
    component: string;
    createController(panelItem: IPanelItem, panel: PanelController, parent: PanelItemController | undefined): Promise<CustomUserInfoController>;
}
