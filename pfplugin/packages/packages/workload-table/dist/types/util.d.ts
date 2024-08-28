import { Dayjs } from 'dayjs';
export declare const Week: {
    [p: number]: string;
};
export interface IDate {
    date: string;
    week: string;
    isToday: boolean;
    isWeekend: boolean;
}
/**
 * 工具方法
 *
 * @export
 * @class Util
 */
export declare class Util {
    /**
     * 时间是否相等
     *
     * @static
     * @param {(string | Date | Dayjs)} date1
     * @param {(string | Date | Dayjs)} date2
     * @return {*}
     * @memberof Util
     */
    static isDateSame(date1: string | Date | Dayjs, date2: string | Date | Dayjs): boolean;
    /**
     * 计算日期
     *
     * @static
     * @param {string} start 开始时间
     * @param {string} end 结束时间
     * @memberof Util
     */
    static calcDate(start: string, end: string): IDate[];
}
