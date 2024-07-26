/**
 * 工作项数量计算
 */
declare const calcWorkItemCount: (curDate: string | Date, children?: IData[]) => number;
/**
 * 计算预估工时当天需要的工时
 */
declare const calcEstimatedWorkload: (weekdays: number[], curDate: string | Date, children?: IData[], fieldName?: string) => number;
/**
 * 计算剩余工时当天需要的工时
 */
declare const calcRemainingWorkload: (weekdays: number[], curDate: string | Date, children?: IData[], fieldName?: string) => number;
export { calcWorkItemCount, calcEstimatedWorkload, calcRemainingWorkload };
