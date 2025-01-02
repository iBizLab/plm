import { IPanelItemState, PanelItemState } from '@ibiz-template/runtime';
export interface IIdentifierTitleState extends IPanelItemState {
    /**
     * 标题
     */
    caption: string;
}
/**
 * 状态
 */
export declare class IdentifierTitleState extends PanelItemState {
    /**
     * 标题
     */
    caption: string;
}
