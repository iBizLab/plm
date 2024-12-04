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
    /**
     * 获取分享路径
     *
     * @return {*}  {boolean}
     * @memberof IdentifierTitleController
     */
    copyPath(): Promise<boolean>;
}
