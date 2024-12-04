import { ref, defineComponent, Ref, watch, computed } from 'vue';
import {
  getSpanProps,
  useFocusAndBlur,
  useNamespace,
} from '@ibiz-template/vue3-util';
import './mob-personal-info.scss';
import { CodeListItem } from '@ibiz-template/runtime';
import { isNil } from 'ramda';
import { DataTypes } from '@ibiz-template/core';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { MobPersonalInfoEditorController } from './mob-personal-info.controller';

dayjs.extend(customParseFormat);

function isValidDateFormat(dateStr: string, format: string): boolean {
  if (dateStr === format) {
    return false;
  }
  return dayjs(dateStr, format, true).isValid(); // 严格模式判断是否是复合值格式化要求的日期文本
}

export const MobPersonalInfo = defineComponent({
  name: 'IBizMobPersonalInfo',
  props: getSpanProps<MobPersonalInfoEditorController>(),
  setup(props, { emit }) {
    const ns = useNamespace('mob-personal-info');

    const c = props.controller;

    const text: Ref<string> = ref('');

    // eslint-disable-next-line prefer-destructuring
    const codeList = c.codeList;

    // 文本分隔符
    const textSeparator =
      c.model.textSeparator || c.editorParams?.TEXTSEPARATOR || ',';

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

    // 是否显示表单默认内容
    const showFormDefaultContent = computed(() => {
      if (props.controlParams && props.controlParams.editmode === 'hover') {
        return true;
      }
      return false;
    });

    // 获取主题色
    const getThemeVar = (): string | null => {
      const root = document.documentElement;
      if (!root) {
        return null;
      }
      const style = getComputedStyle(root);

      const primary = style.getPropertyValue('--ibiz-color-primary');
      return primary;
    };

    // 判断是不是汉字
    const isChineseCharacter = (char: string): boolean => {
      return /[\u4E00-\u9FA5]/.test(char);
    };

    // 判断字符串是否同时存在英文和中文
    const hasChineseAndEnglish = (str: string): boolean => {
      const regex = /[\u4e00-\u9fa5]+.*[a-zA-Z]+|[a-zA-Z]+.*[\u4e00-\u9fa5]+/;
      return regex.test(str);
    };

    // 字符串转16进制颜色
    const stringToHexColor = (textVal: string): string => {
      if (!textVal) return '';
      // 计算字符串的哈希值
      let hash = 0;
      for (let i = 0; i < textVal.length; i++) {
        if (isChineseCharacter(textVal)) {
          // eslint-disable-next-line no-bitwise
          hash = textVal.charCodeAt(i) + ((hash << 5) - hash);
          // eslint-disable-next-line operator-assignment, no-bitwise
          hash = hash & hash;
        } else {
          const charCode = textVal.charCodeAt(i);
          hash += charCode.toString(16) as unknown as number;
        }
      }

      // 将哈希值转换为16进制颜色代码
      const trimmedHash = String(hash).substring(0, 6);

      let r = parseInt(trimmedHash.substring(0, 2), 16);
      let g = parseInt(trimmedHash.substring(2, 4), 16);
      let b = parseInt(trimmedHash.substring(4, 6), 16);
      if (r < 0) {
        r = 10;
      }
      if (g < 0) {
        g = 10;
      }
      if (b < 0) {
        b = 10;
      }

      const colorCode = `#${r.toString(16).padStart(2, '0')}${g
        .toString(16)
        .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
      if (colorCode === '#FFFFFF') {
        return getThemeVar() || colorCode;
      }
      return colorCode;
    };

    // 绘制文本标志头
    const renderTextPhoto = (textVal: string): string | void => {
      if (textVal && textVal.toString().length < 2) {
        return textVal;
      }
      if (textVal && textVal.toString().length >= 2) {
        // 大于两个字符
        const tag = hasChineseAndEnglish(textVal);
        // 存在中英文混合情况，按顺序取第一个英文与第一个中文
        if (tag) {
          const engChar: string =
            textVal.split('').find((char: string) => {
              return /[a-zA-Z]/.test(char);
            }) || '';
          const chineseStr: string =
            textVal.split('').find((char: string) => {
              return /[\u4E00-\u9FA5]/.test(char);
            }) || '';
          return `${engChar}${chineseStr}`.toLowerCase();
        }
        // 只存在英文，取前两个
        const engTag = /[a-zA-Z]/.test(textVal);
        if (engTag) {
          return textVal
            .split('')
            .filter((char: string) => {
              return /[a-zA-Z]/.test(char);
            })
            .slice(0, 2)
            .join('')
            .toUpperCase();
        }
        // 只存在中文，取最后两个
        const chineseTag = /[\u4E00-\u9FA5]/.test(textVal);
        if (chineseTag) {
          return textVal
            .split('')
            .filter((char: string) => {
              return /[\u4E00-\u9FA5]/.test(char);
            })
            .slice(-2)
            .join('');
        }
        return textVal.replaceAll(' ', '').substring(0, 2);
      }
    };

    // 代码表取值
    const findCodeListItem = (
      codelist: CodeListItem[] | undefined,
      value: string | number,
    ): CodeListItem | void => {
      if (codelist) {
        // eslint-disable-next-line eqeqeq
        const findItem = codelist.find(item => item.value == value);
        if (findItem) {
          return findItem;
        }
        for (let i = 0; i < codelist.length; i++) {
          const childrenItem = findCodeListItem(
            codelist[i].children,
            value,
          ) as CodeListItem;
          if (childrenItem) {
            return childrenItem;
          }
        }
      }
    };

    // 获取人员头像icon
    const getUsrAvatar = (item: CodeListItem): undefined | string => {
      if (item && item.data?.iconurl) {
        return item.data.iconurl;
      }
    };

    watch(
      () => props.value,
      (newVal, oldVal) => {
        if (newVal !== oldVal) {
          if (isNil(newVal)) {
            text.value = '';
            return;
          }
          let tempVal = '';
          const { valueFormat, dataType, unitName } = c.parent;
          if (c.model.valueType === 'SIMPLES') {
            tempVal = (newVal as string[]).join(textSeparator);
          } else if (c.model.valueType === 'OBJECT') {
            tempVal = (newVal as IData)[
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
            tempVal = tempValue.join(textSeparator);
          } else if (c.model.editorType === 'ADDRESSPICKUP') {
            // 解析地址选择器的JSON字符串数据
            try {
              const tempValue: string[] = [];
              const tempItems: IData[] = JSON.parse(newVal as string);
              tempItems.forEach((_item: IData) => {
                tempValue.push(
                  _item[
                    c.model.objectNameField
                      ? c.model.objectNameField
                      : 'srfmajortext'
                  ],
                );
              });
              tempVal = tempValue.join(textSeparator);
            } catch (error) {
              ibiz.log.error(`标签地址选择器的值不符合JSON格式${newVal}`);
            }
          } else if (valueFormat) {
            try {
              if (dataType != null && DataTypes.isDate(dataType)) {
                tempVal = dayjs(newVal as string).format(valueFormat);
              } else {
                // 面板属性项是拿不到dataType的，此时先用dayjs格式化，如果能格出来说明是时间型，否则走text-format
                const tempValue = dayjs(newVal as string).format(valueFormat);
                if (isValidDateFormat(tempVal, valueFormat)) {
                  tempVal = tempValue;
                } else {
                  tempVal = ibiz.util.text.format(`${newVal}`, valueFormat);
                }
              }
            } catch (error) {
              tempVal = `${newVal}`;
              ibiz.log.error(`${newVal} 值格式化错误`);
            }
          } else {
            tempVal = `${newVal}`;
          }
          if (unitName) {
            tempVal += unitName;
          }
          if (c.codeList && items.value?.length > 0) {
            const tempItems = items.value;
            const findItem = findCodeListItem(
              tempItems as CodeListItem[],
              tempVal,
            );
            tempVal = findItem?.text || tempVal;
          }
          text.value = tempVal;
        }
      },
      {
        immediate: true,
      },
    );

    const showText = computed(() => {
      let tempText = text.value;
      if (c.codeList && items.value?.length > 0) {
        const tempItems = items.value;
        const findItem = findCodeListItem(
          tempItems as CodeListItem[],
          tempText,
        );
        tempText = findItem?.text || tempText;
      }
      return tempText;
    });

    // 绘制人员头像
    const renderUserAvatar = (): JSX.Element | string => {
      if (props.value) {
        let findItem = null;
        if (c.editorParams.VALUETYPE !== 'OBJECT') {
          findItem = findCodeListItem(
            items.value as CodeListItem[],
            props.value as string,
          );
        } else if (c.editorParams?.OBJECTNAMEFIELD) {
          findItem = findCodeListItem(
            items.value as CodeListItem[],
            (props.value as IData)[c.editorParams.OBJECTNAMEFIELD] as string,
          );
        }
        if (findItem && getUsrAvatar(findItem)) {
          const avatar = getUsrAvatar(findItem);
          const icon = JSON.parse(avatar!);
          const urls = ibiz.util.file.calcFileUpDownUrl(c.context, c.params);
          const avatarUrl = urls.downloadUrl.replace('%fileId%', icon[0].id);
          return (
            <img
              class={ns.bem('content', 'head-sculpture', 'avatar-icon')}
              src={avatarUrl}
              alt=''
            />
          );
        }
      }
      return renderTextPhoto(showText.value) || '';
    };

    const renderContent = (): JSX.Element | string => {
      const tempVal = text.value;
      if (!tempVal) {
        return '- - -';
      }
      const img = c.parseAvatar(tempVal);
      if (img) {
        return (
          <div class={ns.b('content')}>
            <div class={ns.be('content', 'head-sculpture')}>
              <img src={img}></img>
            </div>
          </div>
        );
      }
      return (
        <div class={ns.b('content')}>
          <div
            class={ns.be('content', 'head-sculpture')}
            style={`background-color:${stringToHexColor(showText.value)}`}
          >
            {renderUserAvatar()}
          </div>
          {c.isShowNameText() ? (
            <div class={ns.be('content', 'tip')}>{showText.value}</div>
          ) : null}
        </div>
      );
    };

    return {
      ns,
      c,
      text,
      editorRef,
      showFormDefaultContent,
      renderContent,
    };
  },
  render() {
    return (
      <div
        class={[
          this.ns.b(),
          this.readonly ? this.ns.m('readonly') : '',
          this.ns.is('show-default', this.showFormDefaultContent),
        ]}
        ref='editorRef'
      >
        {this.renderContent()}
      </div>
    );
  },
});
