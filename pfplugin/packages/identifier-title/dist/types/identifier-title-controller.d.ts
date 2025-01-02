import { PanelItemController } from '@ibiz-template/runtime';
import { IdentifierTitleState, IIdentifierTitleState } from './identifier-title-state';
export declare class IdentifierTitleController extends PanelItemController {
    /**
     * 面板项状态
     *
     * @type {IIdentifierTitleState}
     */
    state: IIdentifierTitleState;
    /**
     * 编号
     */
    titleNumnber: string;
    protected onInit(): Promise<void>;
    /**
     * 创建面板状态对象
     *
     * @protected
     * @return {*}  {IdentifierTitleState}
     */
    protected createState(): IdentifierTitleState;
    /**
     * 获取分享路径
     *
     * @return {*}  {boolean}
     * @memberof IdentifierTitleController
     */
    copyPath(): Promise<boolean>;
}
