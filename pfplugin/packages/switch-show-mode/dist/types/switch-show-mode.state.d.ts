import { PanelItemState, UIActionButtonState } from '@ibiz-template/runtime';
/**
 * 面板按钮状态
 *
 * @author lxm
 * @date 2023-02-07 06:04:27
 * @export
 * @class SwitchShowModeState
 * @extends {PanelItemState}
 */
export declare class SwitchShowModeState extends PanelItemState {
    /**
     * 加载中
     * @author lxm
     * @date 2023-07-21 10:11:21
     * @type {boolean}
     */
    loading: boolean;
    /**
     * 界面行为状态
     * @author lxm
     * @date 2023-07-21 03:34:27
     * @type {UIActionButtonState}
     */
    uiActionState: UIActionButtonState;
}
