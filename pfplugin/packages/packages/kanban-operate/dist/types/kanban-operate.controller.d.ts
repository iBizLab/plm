import { PanelController, PanelItemController, ViewLayoutPanelController } from '@ibiz-template/runtime';
import { IPanelButton } from '@ibiz/model-core';
/**
 * 面板按钮控制器
 *
 * @export
 * @class KanbanOperateController
 * @extends {PanelItemController<IPanelButton>}
 */
export declare class KanbanOperateController extends PanelItemController<IPanelButton> {
    /**
     * 面板控制器
     *
     * @type {ViewLayoutPanelController}
     * @memberof KanbanOperateController
     */
    panel: ViewLayoutPanelController;
    /**
     * 行为模型
     */
    actionModel: IData;
    /**
     * 父容器数据对象数据
     * @author lxm
     * @date 2023-07-15 01:33:58
     * @readonly
     * @type {IData}
     */
    get data(): IData;
    get uaState(): IData;
    /**
     * Creates an instance of KanbanOperateController.
     * @param {IPanelButton} model
     * @param {PanelController} panel
     * @param {PanelItemController} [parent]
     * @memberof KanbanOperateController
     */
    constructor(model: IPanelButton, panel: PanelController, parent?: PanelItemController);
    /**
     * 初始化
     *
     * @return {*}  {Promise<void>}
     * @memberof KanbanOperateController
     */
    onInit(): Promise<void>;
}
