import { IPanelItemNavPosController, IPanelItemProvider, PanelController, PanelItemController } from '@ibiz-template/runtime';
import { IPanelItem } from '@ibiz/model-core';
/**
 * 面包屑导航占位适配器
 *
 * @export
 * @class NavPosProvider
 * @implements {IPanelItemProvider}
 */
export declare class BreadcrumbNavPosProvider implements IPanelItemProvider {
    component: string;
    /**
     * 创建控制器
     *
     * @param {IPanelItem} panelItem
     * @param {PanelController} panel
     * @param {(PanelItemController | undefined)} parent
     * @return {*}  {Promise<IPanelItemNavPosController>}
     * @memberof BreadcrumbNavPosProvider
     */
    createController(panelItem: IPanelItem, panel: PanelController, parent: PanelItemController | undefined): Promise<IPanelItemNavPosController>;
}
