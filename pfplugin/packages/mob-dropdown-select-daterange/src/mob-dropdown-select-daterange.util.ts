import dayjs from 'dayjs';

/**
 * 计算本周范围时间
 *
 * @export
 */
export function calcCurWeekDateRange(): IData {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const diff = currentDay === 0 ? -6 : 1 - currentDay;

  // 计算本周开始日期（周一）
  const startDate = new Date(currentDate);
  startDate.setDate(currentDate.getDate() + diff);
  startDate.setHours(0, 0, 0, 0);

  // 计算本周结束日期（周日）
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 6);
  endDate.setHours(23, 59, 59, 999);

  return {
    start: startDate,
    end: endDate,
  };
}

/**
 * 计算本月时间范围
 *
 * @export
 * @return {*}  {IData}
 */
export function calcCurMonthRange(): IData {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  // 计算本月开始日期
  const startDate = new Date(currentYear, currentMonth, 1);
  startDate.setHours(0, 0, 0, 0);

  // 计算本月结束日期
  const nextMonth = new Date(currentYear, currentMonth + 1, 1);
  const endDate = new Date(nextMonth);
  endDate.setHours(23, 59, 59, 999);
  endDate.setDate(endDate.getDate() - 1);

  return {
    start: startDate,
    end: endDate,
  };
}

/**
 * 计算本季度时间范围
 *
 * @export
 * @return {*}
 */
export function calcCurQuarterDateRange() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  let quarterStartMonth;
  let quarterEndMonth;

  // 确定季度的起始和结束月份
  if (currentMonth < 3) {
    quarterStartMonth = 0;
    quarterEndMonth = 2;
  } else if (currentMonth < 6) {
    quarterStartMonth = 3;
    quarterEndMonth = 5;
  } else if (currentMonth < 9) {
    quarterStartMonth = 6;
    quarterEndMonth = 8;
  } else {
    quarterStartMonth = 9;
    quarterEndMonth = 11;
  }

  // 计算本季度开始日期
  const startDate = new Date(currentYear, quarterStartMonth, 1);
  startDate.setHours(0, 0, 0, 0);

  // 计算本季度结束日期
  const endDate = new Date(currentYear, quarterEndMonth + 1, 1);
  endDate.setHours(23, 59, 59, 999);
  endDate.setDate(endDate.getDate() - 1);

  return {
    start: startDate,
    end: endDate,
  };
}

/**
 * 格式化范围文本
 *
 * @export
 */
export function formatRangeText(dateRange: IData): string {
  const { start, end } = dateRange;
  if (start && end) {
    let tempStart = '';
    let tempEnd = '';
    if (start.getFullYear() === new Date().getFullYear()) {
      tempStart = `${start.getMonth() + 1}月${start.getDate()}日`;
    } else {
      tempStart = dayjs(start).format('YYYY年MM月DD日');
    }
    if (end.getFullYear() === new Date().getFullYear()) {
      tempEnd = `${end.getMonth() + 1}月${end.getDate()}日`;
    } else {
      tempEnd = dayjs(end).format('YYYY年MM月DD日');
    }
    return `${tempStart} ~ ${tempEnd}`;
  }
  return '';
}
