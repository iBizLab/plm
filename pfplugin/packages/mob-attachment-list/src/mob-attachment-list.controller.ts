import { EditFormController, MDCtrlController } from '@ibiz-template/runtime';

/**
 * 附件列表控制器
 *
 * @export
 * @class AttachmentListController
 * @extends {MDCtrlController}
 */
export class AttachmentListController extends MDCtrlController {
  /**
   * 添加附件数据
   *
   * @param {IData[]} attach
   * @memberof AttachmentListController
   */
  public async addAttachMent(attach: IData[]): Promise<void> {
    const { appDataEntityId } = this.model;
    if (appDataEntityId) {
      const app = ibiz.hub.getApp(this.context.srfappid);
      await app.deService.exec(appDataEntityId, 'create', this.context, attach);
      await this.load({ isInitialLoad: false });
      if (this.view.parentView) {
        const mainForm = this.view.parentView.getController('form');
        if (mainForm) {
          (mainForm as EditFormController).autoSave();
        }
      }
    }
  }
}
