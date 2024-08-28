import { PanelController, PanelItemController, PanelNotifyState, UIActionButtonState, ViewLayoutPanelController } from '@ibiz-template/runtime';
import { IPanelButton } from '@ibiz/model-core';
import { SwitchShowModeState } from './switch-show-mode.state';
/**
 * 面板按钮控制器
 *
 * @export
 * @class SwitchShowModeController
 * @extends {PanelItemController<IPanelButton>}
 */
export declare class SwitchShowModeController extends PanelItemController<IPanelButton> {
    state: SwitchShowModeState;
    protected createState(): SwitchShowModeState;
    /**
     * 面板控制器
     *
     * @type {ViewLayoutPanelController}
     * @memberof SwitchShowModeController
     */
    panel: ViewLayoutPanelController;
    /**
     * 父容器数据对象数据
     * @author lxm
     * @date 2023-07-15 01:33:58
     * @readonly
     * @type {IData}
     */
    get data(): IData;
    /**
     * Creates an instance of SwitchShowModeController.
     * @param {IPanelButton} model
     * @param {PanelController} panel
     * @param {PanelItemController} [parent]
     * @memberof SwitchShowModeController
     */
    constructor(model: IPanelButton, panel: PanelController, parent?: PanelItemController);
    /**
     * 初始化
     *
     * @return {*}  {Promise<void>}
     * @memberof SwitchShowModeController
     */
    onInit(): Promise<void>;
    /**
     * 创建界面行为状态对象
     *
     * @protected
     * @return {*}  {SwitchShowModeState}
     * @memberof SwitchShowModeController
     */
    protected createUIActionState(): UIActionButtonState;
    /**
     * 面板数据变更通知(由面板控制器调用)
     *
     * @param {string[]} names
     * @memberof SwitchShowModeController
     */
    dataChangeNotify(names: string[]): Promise<void>;
    /**
     * 面板状态变更通知
     *
     * @param {PanelNotifyState} _state
     * @memberof SwitchShowModeController
     */
    panelStateNotify(_state: PanelNotifyState): Promise<void>;
    /**
     * 更新按钮权限状态
     *
     * @memberof SwitchShowModeController
     */
    updateButtonState(): Promise<void>;
    /**
     * 行为点击
     *
     * @param {MouseEvent} event
     * @return {*}  {Promise<void>}
     * @memberof SwitchShowModeController
     */
    onActionClick(event: MouseEvent, params: IParams): Promise<void>;
    calcItemVisible(data: IData): void;
    calcItemDisabled(data: IData): void;
}
