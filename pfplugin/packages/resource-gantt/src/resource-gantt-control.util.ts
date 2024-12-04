/* eslint-disable @typescript-eslint/ban-types */
import { ref } from 'vue';
import dayjs, { Dayjs } from 'dayjs';

/**
 * 滑块拖动
 *
 * @return {*}
 */
export function useSlider(): IParams {
  const isDrag = ref(false);

  /**
   * 处理整体拖动计算
   *
   * @param {IParams} options
   * @return {*}
   */
  const handleDragCalc = (options: IParams): IParams => {
    const { startDate, endDate, dateRange, sliderLimit } = options;
    let start: Dayjs | IParams = dayjs(startDate.date);
    let end: Dayjs | IParams = dayjs(endDate.date);
    // 整体拖动逻辑
    const diffInHours = end.diff(start, 'hour');
    const startDateDiff = start.diff(start.startOf('day'), 'hour');
    // 如果开始时间时分秒小于12小时 则将开始时间时分秒置为0 结束时间减去一天并将时分秒置为0
    if (startDateDiff < 12) {
      start = start.startOf('day');
      end = end.subtract(1, 'day').startOf('day');
      // 适配滑块拖动限制
      if (sliderLimit && dateRange) {
        // 移动超出范围的时间直接赋值时间范围
        const rangeEnd = dayjs(dateRange.end)
          .startOf('day')
          .add(1, 'day')
          .subtract(1, 'second');
        const rangeStart = dayjs(dateRange.start).startOf('day');
        if (
          dayjs(endDate.date).isAfter(rangeEnd) ||
          dayjs(endDate.date).isSame(rangeEnd)
        ) {
          end = rangeEnd;
        }
        if (
          dayjs(startDate.date).isBefore(rangeStart) ||
          dayjs(startDate.date).isSame(rangeStart)
        ) {
          start = rangeStart;
        }
      }
      // 如果开始时间时间与结束时间在一天之内  开始时间赋值为结束时间
      if (diffInHours === 24) {
        end = start;
      }
    } else {
      // 如果开始时间时分秒大于12小时 则将结束时间时分秒置为0 开始时间加上一天并将时分秒置为0
      end = end.startOf('day');
      start = start.add(1, 'day').startOf('day');
      // 如果开始时间时间与结束时间在一天之内  结束时间赋值给开始时间
      if (diffInHours === 24) {
        start = end;
      }
    }

    // 完成后统一宽度变为一天显示：1.1将结束时间加一天并减1秒
    end = end.add(1, 'day').startOf('day').subtract(1, 'second');

    return { start, end };
  };

  /**
   * 处理左右拖动计算
   *
   * @param {IParams} options
   * @return {*}
   */
  const handleNoDragCalc = (options: IParams): IParams => {
    const { startDate, endDate } = options;
    let start: Dayjs | IParams = dayjs(startDate.date);
    let end: Dayjs | IParams = dayjs(endDate.date);
    // 左右拖动逻辑
    start = start.startOf('day');
    end = end.startOf('day').add(1, 'day').subtract(1, 'second');
    return { start, end };
  };

  /**
   * 转换时间
   *
   * @param {Date} curDate
   * @param {IParams} dateRange
   * @return {*}
   */
  const dayConvert = (curDate: Date, dateRange: IParams): IParams => {
    return {
      curDate: dayjs(curDate),
      rangeStart: dayjs(dateRange.start).startOf('day'),
      rangeEnd: dayjs(dateRange.end)
        .startOf('day')
        .add(1, 'day')
        .subtract(1, 'second'),
    };
  };

  /**
   * 处理滑块拖动完成后的抛值
   *
   * @param {IParams} options
   * @param {Function} cellBack
   * @return {*}
   */
  const handleEmitMove = (options: IParams, cellBack: Function): void => {
    const { startDate, endDate } = options;
    const customStartDate: IParams = startDate.clone()!;
    const customEndDate: IParams = endDate.clone()!;
    let val: IParams;
    if (isDrag.value) {
      val = handleDragCalc(options);
    } else {
      val = handleNoDragCalc(options);
    }

    isDrag.value = false;
    customStartDate.setDate(dayjs(val.start));
    customEndDate.setDate(dayjs(val.end));
    cellBack({
      startDate: customStartDate,
      endDate: customEndDate,
      unit: 'hour',
    });
  };

  /**
   * 处理设置开始时间
   *
   * @param {IParams} options
   * @param {Function} cellBack
   * @return {*}
   */
  const handleSetStart = (options: IParams, cellBack: Function): number => {
    const {
      x,
      type,
      startDate,
      endDate,
      sliderLimit,
      dateRange,
      ganttColumnWidth,
      currentMillisecond,
    } = options;

    let customEndDate;
    isDrag.value = true;
    const d = startDate!
      .getOffset((x / ganttColumnWidth) * currentMillisecond)
      .clone();
    if (type === 'resize') {
      isDrag.value = false;
    }
    let time = 0;
    if (sliderLimit && dateRange) {
      const { rangeStart, rangeEnd } = dayConvert(startDate!.date, dateRange);
      const endD = endDate!.getOffset(
        (x / ganttColumnWidth) * currentMillisecond,
      );
      const oldEnd = dayjs(endDate!.date);
      const oldStart = dayjs(startDate!.date);
      let newStart = dayjs(d!.date);
      let newEnd = dayjs(endD!.date);
      // 左右拖动
      if (type === 'resize') {
        // 判断是否仅剩一天，根据结束时间减一天加一秒比对
        const remaining = oldEnd.subtract(1, 'day').add(1, 'second');
        if (newStart.isAfter(remaining)) {
          d.setDate(remaining.toDate());
          newStart = dayjs(d!.date);
        }
        // 超出时间范围
        if (newStart.isAfter(rangeEnd.startOf('day'))) {
          d.setDate(rangeEnd.startOf('day').toDate());
          newStart = dayjs(d!.date);
        }
      } else {
        // 处理移动

        // 如果开始时间与结束时间超出时间范围，则不执行
        if (
          oldStart.isBefore(rangeStart.add(1, 'day'), 'day') &&
          oldEnd.isAfter(rangeEnd.subtract(1, 'day'), 'day')
        ) {
          return x;
        }
        if (newEnd.isAfter(rangeEnd)) {
          endD.setDate(rangeEnd.toDate());
          newEnd = dayjs(endD.date);
        }
        const oldDiffInHours = oldEnd.diff(oldStart, 'second');
        const newDiffInHours = newEnd.diff(newStart, 'second');
        const tempStart = newEnd.subtract(oldDiffInHours, 'second');
        // +1适配处理整体拖动计算
        time = newEnd.add(1, 'second').valueOf() - tempStart.valueOf();

        if (
          newDiffInHours > 0 &&
          newDiffInHours <= oldDiffInHours &&
          tempStart.isAfter(rangeStart)
        ) {
          d.setDate(tempStart.toDate());
          newStart = dayjs(d!.date);
        }
      }

      // 计算出的时间在时间范围开始之前，则赋值时间范围开始时间
      if (newStart.isBefore(rangeStart)) {
        d.setDate(rangeStart.toDate());
      }
    }

    // 首先判断起始日期不能大于结束日期
    if (d.compareTo(endDate!.getOffset(-86400000)) === 'r' || time > 0) {
      if (type !== 'resize') {
        customEndDate = d.getOffset(time > 0 ? time : 86400000);
      }
    }
    cellBack({
      startDate: d,
      endDate: customEndDate,
      unit: 'hour',
    });
    return x;
  };

  /**
   * 处理设置结束时间
   *
   * @param {IParams} options
   * @param {Function} cellBack
   * @return {*}
   */
  const handleSetEnd = (options: IParams, cellBack: Function): number => {
    const {
      x,
      type,
      startDate,
      endDate,
      sliderLimit,
      dateRange,
      ganttColumnWidth,
      currentMillisecond,
    } = options;

    isDrag.value = true;
    let time = 0;

    let customStartDate;
    const d = endDate!
      .getOffset((x / ganttColumnWidth) * currentMillisecond)
      .clone();

    if (type === 'resize') {
      isDrag.value = false;
    }
    if (sliderLimit && dateRange) {
      const { rangeStart, rangeEnd } = dayConvert(endDate!.date, dateRange);
      const startD = startDate!.getOffset(
        (x / ganttColumnWidth) * currentMillisecond,
      );
      const oldStart = dayjs(startDate!.date);
      const oldEnd = dayjs(endDate!.date);
      let newEnd = dayjs(d!.date);
      const newStart = dayjs(startD.date);

      // 如果开始时间与结束时间与时间范围相等，则不执行
      if (type === 'resize') {
        // 判断是否仅剩一天，根据开始时间加一天减一秒比对
        const remaining = oldStart.add(1, 'day').subtract(1, 'second');
        if (newEnd.isBefore(remaining)) {
          d.setDate(remaining);
          newEnd = dayjs(d!.date);
        }
        // 结束时间超出时间范围
        if (
          newEnd.isBefore(
            rangeStart.startOf('day').add(1, 'day').subtract(1, 'second'),
          )
        ) {
          d.setDate(
            rangeStart
              .startOf('day')
              .add(1, 'day')
              .subtract(1, 'second')
              .toDate(),
          );
          newEnd = dayjs(d!.date);
        }
      } else {
        // 处理移动

        // 如果开始时间与结束时间超出时间范围，则不执行
        if (
          oldStart.isBefore(rangeStart.add(1, 'day'), 'day') &&
          oldEnd.isAfter(rangeEnd.subtract(1, 'day'), 'day')
        ) {
          return x;
        }
        if (newStart.isBefore(rangeStart)) {
          return x;
        }

        const oldDiffInHours = oldEnd.diff(oldStart, 'second');
        const newDiffInHours = newEnd.diff(newStart, 'second');
        // +1适配处理整体拖动计算
        const tempEnd = newStart.add(oldDiffInHours + 1, 'second');
        time = tempEnd.valueOf() - newStart.valueOf();
        // 结束时间通过比对小时的差值拿到
        if (
          newDiffInHours > 0 &&
          newDiffInHours <= oldDiffInHours &&
          tempEnd.isBefore(rangeEnd)
        ) {
          d.setDate(tempEnd);
          newEnd = dayjs(d!.date);
        }
      }

      // 计算出的时间在时间范围结束之后，则赋值时间范围结束时间
      if (newEnd.isAfter(rangeEnd)) {
        d.setDate(rangeEnd);
      }
    }

    // 首先判断起始日期不能大于结束日期
    if (d.compareTo(startDate.getOffset(86400000)) === 'l') {
      if (type !== 'resize') {
        customStartDate = d.getOffset(time > 0 ? -time : -86400000);
      }
    }

    cellBack({
      startDate: customStartDate,
      endDate: d,
      unit: 'hour',
    });
    return x;
  };

  /**
   * 处理滑块左侧定位计算
   *
   * @param {IParams} options
   * @return {*}
   */
  function handleSliderLeft(options: IParams): number {
    const { startDate, ganttHeader, currentMillisecond, ganttColumnWidth } =
      options;
    return (
      (startDate.intervalTo(ganttHeader.start) / currentMillisecond) *
      ganttColumnWidth
    );
  }

  /**
   * 处理滑块宽度
   *
   * @param {IParams} options
   * @return {*}
   */
  function handleSliderWidth(options: IParams): number {
    const { startDate, endDate, currentMillisecond, ganttColumnWidth } =
      options;
    return (
      (endDate.intervalTo(startDate) / currentMillisecond) * ganttColumnWidth
    );
  }
  return {
    handleEmitMove,
    handleSetStart,
    handleSetEnd,
    handleSliderLeft,
    handleSliderWidth,
  };
}
