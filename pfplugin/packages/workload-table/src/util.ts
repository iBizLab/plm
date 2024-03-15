import dayjs, { Dayjs } from 'dayjs';

export const Week: { [p: number]: string } = {
  0: '周日',
  1: '周一',
  2: '周二',
  3: '周三',
  4: '周四',
  5: '周五',
  6: '周六',
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
export class Util {
  /**
   * 时间是否相等
   *
   * @static
   * @param {(string | Date | Dayjs)} date1
   * @param {(string | Date | Dayjs)} date2
   * @return {*}
   * @memberof Util
   */
  static isDateSame(
    date1: string | Date | Dayjs,
    date2: string | Date | Dayjs,
  ): boolean {
    return (
      dayjs(date1).format('YYYY-MM-DD') === dayjs(date2).format('YYYY-MM-DD')
    );
  }

  /**
   * 计算日期
   *
   * @static
   * @param {string} start 开始时间
   * @param {string} end 结束时间
   * @memberof Util
   */
  static calcDate(start: string, end: string): IDate[] {
    const startDate = dayjs(start, 'YYYY-MM-DD');
    const endDate = dayjs(end, 'YYYY-MM-DD');
    const dates: IDate[] = [];
    for (
      let date = startDate;
      !date.isAfter(endDate);
      date = date.add(1, 'day')
    ) {
      dates.push({
        date: date.format('YYYY-MM-DD'),
        week: Week[date.day()],
        isWeekend: date.day() === 6 || date.day() === 0,
        isToday: this.isDateSame(date, new Date()),
      });
    }
    return dates;
  }
}
