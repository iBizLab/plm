import { ref, defineComponent, watch, PropType, onUnmounted } from 'vue';
import { getSpanProps, useNamespace } from '@ibiz-template/vue3-util';
import './stage-progress-bar.scss';
import { isArray } from 'qx-util';
import { isUndefined } from 'lodash-es';
import dayjs from 'dayjs';
import { EditorController } from './editor.controller';

export const StageProgressBar = defineComponent({
  name: 'IBizStageProgressBar',
  props: {
    ...getSpanProps<EditorController>(),
    value: Array as PropType<IData[]>,
  },
  setup(props) {
    const ns = useNamespace('stage-progress-bar');

    const c = props.controller;
    const selectDate = ref<string | Date>('');
    let dateOperateCut = 0;

    const items = ref<IData[]>([]);
    const activatedMap = new Map();

    /**
     * 判断左侧阶段是否可操作
     */
    const isLeftOperate = (): boolean => {
      if (c.showMode === 'operate' && items.value.length > 0) {
        return items.value[0][c.isOperateField] === 1;
      }
      return false;
    };

    /**
     * 处理排序
     */
    const handleSort = (data: IData[]): void => {
      data.sort((a: IData, b: IData) => {
        const orderA = a[c.showConfig.sort] ? Number(a[c.showConfig.sort]) : -1;
        const orderB = b[c.showConfig.sort] ? Number(b[c.showConfig.sort]) : -1;
        return orderA - orderB;
      });
    };

    /**
     * 处理激活
     */
    const handleActivated = (data: IData[]): void => {
      // 判断是否为当前阶段
      const currentIndex = data.findIndex(
        (item: IData) => item[c.isCurrentField] === 1,
      );
      // 如果是当前阶段前面的阶段及当前阶段的话，激活态为true
      data.forEach(
        (item: IData, index: number): IData =>
          activatedMap.set(
            item.id,
            currentIndex !== -1 && currentIndex >= index,
          ),
      );
    };

    /**
     * 处理日期禁用
     */
    const handleDisabledDate = (date: Date, item: IParams): boolean => {
      const start = item[c.dateRange.startField];
      const end = item[c.dateRange.endField];
      const curDate = dayjs(date);
      if (start && end) {
        const startDate = dayjs(start);
        const endDate = dayjs(end);
        return !(
          (curDate.isAfter(startDate, 'day') ||
            curDate.isSame(startDate, 'day')) &&
          (curDate.isBefore(endDate, 'day') || curDate.isSame(endDate, 'day'))
        );
      }
      if (start) {
        const startDate = dayjs(start);
        return !(
          curDate.isAfter(startDate, 'day') || curDate.isSame(startDate, 'day')
        );
      }
      if (end) {
        const endDate = dayjs(end);
        return !(
          curDate.isBefore(endDate, 'day') || curDate.isSame(endDate, 'day')
        );
      }
      return false;
    };

    // 设置操作时间
    const setOperateDate = (date: string | Date, item: IData): void => {
      const index = props.value?.findIndex(
        (item2: IData) => item2.id === item.id,
      );
      if (props.value && !isUndefined(index) && index !== -1) {
        Object.assign(props.value[index], {
          [c.dateShowConfig.fieldName]: date
            ? c.dateFormat(date, 'YYYY-MM-DD HH:mm:ss')
            : null,
        });
      }
    };

    /**
     * 处理可操作
     */
    const handleOperate = (): void => {
      if (c.showMode === 'operate' && dateOperateCut <= 0) {
        dateOperateCut += 1;
        const lastItem = items.value[1] || {};
        if (!isLeftOperate() && !selectDate.value && props.value) {
          const date =
            lastItem[c.dateShowConfig.fieldName] ||
            c.dateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss');

          if (!handleDisabledDate(date as Date, lastItem)) {
            selectDate.value = date;
            setOperateDate(selectDate.value, lastItem);
          }
        }
      }
    };

    watch(
      () => props.value,
      newVal => {
        if (newVal && isArray(newVal)) {
          handleSort(newVal);
          handleActivated(newVal);
          items.value = newVal;
          handleOperate();
        }
      },
      {
        immediate: true,
        deep: true,
      },
    );

    /**
     * 处理中心绘制样式
     */
    const handleCenterStyle = (item: IData, index = -1): IParams => {
      if (item[c.isCurrentField] === 1 && index !== items.value.length - 1) {
        return { border: `2px solid ${item[c.showConfig.color]}` };
      }
      return { backgroundColor: item[c.showConfig.color], border: 'none' };
    };

    /**
     * 处理线绘制样式
     */
    const handleLineStyle = (item: IData): IParams => {
      if (item[c.isCurrentField] === 1) {
        return { borderBottom: `1px dashed ${item[c.showConfig.color]}` };
      }
      return { borderBottom: `1px solid ${item[c.showConfig.color]}` };
    };

    /**
     * 处理分发样式
     */
    const distributeStyles = (
      item: IData,
      type: string,
      index?: number,
    ): IParams => {
      const color = item[c.showConfig.color];
      if (!activatedMap.get(item.id)) {
        return {};
      }
      switch (type) {
        case 'STATE':
          return c.showMode === 'default'
            ? { backgroundColor: color }
            : {
                backgroundColor: 'transparent',
                border: `1px solid ${color}`,
                color,
              };
        case 'CENTER':
          return handleCenterStyle(item, index);
        case 'DATE':
          return c.showMode === 'default' ? { color } : {};
        case 'LINE':
          return handleLineStyle(item);
        default:
          return {};
      }
    };

    const handleStateClick = async (item: IData): Promise<void> => {
      if (
        item[c.isCurrentField] === 1 ||
        c.showMode === 'operate' ||
        props.readonly
      ) {
        return;
      }
      const index = items.value.findIndex(
        (item2: IData) => item2[c.isCurrentField] === 1,
      );
      const findItem = items.value[index];
      const params = { [c.clickStageIdField]: item.id };
      if (findItem) {
        Object.assign(params, { [c.releaseStageIdField]: findItem.id });
      }
      const res: IParams = await c.openLinkView(item, params);
      if (res.ok) {
        (c.parent as IParams).form.load();
      }
    };

    const onDateChange = (date: Date | string, item: IData): void => {
      setOperateDate(date, item);
    };

    const shortcuts = [
      {
        text: '今天',
        value: (): Date => new Date(),
      },
      {
        text: '明天',
        value: (): Date => {
          const date = new Date();
          date.setTime(date.getTime() + 3600 * 1000 * 24);
          return date;
        },
      },
      {
        text: '下周',
        value: (): Date => {
          const date = new Date();
          date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
          return date;
        },
      },
    ];

    /**
     * 计算popper类名
     */
    const calcPopperClass = (): string[] => {
      // 适配弹框左侧按钮禁用
      const classNames: string[] = [];
      const item = isLeftOperate() ? items.value[0] : items.value[1];
      shortcuts.forEach((shortcut: IData, index: number) => {
        if (handleDisabledDate(shortcut.value(), item)) {
          classNames.push(`button-disable${index + 1}`);
        }
      });
      return classNames;
    };

    const renderDate = (item: IData): JSX.Element | string => {
      const dateText = item[c.dateShowConfig.fieldName];
      if (c.showMode === 'default') {
        return dateText ? c.dateFormat(dateText, c.dateShowConfig.format) : '';
      }
      let content = [
        <div class={ns.be('date', 'caption')}>日期</div>,
        <div class={ns.be('date', 'time')}>
          {dateText ? c.dateFormat(dateText, c.dateShowConfig.format) : ''}
        </div>,
      ];
      // 可操作阶段
      if (item[c.isOperateField]) {
        content = [
          <div class={ns.be('date', 'caption')}>设置日期</div>,
          <el-date-picker
            v-model={selectDate.value}
            type='date'
            class={ns.be('date', 'time')}
            popper-class={[ns.be('date', 'popper'), ...calcPopperClass()]}
            placeholder={c.placeHolder}
            shortcuts={shortcuts}
            disabled={props.readonly}
            disabled-date={(date: Date) => handleDisabledDate(date, item)}
            onChange={(date: string | Date) => onDateChange(date, item)}
          />,
        ];
      }
      return <div class={[ns.b('date')]}>{content}</div>;
    };

    const renderItem = (item: IData, index: number): JSX.Element => {
      return (
        <div class={[ns.e('item')]}>
          <div
            class={[ns.em('item', 'state')]}
            style={distributeStyles(item, 'STATE')}
            onClick={() => handleStateClick(item)}
          >
            {item[c.showConfig.typeName] || ''}
          </div>
          <div
            class={[ns.em('item', 'center')]}
            style={distributeStyles(item, 'CENTER', index)}
          ></div>
          <div
            class={[ns.em('item', 'date')]}
            style={distributeStyles(item, 'DATE')}
          >
            {renderDate(item)}
          </div>
        </div>
      );
    };

    const renderContent = (): JSX.Element[] => {
      return items.value.map((item: IData, index: number) => {
        const lindeState = index < items.value.length - 1;
        return (
          <div class={[ns.e('item-box')]}>
            {renderItem(item, index)}
            {lindeState && (
              <div
                class={[ns.em('item-box', 'line')]}
                style={distributeStyles(item, 'LINE')}
              ></div>
            )}
          </div>
        );
      });
    };

    onUnmounted(() => {
      activatedMap.clear();
    });

    return {
      ns,
      c,
      items,
      renderContent,
      isLeftOperate,
    };
  },
  render() {
    return (
      <div
        class={[
          this.ns.b(),
          this.readonly ? this.ns.e('readonly') : '',
          this.ns.e(this.c.showMode),
          this.isLeftOperate() ? this.ns.e('left-operate') : '',
        ]}
        ref='editorRef'
      >
        <div class={[this.ns.e('scroll')]}>{this.renderContent()}</div>
      </div>
    );
  },
});
