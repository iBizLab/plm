/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { GridController } from '@ibiz-template/runtime';

export class AttachGridController extends GridController {
  /**
   * 添加附件
   *
   * @memberof AttachGridController
   */
  public async addAttachMent(attach: IData[]) {
    const { appDataEntityId } = this.model;
    if (appDataEntityId) {
      const app = ibiz.hub.getApp(this.context.srfappid);
      await app.deService.exec(appDataEntityId, 'create', this.context, attach);
      await this.refresh();
      await this.evt.emit('onSaveSuccess', undefined);
    }
  }
}
