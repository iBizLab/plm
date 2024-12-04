import { IPanelItemProvider, PanelController, PanelItemController } from '@ibiz-template/runtime';
import { IPanelItem } from '@ibiz/model-core';
import { MobIdentifierTitleController } from './mob-identifier-title.controller';
export declare class MobIdentifierTitleProvider implements IPanelItemProvider {
    component: string;
    createController(panelItem: IPanelItem, panel: PanelController, parent: PanelItemController | undefined): Promise<MobIdentifierTitleController>;
}
