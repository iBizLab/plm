import {
  GridFieldEditColumnController,
  IEditorContainerController,
} from '@ibiz-template/runtime';

/**
 * 表格属性列(开启行编辑)控制器
 * @return {*}
 */
export class GridReviewResultsColumnController
  extends GridFieldEditColumnController
  implements IEditorContainerController
{
  /**
   * 是否可评审属性
   */
  public isReviewedField = 'whether_review';

  /**
   * 评审最终结果属性
   */
  public finalResultsField = 'final_stage_results';

  /**
   * 评审阶段参数属性
   */
  public reviewStageField = 'stage_id';

  /**
   * 评审结果
   */
  public reviewResultField = 'result_state';
}
