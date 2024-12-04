import { GridFieldEditColumnController, IEditorContainerController } from '@ibiz-template/runtime';
/**
 * 表格属性列(开启行编辑)控制器
 * @return {*}
 */
export declare class GridReviewResultsColumnController extends GridFieldEditColumnController implements IEditorContainerController {
    /**
     * 是否可评审属性
     */
    isReviewedField: string;
    /**
     * 评审最终结果属性
     */
    finalResultsField: string;
    /**
     * 评审阶段参数属性
     */
    reviewStageField: string;
    /**
     * 评审结果
     */
    reviewResultField: string;
}
