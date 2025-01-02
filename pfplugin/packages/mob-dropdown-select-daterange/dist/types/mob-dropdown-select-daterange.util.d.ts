/**
 * 计算本周范围时间
 *
 * @export
 */
export declare function calcCurWeekDateRange(): IData;
/**
 * 计算本月时间范围
 *
 * @export
 * @return {*}  {IData}
 */
export declare function calcCurMonthRange(): IData;
/**
 * 计算本季度时间范围
 *
 * @export
 * @return {*}
 */
export declare function calcCurQuarterDateRange(): {
    start: Date;
    end: Date;
};
/**
 * 格式化范围文本
 *
 * @export
 */
export declare function formatRangeText(dateRange: IData): string;
