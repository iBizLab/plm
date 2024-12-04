/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { defineComponent, ref, Ref, watch } from 'vue';
import {
  getDataPickerProps,
  getEditorEmits,
  useFocusAndBlur,
  useNamespace,
} from '@ibiz-template/vue3-util';
import { clone } from 'ramda';
import { MobPersonelSelectController } from './mob-personel-select.controller';
import './mob-personel-select.scss';
import { resource } from './global';
import { renderTextPhoto, stringToHexColor } from './mob-personel-select-util';

export const MobPersonelSelect = defineComponent({
  name: 'MobPersonelSelect',
  props: getDataPickerProps<MobPersonelSelectController>(),
  emits: getEditorEmits(),
  setup(props, { emit }) {
    const ns = useNamespace('mob-personel-select');

    const c = props.controller!;

    const editorModel = c.model;

    // 是否单选
    const singleSelect = ref(true);
    if (editorModel.editorParams) {
      if (editorModel.editorParams.multiple) {
        singleSelect.value = !c.toBoolean(editorModel.editorParams.multiple);
      }
    }

    // 当前多选框选中值的key集合
    const keySet: Ref<string[]> = ref([]);

    // 选中数据
    const selectedData: Ref<IData[]> = ref([]);

    // 输入框值
    const valueText: Ref<string> = ref('');

    // 视图上下文
    const context = ref(clone(c.context));

    // 视图参数
    const params = ref(clone(c.params));

    // 所有头像加载失败项
    const errorLoadItems: Ref<string[]> = ref([]);

    // 多选时临时储存值与值项
    const multipleObjs: Ref<IData[] | null> = ref(null);

    // 聚焦失焦事件
    const { componentRef: editorRef } = useFocusAndBlur(
      () => emit('focus'),
      () => emit('blur'),
    );

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

    watch(
      () => props.value,
      newVal => {
        if (singleSelect.value) {
          valueText.value = (newVal as string) || '';
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
          // items.value = [];
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
                  keySet.value.push(_item[c.keyName]);
                }
                selectItems.push(_item);
              });
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
              });
            }
          }
          selectedData.value = selectItems;
          params.value.selectedData = selectedData;
        }
      },
      {
        immediate: true,
        deep: true,
      },
    );

    // 清除
    const onClear = () => {
      // 清空回填数据
      selectedData.value = [];
      const { dataItems } = c;
      if (dataItems?.length) {
        dataItems.forEach(dataItem => {
          emit('change', null, dataItem.id);
        });
      }
      if (c.valueItem) {
        emit('change', null, c.valueItem);
      }
      emit('change', null);
    };

    // 视图数据改变
    const onViewDataChange = (event: IData[]) => {
      if (event.length === 0) {
        onClear();
        return;
      }
      if (singleSelect.value) {
        if (c.valueItem) {
          const tempValue = event[0][c.keyName]
            ? event[0][c.keyName]
            : event[0].srfkey;
          emit('change', tempValue, c.valueItem);
        }
        const tempText = event[0][c.textName]
          ? event[0][c.textName]
          : event[0].srfmajortext;
        emit('change', tempText);
      } else if (c.model.valueType === 'OBJECTS') {
        if (event && Array.isArray(event)) {
          const objs: IData[] = [];
          event.forEach(item => {
            const obj = c.handleObjectParams(item);
            Object.assign(obj, {
              [c.keyName]: item[c.keyName],
              [c.textName]: item[c.textName],
            });
            objs.push(obj);
          });
          multipleObjs.value = objs;
        }
        emit('change', multipleObjs.value);
      } else {
        let tempValue: string = '';
        let tempText: string = '';
        if (event && Array.isArray(event)) {
          event.forEach((select: IData) => {
            const srfkey = select[c.keyName]
              ? select[c.keyName]
              : select.srfkey;
            tempValue += `${srfkey},`;
            const srfmajortext = select[c.textName]
              ? select[c.textName]
              : select.srfmajortext;
            tempText += `${srfmajortext},`;
          });
        }
        tempValue = tempValue.substring(0, tempValue.length - 1);
        tempText = tempText.substring(0, tempText.length - 1);
        if (c.valueItem) {
          emit('change', tempValue, c.valueItem);
        }
        emit('change', tempText);
      }
    };

    const openPicker = async (e: MouseEvent) => {
      if (props.readonly || props.disabled) {
        return;
      }
      e.stopPropagation();
      let selected = '';
      if (selectedData.value.length) {
        const tempItems = selectedData.value.map((item: IData) => {
          return {
            srfkey: item[c.keyName],
            srfmajortext: item[c.textName],
            id: item[c.keyName],
            ...item,
          };
        });
        selected = JSON.stringify(tempItems);
      }
      const res = await c.openPickUpView(props.data, selected);
      if (res) {
        onViewDataChange(res);
      }
    };

    // 单选-删除
    const onClose = (e: MouseEvent) => {
      e.stopPropagation();
      onClear();
    };

    // 多选-删除
    const onMulClose = (key: string) => {
      let keyname = c.keyName;
      if (c.model.valueType === 'OBJECTS') {
        keyname = c.objectIdField!;
      }
      const index = selectedData.value.findIndex((select: IData) => {
        return select[keyname] === key;
      });
      if (index > -1) {
        selectedData.value.splice(index, 1);
      }
      onViewDataChange(selectedData.value);
    };

    // 绘制无数据情况
    const renderNoData = () => {
      return (
        <div
          class={[
            ns.b('no-select-value'),
            ns.is('readonly', props.readonly || props.disabled),
          ]}
          onClick={openPicker}
        >
          <img src={`${resource.dir('assets/images/svg/member.svg')}`} alt='' />
          <div class={ns.be('no-select-value', 'text')}>
            <span>未设置</span>
          </div>
        </div>
      );
    };

    // 记录头像加载失败情况
    const avatarLoadError = (avatarUrl: string) => {
      console.error('头像加载失败');
      errorLoadItems.value.push(avatarUrl);
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
          onError={() => avatarLoadError(avatarUrl)}
          alt=''
        />
      );
    };

    // 绘制头像
    const renderAvatar = (id: string, name: string) => {
      if (
        c.operatorMap &&
        c.operatorMap.get(id) &&
        c.operatorMap.get(id).data.iconurl &&
        !errorLoadItems.value.includes(c.operatorMap.get(id).data.iconurl)
      ) {
        return getUserAvatar(c.operatorMap.get(id).data.iconurl);
      }
      return renderTextPhoto(name);
    };

    // 单选-显示头像和姓名
    const renderPersonel = () => {
      const id = props.data[c.valueItem];
      return (
        <div class={ns.b('personel')} onClick={openPicker}>
          <div class={ns.be('personel', 'info')}>
            <div
              class={ns.be('personel', 'avatar')}
              style={`background-color:${stringToHexColor(valueText.value)}`}
            >
              {renderAvatar(id, valueText.value)}
            </div>
            {c.showNameText && (
              <div class={ns.be('personel', 'username')}>
                <span class={ns.bem('personel', 'username', 'text')}>
                  {valueText.value}
                </span>
              </div>
            )}
          </div>
          {!props.readonly && !props.disabled && props.value && (
            <ion-icon
              name='close-outline'
              class={ns.be('personel', 'close')}
              onClick={onClose}
            ></ion-icon>
          )}
        </div>
      );
    };

    // 多选
    const renderMulPersonel = () => {
      const addIcon = (
        <div class={ns.be('mul-ponsel', 'add-icon')} onClick={openPicker}>
          <ion-icon name='add-outline'></ion-icon>
        </div>
      );
      return (
        <div class={ns.b('mul-ponsel')}>
          {selectedData.value.map((item: IData) => {
            let keyname = c.keyName;
            let textname = c.textName;
            if (c.model.valueType === 'OBJECTS') {
              keyname = c.objectIdField!;
              textname = c.objectNameField!;
            }
            return (
              <div class={ns.be('mul-ponsel', 'item')}>
                <div
                  class={ns.bem('mul-ponsel', 'item', 'avatar')}
                  style={`background-color:${stringToHexColor(item[textname])}`}
                >
                  {renderAvatar(item[keyname], item[textname])}
                </div>
                {c.showNameText && (
                  <span class={ns.bem('mul-ponsel', 'item', 'name')}>
                    {item[textname]}
                  </span>
                )}
                {!props.readonly && !props.disabled && (
                  <div class={ns.bem('mul-ponsel', 'item', 'close')}>
                    <ion-icon
                      name='close-circle'
                      class={ns.be('mul-ponsel', 'close')}
                      onClick={() => onMulClose(item[keyname])}
                    ></ion-icon>
                  </div>
                )}
              </div>
            );
          })}
          {!props.readonly && !props.disabled && addIcon}
        </div>
      );
    };

    // 绘制人员信息
    const renderPersonelInfo = () => {
      if (props.value) {
        if (singleSelect.value) {
          // 单选
          return renderPersonel();
        }
        // 多选
        if (selectedData.value && selectedData.value.length > 0) {
          return renderMulPersonel();
        }
      }
      return renderNoData();
    };

    return {
      ns,
      c,
      valueText,
      context,
      params,
      editorRef,
      onClear,
      openPicker,
      renderPersonelInfo,
    };
  },
  render() {
    return (
      <div
        class={[
          this.ns.b(),
          this.disabled ? this.ns.m('disabled') : '',
          this.readonly ? this.ns.m('readonly') : '',
        ]}
      >
        {this.renderPersonelInfo()}
      </div>
    );
  },
});
