import { MDCtrlController } from '@ibiz-template/runtime';
/**
 * 附件列表控制器
 *
 * @export
 * @class AttachmentListController
 * @extends {MDCtrlController}
 */
export declare class AttachmentListController extends MDCtrlController {
    /**
     * 添加附件数据
     *
     * @param {IData[]} attach
     * @memberof AttachmentListController
     */
    addAttachMent(attach: IData[]): Promise<void>;
}
