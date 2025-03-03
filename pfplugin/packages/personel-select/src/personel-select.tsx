/* eslint-disable no-lonely-if */
/* eslint-disable no-else-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { PersonelSelectController } from './personel-select-controller';
import { VirtualList } from './virtual-list';
import { resource } from './global';
import { Util } from './util';
import './personel-select.scss';

export const PersonelSelect = defineComponent({
  name: 'PersonelSelect',
  props: getDataPickerProps<PersonelSelectController>(),
  emits: getEditorEmits(),
  setup(props, { emit }) {
    const ns = useNamespace('picker-dropdown');
    const ns2 = useNamespace('personel-select');

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
    const searchRef: Ref<any> = ref();

    // popover组件
    const popoverRef = ref();

    // 人员选择组件
    const personelSelRef = ref();

    // 人员信息项组件popover组件,根据移入赋值
    let userInfoPopRef: Ref<any>;

    // 远程搜索定时器标识
    const timer = ref();

    // 所有头像加载失败项
    const errorLoadItems: Ref<string[]> = ref([]);

    // 为关注时，界面需要绘制的个数
    let selRenderNum: number = 0;

    // 是否显示表单默认内容
    const showFormDefaultContent = computed(() => {
      if (
        (props as any).controlParams &&
        (props as any).controlParams.editmode === 'hover'
      ) {
        return true;
      }
      return false;
    });

    const isImg = (imgUrl: string) => {
      const reg =
        /^https?:|^http?:|^data:image|(\.png$|\.svg|\.jpg|\.png|\.gif|\.psd|\.tif|\.bmp|\.jpeg)$/;
      return reg.test(imgUrl);
    };

    /**
     * 处理值类型为OBJECTS时选中项UI展示
     * @author ljx
     * @date 2024-02-28 02:42:45
     * @param {IData} tempVal
     * @return {*}
     */
    const handleSelUIShow = (tempVal: IData): void => {
      const tempRefValue: string[] = [];
      const tempValueText: string[] = [];
      multipleSelect.value = [];
      (tempVal as Array<IData>).forEach((item: IData) => {
        const _item = clone(item);
        // 映射关注人员id与name
        if (
          (c.selfFillMap as IParams)?.user_id &&
          (c.selfFillMap as IParams)?.user_name
        ) {
          Object.assign(_item, {
            id: item[(c.selfFillMap as IParams).user_id as string],
            name: item[(c.selfFillMap as IParams).user_name as string],
          });
        }
        // 添加职称
        if (c.selfFillMap.user_title) {
          Object.assign(_item, {
            title: item[(c.selfFillMap as IParams).user_title as string],
          });
        }
        // 兼容写法,所有人员id都通过refValue存储,所有人员name通过curValue存储
        tempRefValue.push(item[(c.selfFillMap as IParams).user_id as string]);
        tempValueText.push(
          item[(c.selfFillMap as IParams).user_name as string],
        );
        // 为数组状态时使用multipleSelect存储
        multipleSelect.value.push(_item);
      });

      // 兼容写法,将人员id与人员名称转为字符串 才能绘制选中项
      refValue.value = tempRefValue?.join(c.separator);
      curValue.value = tempValueText?.toString();
    };

    /**
     * 处理值类型为OBJECTS时选中项抛值
     * @author ljx
     * @date 2024-02-28 02:42:45
     * @return {*}
     */
    const handleObjectsEmit = () => {
      const values = multipleSelect.value.map((select: IData) => {
        // 映射抛值
        const tempItem = {};
        Object.assign(tempItem, {
          [(c.selfFillMap as IParams)?.user_id as string]: select.id,
          [(c.selfFillMap as IParams)?.user_name as string]: select.name,
          [(c.selfFillMap as IParams)?.user_title as string]: select.title, // 添加用户职称
        });

        // 添加关注类型
        if (c.attentionTypeField && c.defaultAttentionValue) {
          Object.assign(tempItem, {
            [c.attentionTypeField]: c.defaultAttentionValue,
          });
        }
        return tempItem;
      });
      emit('change', values);
      // 设置默认值后，手动修复脏检查
      if ((c.parent as IData).form) {
        (c.parent as IData).form.state.modified = false;
      }
    };

    /**
     * 处理选中项映射,区分人员及部门
     * @author ljx
     * @date 2024-02-28 02:42:45
     * @return {*}
     */
    const handleSelItemMap = (item: IParams) => {
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
      return tempItem;
    };

    /**
     * 适配默认选择当前用户
     * @author ljx
     * @date 2024-02-28 02:42:45
     * @return {*}
     */
    const handleCurrentUserShow = async (): Promise<void> => {
      if (c.defaultSelCurUser) {
        const tempItem: IParams = {};
        Object.assign(tempItem, {
          id: c.context?.srfuserid,
          name: c.context?.srfusername,
        });

        if (!c.currentOperator) await c.initCurrentOperator({});
        if (c.currentOperator)
          Object.assign(tempItem, {
            title: c.currentOperator[c.deptFilterMap.title],
          });
        // 区分单多选
        if (c.multiple) {
          const index = multipleSelect.value.findIndex((select: IData) => {
            return select.id === tempItem[c.deptFilterMap.id];
          });
          if (index < 0) {
            multipleSelect.value.push(tempItem);
          } else {
            Object.assign(multipleSelect.value[index], tempItem);
          }
        } else if (multipleSelect.value.length === 0) {
          multipleSelect.value = [tempItem];
        }
        handleObjectsEmit();
      }
    };

    /**
     * 处理人员弹框及人员信息弹框关闭
     * @author ljx
     * @date 2024-02-29 02:42:45
     * @return {*}
     */
    const handleProperClose = () => {
      // 修复按下esc按键后人员弹框销毁后, 导致人员信息弹框在界面中定位异常
      if (userInfoPopRef?.value) {
        (userInfoPopRef.value as IParams).hide();
      }
      if (popoverRef.value) {
        popoverRef.value.hide();
      }
    };

    /**
     * 处理搜索框按键事件
     * @author ljx
     * @date 2024-02-29 02:42:45
     * @param {KeyboardEvent} e
     * @return {*}
     */
    const handleSearchKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'Escape' || e.keyCode === 27) {
        e.stopPropagation();
        handleProperClose();
      }
    };

    /**
     * 处理多选场景绘制项集合 为新建关注时执行
     * @author ljx
     * @date 2024-03-05 02:42:45
     */
    const handleSelRender = () => {
      if (!(c.defaultAttentionValue && c.valueType === 'OBJECTS')) {
        return;
      }
      const values = refValue.value.split(c.separator);
      selRenderNum = Util.calcSelItemRenderNum(values, personelSelRef.value);
      // 计算完成后重绘
      refValue.value = '';
      handleSelUIShow(multipleSelect.value);
    };

    watch(
      () => props.value,
      newVal => {
        if (newVal || newVal === null || newVal === undefined) {
          if (c.model.valueType === 'OBJECT') {
            curValue.value = newVal
              ? (newVal as IData)[c.objectNameField as string]
              : null;
          } else if (c.valueType === 'OBJECTS') {
            // 避免出现值类型配置为 OBJECTS, 返回值为其它数据类型
            const tempVal = isArray(newVal) ? newVal : [];
            handleSelUIShow(tempVal as IData);
            handleSelRender();
            // 直接返回,不执行后续值项逻辑
            return;
          } else {
            curValue.value = newVal as string;
          }
          if (newVal === null || newVal === undefined) {
            curValue.value = '';
            multipleSelect.value = [];
            emit('change', null, c.valueItem);
            emit('blur');
            // eslint-disable-next-line no-useless-return
            return;
          } else {
            // 构建回显数据集
            if (c.multiple && multipleSelect.value.length === 0) {
              if (c.valueItem && props.data && props.data[c.valueItem]) {
                let values = (props.data[c.valueItem] as string).split(
                  c.separator,
                );
                let names = (curValue.value as string).split(c.separator);
                if (c.isAddSymbol) {
                  values = values.map((value: string) => {
                    return value.slice(1, -1);
                  });
                  names = names.map((value: string) => {
                    return value.slice(1, -1);
                  });
                }
                values.forEach((value: string, index: number) => {
                  multipleSelect.value.push({
                    id: value,
                    name: names[index],
                  });
                });
              }
            }
          }
        }
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
          if (newVal === null || newVal === undefined) {
            multipleSelect.value = [];
            emit('change', null);
          }
        }
      },
      { immediate: true, deep: true },
    );

    const setEditable = (flag: boolean) => {
      if (flag) {
        isEditable.value = flag;
      } else {
        setTimeout(() => {
          isEditable.value = flag;
        }, 100);
      }
    };

    // 点击删除已选择的数据（多选时）
    const clearSelectItem = (data: IData, e: Event) => {
      onModalEvent(e);
      const index = multipleSelect.value.findIndex((select: IData) => {
        return select.id === data.id;
      });
      if (index > -1) {
        multipleSelect.value.splice(index, 1);
      }
      if (c.valueItem) {
        let result = multipleSelect.value.map((select: IData) => {
          return select.id;
        });
        if (c.isAddSymbol) {
          result = result.map((item: string) => {
            return `'${item}'`;
          });
        }
        emit('change', result.join(c.separator), c.valueItem);
      }
      if (c.valueType === 'OBJECTS') {
        handleObjectsEmit();
      } else {
        let names = multipleSelect.value.map((select: IData) => {
          return select.name;
        });
        if (c.isAddSymbol) {
          names = names.map((item: string) => {
            return `'${item}'`;
          });
        }
        emit('change', names.join(c.separator));
      }
    };

    // 往外抛值
    const onACSelect = async (data: IData) => {
      console.log('选中数据', data);
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
            title: item[c.userFilterMap.title],
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
            title: item[c.deptFilterMap.title],
          });
        } else {
          multipleSelect.value.splice(index, 1);
        }
      }

      // 允许多选
      if (c.multiple) {
        if (c.valueItem) {
          let result = multipleSelect.value.map((select: IData) => {
            return select.id;
          });
          if (c.isAddSymbol) {
            result = result.map((resItem: string) => {
              return `'${resItem}'`;
            });
          }
          emit('change', result.join(c.separator), c.valueItem);
        }
        if (c.valueType === 'OBJECTS') {
          handleObjectsEmit();
        } else {
          let names = multipleSelect.value.map((select: IData) => {
            return select.name;
          });
          if (c.isAddSymbol) {
            names = names.map((nameItem: string) => {
              return `'${nameItem}'`;
            });
          }
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
        if (c.model.valueType === 'OBJECT') {
          emit('change', c.handleObjectParams(item));
        } else if (c.valueType === 'OBJECTS') {
          multipleSelect.value = [handleSelItemMap(item)];
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
    const handleItems = (datas: IData[], key: string) => {
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
    const load = async (tag: boolean = false) => {
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
    const onClear = (e: Event) => {
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

    const valueText = computed(() => {
      return renderString(curValue.value);
    });

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

    watch(popoverRef, newVal => {
      if (props.autoFocus && newVal) {
        modelVisible.value = true;
      }
    });

    watch(modelVisible, newVal => {
      // popover关闭时;
      if (newVal === false) {
        emit('blur');
      }
    });

    // 远程搜索
    const remoteSearch = async (value: string | number) => {
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
                item[key] = item[c.userFilterMap[key]];
              });
            });
          } else {
            res.data.forEach((item: IData) => {
              Object.keys(c.deptFilterMap).forEach((key: string) => {
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
    const changeSelectState = (tag: 'user' | 'department') => {
      if (selectState.value === tag) return;
      selectState.value = tag;
      if (searchValue.value) {
        remoteSearch(searchValue.value);
        return;
      }
      if (selectState.value === 'user' && items.value.length === 0) {
        c.resetUserState();
        load();
      }
      if (selectState.value === 'department' && deptItems.value.length === 0) {
        c.resetDeptState();
        load();
      }
    };

    // 点击事件
    const handleClick = (e: MouseEvent) => {
      // 适配列表部件点击后执行行为
      if (!c.isShowNameText()) {
        e.stopPropagation();
      }
    };

    // 获取主题色
    const getThemeVar = () => {
      const root = document.documentElement;
      if (!root) {
        return null;
      }
      const style = getComputedStyle(root);

      const primary = style.getPropertyValue('--ibiz-color-primary');
      return primary;
    };

    // 判断是不是汉字
    const isChineseCharacter = (char: string) => {
      return /[\u4E00-\u9FA5]/.test(char);
    };

    // 判断字符串是否同时存在英文和中文
    const hasChineseAndEnglish = (str: string) => {
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
    const handleSearch = (value: string | number) => {
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

    // 绘制搜索框
    const renderSearchInput = () => {
      return (
        <el-input
          class={ns.be('select-modal', 'search-input')}
          ref={searchRef}
          v-model={searchValue.value}
          placeholder='搜索'
          onInput={(value: string | number) => handleSearch(value)}
          onKeydown={handleSearchKeyDown}
        >
          {{
            suffix: () => {
              return (
                <img
                  src={`${resource.dir('assets/images/svg/search.svg')}`}
                  alt=''
                />
              );
            },
          }}
        </el-input>
      );
    };

    // 绘制人员选择滑块
    const renderPersonSelectSlider = () => {
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

    // 计算语言资源
    const computeLang = (actions: IData[]) => {
      actions.forEach((action: any) => {
        if (action.capLanguageRes && action.capLanguageRes.lanResTag) {
          action.caption = ibiz.i18n.t(
            action.capLanguageRes.lanResTag,
            action.caption,
          );
        }
        if (action.tooltipLanguageRes && action.tooltipLanguageRes.lanResTag) {
          action.tooltip = ibiz.i18n.t(
            action.tooltipLanguageRes.lanResTag,
            action.tooltip,
          );
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

    // 绘制行为项
    const renderActionItem = (action: IUIActionGroupDetail) => {
      return (
        <div
          class={ns.bem('select-modal', 'actions', 'item')}
          title={action.tooltip || action.caption}
          onClick={(event: MouseEvent) => onActionClick(action, event)}
        >
          {action.showIcon && (action as any).sysImage && (
            <iBizIcon icon={(action as any).sysImage}></iBizIcon>
          )}
        </div>
      );
    };

    // 绘制界面行为（打开人员新增等）
    const renderAddPersonAction = () => {
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
    const renderPersonelGroup = () => {
      const actions = c.model.uiactionGroup?.uiactionGroupDetails || [];
      if (!c.isShowTab && actions.length === 0) return null;
      return (
        <div
          class={[
            ns.be('select-modal', 'select'),
            ns.is('no-solider-tab', !c.isShowTab && actions.length > 0),
          ]}
        >
          {c.isShowTab ? renderPersonSelectSlider() : null}
          {renderAddPersonAction()}
        </div>
      );
    };

    // 绘制选中的icon
    const renderSelectIcon = (key: string) => {
      if (c.multiple) {
        // 多选
        if (refValue.value) {
          let values = refValue.value.split(c.separator);
          if (c.isAddSymbol) {
            values = values.map((value: string) => {
              return value.slice(1, -1);
            });
          }
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
    const renderTextPhoto = (text: string) => {
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

    const avatarLoadError = (avatarUrl: string) => {
      console.log('头像加载失败');
      errorLoadItems.value.push(avatarUrl);
    };

    // 获取用户头像
    const getUserAvatar = (avatarUrl: string) => {
      if (!avatarUrl) {
        return null;
      }
      let url = '';
      if (isImg(avatarUrl)) {
        url = avatarUrl;
      } else {
        let urlConfig: IData[] = [];
        try {
          urlConfig = JSON.parse(avatarUrl);
        } catch (error) {
          console.error('解析头像数据失败', error);
        }
        if (urlConfig.length === 0) {
          return null;
        }
        const { downloadUrl } = ibiz.util.file.calcFileUpDownUrl(
          c.context,
          c.params,
          props.data,
          c.editorParams,
        );
        url = downloadUrl.replace('%fileId%', urlConfig[0].id);
      }
      return (
        <img
          class={ns.bem('select-modal', 'personel-list', 'avatar')}
          src={url}
          onError={() => avatarLoadError(avatarUrl)}
          alt=''
        />
      );
    };

    // 绘制用户头像
    const renderUserAvatar = (userid: string, usertext: string) => {
      const userUrl = c.getUserPictureUrl(userid, usertext);
      const avatar = getUserAvatar(userUrl);
      if (userUrl && !errorLoadItems.value.includes(userUrl) && avatar) {
        return avatar;
      }
      return renderTextPhoto(usertext);
    };

    // 绘制列表项
    const renderPersonItem = (item: IData) => {
      const usertext: string =
        selectState.value === 'user'
          ? item[c.userFilterMap.name] || item.name
          : item[c.deptFilterMap.name] || item.name;
      const userid: string =
        selectState.value === 'user'
          ? item[c.userFilterMap.id]
          : item[c.deptFilterMap.id];
      const userTitle: string =
        selectState.value === 'user'
          ? item[c.userFilterMap.title]
          : item[c.deptFilterMap.title];
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
            {userTitle && (
              <div
                class={ns.bem('select-modal', 'personel-list', 'title-label')}
              >
                {userTitle}
              </div>
            )}
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
    const renderUserInfoPop = (item: IData, panel: ILayoutPanel) => {
      const tempInfoPopRef = ref();
      return (
        <el-popover
          ref={tempInfoPopRef}
          target='hover'
          placement='right'
          offset={24}
          width={'auto'}
          onShow={(e: HTMLElement) => {
            // 移入后对将当前项popover实例赋值
            userInfoPopRef = tempInfoPopRef;
          }}
        >
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

    // 处理数据搜索过滤
    const handleDataFilter = (_items: IData[]) => {
      if (searchValue.value) {
        return romateData.value;
      }
      return _items;
    };

    // 阻止默认和冒泡
    const onModalEvent = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
    };

    /**
     * 滚动事件回调，手动控制滚动加载更多
     * @param contentHeight 数据区域总高度
     * @param scrollTop 卷起来的高度
     */
    const scrollEvent = (contentHeight: number, scrollTop: number) => {
      if (!visible.value) return;
      if (selectState.value === 'user') {
        if (contentHeight - scrollTop < 305) {
          if (!loading.value) {
            load();
          }
        }
      } else if (contentHeight - scrollTop < 250) {
        if (!loading.value) {
          load();
        }
      }
    };

    // 绘制人员列表
    const renderPersonelSelect = (tempItems: IData[]) => {
      const actions = c.model.uiactionGroup?.uiactionGroupDetails || [];
      const _items = handleDataFilter(tempItems);
      const panel = c.deACMode?.itemLayoutPanel;
      return (
        <VirtualList
          items={_items}
          itemHeight={36}
          class={[
            ns.be('select-modal', 'personel-list'),
            ns.be('select-modal', `personel-list-${selectState.value}`),
            ns.is('no-solider-tab', !c.isShowTab && actions.length > 0),
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
    const collpaseChange = (tag: boolean) => {
      collapseState.value = tag;
    };

    // 绘制部门人员树
    const renderDeptPersonelTree = () => {
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
            <img src={`${resource.dir('assets/images/svg/org.svg')}`}></img>
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
    const renderDropModal = () => {
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
    const renderNoSelectValue = () => {
      return (
        <div
          class={[
            ns.b('no-select-value'),
            ns.is('readonly', props.readonly || props.disabled),
          ]}
        >
          <img src={`${resource.dir('assets/images/svg/member.svg')}`} alt='' />
          <span>未设置</span>
        </div>
      );
    };

    // 绘制显示框
    const renderSelectInput = () => {
      const tipState = c.isShowNameTip();
      if (c.multiple) {
        // 多选场景
        // 判断绘制length与选中项length是否相等,如果小于则被截取过 超出隐藏逻辑
        let isEquality = false;

        // 多选场景
        const selectItems: IData[] = [];
        if (refValue.value) {
          let values = refValue.value.split(c.separator);
          let names = valueText.value.split(c.separator);
          if (c.isAddSymbol) {
            values = values.map((value: string) => {
              return value.slice(1, -1);
            });
          }
          if (c.isAddSymbol) {
            names = names.map((value: string) => {
              return value.slice(1, -1);
            });
          }
          values.forEach((value: string, index: number) => {
            selectItems.push({
              id: value,
              name: names[index],
            });
          });
        } else if (valueText.value === '当前用户' && props.disabled) {
          // 默认配置当前用户时需要禁用
          selectItems.push({
            id: valueText.value,
            name: valueText.value,
          });
        }

        // 为关注时
        if (
          c.defaultAttentionValue &&
          c.valueType === 'OBJECTS' &&
          selRenderNum > 0
        ) {
          isEquality = selRenderNum < multipleSelect.value?.length;
          selectItems?.splice(selRenderNum, selectItems?.length);
        }

        return (
          <div
            class={[
              ns.b('select-value-multiple'),
              ns.is('readonly', props.readonly || props.disabled),
              isEquality ? ns.be('select-value-multiple', 'hidden') : '',
            ]}
          >
            {selectItems?.map((select: IData) => {
              return (
                <div
                  class={ns.be('select-value-multiple', 'item')}
                  title={tipState ? select.name : ''}
                >
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
                    {props.readonly || props.disabled ? null : (
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
                class={ns2.b('multiple-ellipsis')}
                popper-class={ns2.be('multiple-ellipsis', 'popper')}
                effect='dark'
                content={valueText.value}
                placement='top'
                offset={12}
              >
                <span class={ns2.be('multiple-ellipsis', 'default')}>...</span>
              </el-tooltip>
            ) : null}
            <div class={ns.b('no-select-value')} title='选择人员'>
              <img
                src={`${resource.dir('assets/images/svg/member.svg')}`}
                alt=''
              />
            </div>
          </div>
        );
      }
      return (
        <div
          class={[
            ns.b('select-value'),
            ns.is('readonly', props.readonly || props.disabled),
          ]}
          title={tipState ? valueText.value : ''}
        >
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
          {props.readonly || props.disabled ? null : (
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
    const onPopShow = async () => {
      visible.value = true;
      emit('focus');
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

    const renderReadState = () => {
      if (valueText.value) {
        return renderSelectInput();
      }
      return renderNoSelectValue();
    };

    const onPageHide = () => {
      visible.value = false;
    };

    // 适配在表格中弹框点击切换部门时弹框直接关闭 问题原因: 打开弹框后,点击表格列时弹框直接销毁,未触发其内部关闭逻辑, 导致二次打开弹框点击异常
    watch(
      () => props.readonly,
      newVal => {
        if (newVal) {
          // 当为只读态时,执行popover内部关闭逻辑
          handleProperClose();
        }
      },
      { deep: true },
    );

    // 处理监听窗口变化
    const handleResize = () => {
      handleSelRender();
    };

    onMounted(() => {
      handleCurrentUserShow();
      window?.addEventListener('resize', handleResize);
      // 适配数据先加载 dom节点未获取到的情况
      handleSelRender();
    });

    onBeforeUnmount(() => {
      c.resetState();
      window?.removeEventListener('resize', handleResize);
    });

    return {
      ns,
      ns2,
      c,
      refValue,
      curValue,
      valueText,
      loading,
      items,
      personelSelRef,
      onClear,
      load,
      isEditable,
      popoverRef,
      setEditable,
      renderDropModal,
      renderNoSelectValue,
      renderSelectInput,
      renderReadState,
      onPopShow,
      onPageHide,
      handleClick,
      showFormDefaultContent,
      modelVisible,
    };
  },
  render() {
    // 编辑态内容
    const editContent = (
      <el-popover
        ref='popoverRef'
        v-model:visible={this.modelVisible}
        trigger='click'
        popperClass={this.ns.b('person-select')}
        width={320}
        teleported={true}
        onShow={() => this.onPopShow()}
        onHide={() => this.onPageHide()}
        {...this.$attrs}
      >
        {{
          reference: () => {
            return this.renderReadState();
          },
          default: () => {
            return this.renderDropModal();
          },
        }}
      </el-popover>
    );

    return (
      <div
        ref='personelSelRef'
        class={[
          this.ns.b(),
          this.ns2.b(),
          this.ns.b('person-value'),
          this.disabled ? this.ns.m('disabled') : '',
          this.readonly ? this.ns.m('readonly') : '',
          !this.c.isShowNameText() ? this.ns.m('only-icon') : '',
          this.ns.is('editable', this.isEditable),
          this.ns.is('show-default', this.showFormDefaultContent),
          this.ns2.is('multiple', this.c.multiple),
        ]}
        onClick={this.handleClick}
      >
        {this.readonly || this.disabled ? this.renderReadState() : editContent}
      </div>
    );
  },
});
