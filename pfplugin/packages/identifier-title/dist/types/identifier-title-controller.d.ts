import { PanelItemController } from '@ibiz-template/runtime';
export declare class IdentifierTitleController extends PanelItemController {
    /**
     * 标题
     */
    caption: string;
    /**
     * 编号
     */
    titleNumnber: string;
    protected onInit(): Promise<void>;
}
