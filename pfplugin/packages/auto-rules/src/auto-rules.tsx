/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Ref, computed, defineComponent, onMounted, ref, watch } from 'vue';
import {
  getDropdownProps,
  getEditorEmits,
  useNamespace,
} from '@ibiz-template/vue3-util';
import { AutoRulesController } from './auto-rules.controller';
import './auto-rules.scss';

export const AutoRules = defineComponent({
  name: 'AutoRules',
  props: {
    ...getDropdownProps<AutoRulesController>(),
    value: [String, Object, Array, Number],
  },
  emits: getEditorEmits(),
  setup(props, { emit }) {
    const ns = useNamespace('auto-rules');
    const c = props.controller;

    // 显示固定规则下拉
    const showSelect = ref(false);
    // 固定规则下拉选中值
    const rulesValue = ref();
    // 固定下拉规则列表
    const staticRulesItems: Ref<IData[]> = ref([]);

    // 显示代码表规则下拉
    const showCodeRulesSelect = ref(false);
    // 代码表规则变化前值
    const oldRulesValue: Ref<string | null> = ref('');
    // 代码表规则变化后值
    const newRulesValue: Ref<string | null> = ref('');
    // 代码表下拉规则列表
    const codeRulesItems: Ref<IData[]> = ref([]);

    // 显示子属性选择下拉
    const showChildSelect = ref(false);
    // 子属性值
    const childRef = ref();
    // 临时属性值，当选择了【属性】时，临时保存当前的值做界面显示
    const tempFieldValue = ref();
    // 子属性列表
    const childList: Ref<IData[]> = ref([]);

    // 代码表数据
    const items: Ref<IData[]> = ref([]);
    // 是否已加载代码表
    const isLoadedCodeList = ref(false);
    // 是否正在加载
    const isLoading = ref(false);
    // 值项
    const { editorItems } = c.model;

    // 处理代码表平铺数据
    const handleTileData = (nodes: readonly IData[], pvalue: string) => {
      if (nodes.length === 0) {
        return [];
      }
      const list: IData[] = [];
      nodes.forEach((codeItem: IData) => {
        list.push({
          ...codeItem,
          pvalue,
          disabled: codeItem.disableSelect === true,
        });

        if (codeItem.children && codeItem.children.length > 0) {
          const result = handleTileData(
            codeItem.children,
            codeItem.value.toString(),
          );
          list.push(...result);
        }
      });
      return list;
    };

    // 加载代码表数据与后续操作
    const loadCodeList = async () => {
      isLoading.value = true;
      const codeList = await c.loadCodeList(props.data!);
      isLoadedCodeList.value = true;
      items.value = handleTileData(codeList, '');
      isLoading.value = false;
    };

    // 根据值获取代码表;
    const getCodeListItemByValue = (value: string | number) => {
      return items.value.find(item => item.value === value);
    };

    // 下拉框出现/隐藏时触发
    const onVisibleChange = async (visible: boolean) => {
      if (visible && !isLoadedCodeList.value) {
        // 下拉框出现时如果没有加载过代码表去加载
        await loadCodeList();
      }
    };

    watch(
      () => props.value,
      async (newVal, oldVal) => {
        if (newVal || newVal === null || newVal === 0) {
          // 值从无到有、并且没搜索过的情况
          if (!isLoadedCodeList.value && oldVal === undefined) {
            await loadCodeList();
          }
        }
      },
      { immediate: true },
    );

    // 查找当前项的所有子项
    const findChildren = (select: string) => {
      return items.value.filter(item => item.pvalue === select);
    };

    // 子属性变动
    const resetRule = () => {
      showSelect.value = false; // 隐藏固定规则下拉
      showCodeRulesSelect.value = false; // 隐藏代码表规则下拉

      rulesValue.value = null; // 固定规则下拉值置空
      oldRulesValue.value = null; // 代码表规则下拉值置空
      newRulesValue.value = null;
    };

    // 规则类型变动，重置子属性下拉以及变动下拉相关的值
    const resetAll = () => {
      showChildSelect.value = false; // 隐藏子属性下拉
      childRef.value = null; // 子属性下拉值置空
      resetRule();
    };

    // 添加自定义代码表项
    const handleRulesSelectItems = (allowEmpty: boolean | string) => {
      const result: IData[] = [
        {
          text: '- 任何 -',
          label: '- 任何 -',
          value: '',
        },
      ];
      if (allowEmpty === 'true' || allowEmpty === true) {
        result.unshift({
          text: '- 空 -',
          label: '- 空 -',
          value: 'null',
        });
      }
      return result;
    };

    // 设置选择数据
    const setSelectData = async (select: string) => {
      resetAll();
      if (!select) {
        tempFieldValue.value = null;
        emit('change', null);
        if (editorItems && editorItems.length > 0) {
          const valueItem = editorItems[0].id;
          emit('change', null, valueItem);
        }
        return;
      }
      if (select.endsWith('.*')) {
        // 暂时不抛出，呈现子属性下拉选择
        // 保存临时值，清空子属性和变动的值，隐藏变动下拉框
        tempFieldValue.value = select;

        childList.value = findChildren(select);
        showChildSelect.value = true;

        emit('change', null);
        if (editorItems && editorItems.length > 0) {
          const valueItem = editorItems[0].id;
          emit('change', null, valueItem);
        }
      } else {
        tempFieldValue.value = null; // 清除临时显示值
        // 抛出当前项，清空触发条件值(值项的值),获取当前项的配置
        emit('change', select);

        const item = getCodeListItemByValue(select);
        if (item && item.data) {
          const {
            allow_empty: allowEmpty,
            codelist_tag: codelistTag,
            is_dropdown_list: isDropdownList,
          } = item.data;
          if (isDropdownList === 'true' || isDropdownList === true) {
            // 当前项有下拉,找到它的配置的代码表作为下拉项

            showCodeRulesSelect.value = true; // 显示代码表规则下拉

            const result = await c.loadCustomCodeList(codelistTag, props.data);
            const tempItem = handleRulesSelectItems(allowEmpty);
            codeRulesItems.value = [...tempItem, ...result];
            return;
          }

          if (!allowEmpty || allowEmpty === 'false' || allowEmpty === false) {
            // [属性确定，文本项，必填项],值项抛出 【从任何到任何】

            if (editorItems && editorItems.length > 0) {
              const valueItem = editorItems[0].id;
              emit('change', ['', ''], valueItem);
              return;
            }
          } else if (allowEmpty === 'true' || allowEmpty === true) {
            // [属性确定，文本项，非必填]
            staticRulesItems.value = c.allowEmptyText;
            showSelect.value = true;
          }
        } else {
          // 如果未配置data,则统一按照 属性确定，文本项，非必填 来处理
          staticRulesItems.value = c.allowEmptyText;
          showSelect.value = true;
        }
        if (editorItems && editorItems.length > 0) {
          const valueItem = editorItems[0].id;
          emit('change', null, valueItem);
        }
      }
    };

    // 当前数据
    const curValue = computed({
      get() {
        return tempFieldValue.value || props.value;
      },
      set(select: string) {
        setSelectData(select);
      },
    });

    // 固定规则变动
    const onRulesChange = (value: string) => {
      if (editorItems && editorItems.length > 0) {
        const valueItem = editorItems[0].id;
        emit('change', JSON.parse(value), valueItem);
      }
    };

    // 代码表规则变动
    const onCodeRulesChange = (value: any, tag: number) => {
      if (tag === 1) {
        oldRulesValue.value = value;
      } else {
        newRulesValue.value = value;
      }
      if (editorItems && editorItems.length > 0) {
        const valueItem = editorItems[0].id;
        emit('change', [oldRulesValue.value, newRulesValue.value], valueItem);
      }
    };

    // 子属性变动
    const onChildSelect = async (value: string) => {
      resetRule();
      if (!value) {
        emit('change', value);
        if (editorItems && editorItems.length > 0) {
          const valueItem = editorItems[0].id;
          emit('change', null, valueItem);
        }
        return;
      }
      const item = getCodeListItemByValue(value);
      if (item && item.data) {
        const {
          allow_empty: allowEmpty,
          codelist_tag: codelistTag,
          is_dropdown_list: isDropdownList,
        } = item.data;
        if (isDropdownList === 'true' || isDropdownList === true) {
          // 当前项有下拉,找到它的配置的代码表作为下拉项
          showCodeRulesSelect.value = true;
          const result = await c.loadCustomCodeList(codelistTag, props.data);
          const tempItem = handleRulesSelectItems(allowEmpty);
          codeRulesItems.value = [...tempItem, ...result];
          return;
        }
        if (!allowEmpty || allowEmpty === 'false' || allowEmpty === false) {
          // [属性确定，文本项，必填项],值项抛出 【从任何到任何】
          if (editorItems && editorItems.length > 0) {
            const valueItem = editorItems[0].id;
            emit('change', ['', ''], valueItem);
            return;
          }
        } else if (allowEmpty === 'true' || allowEmpty === true) {
          // [属性确定，文本项，非必填]
          staticRulesItems.value = c.allowEmptyText;
          showSelect.value = true;
        }
      } else {
        // 如果未配置data,则统一按照 [属性确定，文本项，非必填] 来处理
        staticRulesItems.value = c.allowEmptyText;
        showSelect.value = true;
      }
      emit('change', value);
      if (editorItems && editorItems.length > 0) {
        const valueItem = editorItems[0].id;
        emit('change', null, valueItem);
      }
    };

    // 绘制子属性下拉列表
    const renderFieldSelect = () => {
      return (
        <el-select
          ref='childFieldEditorRef'
          v-model={childRef.value}
          clearable
          class={[ns.b('child-select')]}
          filterable={true}
          fit-input-width={true}
          onChange={onChildSelect}
        >
          {childList.value.map(item => {
            return (
              <el-option
                key={item.value}
                value={item.value.toString()}
                label={item.text}
                disabled={item.disableSelect === true}
                style={
                  item.bkcolor
                    ? ns.cssVarBlock({
                        'select-option-item-bkcolor': `${item.bkcolor}`,
                      })
                    : ''
                }
                class={[item.cls ? item.cls : null]}
                title={item.text}
              >
                {{
                  default: () => {
                    return (
                      <div
                        class={[
                          ns.b('select-option-content'),
                          item.textCls ? item.textCls : null,
                        ]}
                        style={
                          item.color
                            ? ns.cssVarBlock({
                                'select-option-item-color': `${item.color}`,
                              })
                            : ''
                        }
                      >
                        {item.sysImage && (
                          <iBizIcon icon={item.sysImage}></iBizIcon>
                        )}
                        <span class={[ns.be('select-option-content', 'text')]}>
                          {item.text}
                        </span>
                      </div>
                    );
                  },
                }}
              </el-option>
            );
          })}
        </el-select>
      );
    };

    // 绘制固定规则变动下拉
    const renderRulesSelect = () => {
      return (
        <el-select
          ref='rulesEditorRef'
          v-model={rulesValue.value}
          clearable
          class={[ns.em('rules-select', 'fix')]}
          filterable={true}
          fit-input-width={true}
          onChange={onRulesChange}
        >
          {staticRulesItems.value.map(item => {
            return (
              <el-option
                key={item.value}
                value={item.value.toString()}
                label={item.text}
                disabled={item.disableSelect === true}
                style={
                  item.bkcolor
                    ? ns.cssVarBlock({
                        'select-option-item-bkcolor': `${item.bkcolor}`,
                      })
                    : ''
                }
                class={[item.cls ? item.cls : null]}
                title={item.text}
              >
                {{
                  default: () => {
                    return (
                      <div
                        class={[
                          ns.b('select-option-content'),
                          item.textCls ? item.textCls : null,
                        ]}
                        style={
                          item.color
                            ? ns.cssVarBlock({
                                'select-option-item-color': `${item.color}`,
                              })
                            : ''
                        }
                      >
                        {item.sysImage && (
                          <iBizIcon icon={item.sysImage}></iBizIcon>
                        )}
                        <span class={[ns.be('select-option-content', 'text')]}>
                          {item.text}
                        </span>
                      </div>
                    );
                  },
                }}
              </el-option>
            );
          })}
        </el-select>
      );
    };

    // 绘制代码表规则下拉列表
    const renderCodeRulesSelect = () => {
      return (
        <div class={ns.b('code-rules')}>
          <el-select
            v-model={oldRulesValue.value}
            clearable
            class={[ns.b('rules-select')]}
            filterable={true}
            fit-input-width={true}
            onChange={(value: any) => onCodeRulesChange(value, 1)}
          >
            {codeRulesItems.value.map(item => {
              return (
                <el-option
                  key={item.value}
                  value={item.value.toString()}
                  label={item.text}
                  disabled={item.disableSelect === true}
                  style={
                    item.bkcolor
                      ? ns.cssVarBlock({
                          'select-option-item-bkcolor': `${item.bkcolor}`,
                        })
                      : ''
                  }
                  class={[item.cls ? item.cls : null]}
                  title={item.text}
                >
                  {{
                    default: () => {
                      return (
                        <div
                          class={[
                            ns.b('select-option-content'),
                            item.textCls ? item.textCls : null,
                          ]}
                          style={
                            item.color
                              ? ns.cssVarBlock({
                                  'select-option-item-color': `${item.color}`,
                                })
                              : ''
                          }
                        >
                          {item.sysImage && (
                            <iBizIcon icon={item.sysImage}></iBizIcon>
                          )}
                          <span
                            class={[ns.be('select-option-content', 'text')]}
                          >
                            {item.text}
                          </span>
                        </div>
                      );
                    },
                  }}
                </el-option>
              );
            })}
          </el-select>
          <span class={ns.be('code-rules', 'change')}>变为</span>
          <el-select
            v-model={newRulesValue.value}
            clearable
            class={[ns.b('rules-select')]}
            filterable={true}
            fit-input-width={true}
            onChange={(value: any) => onCodeRulesChange(value, 2)}
          >
            {codeRulesItems.value.map(item => {
              return (
                <el-option
                  key={item.value}
                  value={item.value.toString()}
                  label={item.text}
                  disabled={item.disableSelect === true}
                  style={
                    item.bkcolor
                      ? ns.cssVarBlock({
                          'select-option-item-bkcolor': `${item.bkcolor}`,
                        })
                      : ''
                  }
                  class={[item.cls ? item.cls : null]}
                  title={item.text}
                >
                  {{
                    default: () => {
                      return (
                        <div
                          class={[
                            ns.b('select-option-content'),
                            item.textCls ? item.textCls : null,
                          ]}
                          style={
                            item.color
                              ? ns.cssVarBlock({
                                  'select-option-item-color': `${item.color}`,
                                })
                              : ''
                          }
                        >
                          {item.sysImage && (
                            <iBizIcon icon={item.sysImage}></iBizIcon>
                          )}
                          <span
                            class={[ns.be('select-option-content', 'text')]}
                          >
                            {item.text}
                          </span>
                        </div>
                      );
                    },
                  }}
                </el-option>
              );
            })}
          </el-select>
        </div>
      );
    };

    // 绘制规则类型下拉列表
    const renderRuleTypesSelect = () => {
      return (
        <el-select
          ref='editorRef'
          v-model={curValue.value}
          clearable
          class={[ns.b('select')]}
          filterable={true}
          placeholder={c.placeHolder ? c.placeHolder : ' '}
          disabled={props.disabled}
          loading={isLoading.value}
          fit-input-width={true}
          onVisibleChange={onVisibleChange}
        >
          {items.value.map(item => {
            return (
              <el-option
                key={item.value}
                value={item.value.toString()}
                label={item.text}
                disabled={item.disableSelect === true}
                style={
                  item.bkcolor
                    ? ns.cssVarBlock({
                        'select-option-item-bkcolor': `${item.bkcolor}`,
                      })
                    : ''
                }
                class={[item.cls ? item.cls : null]}
                title={item.text}
              >
                {{
                  default: () => {
                    return (
                      <div
                        class={[
                          ns.b('select-option-content'),
                          item.textCls ? item.textCls : null,
                        ]}
                        style={
                          item.color
                            ? ns.cssVarBlock({
                                'select-option-item-color': `${item.color}`,
                              })
                            : ''
                        }
                      >
                        {item.sysImage && (
                          <iBizIcon icon={item.sysImage}></iBizIcon>
                        )}
                        <span class={[ns.be('select-option-content', 'text')]}>
                          {item.text}
                        </span>
                      </div>
                    );
                  },
                }}
              </el-option>
            );
          })}
        </el-select>
      );
    };

    onMounted(async () => {
      await loadCodeList();
    });

    return {
      ns,
      c,
      items,
      showSelect,
      showChildSelect,
      isLoading,
      curValue,
      showCodeRulesSelect,
      renderFieldSelect,
      renderRulesSelect,
      renderCodeRulesSelect,
      renderRuleTypesSelect,
      onVisibleChange,
      getCodeListItemByValue,
    };
  },
  render() {
    return (
      <div class={this.ns.b()}>
        <div class={this.ns.e('field-select')}>
          {this.renderRuleTypesSelect()}
          {this.showChildSelect ? this.renderFieldSelect() : null}
        </div>
        <div
          class={[
            this.ns.e('rules-select'),
            this.ns.is(
              'visible',
              !this.showSelect && !this.showCodeRulesSelect,
            ),
          ]}
        >
          {this.showSelect ? this.renderRulesSelect() : null}
          {this.showCodeRulesSelect ? this.renderCodeRulesSelect() : null}
        </div>
      </div>
    );
  },
});
