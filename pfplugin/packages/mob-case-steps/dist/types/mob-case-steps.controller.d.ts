import { FormMDCtrlRepeaterController } from '@ibiz-template/runtime';
/**
 * 移动端用例步骤
 *
 * @export
 * @class FormMDCtrlRepeaterController
 * @extends {EditorController}
 */
export declare class MobCaseStepsController extends FormMDCtrlRepeaterController {
    /**
     * 分组判断标识
     *
     * @memberof RepeaterGridCaseStepsController
     */
    groupField: string;
    /**
     * 分组父标识
     *
     * @memberof RepeaterGridCaseStepsController
     */
    parentField: string;
    /**
     * 实体主键
     *
     * @memberof RepeaterGridCaseStepsController
     */
    entityKey: string;
    /**
     * 初始化
     *
     * @protected
     * @return {*}  {Promise<void>}
     * @memberof MobCaseStepsController
     */
    protected onInit(): Promise<void>;
}
