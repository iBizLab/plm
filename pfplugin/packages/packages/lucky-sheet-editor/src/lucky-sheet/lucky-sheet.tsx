/* eslint-disable @typescript-eslint/ban-types */
import {
  defineComponent,
  onBeforeUnmount,
  onMounted,
  Ref,
  ref,
  watch,
} from 'vue';
import {
  getInputProps,
  getEditorEmits,
  useNamespace,
} from '@ibiz-template/vue3-util';
import { createUUID } from 'qx-util';
import { LuckySheetController } from './lucky-sheet.controller';
import './lucky-sheet.scss';
import { SheetUtil } from '../utils';
import bus from '../utils/bus-util';

export default defineComponent({
  name: 'IBizLuckySheet',
  props: getInputProps<LuckySheetController>(),
  emits: getEditorEmits(),
  setup(props, { emit }) {
    const c = props.controller;
    const ns = useNamespace('lucky-sheet-editor');
    const loading: Ref<boolean> = ref(true);
    const currentVal = ref<string>('');
    const uuid = `lucky-sheet-editor-${createUUID()}`;

    // 100行，20列的空表格
    const defaultData = JSON.stringify([
      {
        name: 'sheet1', // 工作表名称
        color: '', // 工作表颜色
        index: 0, // 工作表索引
        status: 1, // 激活状态
        order: 0, // 工作表的下标
        hide: 0, // 是否隐藏
        row: 50, // 行数
        column: 20, // 列数
        defaultRowHeight: 19, // 自定义行高
        defaultColWidth: 73, // 自定义列宽
        celldata: [],
      },
    ]);

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const throttle = (func: Function, delay: number) => {
      let lastExecuted = 0;
      let timeoutId: NodeJS.Timeout | undefined;

      return (...args: []): void => {
        const now = Date.now();

        if (now - lastExecuted >= delay) {
          lastExecuted = now;
          func.apply(this, args);
        } else {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(
            () => {
              lastExecuted = now;
              func.apply(this, args);
            },
            delay - (now - lastExecuted),
          );
        }
      };
    };

    const emitChange = (): void => {
      if (props.readonly || props.disabled) return;
      const luckySheet = SheetUtil.getLuckySheet();
      const allSheet = luckySheet.getAllSheets();
      emit('change', JSON.stringify(allSheet));
    };

    const throttledUpdate = throttle(emitChange, 1000);

    const options = {
      container: uuid, // 设定DOM容器的id
      lang: 'zh', // 设定表格语言showtoolbar: false,
      data: [],
      hook: {},
      allowEdit: !props.readonly && !props.disabled, // 是否允许编辑
      showtoolbar: !props.readonly && !props.disabled, // 工具栏在只读或禁用下不显示
      enableAddRow: !props.readonly && !props.disabled, // 允许增加行
      enableAddCol: !props.readonly && !props.disabled, // 允许增加列
    };

    const initLuckySheet = (): void => {
      SheetUtil.loadLuckySheet()
        .then(() => {
          Object.assign(options, { data: JSON.parse(currentVal.value) });
          SheetUtil.create(options);
          loading.value = false;
        })
        .catch(() => {});
    };

    const setGridHooks = (): void => {
      SheetUtil.addHook(options, {
        cellRenderAfter: () => {
          throttledUpdate();
        },
      });
    };

    const init = (): void => {
      loading.value = true;
      setGridHooks();
      initLuckySheet();
    };

    watch(
      () => props.value,
      (newVal, oldVal) => {
        if (newVal !== oldVal) {
          if (!newVal) {
            currentVal.value = defaultData;
          } else {
            currentVal.value = newVal as string;
          }
          if (props.readonly || props.disabled) {
            const luckySheet = SheetUtil.getLuckySheet();
            if (luckySheet) {
              const data = luckySheet.getLuckysheetfile();
              const newdata = JSON.parse(currentVal.value);
              if (data.length > 0) {
                data.forEach((item: IData) => {
                  const sheet = newdata.find(
                    (s: IData) => s.name === item.name,
                  );
                  if (sheet) {
                    sheet.data.forEach((element: IData, index: string) => {
                      item.data[index] = element;
                    });
                  }
                });
              }
              luckySheet.luckysheetrefreshgrid();
            }
          }
        } else if (newVal === undefined && oldVal === undefined) {
          // 无数据时默认展示100行，20列的空表格
          currentVal.value = defaultData;
        }
      },
      { immediate: true },
    );

    onMounted(() => {
      if (!(window as IParams).luckySheetList) {
        (window as IParams).luckySheetList = [];
      }
      const list = (window as IParams).luckySheetList;
      list.push(uuid);
      bus.on('luckysheet', () => {
        if (list && list.length > 0 && list[list.length - 1] === uuid) {
          init();
        }
      });
    });

    onBeforeUnmount(() => {
      const index = (window as IParams).luckySheetList.indexOf(uuid);
      if (index > -1) {
        (window as IParams).luckySheetList.splice(index, 1);
      }
      bus.emit('luckysheet');
    });

    init();

    return {
      c,
      ns,
      uuid,
      loading,
    };
  },
  render() {
    return (
      <div class={[this.ns.b('container')]}>
        <div v-loading={this.loading} class={this.ns.b()} id={this.uuid}></div>
      </div>
    );
  },
});
