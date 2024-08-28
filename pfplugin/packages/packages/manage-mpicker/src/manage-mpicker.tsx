import {
  ref,
  watch,
  Ref,
  defineComponent,
  computed,
  onMounted,
  VNode,
} from 'vue';
import {
  getDataPickerProps,
  getEditorEmits,
  useNamespace,
} from '@ibiz-template/vue3-util';
import { clone } from 'ramda';
import { ILayoutPanel, IUIActionGroupDetail } from '@ibiz/model-core';
import { ManageMPickerController } from './manage-mpicker.controller';
import './manage-mpicker.scss';

export const ManageMPicker = defineComponent({
  name: 'ManageMPicker',
  props: getDataPickerProps<ManageMPickerController>(),
  emits: getEditorEmits(),
  setup(props, { emit }) {
    const ns = useNamespace('mpicker');

    const c = props.controller!;

    const editorModel = c.model;

    // 当前表单项绑定值key的集合
    const curValue: Ref<Array<string>> = ref([]);

    // 实体数据集
    const items: Ref<IData[]> = ref([]);

    // 选中项key-value键值对
    const selectItems: Ref<IData[]> = ref([]);

    // 下拉是否打开
    const open = ref(false);

    const selectRef = ref();

    const isOpenView: Ref<boolean> = ref(false);

    // 加载中
    const loading: Ref<boolean> = ref(false);

    let tempValue: string | IData[] | null = null;

    // 下拉选顶部标签
    const topLabel = ref('最近浏览');

    // 下拉选底部标签
    const lastLabel = ref('更多');

    if (editorModel.editorParams) {
      if (editorModel.editorParams.toplabel) {
        topLabel.value = editorModel.editorParams.toplabel;
      }
      if (editorModel.editorParams.lastlabel) {
        lastLabel.value = editorModel.editorParams.lastlabel;
      }
    }

    const parseValue = (
      newVal: string | IData[] | object | number | undefined | null,
    ): void => {
      curValue.value = [];
      selectItems.value = [];
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
              selectItems.value.push(_item);
            }
          });
        } else if (c.objectIdField && c.model.valueSeparator) {
          const values = (newVal as string).split(c.model.valueSeparator);
          values.forEach((_value: string) => {
            selectItems.value.push({
              [c.keyName]: _value,
            });
          });
        } else {
          try {
            selectItems.value = JSON.parse(newVal as string);
          } catch (error) {
            ibiz.log.error(
              `SIMPLE类型地址栏值格式${newVal}不符合JSON字符串要求`,
            );
          }
        }
        selectItems.value.forEach((item: IData) => {
          curValue.value.push(item[c.keyName]);
          // 选项没有的时候补充选项
          const index = items.value.findIndex(i =>
            Object.is(i[c.keyName], item[c.keyName]),
          );
          if (index < 0) {
            items.value.push({
              [c.keyName]: item[c.keyName],
              [c.textName]: item[c.textName],
            });
          }
        });
      }
    };

    // 监听传入值
    watch(
      () => props.value,
      newVal => {
        parseValue(newVal);
      },
      { immediate: true, deep: true },
    );

    // 处理视图关闭，往外抛值
    const handleOpenViewClose = (result: IData[]): void => {
      // 抛出值集合
      const selects: IData[] = [];
      if (result && Array.isArray(result)) {
        result.forEach((select: IData) => {
          Object.assign(select, {
            [c.keyName]: select[c.keyName] ? select[c.keyName] : select.srfkey,
            [c.textName]: select[c.textName]
              ? select[c.textName]
              : select.srfmajortext,
          });
          if (c.model.valueType === 'OBJECTS') {
            selects.push(c.handleObjectParams(select));
          } else if (c.objectIdField) {
            selects.push(select[c.keyName]);
          } else {
            selects.push({
              [c.keyName]: select[c.keyName],
              [c.textName]: select[c.textName],
            });
          }
          const index = items.value.findIndex(item =>
            Object.is(item[c.keyName], select[c.keyName]),
          );
          if (index < 0) {
            items.value.push(select);
          }
        });
      }
      let value: string | Array<IData> | null = null;
      if (selects.length > 0) {
        if (c.model.valueType === 'OBJECTS') {
          value = selects;
        } else {
          value = c.objectIdField
            ? selects.join(c.model.valueSeparator)
            : JSON.stringify(selects);
        }
      }
      tempValue = value;
      parseValue(tempValue);
    };

    // 打开数据选择视图
    const openPickUpView = async (): Promise<void> => {
      let selectedData;
      selectRef.value.blur();
      if (selectItems.value.length) {
        const _selectItems = JSON.parse(JSON.stringify(selectItems.value));
        _selectItems.forEach((item: IData, index: number) => {
          _selectItems[index].srfkey = item[c.keyName];
          _selectItems[index].srfmajortext = item[c.textName];
        });
        selectedData = JSON.stringify(_selectItems);
      }
      isOpenView.value = true;
      const res = await c.openPickUpView(props.data!, selectedData);
      if (res) {
        handleOpenViewClose(res);
      }
      isOpenView.value = false;
    };

    // 下拉选中回调
    const onSelect = (selects: string[]): void => {
      const val: Array<IData> = [];
      let value: string | Array<IData> | null = null;
      if (selects.length > 0) {
        selects.forEach((select: string) => {
          if (select !== 'more' && select !== 'recent') {
            let index = items.value.findIndex(item =>
              Object.is(item[c.keyName], select),
            );
            let item: IData = {};
            if (index >= 0) {
              item = items.value[index];
            } else {
              index = selectItems.value.findIndex((selectItem: IData) =>
                Object.is(selectItem[c.keyName], select),
              );
              if (index >= 0) {
                item = selectItems.value[index];
              }
            }
            if (c.model.valueType === 'OBJECTS') {
              val.push(c.handleObjectParams(item));
            } else if (c.objectIdField) {
              val.push(item[c.keyName]);
            } else {
              val.push({
                [c.keyName]: item[c.keyName],
                [c.textName]: item[c.textName],
              });
            }
          }
        });
        if (val.length > 0) {
          if (c.model.valueType === 'OBJECTS') {
            value = val;
          } else {
            value = c.objectIdField
              ? val.join(c.model.valueSeparator)
              : JSON.stringify(val);
          }
        }
        tempValue = value;
        parseValue(tempValue);
      }
    };

    // 移除标签回调
    const onRemove = (tag: string): void => {
      const index = selectItems.value.findIndex((item: IData) =>
        Object.is(item[c.keyName], tag),
      );
      if (index >= 0) {
        selectItems.value.splice(index, 1);
        const val: Array<IData> = [];
        let value: string | Array<IData> | null = null;
        selectItems.value.forEach((select: IData) => {
          if (c.model.valueType === 'OBJECTS') {
            val.push(c.handleObjectParams(select));
          } else if (c.objectIdField) {
            val.push(select[c.keyName]);
          } else {
            val.push({
              [c.keyName]: select[c.keyName],
              [c.textName]: select[c.textName],
            });
          }
        });
        if (val.length > 0) {
          if (c.model.valueType === 'OBJECTS') {
            value = val;
          } else {
            value = c.objectIdField
              ? val.join(c.model.valueSeparator)
              : JSON.stringify(val);
          }
        }
        tempValue = value;
        parseValue(tempValue);
      }
    };

    // 搜索
    const onSearch = async (query: string): Promise<void> => {
      if (c.model.appDataEntityId) {
        loading.value = true;
        try {
          const trimQuery = query.trim();
          const res = await c.getServiceData(trimQuery, props.data!);
          loading.value = false;
          if (res) {
            items.value = res.data as IData[];
          }
        } catch (error) {
          loading.value = false;
        }
      }
    };

    // 下拉打开
    const onOpenChange = (flag: boolean): void => {
      open.value = flag;
      if (open.value) {
        items.value = [];
        onSearch('');
      }
    };

    const handleCancel = (): void => {
      if (c.model.valueType === 'OBJECTS') {
        tempValue = [];
      } else {
        tempValue = '';
      }
      emit('change', tempValue);
    };

    const onConfirm = (): void => {
      emit('change', tempValue);
    };

    // 信息展示，只显示名称。
    const valueText = computed(() => {
      return selectItems.value
        .map(item => {
          return item[c.textName];
        })
        .join(',');
    });

    watch(
      valueText,
      (newVal, oldVal) => {
        if (newVal !== oldVal) {
          emit('infoTextChange', newVal);
        }
      },
      { immediate: true },
    );

    // 聚焦
    const onFocus = (e: IData): void => {
      emit('focus', e);
    };

    // 失焦
    const onBlur = (e: IData): void => {
      emit('blur', e);
    };

    // 处理点击键盘
    const handleKeyUp = (e: KeyboardEvent): void => {
      if (e && e.code === 'Enter') {
        emit('enter', e);
      }
    };

    onMounted(() => {
      if (c.objectNameField) {
        onSearch('');
      }
      c.evt.on('toggleMenu', () => {
        if (selectRef.value) {
          selectRef.value.selectOption();
        }
      });
    });

    const renderGroupAction = (): JSX.Element | void => {
      const { uiactionGroup } = c.model;
      if (uiactionGroup) {
        return (
          <div class={ns.e('group-action')}>
            <iBizActionToolbar
              class={ns.be('group', 'header-actions')}
              actionDetails={uiactionGroup.uiactionGroupDetails}
              actions-state={c.groupActionState}
              onActionClick={(
                detail: IUIActionGroupDetail,
                event: MouseEvent,
              ) => {
                c.onActionClick(detail, event);
              }}
            ></iBizActionToolbar>
          </div>
        );
      }
    };

    // 绘制项布局面板
    const renderPanelItemLayout = (
      item: IData,
      modelData: ILayoutPanel,
    ): VNode => {
      const { context, params } = c;
      return (
        <iBizControlShell
          data={item}
          modelData={modelData}
          context={context}
          params={params}
        ></iBizControlShell>
      );
    };

    return {
      ns,
      c,
      selectRef,
      curValue,
      loading,
      items,
      valueText,
      isOpenView,
      topLabel,
      lastLabel,
      onSearch,
      onOpenChange,
      onSelect,
      onRemove,
      openPickUpView,
      onFocus,
      onBlur,
      handleKeyUp,
      handleCancel,
      onConfirm,
      renderGroupAction,
      renderPanelItemLayout,
    };
  },
  render() {
    if (this.readonly) {
      return (
        <div class={(this.ns.b(), this.ns.m('readonly'))}>{this.valueText}</div>
      );
    }
    return (
      <div
        class={[
          this.ns.b(),
          this.disabled ? this.ns.m('disabled') : '',
          this.ns.is('work-item', true),
        ]}
        ref='editorRef'
      >
        <el-select
          ref='selectRef'
          v-model={this.curValue}
          filterable
          remote
          multiple
          loading={this.loading}
          popper-class={[
            this.ns.be('work-item', 'popper'),
            this.ns.is('hidden', this.isOpenView),
          ]}
          placeholder={this.c.placeHolder ? this.c.placeHolder : ' '}
          remote-method={this.onSearch}
          onVisibleChange={this.onOpenChange}
          onChange={this.onSelect}
          onRemoveTag={this.onRemove}
          disabled={this.disabled}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onKeyup={this.handleKeyUp}
        >
          <el-option
            value={'recent'}
            label={'recent'}
            class={this.ns.e('recent')}
          >
            {this.topLabel}
          </el-option>
          {this.items.map(item => {
            return (
              <el-option
                key={item[this.c.keyName]}
                value={item[this.c.keyName]}
                label={item[this.c.textName]}
              >
                {this.c.itemLayoutPanel &&
                  this.renderPanelItemLayout(item, this.c.itemLayoutPanel)}
              </el-option>
            );
          })}
          {this.c.model.pickupAppViewId && (
            <el-option value={'more'} label={'more'} class={this.ns.e('more')}>
              <el-button text onClick={this.openPickUpView}>
                <ion-icon name='list-outline'></ion-icon>
                {this.lastLabel}
              </el-button>
            </el-option>
          )}
        </el-select>
        <div class={this.ns.e('actions')}>{this.renderGroupAction()}</div>
        <div class={this.ns.e('bottom')}>
          <el-button text onClick={this.handleCancel}>
            取消
          </el-button>
          <el-button onClick={this.onConfirm}>确认</el-button>
        </div>
      </div>
    );
  },
});
