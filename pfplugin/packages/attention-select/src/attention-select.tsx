/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-nested-ternary */
import {
  defineComponent,
  onMounted,
  ref,
  Ref,
  watch,
  computed,
  resolveComponent,
  h,
} from 'vue';
import {
  getDataPickerProps,
  getEditorEmits,
  useFocusAndBlur,
  useNamespace,
} from '@ibiz-template/vue3-util';
import './attention-select.scss';
import { IModalData, Modal, ViewMode } from '@ibiz-template/runtime';
import { clone } from 'ramda';
import { AttentionSelectController } from './attention-select.controller';
import { renderTextPhoto, stringToHexColor } from './attention-select.util';

export const AttentionSelect = defineComponent({
  name: 'AttentionSelect',
  props: getDataPickerProps<AttentionSelectController>(),
  emits: getEditorEmits(),
  setup(props, { emit }) {
    const ns = useNamespace('attention-select');

    const c = props.controller!;

    const editorModel = c.model;

    const loadErrorAvatar: Ref<string[]> = ref([]);

    // 是否单选
    const singleSelect = ref(true);
    if (editorModel.editorParams) {
      if (editorModel.editorParams.multiple) {
        singleSelect.value = !c.toBoolean(editorModel.editorParams.multiple);
      }
    }

    // 当前多选框选中值的key集合
    const keySet: Ref<string[]> = ref([]);

    // 所有操作过的下拉选项对象集合
    const items: Ref<IData[]> = ref([]);

    // 选中数据
    const selectedData: Ref<IData[]> = ref([]);

    // 输入框值(搜索值)
    const queryValue: Ref<string> = ref('');

    // 下拉显示控制变量
    const visible = ref(false);

    // 选择视图宽度
    const pickViewWidth = ref('auto');

    // 视图上下文
    const context: Ref<IContext> = ref(c.context);

    // 视图参数
    const params: Ref<IData> = ref(c.params);

    watch(
      () => props.data,
      newVal => {
        // 转换视图上下文、视图参数
        const { context: tempContext, params: tempParams } =
          c.handlePublicParams(newVal, c.context, c.params);
        Object.assign(context.value, tempContext);
        Object.assign(params.value, tempParams);
      },
      { immediate: true, deep: true },
    );

    // 是否编辑态
    const isEditable = ref(false);

    // 多选时临时储存值与值项，等blur再抛出去
    const multipleTempValue: Ref<string | null> = ref(null);

    const multipleTempText: Ref<string | null> = ref(null);

    const multipleObjs: Ref<IData[] | null> = ref(null);

    // 是否显示视图
    const showView = ref(false);

    // 是否显示表单默认内容
    const showFormDefaultContent = computed(() => {
      if (
        props.controlParams &&
        props.controlParams.editmode === 'hover' &&
        !props.readonly
      ) {
        return true;
      }
      return false;
    });

    const setEditable = (flag: boolean) => {
      if (flag) {
        isEditable.value = flag;
      } else {
        setTimeout(() => {
          isEditable.value = flag;
        }, 100);
      }
    };

    // 改变显示事件
    const triggerMenu = (show?: boolean) => {
      if (props.disabled) {
        return;
      }
      if (!show) {
        visible.value = !visible.value;
      } else {
        visible.value = show;
      }
    };

    // 聚焦失焦事件
    const { componentRef: editorRef } = useFocusAndBlur(
      () => emit('focus'),
      () => emit('blur'),
    );

    watch(
      () => props.value,
      newVal => {
        if (singleSelect.value) {
          if (c.model.valueType === 'OBJECT') {
            queryValue.value = newVal
              ? (newVal as IData)[c.objectNameField as string]
              : null;
          } else {
            queryValue.value = (newVal as string) || '';
          }
          if (!props.data || !c.valueItem || !props.data[c.valueItem]) {
            ibiz.log.error('值项异常');
          } else {
            selectedData.value = [
              { srfkey: props.data[c.valueItem], srfmajortext: props.value },
            ];
            params.value.selecteddata = selectedData.value;
          }
        } else {
          const selectItems: IData[] = [];
          keySet.value = [];
          items.value = [];
          if (newVal) {
            if (c.model.valueType === 'OBJECTS') {
              (newVal as Array<IData>).forEach((item: IData) => {
                const _item = clone(item);
                Object.assign(_item, {
                  [c.keyName]: item[c.objectIdField as string],
                  [c.textName]: item[c.objectNameField as string],
                });
                if (c.objectValueField) {
                  Object.assign(_item, {
                    ...item[c.objectValueField],
                  });
                  delete _item[c.objectValueField];
                }
                if (_item[c.keyName]) {
                  items.value.push(_item);
                  keySet.value.push(_item[c.keyName]);
                }
              });
              selectItems.push(...(newVal as IData[]));
            } else if (
              !props.data ||
              !c.valueItem ||
              !props.data[c.valueItem]
            ) {
              ibiz.log.error('值项异常');
            } else {
              const tempValue = props.data[c.valueItem].split(',');
              const tempText = (newVal as string).split(',');
              tempValue.forEach((srfkey: string, index: number) => {
                selectItems.push({
                  srfmajortext: tempText[index],
                  srfkey,
                });
              });
              selectItems.forEach((item: IData) => {
                keySet.value.push(item.srfkey);
                const index = items.value.findIndex(i =>
                  Object.is(i.srfkey, item.srfkey),
                );
                if (index < 0) {
                  items.value.push({
                    srfmajortext: item.srfmajortext,
                    srfkey: item.srfkey,
                  });
                }
              });
            }
          }
          selectedData.value = selectItems;
          multipleObjs.value = selectItems;
        }
      },
      {
        immediate: true,
        deep: true,
      },
    );

    // 自动聚焦
    watch(editorRef, newVal => {
      if (props.autoFocus && newVal && newVal.value.focus) {
        newVal.value.focus();
      }
    });

    onMounted(() => {
      if (editorRef.value) {
        pickViewWidth.value = `${editorRef.value.$parent.$el.offsetWidth}px`;
      }
    });

    // 清除
    const onClear = () => {
      // 清空回填数据
      const dataItems = c.dataItems;
      if (dataItems?.length) {
        dataItems.forEach((dataItem: IData) => {
          emit('change', null, dataItem.id);
        });
      }
      if (c.valueItem) {
        emit('change', null, c.valueItem);
      }
      emit('change', null);
    };

    // 输入框change事件
    const onInputChange = (e: IData) => {
      if (!e) {
        onClear();
      }
    };

    // 视图数据改变
    const onViewDataChange = (event: IData[]) => {
      if (event.length === 0) {
        if (singleSelect.value) {
          onClear();
        } else {
          items.value = [];
          if (c.model.valueType === 'OBJECTS') {
            multipleObjs.value = null;
          } else {
            if (c.valueItem) {
              multipleTempValue.value = null;
            }
            multipleTempText.value = null;
          }

          // input输入框数据实时变更
          keySet.value = [];
        }
      } else if (singleSelect.value) {
        visible.value = false;
        if (c.valueItem) {
          const tempValue = event[0][c.keyName]
            ? event[0][c.keyName]
            : event[0].srfkey;
          emit('change', tempValue, c.valueItem);
        }
        const tempText = event[0][c.textName]
          ? event[0][c.textName]
          : event[0].srfmajortext;
        if (c.model.valueType === 'OBJECT') {
          emit('change', c.handleObjectParams(event[0]));
        } else {
          emit('change', tempText);
        }
      } else if (c.model.valueType === 'OBJECTS') {
        if (event && Array.isArray(event)) {
          const objs: IData[] = [];
          event.forEach(item => {
            const obj = c.handleObjectParams(item);
            Object.assign(obj, {
              [c.selfFillMap.user_id as string]: item.id,
              [c.selfFillMap.user_name as string]: item.name,
              [c.selfFillMap.user_title as string]: item.title,
            });
            delete obj.srfnodeid;
            objs.push(obj);
          });
          multipleObjs.value = objs;
        }
      } else {
        let tempValue: string = '';
        let tempText: string = '';
        if (event && Array.isArray(event)) {
          items.value = [];
          event.forEach((select: IData) => {
            const srfkey = select[c.keyName]
              ? select[c.keyName]
              : select.srfkey;
            tempValue += `${srfkey},`;
            const srfmajortext = select[c.textName]
              ? select[c.textName]
              : select.srfmajortext;
            tempText += `${srfmajortext},`;
            const index = items.value.findIndex(item =>
              Object.is(item.srfkey, srfkey),
            );
            if (index < 0) {
              items.value.push({ srfmajortext, srfkey });
            }
          });
        }
        tempValue = tempValue.substring(0, tempValue.length - 1);
        tempText = tempText.substring(0, tempText.length - 1);
        // 临时存储值项和本身的值
        if (c.valueItem) {
          multipleTempValue.value = tempValue;
        }
        multipleTempText.value = tempText;
      }

      // 多选时视图数据变更就更新select的数据
      if (!singleSelect.value) {
        if (event.length === 0) {
          items.value = [];
          keySet.value = [];
        } else if (Array.isArray(event)) {
          items.value = event.map(item => {
            return {
              srfkey: item[c.keyName] || item.srfkey,
              srfmajortext: item[c.textName] || item.srfmajortext,
            };
          });
          keySet.value = items.value.map(item => item.srfkey);
        }
      }

      // 多选抛值
      if (!singleSelect.value) {
        if (c.model.valueType === 'OBJECTS') {
          emit('change', multipleObjs.value);
        } else {
          if (c.valueItem) {
            emit('change', multipleTempValue.value, c.valueItem);
          }
          emit('change', multipleTempText.value);
        }
      }
    };

    // 打开数据链接视图
    const openLinkView = async (e: MouseEvent) => {
      e.stopPropagation();
      const res = await c.openLinkView(props.data);
      if (res && res.ok && res.data) {
        onViewDataChange(res.data);
      }
    };

    // 下拉选中回调
    const onSelectChange = (selects: string[]) => {
      const val: IData[] = [];
      if (selects.length > 0) {
        selects.forEach((select: string) => {
          const index = items.value.findIndex(item =>
            Object.is(item.srfkey, select),
          );
          if (index >= 0) {
            val.push(items.value[index]);
          }
        });
      }
      if (c.model.valueType === 'OBJECTS') {
        const objs: IData[] = [];
        val.forEach(item => {
          const obj = c.handleObjectParams(item);
          objs.push(obj);
        });
        emit('change', objs);
      } else {
        let tempValue: string = '';
        let tempText: string = '';
        val.forEach((select: IData) => {
          const srfkey = select[c.keyName] ? select[c.keyName] : select.srfkey;
          tempValue += `${srfkey},`;
          const srfmajortext = select[c.textName]
            ? select[c.textName]
            : select.srfmajortext;
          tempText += `${srfmajortext},`;
        });
        tempValue = tempValue.substring(0, tempValue.length - 1);
        tempText = tempText.substring(0, tempText.length - 1);
        // 处理值项和本身的值
        if (c.valueItem) {
          multipleTempValue.value = tempValue;
          emit('change', tempValue, c.valueItem);
        }
        multipleTempText.value = tempText;
        emit('change', tempText);
      }
    };

    // 远程搜索
    const remoteMethod = (e: string) => {
      queryValue.value = e;
    };

    // 绑定事件
    const onSelectionChange = (event: IModalData) => {
      if (event.data) {
        onViewDataChange(event.data);
        if (singleSelect.value && editorRef.value) {
          editorRef.value.handleClose();
        }
      }
    };

    const modal = new Modal({
      mode: ViewMode.DRAWER,
      viewUsage: 2,
      dismiss: (_data: IModalData) => {
        onSelectionChange(_data);
      },
    });

    const onFocus = (e: IData) => {
      emit('focus', e);
      setEditable(true);
    };

    const onBlur = (e: IData) => {
      emit('blur', e);
      setEditable(false);
    };

    // 处理点击键盘
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e && e.code === 'Enter') {
        emit('enter', e);
      } else if (e.code === 'Escape') {
        e.stopPropagation();
        if (editorRef.value) {
          editorRef.value.handleClose();
        }
      }
    };

    const valueText = computed(() => {
      if (singleSelect.value) {
        return queryValue.value;
      }
      return selectedData.value.map(item => item[c.textName]).join(',');
    });

    // dropdown内容显示隐藏
    const onVisibleChange = (e: boolean) => {
      showView.value = e;
      // 下拉隐藏的时候触发编辑器的blur事件
      if (e === false) {
        onBlur({});
      } else if (editorRef.value) {
        pickViewWidth.value = `${editorRef.value.$parent.$el.offsetWidth}px`;
      }
    };

    const handleDropDownKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        e.stopPropagation();
        if (editorRef.value) {
          editorRef.value.handleClose();
        }
      }
    };

    const onDelete = (e: MouseEvent, item: IData) => {
      e.stopPropagation();
      e.preventDefault();
      const tempSelect = selectedData.value.filter((select: IData) => {
        const key = c.objectIdField || c.keyName;
        return select[key] !== item[key];
      });
      emit('change', tempSelect);
    };

    // 头像加载失败
    const onAvatarLoadError = (key: string) => {
      loadErrorAvatar.value.push(key);
    };

    // 绘制头像
    const renderAvatar = (item: IData) => {
      const select = c.operatorMap.get(item[c.objectNameField || c.keyName]);
      if (
        select &&
        loadErrorAvatar.value.indexOf(item[c.objectNameField || c.keyName]) ===
          -1
      ) {
        return (
          <img
            src={select.data.iocnurl}
            alt=''
            onError={() =>
              onAvatarLoadError(item[c.objectNameField || c.keyName])
            }
          />
        );
      }
      const text = item[c.objectNameField || c.keyName];
      return (
        <div
          class={ns.bem('select-data', 'item', 'avatar')}
          style={`background-color:${stringToHexColor(text)}`}
        >
          {renderTextPhoto(text)}
        </div>
      );
    };

    // 绘制选中项
    const renderSelectItem = (item: IData) => {
      return (
        <div class={ns.be('select-data', 'item')}>
          {renderAvatar(item)}
          {props.readonly ? null : (
            <i
              class={[
                'fa fa-times-circle',
                ns.bem('select-data', 'item', 'clear'),
              ]}
              aria-hidden='true'
              onClick={(e: MouseEvent) => onDelete(e, item)}
            ></i>
          )}
        </div>
      );
    };

    const renderSelectData = () => {
      let add;
      if (!singleSelect.value || items.value.length === 0) {
        add = (
          <div class={ns.be('select-data', 'add')}>
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
      }
      if (props.readonly || props.disabled) {
        add = null;
      }
      return (
        <div class={ns.b('select-data')}>
          {selectedData.value.map((item: IData) => {
            return renderSelectItem(item);
          })}
          {add}
        </div>
      );
    };
    const modelVisible = ref(false);

    const onPageHide = () => {
      onVisibleChange(false);
    };

    const onPopShow = () => {
      onVisibleChange(true);
    };

    return {
      ns,
      c,
      singleSelect,
      keySet,
      items,
      queryValue,
      visible,
      pickViewWidth,
      context,
      params,
      editorRef,
      onInputChange,
      triggerMenu,
      onViewDataChange,
      onClear,
      openLinkView,
      onSelectChange,
      remoteMethod,
      onSelectionChange,
      modal,
      onFocus,
      onBlur,
      handleKeyUp,
      valueText,
      isEditable,
      setEditable,
      showFormDefaultContent,
      onVisibleChange,
      showView,
      selectedData,
      handleDropDownKeyDown,
      renderSelectData,
      modelVisible,
      onPopShow,
      onPageHide,
    };
  },
  render() {
    // 编辑态内容
    const editContent = (
      <el-popover
        ref='editorRef'
        v-model:visible={this.modelVisible}
        trigger='click'
        popperClass={this.ns.b('person-select')}
        placement={'top-start'}
        width={500}
        teleported={true}
        onShow={() => this.onPopShow()}
        onHide={() => this.onPageHide()}
        {...this.$attrs}
      >
        {{
          reference: () => {
            return this.renderSelectData();
          },
          default: () => {
            if (!this.showView) {
              return;
            }

            const viewShell = resolveComponent('IBizViewShell');
            const selects = this.selectedData.map((item: IData) => {
              return {
                srfkey: item[this.c.selfFillMap.user_id] || item.id,
                srfmarjortext: item[this.c.selfFillMap.user_name] || item.name,
                ...item,
              };
            });
            return (
              this.c.pickupView &&
              h(viewShell, {
                context: this.context,
                params: this.params,
                viewId: this.c.pickupView.id,
                style: { height: '100%', width: '100%' },
                state: {
                  singleSelect: this.singleSelect,
                  selectedData: selects,
                },
                onSelectionChange: this.onSelectionChange,
                modal: this.modal,
              })
            );
          },
        }}
      </el-popover>
    );
    // 只读态内容
    const readonlyContent = (
      <div class={(this.ns.b(), this.ns.m('readonly'))}>
        {this.renderSelectData()}
      </div>
    );

    // 表单默认内容
    const formDefaultContent = (
      <div class={this.ns.b('form-default-content')}>
        {this.valueText ? (
          this.singleSelect ? (
            <span class={this.ns.b('content-item')}>{this.valueText}</span>
          ) : (
            this.valueText
              .split(',')
              .map((item: string) => (
                <span class={this.ns.b('content-item')}>{item}</span>
              ))
          )
        ) : (
          '-'
        )}
      </div>
    );

    return (
      <div
        class={[
          this.ns.b(),
          this.disabled ? this.ns.m('disabled') : '',
          this.readonly ? this.ns.m('readonly') : '',
          this.ns.is('editable', this.isEditable),
          this.ns.is('show-default', this.showFormDefaultContent),
        ]}
      >
        {this.showFormDefaultContent && formDefaultContent}
        {this.readonly ? readonlyContent : editContent}
      </div>
    );
  },
});
