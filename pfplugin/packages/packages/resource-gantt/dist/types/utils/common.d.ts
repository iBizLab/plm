import dayjs, { Dayjs } from 'dayjs';
/**
 * 判断当前日期是否在开始日期和结束日期之间（包括边界）
 *
 * @param {Date | Dayjs} currentDate - 当前日期
 * @param {Date | Dayjs} startDate - 开始日期
 * @param {Date | Dayjs} endDate - 结束日期
 * @returns {boolean} 如果当前日期在范围内，返回 true；否则返回 false
 */
declare function isBetweenDates(currentDate: Date | Dayjs, startDate: Date | Dayjs, endDate: Date | Dayjs): boolean;
/**
 * 根据日期返回星期几
 * @param {string|Date|dayjs.Dayjs} date - 指定的日期
 * @returns {string} - 星期几的字符串表示
 */
declare const getWeekday: (date: Date) => string;
/**
 * 格式化日期
 * @param {string|Date|dayjs.Dayjs} date - 需要格式化的日期
 * @param {string} formatStr - 格式化字符串
 * @returns {string} - 格式化后的日期字符串
 */
declare const formatDate: (date: Date, formatStr: string) => string;
/**
 * 定义一个函数来判断是否为今天
 */
declare const isToday: (date: Date) => boolean;
/**
 * 对比时间是否相同
 */
declare const isTimeSame: (dateTime1: Date | string, dateTime2: Date | string, precision: dayjs.OpUnitType) => boolean;
/**
 * 动态匹配${}
 *
 * @param str
 * @param values
 */
export declare const dynamicMatch: (str: string, values: IParams) => string;
/**
 * 判断当前日期是否在工作日中
 */
declare const isWorkDay: (date: Date, weekdays: number[]) => boolean;
/**
 * 获取容量计算内容
 */
declare const getCapacityConfig: (rowState: IParams, capacityVal: string) => IParams;
/**
 * 判断当前时间是否在时间范围中
 */
declare const isInDateRange: (checkDate: Dayjs, startDate: Dayjs, endDate: Dayjs) => boolean;
/**
 * 计算平均值并且均分余数 例11.3除以5返回[2.3,2.3,2.3,2.2,2.2]
 */
declare const splitTotal: (total: number, divisor: number) => number[];
/**
 * 获取距离窗口顶部的距离
 */
declare function getElementOffsetTop(el: HTMLElement): number;
/**
 * 获取距离窗口底部部的距离
 */
declare function getElementDistanceToBottom(el: HTMLElement): number;
export { getWeekday, formatDate, isToday, isTimeSame, isWorkDay, isBetweenDates, isInDateRange, splitTotal, getCapacityConfig, getElementOffsetTop, getElementDistanceToBottom, };
