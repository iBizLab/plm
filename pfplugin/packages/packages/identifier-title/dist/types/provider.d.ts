import { IPanelItemProvider, PanelController, PanelItemController } from '@ibiz-template/runtime';
import { IPanelItem } from '@ibiz/model-core';
import { IdentifierTitleController } from './identifier-title-controller';
export declare class IdentifierTitleProvider implements IPanelItemProvider {
    component: string;
    createController(panelItem: IPanelItem, panel: PanelController, parent: PanelItemController | undefined): Promise<IdentifierTitleController>;
}
