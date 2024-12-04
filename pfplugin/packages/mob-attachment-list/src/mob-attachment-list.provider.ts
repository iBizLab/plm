import { CTX, IControlProvider } from '@ibiz-template/runtime';
import { IDEMobMDCtrl } from '@ibiz/model-core';
import { AttachmentListController } from './mob-attachment-list.controller';

/**
 * 附件列表适配器
 *
 * @export
 * @class AttachmentListProvider
 * @implements {IControlProvider}
 */
export class AttachmentListProvider implements IControlProvider {
  component: string = 'IBizMDCtrlControl';

  /**
   * 创建部件控制器
   *
   * @param {IDEMobMDCtrl} model
   * @param {IContext} context
   * @param {IParams} params
   * @param {CTX} ctx
   * @return {*}  {AttachmentListController}
   * @memberof AttachmentListProvider
   */
  createController(
    model: IDEMobMDCtrl,
    context: IContext,
    params: IParams,
    ctx: CTX,
  ): AttachmentListController {
    return new AttachmentListController(model, context, params, ctx);
  }
}
