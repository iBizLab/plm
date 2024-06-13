import dayjs from 'dayjs';
import { isBetweenDates } from './common';

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

export { calcWorkItemCount };
