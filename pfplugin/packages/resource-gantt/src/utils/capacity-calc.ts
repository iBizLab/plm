import dayjs from 'dayjs';
import { isBetweenDates, isInDateRange, isWorkDay, splitTotal } from './common';

/**
 * 工作项数量计算
 */
const calcWorkItemCount = (
  curDate: string | Date,
  children: IData[] = [],
): number => {
  // 转换 curDate 为 Date 对象
  const currentDate = dayjs(curDate).startOf('day');
  return children.filter(task => {
    const taskStart = task._beginDataItemValue
      ? dayjs(task._beginDataItemValue).startOf('day')
      : null;
    const taskEnd = task._endDataItemValue
      ? dayjs(task._endDataItemValue).startOf('day')
      : null;

    // 确保开始日期不晚于结束日期
    if (taskStart && taskEnd && taskStart.isAfter(taskEnd)) {
      return false;
    }

    // 判断任务是否在当前日期
    return (
      (!taskStart && taskEnd && currentDate.isSame(taskEnd, 'day')) ||
      (taskStart && !taskEnd && currentDate.isSame(taskStart, 'day')) ||
      (taskStart && taskEnd && isBetweenDates(currentDate, taskStart, taskEnd))
    );
  }).length; // 使用 length 获取满足条件的任务数量
};

/**
 * 计算两个日期之间的工作日天数
 */
const calcTotalWorkdays = (
  startDate: Date,
  endDate: Date,
  weekdays: number[],
): Date[] => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  // 有效工作日
  const workdays = [];

  for (
    let date = new Date(start);
    date <= end;
    date.setDate(date.getDate() + 1)
  ) {
    if (isWorkDay(date, weekdays)) {
      workdays.push(new Date(date));
    }
  }

  return workdays;
};

/**
 * 计算预估工时当天需要的工时
 */
const calcEstimatedWorkload = (
  weekdays: number[],
  curDate: string | Date,
  children: IData[] = [],
  fieldName: string = '',
): number => {
  let totalDailyWorkload = 0;
  const currentDate = dayjs(curDate).startOf('day');

  // 过滤 children 中在时间范围内的任务
  const validTasks = children.filter(task =>
    isInDateRange(
      currentDate,
      dayjs(task._beginDataItemValue).startOf('day'),
      dayjs(task._endDataItemValue).startOf('day'),
    ),
  );

  // 遍历每个任务项
  validTasks.forEach(task => {
    const taskStart = dayjs(task._beginDataItemValue).startOf('day');
    const taskEnd = dayjs(task._endDataItemValue).startOf('day');
    // 在任务期间内计算工作日天数
    const workdays = calcTotalWorkdays(
      new Date(taskStart.format('YYYY-MM-DD')),
      new Date(taskEnd.format('YYYY-MM-DD')),
      weekdays,
    );
    const workDayCount: number = workdays.length;

    const estimatedVal = task._deData[fieldName]
      ? Number(task._deData[fieldName])
      : 0;
    // 计算每日工时
    if (workDayCount > 0 && estimatedVal > 0) {
      const dailyWorkloads = splitTotal(estimatedVal, workDayCount);
      const splitIndex = workdays.findIndex((date: Date) =>
        dayjs(date).startOf('day').isSame(currentDate),
      );
      const val = splitIndex !== -1 ? dailyWorkloads[splitIndex] : 0;
      totalDailyWorkload = Math.round((totalDailyWorkload + val) * 10) / 10;
    }
  });

  return totalDailyWorkload;
};

/**
 * 计算剩余工时当天需要的工时
 */
const calcRemainingWorkload = (
  weekdays: number[],
  curDate: string | Date,
  children: IData[] = [],
  fieldName: string = '',
): number => {
  let totalDailyWorkload = 0;
  const currentDate = dayjs(curDate).startOf('day');
  const today = dayjs(new Date()).startOf('day');

  // 如果 curDate 小于今天，则返回 0
  if (currentDate.isBefore(today)) {
    return 0;
  }

  // 过滤 children 中在时间范围内的任务
  const validTasks = children.filter(task =>
    isInDateRange(
      currentDate,
      dayjs(task._beginDataItemValue).startOf('day'),
      dayjs(task._endDataItemValue).startOf('day'),
    ),
  );

  // 遍历每个任务项
  validTasks.forEach(task => {
    let taskStart = dayjs(task._beginDataItemValue).startOf('day');
    const taskEnd = dayjs(task._endDataItemValue).startOf('day');
    // 如果任务的开始时间早于当前日期，则将开始时间设置为当天日期
    if (taskStart.isBefore(today)) {
      taskStart = today;
    }
    // 在任务期间内计算工作日天数
    const workdays = calcTotalWorkdays(
      new Date(taskStart.format('YYYY-MM-DD')),
      new Date(taskEnd.format('YYYY-MM-DD')),
      weekdays,
    );
    const workDayCount: number = workdays.length;

    const estimatedVal = task._deData[fieldName]
      ? Number(task._deData[fieldName])
      : 0;
    // 计算每日工时
    if (workDayCount > 0 && estimatedVal > 0) {
      const dailyWorkloads = splitTotal(estimatedVal, workDayCount);
      const splitIndex = workdays.findIndex((date: Date) =>
        dayjs(date).startOf('day').isSame(currentDate),
      );
      const val = splitIndex !== -1 ? dailyWorkloads[splitIndex] : 0;
      totalDailyWorkload = Math.round((totalDailyWorkload + val) * 10) / 10;
    }
  });

  return totalDailyWorkload;
};

export { calcWorkItemCount, calcEstimatedWorkload, calcRemainingWorkload };
