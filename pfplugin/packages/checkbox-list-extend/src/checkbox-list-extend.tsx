/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Ref, computed, defineComponent, ref, watch } from 'vue';
import {
  getListBoxProps,
  getEditorEmits,
  useNamespace,
  useFocusAndBlur,
} from '@ibiz-template/vue3-util';
import './checkbox-list-extend.scss';
import { isNil } from 'ramda';
import { ElTree } from 'element-plus';
import { CheckboxListExtendController } from './controller';

export const CheckboxListExtend = defineComponent({
  name: 'CheckboxListExtend',
  props: getListBoxProps<CheckboxListExtendController>(),
  emits: getEditorEmits(),
  setup(props, { emit }) {
    const ns = useNamespace('checkbox-list-extend');
    const c = props.controller;
    const treeRef = ref<InstanceType<typeof ElTree> | null>(null);

    const treeProps = {
      label: 'text',
      children: 'children',
    };

    const { codeList } = c as CheckboxListExtendController;

    const defaultCheckedKeys: Ref<Array<string | number>> = ref([]);

    const activeNames = ref<(string | number)[]>([]);

    // 代码表数据
    const items = ref<readonly IData[]>([]);
    const allItems = ref<readonly IData[]>([]);

    const checkGroup: Ref<IData> = ref({});

    // 加载代码表数据
    const loadCheckBoxItems = async () => {
      c.loadCodeList(props.data).then(_codeList => {
        allItems.value = _codeList;
        items.value = c.handleCodeListData(_codeList, props.data);
        if (
          Object.is(c.renderMode, 'TREE') &&
          Object.is(c.mode, 'horizontal')
        ) {
          initCheckGroup();
        }
        if (
          Object.is(c.renderMode, 'BUTTON') &&
          Object.is(c.mode, 'vertical')
        ) {
          initCollapse(items.value as IData[]);
        }
        const defaultSelect = c.getDefaultSelect(items.value, props.data);
        setDefaultSelect(defaultSelect);
      });
    };

    loadCheckBoxItems();

    const setDefaultSelect = (selectArray: Array<string | number>) => {
      if (selectArray.length > 0) {
        valueChange(selectArray);
      }
    };

    const initCollapse = (Items: IData[]) => {
      Items.forEach((item: IData) => {
        if (item.children) {
          activeNames.value.push(item.value);
          initCollapse(item.children);
        }
      });
    };

    // 当前模式
    const currentMode = computed(() => {
      if (codeList && codeList.orMode) {
        return codeList.orMode.toLowerCase();
      }
      return 'str';
    });

    // 值分隔符
    let valueSeparator = ',';
    if (codeList && codeList.valueSeparator) {
      valueSeparator = codeList.valueSeparator;
    }

    const setCheckedKeys = (selectsArray: Array<string | number>) => {
      if (treeRef.value) {
        treeRef.value!.setCheckedKeys(selectsArray);
      } else {
        defaultCheckedKeys.value = selectsArray;
      }
    };

    // 选中数组
    const selectArray: Ref<(string | number)[]> = ref([]);
    // 选中值
    let tempSelectValue: string | number = '';
    const selectValue = computed({
      get() {
        return selectArray.value.join(valueSeparator);
      },
      set() {},
    });

    // 监听当前值生成selectArray
    watch(
      () => props.value,
      newVal => {
        if (!isNil(newVal)) {
          let selectsArray: Array<string | number> = [];
          if (Object.is(currentMode.value, 'num') && items) {
            const num: number =
              typeof newVal === 'string' ? parseInt(newVal, 10) : newVal;
            items.value.forEach((item: IData) => {
              // eslint-disable-next-line no-bitwise
              if ((num & item.value) === item.value) {
                selectsArray.push(item.value);
              }
            });
          } else if (Object.is(currentMode.value, 'str')) {
            if (newVal !== '') {
              if (codeList && typeof newVal === 'string') {
                selectsArray = newVal.split(valueSeparator);
                if (codeList.codeItemValueNumber) {
                  for (let i = 0, len = selectsArray.length; i < len; i++) {
                    selectsArray[i] = Number(selectsArray[i]);
                  }
                }
              }
            }
          }
          setCheckedKeys(selectsArray);
          selectArray.value = selectsArray;
        } else {
          setCheckedKeys([]);
          selectArray.value = [];
        }
      },
      { immediate: true, deep: true },
    );

    const valueChange = (selectArray: Array<string | number>) => {
      if (selectArray && selectArray.length > 0) {
        emit('change', selectArray.join(valueSeparator));
      } else {
        emit('change', c.emptyValue);
      }
    };

    const onSelectArrayChange = (data: IData, arg: IData) => {
      const selectArray: string[] = arg.checkedNodes
        .filter((node: IData) => !node.group)
        .map((node: IData) => node.value);
      valueChange(selectArray);
    };

    const initCheckGroup = () => {
      items.value.forEach(item => {
        if (item.children) {
          Object.assign(checkGroup.value, {
            [item.value]: false,
            [`${item.value}-all`]: false,
          });
        }
      });
    };

    const handleCheckAllChange = (
      selected: boolean,
      curItems: IData[],
      item: IData,
    ) => {
      curItems.forEach(item => {
        const { value } = item;
        if (selected) {
          if (!selectArray.value.includes(value)) {
            selectArray.value.push(value);
          }
        } else if (selectArray.value.includes(value)) {
          const index = selectArray.value.findIndex(key =>
            Object.is(key, value),
          );
          selectArray.value.splice(index, 1);
        }
      });
      const defaultSelect = c.getDefaultSelect(items.value, props.data);
      if (defaultSelect.length > 0) {
        selectArray.value.push(...defaultSelect);
        selectArray.value = [...new Set(selectArray.value)];
      }
      Object.assign(checkGroup.value, { [item.value]: false });
      valueChange(selectArray.value);
    };

    const handleCheckChange = (
      selectArray: string[],
      items: IData[],
      item: IData,
    ) => {
      const checkedCount = selectArray.length;
      if (selectArray.length === items.length) {
        Object.assign(checkGroup.value, {
          [item.value]: false,
          [`${item.value}-all`]: true,
        });
      } else {
        Object.assign(checkGroup.value, {
          [item.value]: checkedCount > 0,
          [`${item.value}-all`]: false,
        });
      }
      valueChange(selectArray);
    };

    const handleRadioButtonClick = (selected: string) => {
      if (selected && tempSelectValue !== selected) {
        tempSelectValue = selected;
        emit('change', selected);
      } else {
        tempSelectValue = c.emptyValue;
        selectValue.value = c.emptyValue;
        emit('change', c.emptyValue);
      }
    };

    const handleCheckboxButtonChange = (selectArray: string[]) => {
      valueChange(selectArray);
    };

    // 聚焦失焦事件
    const { componentRef: editorRef } = useFocusAndBlur(
      () => emit('focus'),
      () => emit('blur'),
    );

    const renderCheckItem = (item: IData) => {
      if (item.children) {
        return renderCheckGroup(item.children, item);
      }
      return (
        <el-checkbox
          class={[ns.e('check-item')]}
          key={item.value}
          disabled={item.disableSelect}
          label={item.value}
        >
          {item.sysImage ? <iBizIcon icon={item.sysImage} /> : null}
          {item.text}
        </el-checkbox>
      );
    };

    const renderCheckGroup = (items: IData[], item: IData) => {
      return (
        <div class={[ns.e('check-group')]}>
          <el-checkbox
            v-model={checkGroup.value[`${item.value}-all`]}
            disabled={item.disableSelect}
            indeterminate={checkGroup.value[item.value]}
            onChange={(selected: boolean) =>
              handleCheckAllChange(selected, items, item)
            }
          >
            {item.text}
          </el-checkbox>
          <el-checkbox-group
            v-model={selectArray.value}
            onChange={(selectArray: string[]) =>
              handleCheckChange(selectArray, items, item)
            }
          >
            {items.map(item => {
              return renderCheckItem(item);
            })}
          </el-checkbox-group>
        </div>
      );
    };

    const renderButton = (items: IData[], item: IData) => {
      if (c.singleSelect) {
        return (
          <el-radio-group
            v-model={selectValue.value}
            title={item.text}
            onClick={() => handleRadioButtonClick(item.value)}
          >
            <el-radio-button
              key={item.value}
              label={item.value}
              disabled={item.disableSelect}
            >
              {item.sysImage ? <iBizIcon icon={item.sysImage} /> : null}
              {item.text}
            </el-radio-button>
          </el-radio-group>
        );
      }
      return (
        <el-checkbox-group
          v-model={selectArray.value}
          title={item.text}
          onChange={(selectArray: string[]) =>
            handleCheckboxButtonChange(selectArray)
          }
        >
          <el-checkbox-button
            {...c.editorParams}
            key={item.value}
            label={item.value}
            disabled={item.disableSelect}
          >
            {item.sysImage ? <iBizIcon icon={item.sysImage} /> : null}
            {item.text}
          </el-checkbox-button>
        </el-checkbox-group>
      );
    };

    const renderCollapseItem = (Items: IData[], item: IData) => {
      if (item.children) {
        return renderCollapse(item.children, item);
      }
      return renderButton(Items, item);
    };

    const renderCollapse = (Items: IData[], item: IData) => {
      return (
        <el-collapse v-model={activeNames.value}>
          <el-collapse-item title={item.text} name={item.value}>
            {Items.map((children: IData) =>
              renderCollapseItem(Items, children),
            )}
          </el-collapse-item>
        </el-collapse>
      );
    };

    const renderDropdownMenu = (Items: IData[], item: IData) => {
      if (item.children) {
        return (
          <el-dropdown
            popper-class={[ns.e('button'), ns.em('dropdown-menu', 'popper')]}
          >
            {{
              default: () => {
                return (
                  <span class={[ns.e('dropdown-caption')]}>
                    {item.text}
                    <i
                      class={[
                        'fa',
                        'fa-angle-down',
                        ns.em('dropdown-caption', 'icon-right'),
                      ]}
                    ></i>
                  </span>
                );
              },
              dropdown: () => {
                return (
                  <el-dropdown-menu>
                    {item.children.map((item: IData) => {
                      return renderChildrenMenu(item.children, item);
                    })}
                  </el-dropdown-menu>
                );
              },
            }}
          </el-dropdown>
        );
      }
      return renderButton(Items, item);
    };

    const renderChildrenMenu = (Items: IData[], item: IData) => {
      if (item.children) {
        return (
          <div class={[ns.em('dropdown-item', 'group')]}>
            {item.children.map((children: IData) => {
              return renderChildrenMenu(item.children, children);
            })}
          </div>
        );
      }
      return <el-dropdown-item>{renderButton(Items, item)}</el-dropdown-item>;
    };

    return {
      ns,
      c,
      editorRef,
      items,
      treeRef,
      selectArray,
      treeProps,
      defaultCheckedKeys,
      onSelectArrayChange,
      handleCheckAllChange,
      handleCheckChange,
      renderCheckItem,
      renderCollapseItem,
      renderDropdownMenu,
    };
  },
  render() {
    if (Object.is(this.c.renderMode, 'TREE')) {
      if (Object.is(this.c.mode, 'vertical')) {
        return (
          <div class={[this.ns.b(), this.ns.e('tree')]} ref='editorRef'>
            <el-tree
              ref={'treeRef'}
              props={this.treeProps}
              data={this.items}
              show-checkbox
              node-key={'value'}
              default-expand-all
              check-on-click-node={true}
              expand-on-click-node={false}
              default-checked-keys={this.defaultCheckedKeys}
              onCheck={this.onSelectArrayChange}
            />
          </div>
        );
      }
      return (
        <div class={[this.ns.b(), this.ns.e('checkbox')]}>
          {this.items.map(item => {
            return this.renderCheckItem(item);
          })}
        </div>
      );
    }
    if (this.c.mode === 'vertical') {
      return (
        <div
          class={[
            this.ns.b(),
            this.ns.e(this.c.renderMode?.toLowerCase()),
            this.ns.e('collapse'),
          ]}
        >
          {this.items.map(item => {
            return this.renderCollapseItem(this.items as IData[], item);
          })}
        </div>
      );
    }
    return (
      <div
        class={[
          this.ns.b(),
          this.ns.e(this.c.renderMode?.toLowerCase()),
          this.ns.e('dropdown'),
        ]}
      >
        {this.items.map(item => {
          return this.renderDropdownMenu(this.items as IData[], item);
        })}
      </div>
    );
  },
});
export default CheckboxListExtend;
