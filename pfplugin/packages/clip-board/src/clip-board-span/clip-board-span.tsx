import { ref, defineComponent, Ref, watch } from 'vue';
import {
  getSpanProps,
  useFocusAndBlur,
  useNamespace,
} from '@ibiz-template/vue3-util';
import { CodeListItem } from '@ibiz-template/runtime';
import { isNil } from 'ramda';
import { DataTypes } from '@ibiz-template/core';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { SpanEditorController } from './controller';
import './clip-board-span.scss';
import { IBizCopy } from '../copy/copy';

dayjs.extend(customParseFormat);

function isValidDateFormat(dateStr: string, format: string): boolean {
  if (dateStr === format) {
    return false;
  }
  return dayjs(dateStr, format, true).isValid(); // 严格模式判断是否是复合值格式化要求的日期文本
}

export const FastCopySpan = defineComponent({
  name: 'IBizFastCopySpan',
  props: getSpanProps<SpanEditorController>(),
  setup(props, { emit }) {
    const ns = useNamespace('clip-board-span');

    const c = props.controller;

    const text: Ref<string> = ref('');

    const { codeList } = c;

    // 文本分隔符
    const textSeparator =
      c.model.textSeparator || c.editorParams?.TEXTSEPARATOR || ',';

    watch(
      () => props.value,
      (newVal, oldVal) => {
        if (newVal !== oldVal) {
          if (isNil(newVal)) {
            text.value = '';
            return;
          }
          const { valueFormat, dataType, unitName } = c.parent;
          if (c.model.valueType === 'SIMPLES') {
            text.value = (newVal as string[]).join(textSeparator);
          } else if (c.model.valueType === 'OBJECT') {
            text.value = (newVal as IData)[
              c.model.objectNameField ? c.model.objectNameField : 'srfmajortext'
            ];
          } else if (c.model.valueType === 'OBJECTS') {
            const tempValue: string[] = [];
            (newVal as IData[]).forEach((_item: IData) => {
              tempValue.push(
                _item[
                  c.model.objectNameField
                    ? c.model.objectNameField
                    : 'srfmajortext'
                ],
              );
            });
            text.value = tempValue.join(textSeparator);
          } else if (c.model.editorType === 'ADDRESSPICKUP') {
            // 解析地址选择器的JSON字符串数据
            try {
              const tempValue: string[] = [];
              const items: IData[] = JSON.parse(newVal as string);
              items.forEach((_item: IData) => {
                tempValue.push(
                  _item[
                    c.model.objectNameField
                      ? c.model.objectNameField
                      : 'srfmajortext'
                  ],
                );
              });
              text.value = tempValue.join(textSeparator);
            } catch (error) {
              ibiz.log.error(`标签地址选择器的值不符合JSON格式${newVal}`);
            }
          } else if (valueFormat) {
            try {
              if (dataType != null && DataTypes.isDate(dataType)) {
                text.value = dayjs(newVal as string).format(valueFormat);
              } else {
                // 面板属性项是拿不到dataType的，此时先用dayjs格式化，如果能格出来说明是时间型，否则走text-format
                const tempVal = dayjs(newVal as string).format(valueFormat);
                if (isValidDateFormat(tempVal, valueFormat)) {
                  text.value = tempVal;
                } else {
                  text.value = ibiz.util.text.format(`${newVal}`, valueFormat);
                }
              }
            } catch (error) {
              text.value = `${newVal}`;
              ibiz.log.error(`${newVal} 值格式化错误`);
            }
          } else {
            text.value = `${newVal}`;
          }
          if (unitName) {
            text.value += unitName;
          }
        }
      },
      {
        immediate: true,
      },
    );

    // 代码表数据
    const items = ref<readonly CodeListItem[]>([]);
    if (codeList) {
      watch(
        () => props.data,
        newVal => {
          c.loadCodeList(newVal).then(_codeList => {
            items.value = _codeList;
          });
        },
        {
          immediate: true,
          deep: true,
        },
      );
    }

    // 聚焦失焦事件
    const { componentRef: editorRef } = useFocusAndBlur(
      () => emit('focus'),
      () => emit('blur'),
    );

    return {
      ns,
      c,
      text,
      editorRef,
      items,
    };
  },
  render() {
    let content = null;

    if (this.c.codeList) {
      content = this.items.length > 0 && (
        <iBizCodeList
          class={this.ns.e('code-list')}
          codeListItems={this.items}
          codeList={this.c.codeList}
          value={this.text}
        ></iBizCodeList>
      );
    } else if (this.text) {
      content = this.text;
    } else {
      content = '- - -';
    }

    return (
      <span
        class={[this.ns.b(), this.readonly ? this.ns.m('readonly') : '']}
        ref='editorRef'
      >
        <span class={this.ns.e('content')} title={this.text}>
          {content}
        </span>
        {this.text ? (
          <IBizCopy
            class={this.ns.e('copy')}
            value={this.text}
            codeListItems={this.items as unknown as CodeListItem[]}
          ></IBizCopy>
        ) : null}
      </span>
    );
  },
});
