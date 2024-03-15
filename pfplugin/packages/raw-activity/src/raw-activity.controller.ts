import { h } from 'vue';
import { IRaw } from '@ibiz/model-core';
import {
  EditorController,
  IModal,
  IModalData,
  IOverlayContainer,
} from '@ibiz-template/runtime';
import { StepContrast } from './step-contrast/step-contrast';

/**
 * 直接内容(活动)编辑器控制器
 *
 * @export
 * @class RawActivityEditorController
 * @extends {EditorController}
 */
export class RawActivityEditorController extends EditorController<IRaw> {
  /**
   * 模态容器
   *
   * @type {(IOverlayContainer | null)}
   * @memberof RawActivityEditorController
   */
  public modal: IOverlayContainer | null = null;

  /**
   * 打开对照模态
   *
   * @param {{ name: string, newValue: string, oldValue: string }} item
   * @return {*}
   * @memberof RawActivityEditorController
   */
  public async openContrastModal(item: {
    name: string;
    newValue: string;
    oldValue: string;
  }): Promise<IData[]> {
    this.modal = ibiz.overlay.createModal(
      (modal: IModal) =>
        h(StepContrast, {
          item,
          modal,
        }),
      undefined,
      { width: '90%', height: '90%' },
    );
    await this.modal.present();
    const result: IModalData = await this.modal.onWillDismiss();
    return result.data || [];
  }
}
