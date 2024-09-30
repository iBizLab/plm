/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  ref,
  watch,
  Ref,
  defineComponent,
  computed,
  VNode,
  onMounted,
  onBeforeUnmount,
  nextTick,
} from 'vue';
import {
  getDataPickerProps,
  getEditorEmits,
  renderString,
  useNamespace,
} from '@ibiz-template/vue3-util';
import { clone } from 'ramda';
import { isArray } from 'lodash-es';
import { ILayoutPanel, IUIActionGroupDetail } from '@ibiz/model-core';
import { AttentionController } from './attention-controller';
import { VirtualList } from './virtual-list/virtual-list';
import { Follow } from './follow/follow';
import { Util } from './util';
import './attention.scss';

export const Attention = defineComponent({
  name: 'IBizAttention',
  props: getDataPickerProps<AttentionController>(),
  emits: getEditorEmits(),
  setup(props, { emit }) {
    const ns = useNamespace('attention');

    const c = props.controller;

    // 当前值
    const curValue: Ref<string | null> = ref('');

    // 实体数据集-user
    const items: Ref<IData[]> = ref([]);

    // 实体数据集-dept-user
    const deptItems: Ref<IData[]> = ref([]);

    // 获取关联数据项值
    const refValue = ref('');

    // 部门人员树伸缩状态
    const collapseState = ref(false);

    // 是否编辑态
    const isEditable = ref(false);

    // 搜索值
    const searchValue = ref('');

    // 远程过滤后的人员数据
    const romateData: Ref<IData[]> = ref([]);

    // 选择状态
    const selectState: Ref<'user' | 'department'> = ref('user');

    // 多选选择数据
    const multipleSelect: Ref<IData[]> = ref([]);

    // 加载中
    const loading: Ref<boolean> = ref(false);

    // popover是否已经打开
    const visible: Ref<boolean> = ref(false);

    const modelVisible: Ref<boolean> = ref(false);

    const tempsrfkey: Ref<string> = ref('');

    // 搜索框
    const searchRef = ref();

    // 关注组件
    const attentionRef = ref();

    // 当前用户关注字段
    const curAttentionValue = ref('');

    // 远程搜索定时器标识
    const timer = ref();

    // 为关注时，界面需要绘制的个数
    let selRenderNum: number = 0;

    // 只读状态
    const readonlyState = computed(() => {
      return props?.readonly;
    });

    // 是否显示表单默认内容
    const showFormDefaultContent = computed(() => {
      if (
        (props as IParams).controlParams &&
        (props as IParams).controlParams.editmode === 'hover'
      ) {
        return true;
      }
      return false;
    });

    const valueText = computed(() => {
      return renderString(curValue.value);
    });

    /**
     * 阻止默认和冒泡
     */
    const onModalEvent = (e: Event): void => {
      e.preventDefault();
      e.stopPropagation();
    };

    /**
     * 处理默认选中的ui展示
     */
    const handleSelectUIShow = (): void => {
      const tempRefValue: string[] = [];
      const tempValueText: string[] = [];
      curAttentionValue.value = '';
      if (multipleSelect.value?.length > 0) {
        multipleSelect.value.forEach((item: IParams) => {
          tempRefValue.push(item[c.selfFillMap.user_id as string]);
          tempValueText.push(item[c.selfFillMap.user_name as string]);
          if (item[c.selfFillMap.user_id as string] === c.context.srfuserid) {
            curAttentionValue.value = item[c.attentionTypeField as string];
          }
        });
      }

      refValue.value = tempRefValue?.toString();
      curValue.value = tempValueText?.toString();
    };

    /**
     * 判断是否已关注
     */
    const handleFolloWed = (value: string): boolean => {
      return c.codeListMap?.FOLLOWED?.some(
        (followedItem: string | number) =>
          String(followedItem) === String(value),
      );
    };

    /**
     * 处理多选场景绘制项集合
     */
    const handleSelRender = (): void => {
      const values = refValue.value.split(c.separator);
      selRenderNum = Util.calcSelItemRenderNum(values, attentionRef.value);
      // 计算完成后重绘
      refValue.value = '';
      handleSelectUIShow();
    };

    watch(
      () => props.value,
      newVal => {
        if (newVal) {
          if (c.valueType === 'OBJECT') {
            curValue.value = newVal
              ? (newVal as IData)[c.objectNameField as string]
              : null;
          } else if (c.valueType === 'OBJECTS') {
            const tempVal = isArray(newVal) ? newVal : [];
            multipleSelect.value = [];
            (tempVal as Array<IData>).forEach((item: IData) => {
              const _item = clone(item);
              if (c.selfFillMap.user_id && c.selfFillMap.user_name) {
                Object.assign(_item, {
                  id: item[c.selfFillMap.user_id as string],
                  name: item[c.selfFillMap.user_name as string],
                  [c.attentionTypeField]: item[c.attentionTypeField],
                });
              }
              if (c.objectValueField) {
                Object.assign(_item, {
                  ...item[c.objectValueField],
                });
                delete _item[c.objectValueField];
              }
              multipleSelect.value.push(_item);
            });
            handleSelectUIShow();
          } else {
            curValue.value = newVal as string;
          }
        } else {
          curValue.value = '';
          multipleSelect.value = [];
        }
        handleSelRender();
      },
      { immediate: true },
    );

    // 计算值项，插件放到搜索栏之后没有传递data下来，所以用计算属性判断一下
    const tempValueItem = computed(() => {
      return (props.data && props.data[c.valueItem]) || undefined;
    });

    watch(
      tempValueItem,
      (newVal, oldVal) => {
        if (newVal !== oldVal) {
          refValue.value = newVal;
          // 如果值项被清空了，主文本也需清空
          if (newVal === null) {
            multipleSelect.value = [];
            emit('change', null);
          }
        }
      },
      { immediate: true, deep: true },
    );

    const setEditable = (flag: boolean): void => {
      if (flag) {
        isEditable.value = flag;
      } else {
        setTimeout(() => {
          isEditable.value = flag;
        }, 100);
      }
    };

    /**
     * 为OBJECTS时抛值
     */
    const handleObjectsEmit = (): void => {
      const values = multipleSelect.value.map((select: IData) => {
        const tempItem = {};
        Object.assign(tempItem, {
          [c.selfFillMap.user_id as string]: select.id,
          [c.selfFillMap.user_name as string]: select.name,
          [c.attentionTypeField]: select[c.attentionTypeField],
        });
        return tempItem;
      });
      emit('change', values);
    };

    // 点击删除已选择的数据（多选时）
    const clearSelectItem = (data: IData, e: Event): void => {
      onModalEvent(e);
      const index = multipleSelect.value.findIndex((select: IData) => {
        return select.id === data.id;
      });
      if (index > -1) {
        multipleSelect.value.splice(index, 1);
      }
      if (c.valueItem) {
        const result = multipleSelect.value.map((select: IData) => {
          return select.id;
        });
        emit('change', result.join(c.separator), c.valueItem);
      }
      if (c.valueType === 'OBJECTS') {
        handleObjectsEmit();
      } else {
        const names = multipleSelect.value.map((select: IData) => {
          return select.name;
        });
        emit('change', names.join(c.separator));
      }
    };

    // 往外抛值
    const onACSelect = async (data: IData): Promise<void> => {
      // 选中了搜索过滤返回的数据，那就把选中的数据加入已加载的人员或部门人员里,放在最前面,并去重
      if (searchValue.value) {
        if (selectState.value === 'user') {
          items.value.unshift(data);
        } else {
          deptItems.value.unshift(data);
        }
      }
      // 处理值项和本身的值
      const item: IData = {};
      Object.assign(item, data);
      if (selectState.value === 'user') {
        Object.assign(item, {
          [c.userFilterMap.id]: item[c.userFilterMap.id]
            ? item[c.userFilterMap.id]
            : item.srfkey,
          [c.userFilterMap.name]: item[c.userFilterMap.name]
            ? item[c.userFilterMap.name]
            : item.srfmajortext,
        });
        const index = multipleSelect.value.findIndex((select: IData) => {
          return select.id === item[c.userFilterMap.id];
        });
        if (index < 0) {
          multipleSelect.value.push({
            id: item[c.userFilterMap.id],
            name: item[c.userFilterMap.name],
            [c.attentionTypeField]: c.defaultAttentionValue,
          });
        } else {
          multipleSelect.value.splice(index, 1);
        }
      } else {
        Object.assign(item, {
          [c.deptFilterMap.id]: item[c.deptFilterMap.id]
            ? item[c.deptFilterMap.id]
            : item.srfkey,
          [c.deptFilterMap.name]: item[c.deptFilterMap.name]
            ? item[c.deptFilterMap.name]
            : item.srfmajortext,
        });
        const index = multipleSelect.value.findIndex((select: IData) => {
          return select.id === item[c.deptFilterMap.id];
        });
        if (index < 0) {
          multipleSelect.value.push({
            id: item[c.deptFilterMap.id],
            name: item[c.deptFilterMap.name],
            [c.attentionTypeField]: c.defaultAttentionValue,
          });
        } else {
          multipleSelect.value.splice(index, 1);
        }
      }

      // 允许多选
      if (c.multiple) {
        if (c.valueItem) {
          const result = multipleSelect.value.map((select: IData) => {
            return select.id;
          });
          emit('change', result.join(c.separator), c.valueItem);
        }
        const names = multipleSelect.value.map((select: IData) => {
          return select.name;
        });
        if (c.valueType === 'OBJECTS') {
          handleObjectsEmit();
        } else {
          emit('change', names.join(c.separator));
        }
      } else {
        // 单选
        // 处理回填数据
        const dataItems = await c.calcFillDataItems([data]);
        if (dataItems.length) {
          dataItems.forEach(dataItem => {
            emit('change', dataItem.value, dataItem.id);
          });
        }
        if (c.valueItem) {
          if (selectState.value === 'user') {
            emit('change', item[c.userFilterMap.id], c.valueItem);
          } else {
            emit('change', item[c.deptFilterMap.id], c.valueItem);
          }
        }
        if (c.valueType === 'OBJECT') {
          emit('change', c.handleObjectParams(item));
        } else if (c.valueType === 'OBJECTS') {
          const tempItem = {};
          if (selectState.value === 'user') {
            Object.assign(tempItem, {
              id: item[c.userFilterMap.id],
              name: item[c.userFilterMap.name],
            });
          } else {
            Object.assign(tempItem, {
              id: item[c.deptFilterMap.id],
              name: item[c.deptFilterMap.name],
            });
          }
          multipleSelect.value = [tempItem];
          handleObjectsEmit();
        } else if (selectState.value === 'user') {
          emit('change', data[c.userFilterMap.name]);
        } else {
          emit('change', data[c.deptFilterMap.name]);
        }
        modelVisible.value = false;
      }
      if (c.valueType !== 'OBJECTS') {
        emit('blur', data);
      }
      setEditable(false);
    };

    // 解决items值重复的问题
    const handleItems = (datas: IData[], key: string): void => {
      datas.forEach((_data: IData) => {
        const index = items.value.findIndex((_item: IData) => {
          return _item[key] === _data[key];
        });
        if (index > -1) {
          items.value.splice(index, 1, _data);
        } else {
          items.value.push(_data);
        }
      });
    };

    // 加载人员
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const load = async (tag: boolean = false): Promise<void> => {
      if (searchValue.value) return;
      loading.value = true;
      const params: IData = {};
      if (selectState.value === 'department') {
        params.page = c.deptpage;
      } else {
        params.page = c.page;
      }
      try {
        const res = await c.loadMore(props.data, selectState.value, params);
        if (res) {
          if (selectState.value === 'user') {
            if (items.value.length === 0) {
              items.value = res.data;
            } else {
              handleItems(res.data, c.userFilterMap.id);
            }
          } else if (deptItems.value.length === 0) {
            deptItems.value = res.data;
          } else {
            deptItems.value.push(...res.data);
          }
        }
      } catch {
        loading.value = false;
      }
      loading.value = false;
    };

    // 清除
    const onClear = (e: Event): void => {
      // 清空回填数据
      const { dataItems } = c;
      if (dataItems?.length) {
        dataItems.forEach(dataItem => {
          emit('change', null, dataItem.id);
        });
      }
      if (c.valueItem) {
        emit('change', null, c.valueItem);
      }
      if (c.valueType === 'OBJECTS') {
        emit('change', []);
      } else {
        emit('change', null);
        emit('blur', e);
      }
      e.stopPropagation();
      e.preventDefault();
    };

    /**
     * 关注改变事件
     */
    const onAttentionChange = (value: string | undefined): void => {
      if (!c.codeListMap) {
        return;
      }
      // 判断状态是否为已关注
      const tempState = handleFolloWed(String(value));
      if (tempState) {
        // 查看当前选中项内有没当前用户
        const tempSelectItem = multipleSelect.value.find(
          (item: IParams) =>
            item[c.selfFillMap.user_id as string] === c.context?.srfuserid,
        );
        // 如果没有则拿数据去匹配
        if (tempSelectItem) {
          Object.assign(tempSelectItem, { [c.attentionTypeField]: value });
        } else {
          // 如果没有,则去想办法获取到当前登录用户的数据,并push到多选数据中
          const tempItem = {
            id: c.context.srfuserid,
            name: c.context.srfusername,
            [c.attentionTypeField]: value,
          };
          multipleSelect.value.push(tempItem);
        }
      } else {
        const index = multipleSelect.value.findIndex(
          (item: IParams) =>
            item[c.selfFillMap.user_id as string] === c.context?.srfuserid,
        );
        // 取消关注
        if (index > -1) {
          multipleSelect.value.splice(index, 1);
        }
      }
      handleSelectUIShow();
      handleObjectsEmit();
    };

    watch(
      valueText,
      (newVal, oldVal) => {
        // 兼容 OBJECTS
        if (newVal !== oldVal && c.valueType !== 'OBJECTS') {
          emit('infoTextChange', newVal);
        }
      },
      { immediate: true },
    );

    // 远程搜索
    const remoteSearch = async (value: string | number): Promise<void> => {
      loading.value = true;
      try {
        const params: IData = {};
        Object.assign(params, { query: value, size: 1000 });
        const res = await c.getServiceData(
          selectState.value,
          props.data,
          params,
        );
        if (res) {
          if (selectState.value === 'user') {
            res.data.forEach((item: IData) => {
              Object.keys(c.userFilterMap).forEach((key: string) => {
                // eslint-disable-next-line no-param-reassign
                item[key] = item[c.userFilterMap[key]];
              });
            });
          } else {
            res.data.forEach((item: IData) => {
              Object.keys(c.deptFilterMap).forEach((key: string) => {
                // eslint-disable-next-line no-param-reassign
                item[key] = item[c.deptFilterMap[key]];
              });
            });
          }
          romateData.value = res.data;
          loading.value = false;
        }
      } catch {
        loading.value = false;
      }
    };

    // 切换人员选择模式: 全部人员 | 部门下人员
    const changeSelectState = (tag: 'user' | 'department'): undefined => {
      if (selectState.value === tag) return;
      selectState.value = tag;
      if (searchValue.value) {
        remoteSearch(searchValue.value);
        return;
      }
      if (selectState.value === 'user' && items.value.length === 0) {
        load();
      }
      if (selectState.value === 'department' && deptItems.value.length === 0) {
        load();
      }
    };

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
    const stringToHexColor = (text: string): string => {
      if (!text) return '';
      // 计算字符串的哈希值
      let hash = 0;
      for (let i = 0; i < text.length; i++) {
        if (isChineseCharacter(text)) {
          // eslint-disable-next-line no-bitwise
          hash = text.charCodeAt(i) + ((hash << 5) - hash);
          // eslint-disable-next-line operator-assignment, no-bitwise
          hash = hash & hash;
        } else {
          const charCode = text.charCodeAt(i);
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

    // 处理过滤搜索
    const handleSearch = (value: string | number): void => {
      clearTimeout(timer.value);
      timer.value = setTimeout(() => {
        if (!value && value !== 0) {
          load();
        } else {
          remoteSearch(value);
        }
        clearTimeout(timer.value);
      }, 300);
    };

    // 计算语言资源
    const computeLang = (actions: IData[]): void => {
      actions.forEach((action: IParams) => {
        if (action.capLanguageRes && action.capLanguageRes.lanResTag) {
          const tempText = ibiz.i18n.t(
            action.capLanguageRes.lanResTag,
            action.caption,
          );
          Object.assign(action, { caption: tempText });
        }
        if (action.tooltipLanguageRes && action.tooltipLanguageRes.lanResTag) {
          const tempText = ibiz.i18n.t(
            action.tooltipLanguageRes.lanResTag,
            action.tooltip,
          );
          Object.assign(action, { caption: tempText });
        }
      });
    };

    // 界面行为点击
    const onActionClick = async (
      detail: IUIActionGroupDetail,
      event: MouseEvent,
    ): Promise<void> => {
      await c.onActionClick(detail, [props.data], event);
    };

    // 处理数据搜索过滤
    const handleDataFilter = (_items: IData[]): IData[] => {
      if (searchValue.value) {
        return romateData.value;
      }
      return _items;
    };

    const onPageHide = (): void => {
      visible.value = false;
    };

    // 绘制搜索框
    const renderSearchInput = (): JSX.Element => {
      return (
        <el-input
          class={ns.be('select-modal', 'search-input')}
          ref={searchRef}
          v-model={searchValue.value}
          placeholder='搜索'
          onInput={(value: string | number) => handleSearch(value)}
        >
          {{
            suffix: () => {
              return (
                <svg
                  viewBox='0 0 16 16'
                  xmlns='http://www.w3.org/2000/svg'
                  height='1em'
                  width='1em'
                  preserveAspectRatio='xMidYMid meet'
                  focusable='false'
                >
                  <g id='atwnormal/search' stroke-width='1' fill-rule='evenodd'>
                    <path
                      d='M6.751 12.303A5.557 5.557 0 0 1 1.2 6.751C1.2 3.691 3.69 1.2 6.751 1.2a5.558 5.558 0 0 1 5.551 5.551 5.557 5.557 0 0 1-5.551 5.552M6.751 0a6.751 6.751 0 1 0 4.309 11.949l3.855 3.855a.6.6 0 1 0 .849-.849l-3.854-3.853A6.751 6.751 0 0 0 6.751 0'
                      id='atwFill-1'
                    ></path>
                  </g>
                </svg>
              );
            },
          }}
        </el-input>
      );
    };

    // 绘制人员选择滑块
    const renderPersonSelectSlider = (): JSX.Element => {
      return (
        <div class={ns.be('select-modal', 'select-state')}>
          <div
            class={[
              ns.bem('select-modal', 'select-state', 'select-slider'),
              ns.is('left', selectState.value === 'user'),
              ns.is('right', selectState.value !== 'user'),
            ]}
          ></div>
          <div
            class={ns.bem('select-modal', 'select-state', 'select-personel')}
            onClick={() => changeSelectState('user')}
          >
            人员
          </div>
          <div
            class={ns.bem('select-modal', 'select-state', 'select-department')}
            onClick={() => changeSelectState('department')}
          >
            部门
          </div>
        </div>
      );
    };

    // 绘制行为项
    const renderActionItem = (action: IUIActionGroupDetail): JSX.Element => {
      return (
        <div
          class={ns.bem('select-modal', 'actions', 'item')}
          title={action.tooltip}
          onClick={(event: MouseEvent) => onActionClick(action, event)}
        >
          {action.showIcon && (action as IParams).sysImage && (
            <iBizIcon icon={(action as IParams).sysImage}></iBizIcon>
          )}
        </div>
      );
    };

    // 绘制界面行为（打开人员新增等）
    const renderAddPersonAction = (): JSX.Element => {
      // todo 遍历获取配置的界面行为（一般这里只允许有一个界面行为，行为有配置图标的话用配置的图标，否则使用默认的图标）
      const actions = c.model.uiactionGroup?.uiactionGroupDetails || [];
      computeLang(actions);
      return (
        <div class={ns.be('select-modal', 'actions')}>
          {actions.map((action: IUIActionGroupDetail) => {
            return renderActionItem(action);
          })}
        </div>
      );
    };

    // 绘制人员及部门人员分组以及人员新增(界面行为)
    const renderPersonelGroup = (): JSX.Element => {
      return (
        <div class={ns.be('select-modal', 'select')}>
          {renderPersonSelectSlider()}
          {renderAddPersonAction()}
        </div>
      );
    };

    // 绘制选中的icon
    const renderSelectIcon = (key: string): JSX.Element | void | null => {
      if (c.multiple) {
        // 多选
        if (refValue.value) {
          const values = refValue.value.split(c.separator);
          const index = values.findIndex((value: string) => {
            return value === key;
          });
          return index > -1 ? (
            <div class={ns.bem('select-modal', 'personel-list', 'icon')}>
              <i class='fa fa-check' aria-hidden='true'></i>
            </div>
          ) : null;
        }
      } else {
        return refValue.value === key ? (
          <div class={ns.bem('select-modal', 'personel-list', 'icon')}>
            <i class='fa fa-check' aria-hidden='true'></i>
          </div>
        ) : null;
      }
    };

    // 绘制文本标志头
    const renderTextPhoto = (text: string): string | void => {
      if (text && text.toString().length < 2) {
        return text;
      }
      if (text && text.toString().length >= 2) {
        // 大于两个字符
        const tag = hasChineseAndEnglish(text);
        // 存在中英文混合情况，按顺序取第一个英文与第一个中文
        if (tag) {
          const engChar: string =
            text.split('').find((char: string) => {
              return /[a-zA-Z]/.test(char);
            }) || '';
          const chineseStr: string =
            text.split('').find((char: string) => {
              return /[\u4E00-\u9FA5]/.test(char);
            }) || '';
          return `${engChar}${chineseStr}`.toLowerCase();
        }
        // 只存在英文，取前两个
        const engTag = /[a-zA-Z]/.test(text);
        if (engTag) {
          return text
            .split('')
            .filter((char: string) => {
              return /[a-zA-Z]/.test(char);
            })
            .slice(0, 2)
            .join('')
            .toUpperCase();
        }
        // 只存在中文，取最后两个
        const chineseTag = /[\u4E00-\u9FA5]/.test(text);
        if (chineseTag) {
          return text
            .split('')
            .filter((char: string) => {
              return /[\u4E00-\u9FA5]/.test(char);
            })
            .slice(-2)
            .join('');
        }
        return text.replaceAll(' ', '').substring(0, 2);
      }
    };

    // 获取用户头像
    const getUserAvatar = (avatarUrl: string) => {
      if (!avatarUrl) {
        return null;
      }
      const urlConfig = JSON.parse(avatarUrl);
      if (urlConfig.length === 0) {
        return null;
      }
      const { downloadUrl } = ibiz.util.file.calcFileUpDownUrl(
        c.context,
        c.params,
        props.data,
        c.editorParams,
      );
      const url = downloadUrl.replace('%fileId%', urlConfig[0].id);
      return (
        <img
          class={ns.bem('select-modal', 'personel-list', 'avatar')}
          src={url}
          alt=''
        />
      );
    };

    // 绘制用户头像
    const renderUserAvatar = (userid: string, usertext: string) => {
      if (
        c.operatorMap &&
        c.operatorMap.get(userid) &&
        c.operatorMap.get(userid).data.iconurl
      ) {
        return getUserAvatar(c.operatorMap.get(userid).data.iconurl);
      }
      return renderTextPhoto(usertext);
    };

    // 绘制列表项
    const renderPersonItem = (item: IData): JSX.Element => {
      const usertext: string =
        selectState.value === 'user'
          ? item[c.userFilterMap.name] || item.name
          : item[c.deptFilterMap.name] || item.name;
      const userid: string =
        selectState.value === 'user'
          ? item[c.userFilterMap.id]
          : item[c.deptFilterMap.id];
      return (
        <div
          class={[
            ns.bem('select-modal', 'personel-list', 'item'),
            ns.is('selected', refValue.value === userid),
          ]}
          onClick={() => onACSelect(item)}
        >
          <div class={ns.bem('select-modal', 'personel-list', 'text')}>
            <div
              class={ns.bem('select-modal', 'personel-list', 'text-img')}
              style={`background-color:${stringToHexColor(usertext)}`}
            >
              {renderUserAvatar(userid, usertext)}
            </div>
            <div class={ns.bem('select-modal', 'personel-list', 'text-label')}>
              {usertext}
            </div>
            {userid === c.context.srfuserid ? (
              <div class={ns.bem('select-modal', 'personel-list', 'myself')}>
                我自己
              </div>
            ) : null}
          </div>
          {renderSelectIcon(userid)}
        </div>
      );
    };

    // 绘制项布局面板
    const renderPanelItem = (item: IData, modelData: ILayoutPanel): VNode => {
      const { context, params } = c;
      return (
        <iBizControlShell
          class={ns.b('panel-item')}
          data={item}
          modelData={modelData}
          context={context}
          params={params}
        ></iBizControlShell>
      );
    };

    // 绘制人员信息popover弹窗
    const renderUserInfoPop = (
      item: IData,
      panel: ILayoutPanel,
    ): JSX.Element => {
      return (
        <el-popover target='hover' placement='right' offset={24} width={'auto'}>
          {{
            reference: () => {
              return renderPersonItem(item);
            },
            default: () => {
              return renderPanelItem(item, panel);
            },
          }}
        </el-popover>
      );
    };

    /**
     * 滚动事件回调，手动控制滚动加载更多
     * @param contentHeight 数据区域总高度
     * @param scrollTop 卷起来的高度
     */
    const scrollEvent = (contentHeight: number, scrollTop: number): void => {
      if (!visible.value) return;
      if (selectState.value === 'user') {
        if (contentHeight - scrollTop < 305) {
          if (!loading.value) {
            load();
          }
        }
      } else if (contentHeight - scrollTop < 265) {
        if (!loading.value) {
          load();
        }
      }
    };

    // 绘制人员列表
    const renderPersonelSelect = (tempItems: IData[]): JSX.Element => {
      const _items = handleDataFilter(tempItems);
      const panel = c.deACMode?.itemLayoutPanel;
      return (
        <VirtualList
          items={_items}
          itemHeight={36}
          class={[
            ns.be('select-modal', 'personel-list'),
            ns.be('select-modal', `personel-list-${selectState.value}`),
          ]}
          onScrollEvent={(contentHeight: number, scrollTop: number) =>
            scrollEvent(contentHeight, scrollTop)
          }
        >
          {{
            default: (item: IData) => {
              // 有面板显示面板，没有就显示项，暂不支持项插件
              return panel
                ? renderUserInfoPop(item, panel)
                : renderPersonItem(item);
            },
          }}
        </VirtualList>
      );
    };

    // 更改伸缩状态
    const collpaseChange = (tag: boolean): void => {
      collapseState.value = tag;
    };

    // 绘制部门人员树
    const renderDeptPersonelTree = (): JSX.Element => {
      return (
        <div class={ns.be('select-modal', 'deptpersonel')}>
          <div class={ns.bem('select-modal', 'deptpersonel', 'dept')}>
            <div class='collpase-icon'>
              {collapseState.value ? (
                <i
                  class='fa fa-angle-right'
                  aria-hidden='true'
                  onClick={() => collpaseChange(false)}
                ></i>
              ) : (
                <i
                  class='fa fa-angle-down'
                  aria-hidden='true'
                  onClick={() => collpaseChange(true)}
                ></i>
              )}
            </div>
            <svg
              viewBox='0 0 16 16'
              xmlns='http://www.w3.org/2000/svg'
              height='1em'
              width='1em'
              preserveAspectRatio='xMidYMid meet'
              focusable='false'
            >
              <g
                id='aqf1.Base基础/1.icon图标/2.normal/部门'
                stroke-width='1'
                fill-rule='evenodd'
              >
                <path
                  d='M9 1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.39l-.016 2.138H11.5a2.1 2.1 0 0 1 2.095 1.95l.005.15V11h.4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.4V9.238a.9.9 0 0 0-.787-.893l-.113-.007h-7a.9.9 0 0 0-.893.787l-.007.113V11H4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.4V9.238a2.1 2.1 0 0 1 1.95-2.094l.15-.006h2.894L7.41 5H7a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2zm4.8 11.2h-1.6v1.6h1.6v-1.6zm-10 0H2.2v1.6h1.6v-1.6zm5-10H7.2v1.6h1.6V2.2z'
                  id='aqf形状结合'
                ></path>
              </g>
            </svg>
            <span>{`${c.context.srfusername}的团队`}</span>
            <span>·</span>
            <span>{c.depttotal}</span>
          </div>
          {!collapseState.value ? (
            <div class={ns.bem('select-modal', 'deptpersonel', 'dept-person')}>
              {renderPersonelSelect(deptItems.value)}
            </div>
          ) : null}
        </div>
      );
    };

    // 绘制弹出下拉模态
    const renderDropModal = (): JSX.Element => {
      return (
        <div
          class={ns.b('select-modal')}
          v-loading={loading.value}
          onPointerdown={onModalEvent}
          onPointerup={onModalEvent}
          onClick={onModalEvent}
        >
          {renderSearchInput()}
          {renderPersonelGroup()}
          {selectState.value === 'user'
            ? renderPersonelSelect(items.value)
            : renderDeptPersonelTree()}
        </div>
      );
    };

    // 无值时显示
    const renderNoSelectValue = (): JSX.Element => {
      return (
        <div class={ns.b('no-select-value')}>
          <svg
            viewBox='0 0 16 16'
            xmlns='http://www.w3.org/2000/svg'
            height='1em'
            width='1em'
            preserveAspectRatio='xMidYMid meet'
            focusable='false'
          >
            <g id='azeaction/user-add' stroke-width='1'>
              <path
                d='M7.9.4a4.1 4.1 0 1 1-.265 8.192.593.593 0 0 1-.268.126 6.411 6.411 0 0 0-4.624 3.698A6.375 6.375 0 0 0 2.2 15 .6.6 0 0 1 1 15c0-1.07.222-2.11.645-3.069a7.622 7.622 0 0 1 4.069-3.963A4.1 4.1 0 0 1 7.9.4zm4.6 9.9a.6.6 0 0 1 .592.503l.008.097-.001 1.399 1.401.001a.6.6 0 0 1 .592.503l.008.097a.6.6 0 0 1-.503.592l-.097.008-1.401-.001.001 1.401a.6.6 0 0 1-.503.592l-.097.008a.6.6 0 0 1-.592-.503L11.9 14.9v-1.401l-1.4.001a.6.6 0 0 1-.592-.503L9.9 12.9a.6.6 0 0 1 .503-.592l.097-.008h1.4v-1.4a.6.6 0 0 1 .503-.592l.097-.008zM7.9 1.6a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8z'
                id='aze形状结合'
              ></path>
            </g>
          </svg>
          <span>未设置</span>
        </div>
      );
    };

    /**
     * 只读态选中集合无值时显示
     */
    const renderReadonlyNoSelVal = (): JSX.Element => {
      return (
        <div class={ns.b('no-select-value')}>
          <span>未设置</span>
        </div>
      );
    };

    /**
     * 绘制选中值
     */
    const renderSelects = (): JSX.Element | void => {
      if (c.multiple) {
        // 多选场景
        const selectItems: IData[] = [];
        if (refValue.value) {
          const values = refValue.value.split(c.separator);
          const names = valueText.value.split(c.separator);
          values.forEach((value: string, index: number) => {
            selectItems.push({
              id: value,
              name: names[index],
            });
          });
        }
        // 判断绘制length与选中项length是否相等,如果小于则被截取过 超出隐藏
        let isEquality = false;
        if (selRenderNum > 0) {
          isEquality = selRenderNum < multipleSelect.value?.length;
          // 根据计算出的绘制个数绘制项
          selectItems?.splice(selRenderNum, selectItems?.length);
        }

        return (
          <div
            class={[ns.b('select-value-multiple'), ns.is('hidden', isEquality)]}
          >
            {selectItems?.map((select: IData) => {
              return (
                <div class={ns.be('select-value-multiple', 'item')}>
                  <div
                    class={[
                      ns.be('select-value', 'textimg'),
                      ns.bem('select-value-multiple', 'item', 'textimg'),
                    ]}
                    style={`background-color:${stringToHexColor(select.name)}`}
                  >
                    <el-tooltip
                      class='box-item'
                      effect='dark'
                      content={select.name}
                      placement='top'
                      offset={12}
                    >
                      {renderUserAvatar(select.id, select.name)}
                    </el-tooltip>
                    {props.readonly ? null : (
                      <div
                        class={[
                          ns.bem('select-value-multiple', 'item', 'close'),
                        ]}
                        onClick={(e: Event) => clearSelectItem(select, e)}
                      >
                        <i class='fa fa-close' aria-hidden='true'></i>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            {isEquality ? (
              <el-tooltip
                class={ns.b('multiple-ellipsis')}
                popper-class={ns.be('multiple-ellipsis', 'popper')}
                effect='dark'
                content={valueText.value}
                placement='top'
                offset={12}
              >
                <span class={ns.be('multiple-ellipsis', 'default')}>...</span>
              </el-tooltip>
            ) : null}
          </div>
        );
      }
    };

    // 绘制显示框
    const renderSelectInput = (): JSX.Element => {
      if (c.multiple) {
        return (
          <div class={ns.b('select-value-multiple')}>
            <div class={ns.b('select-value')}>
              <svg
                viewBox='0 0 16 16'
                xmlns='http://www.w3.org/2000/svg'
                height='1em'
                width='1em'
                preserveAspectRatio='xMidYMid meet'
                focusable='false'
              >
                <g id='azeaction/user-add' stroke-width='1'>
                  <path
                    d='M7.9.4a4.1 4.1 0 1 1-.265 8.192.593.593 0 0 1-.268.126 6.411 6.411 0 0 0-4.624 3.698A6.375 6.375 0 0 0 2.2 15 .6.6 0 0 1 1 15c0-1.07.222-2.11.645-3.069a7.622 7.622 0 0 1 4.069-3.963A4.1 4.1 0 0 1 7.9.4zm4.6 9.9a.6.6 0 0 1 .592.503l.008.097-.001 1.399 1.401.001a.6.6 0 0 1 .592.503l.008.097a.6.6 0 0 1-.503.592l-.097.008-1.401-.001.001 1.401a.6.6 0 0 1-.503.592l-.097.008a.6.6 0 0 1-.592-.503L11.9 14.9v-1.401l-1.4.001a.6.6 0 0 1-.592-.503L9.9 12.9a.6.6 0 0 1 .503-.592l.097-.008h1.4v-1.4a.6.6 0 0 1 .503-.592l.097-.008zM7.9 1.6a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8z'
                    id='aze形状结合'
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        );
      }
      return (
        <div class={ns.b('select-value')}>
          <div
            class={ns.be('select-value', 'textimg')}
            style={`background-color:${stringToHexColor(valueText.value)}`}
          >
            {renderUserAvatar(refValue.value, valueText.value)}
          </div>
          <div class={ns.be('select-value', 'text')}>
            <div class={ns.bem('select-value', 'text', 'label')}>
              {valueText.value}
            </div>
          </div>
          {props.readonly ? null : (
            <i
              class={['fa fa-times-circle', ns.be('select-value', 'close')]}
              aria-hidden='true'
              onClick={(e: Event) => onClear(e)}
            ></i>
          )}
        </div>
      );
    };

    // 展开下拉弹出框时加载
    const onPopShow = async (): Promise<void> => {
      visible.value = true;
      const { context, params } = c.handlePublicParams(
        props.data,
        c.context,
        c.params,
      );
      const userUrl = c
        .fill(c.userUrl, context, params, props.data)
        .replaceAll('//', '/');
      const deptUrl = c
        .fill(c.deptUrl, context, params, props.data)
        .replaceAll('//', '/');
      if (
        userUrl !== c.copyUserUrl ||
        deptUrl !== c.copyDeptUrl ||
        (props.data && props.data.srfkey !== tempsrfkey.value)
      ) {
        tempsrfkey.value = props.data?.srfkey || '';
        items.value = [];
        deptItems.value = [];
        c.resetState();
        load(true);
      }
      // 每次打开弹框时获取搜索框焦点, 获取焦点后按esc按键后可以关闭气泡, 并且不会冒泡影响到父元素
      await nextTick();
      searchRef.value?.focus();
    };

    const renderReadState = (): JSX.Element => {
      if (valueText.value) {
        return renderSelectInput();
      }
      return renderNoSelectValue();
    };

    /**
     * 绘制只读内容
     */
    const renderReadonlyContent = (): JSX.Element | IData => {
      if (valueText.value) {
        return [renderSelects()];
      }
      return renderReadonlyNoSelVal();
    };

    /**
     * 绘制proper
     */
    const renderProper = (): JSX.Element => {
      return (
        <el-popover
          ref='popoverRef'
          v-model:visible={modelVisible.value}
          trigger='click'
          popperClass={ns.b('person-select')}
          placement={'top-start'}
          width={320}
          teleported={true}
          onShow={() => onPopShow()}
          onHide={() => onPageHide()}
        >
          {{
            reference: () => {
              return renderReadState();
            },
            default: () => {
              return renderDropModal();
            },
          }}
        </el-popover>
      );
    };

    /**
     * 绘制编辑态
     */
    const renderEditContent = (): IData => {
      return [renderSelects(), renderProper()];
    };

    // 处理监听窗口变化
    const handleResize = (): void => {
      handleSelRender();
    };

    onMounted(() => {
      if (attentionRef.value) {
        // 开始监听宽度变化
        window?.addEventListener('resize', handleResize);
        // 适配数据先加载 dom节点未获取到的情况
        handleSelRender();
      }
    });

    onBeforeUnmount(() => {
      c.resetState();
      if (attentionRef.value) {
        // 停止监听宽度变化
        window?.removeEventListener('resize', handleResize);
      }
    });

    return {
      ns,
      c,
      refValue,
      curValue,
      valueText,
      loading,
      items,
      isEditable,
      showFormDefaultContent,
      modelVisible,
      curAttentionValue,
      attentionRef,
      readonlyState,
      onClear,
      load,
      setEditable,
      renderDropModal,
      renderNoSelectValue,
      renderSelectInput,
      onPopShow,
      onPageHide,
      onAttentionChange,
      renderEditContent,
      renderReadonlyContent,
    };
  },
  render() {
    return (
      <div
        ref='attentionRef'
        class={[
          this.ns.b(),
          this.ns.b('person-value'),
          this.disabled ? this.ns.m('disabled') : '',
          this.readonlyState ? this.ns.m('readonly') : '',
          this.ns.is('editable', this.isEditable),
          this.ns.is('show-default', this.showFormDefaultContent),
        ]}
      >
        {this.readonlyState
          ? this.renderReadonlyContent()
          : this.renderEditContent()}
        <Follow
          disabled={this.disabled}
          value={this.curAttentionValue}
          codeListId={this.c.codeListId}
          codeListMap={this.c.codeListMap}
          defaultSelected={this.c.defaultSelected}
          controller={this.c}
          onChange={this.onAttentionChange}
        ></Follow>
      </div>
    );
  },
});
