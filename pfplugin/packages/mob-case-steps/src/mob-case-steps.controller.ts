import { FormMDCtrlRepeaterController } from '@ibiz-template/runtime';

/**
 * 移动端用例步骤
 *
 * @export
 * @class FormMDCtrlRepeaterController
 * @extends {EditorController}
 */
export class MobCaseStepsController extends FormMDCtrlRepeaterController {
  /**
   * 分组判断标识
   *
   * @memberof RepeaterGridCaseStepsController
   */
  public groupField = 'is_group';

  /**
   * 分组父标识
   *
   * @memberof RepeaterGridCaseStepsController
   */
  public parentField = 'group_id';

  /**
   * 实体主键
   *
   * @memberof RepeaterGridCaseStepsController
   */
  public entityKey = 'id';

  /**
   * 初始化
   *
   * @protected
   * @return {*}  {Promise<void>}
   * @memberof MobCaseStepsController
   */
  protected async onInit(): Promise<void> {
    await super.onInit();
  }
}
