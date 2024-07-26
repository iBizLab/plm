/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import dayjs, { Dayjs } from 'dayjs';
import { isObject } from 'lodash-es';

/**
 * 判断当前日期是否在开始日期和结束日期之间（包括边界）
 *
 * @param {Date | Dayjs} currentDate - 当前日期
 * @param {Date | Dayjs} startDate - 开始日期
 * @param {Date | Dayjs} endDate - 结束日期
 * @returns {boolean} 如果当前日期在范围内，返回 true；否则返回 false
 */
function isBetweenDates(
  currentDate: Date | Dayjs,
  startDate: Date | Dayjs,
  endDate: Date | Dayjs,
) {
  const current = dayjs(currentDate);
  const start = dayjs(startDate);
  const end = dayjs(endDate);
  // 确保所有参数都是 dayjs 对象
  if (
    !(current instanceof dayjs) ||
    !(start instanceof dayjs) ||
    !(end instanceof dayjs)
  ) {
    throw new Error('All arguments must be dayjs objects');
  }

  // 判断当前日期是否在开始日期和结束日期之间
  // 注意：这里比较的是毫秒数，因此适用于所有 dayjs 支持的单位
  return (
    (current.isAfter(start) && current.isBefore(end)) ||
    current.isSame(start) ||
    current.isSame(end)
  );
}

/**
 * 根据日期返回星期几
 * @param {string|Date|dayjs.Dayjs} date - 指定的日期
 * @returns {string} - 星期几的字符串表示
 */
const getWeekday = (date: Date) => {
  const curDate = new Date(date);
  const dayNumber = dayjs(curDate).day();
  const weekdays = [
    '星期日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
  ];
  return weekdays[dayNumber];
};

/**
 * 格式化日期
 * @param {string|Date|dayjs.Dayjs} date - 需要格式化的日期
 * @param {string} formatStr - 格式化字符串
 * @returns {string} - 格式化后的日期字符串
 */
const formatDate = (date: Date, formatStr: string) => {
  return dayjs(date).format(formatStr);
};

/**
 * 定义一个函数来判断是否为今天
 */
const isToday = (date: Date) => {
  const curDate = new Date(date);
  const inputDate = dayjs(curDate);
  const today = dayjs();
  return inputDate.isSame(today, 'day');
};

/**
 * 对比时间是否相同
 */
const isTimeSame = (
  dateTime1: Date | string,
  dateTime2: Date | string,
  precision: dayjs.OpUnitType,
) => {
  // 使用 Day.js 的 isSame 方法比较时间
  return dayjs(dateTime1).isSame(dayjs(dateTime2), precision);
};

/**
 * 动态匹配${}
 *
 * @param str
 * @param values
 */
export const dynamicMatch = (str: string, values: IParams): string => {
  return str.replace(/\${(.*?)}/g, (_, key) => {
    const [objKey, propName] = key.split('.');
    const obj: IParams = values[objKey] || '';
    if (isObject(obj)) {
      return obj[propName] ? obj[propName] : '';
    }
    return obj;
  });
};

/**
 * 判断当前日期是否在工作日中
 */
const isWorkDay = (date: Date, weekdays: number[]): boolean => {
  const curDate = dayjs(date);
  const currentDayOfWeek = curDate.day();
  return weekdays.includes(currentDayOfWeek);
};

/**
 * 获取容量计算内容
 */
const getCapacityConfig = (rowState: IParams, capacityVal: string) => {
  let weekdays: number[] = [];
  let dayCapacity = 0;
  const capacityConfig = dynamicMatch(
    capacityVal,
    rowState.data && rowState.data._deData ? rowState.data._deData : {},
  );
  let configVal: IParams = {};
  try {
    configVal = JSON.parse(capacityConfig);
  } catch (error) {
    configVal = {};
  }

  if (configVal.weekdays) {
    weekdays = configVal.weekdays
      .split(',')
      .map((item: string) => Number(item));
  }
  if (configVal.dayCapacityVal) {
    dayCapacity = Number(configVal.dayCapacityVal);
  }
  Object.assign(configVal, { weekdays, dayCapacity });
  return configVal;
};

/**
 * 判断当前时间是否在时间范围中
 */
const isInDateRange = (checkDate: Dayjs, startDate: Dayjs, endDate: Dayjs) => {
  return (
    (checkDate.isAfter(startDate) || checkDate.isSame(startDate)) &&
    (checkDate.isBefore(endDate) || checkDate.isSame(endDate))
  );
};

/**
 * 计算平均值并且均分余数 例11.3除以5返回[2.3,2.3,2.3,2.2,2.2]
 */
const splitTotal = (total: number, divisor: number): number[] => {
  // 计算每个部分的基础值，保留一位小数
  const baseValue = Math.floor((total / divisor) * 10) / 10;
  // 计算余数
  const remainder = Math.round((total - baseValue * divisor) * 10) / 10;

  // 初始化结果数组
  const result = new Array(divisor).fill(baseValue);
  let distributedRemainder = 0;

  // 将余数分配给部分，确保总和最接近目标值
  for (let i = 0; distributedRemainder < remainder; i++) {
    result[i] = Math.round((result[i] + 0.1) * 10) / 10;
    distributedRemainder = Math.round((distributedRemainder + 0.1) * 10) / 10;
  }
  return result;
};

/**
 * 获取距离窗口顶部的距离
 */
function getElementOffsetTop(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  return rect.top;
}

/**
 * 获取距离窗口底部部的距离
 */
function getElementDistanceToBottom(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const subtracted = rect.top + rect.height;
  return viewportHeight - subtracted;
}

export {
  getWeekday,
  formatDate,
  isToday,
  isTimeSame,
  isWorkDay,
  isBetweenDates,
  isInDateRange,
  splitTotal,
  getCapacityConfig,
  getElementOffsetTop,
  getElementDistanceToBottom,
};
