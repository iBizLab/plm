import { defineComponent, ref, computed, PropType } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import { RuntimeError } from '@ibiz-template/core';
import { GridRowState } from '@ibiz-template/runtime';
import { isNil } from 'ramda';
import { useCellEdit } from './cell-edit';
import { useRowEdit } from './row-edit';
import { useAllEdit } from './all-edit';
import './grid-change-version-column.scss';
import { GridChangeVersionColumnController } from './grid-change-version-column.controller';

export const GridChangeVersionColumn = defineComponent({
  name: 'IBizGridChangeVersionColumn',
  props: {
    controller: {
      type: GridChangeVersionColumnController,
      required: true,
    },
    row: {
      type: GridRowState,
      required: true,
    },
    attrs: {
      type: Object as PropType<IData>,
      required: false,
    },
  },
  setup(props) {
    const ns = useNamespace('grid-change-version-column');
    const componentRef = ref();

    const c = props.controller;

    const options = ref<IData[]>([]);

    const isExpand = ref(false);

    // 是否已加载过
    const isLoaded = ref(false);

    const isLoading = ref(false);

    const columnValue = computed(() => {
      return props.row.data[c.fieldName] || [];
    });

    /**
     * 获取指定数据下标
     */
    const getSpecifiedData = (
      data: IData[] | undefined,
      key: string,
    ): number => {
      const val = data || [];
      return val.findIndex((item: IData) => item[c.listMapField] === key);
    };

    const fromIndex = computed(() => {
      return getSpecifiedData(props.row.data[c.fieldName], c.leftMapField);
    });

    const toIndex = computed(() => {
      return getSpecifiedData(props.row.data[c.fieldName], c.rightMapField);
    });

    // 值变更事件
    const rowDataChange = async (
      val: unknown,
      name?: string,
    ): Promise<void> => {
      ibiz.log.debug(`${c.fieldName}值变更`, val);
      await c.setRowValue(props.row, val, name);
    };

    const useByShowMode = (): {
      gridEditItemProps: IData;
      editorProps: IData;
    } => {
      switch (ibiz.config.grid.editShowMode) {
        case 'cell':
          return useCellEdit(props, componentRef);
        case 'row':
          return useRowEdit(props, componentRef);
        case 'all':
          return useAllEdit(props, componentRef);
        default:
          throw new RuntimeError(`${ibiz.config.grid.editShowMode}暂未支持`);
      }
    };
    const { gridEditItemProps, editorProps } = useByShowMode();

    const infoText = ref<string | undefined>(undefined);
    const onInfoTextChange = (text: string): void => {
      infoText.value = text;
    };
    const tooltip = computed<string | undefined>(() => {
      // 非信息态不显示tooltip
      if (!editorProps.readonly) {
        return undefined;
      }
      if (isNil(infoText.value)) {
        const val = props.row.data[c.fieldName];
        return c.formatValue(val);
      }
      return infoText.value;
    });

    const renderNoData = (): JSX.Element => {
      return <iBizNoData text={'暂无数据'}></iBizNoData>;
    };

    const onContentClick = (e: MouseEvent): void => {
      if (!c.editorReadonly) {
        e.stopPropagation();
      }
    };

    const onDropdownItemClick = async (
      item: IData,
      event: MouseEvent,
    ): Promise<void> => {
      const tempVal = [...columnValue.value];
      tempVal[fromIndex.value] = item;
      Object.assign(tempVal[fromIndex.value], {
        ...item,
        [c.listMapField]: c.leftMapField,
      });
      await rowDataChange(tempVal, c.fieldName);
      // 触发表格列附加界面行为
      props.controller.triggerAction(props.row, event);
    };

    /**
     * 搜索
     */
    const onSearch = async (): Promise<void> => {
      isLoading.value = true;
      if (c.editorModel.appDataEntityId) {
        const from = columnValue.value[fromIndex.value];
        const res = await c.getServiceData(from, {});
        if (res) {
          options.value = res.data as IData[];
          isLoaded.value = true;
        }
        isLoading.value = false;
      }
    };

    /**
     * 处理左侧下拉框打开关闭
     */
    const onVisibleChange = (state: boolean): void => {
      isExpand.value = state;
      if (!isLoaded.value && state) {
        onSearch();
      }
    };

    /**
     * 绘制标签项
     */
    const renderSpanItem = (text: string, isExceed?: boolean): JSX.Element => {
      const title = isExceed ? text : '';
      return (
        <div title={title} class={[ns.b('span-item')]}>
          {text}
        </div>
      );
    };

    /**
     * 绘制左侧下拉选择框
     */
    const renderSelect = (fromValue: IData): JSX.Element => {
      const text = fromValue ? fromValue[c.textName] : '';
      const isExceed = text.length > 3;
      return (
        <el-dropdown
          trigger='click'
          placement='bottom-start'
          loading={isLoading.value}
          popper-class={[ns.b('dropdown-popper')]}
          onVisibleChange={onVisibleChange}
        >
          {{
            default: () => {
              return (
                <div
                  class={[
                    ns.b('dropdown'),
                    ns.is('dropdown-expand', isExpand.value),
                  ]}
                >
                  {renderSpanItem(text, isExceed)}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 1024 1024'
                    width='1em'
                    height='1em'
                    class={[
                      ns.be('dropdown', 'icon'),
                      ns.is('dropdown-icon-expand', isExpand.value),
                    ]}
                    data-v-2b52e528=''
                  >
                    <path d='M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z'></path>
                  </svg>
                </div>
              );
            },
            dropdown: () => {
              return (
                <el-dropdown-menu>
                  {{
                    default: () => {
                      return options.value.length > 0
                        ? options.value.map((item: IData) => {
                            const itemText = item[c.textName] || '';
                            const isItemExceed: boolean = itemText.length > 16;
                            return (
                              <el-dropdown-item
                                class={[
                                  item[c.keyName] === fromValue[c.keyName]
                                    ? ns.be('dropdown-popper', 'active')
                                    : '',
                                ]}
                                onClick={(_event: MouseEvent) =>
                                  onDropdownItemClick(item, _event)
                                }
                              >
                                {renderSpanItem(itemText, isItemExceed)}
                              </el-dropdown-item>
                            );
                          })
                        : renderNoData();
                    },
                  }}
                </el-dropdown-menu>
              );
            },
          }}
        </el-dropdown>
      );
    };

    /**
     * 绘制左侧from数据
     */
    const renderLeft = (fromValue: IData): JSX.Element => {
      return (
        <div class={ns.be('content', 'left')}>{renderSelect(fromValue)}</div>
      );
    };

    /**
     * 绘制中心图标内容
     */
    const renderCenter = (): JSX.Element => {
      return (
        <div class={ns.be('content', 'center')}>
          <svg
            viewBox='0 0 16 16'
            xmlns='http://www.w3.org/2000/svg'
            height='1em'
            width='1em'
            preserveAspectRatio='xMidYMid meet'
            focusable='false'
          >
            <g stroke-width='1' fill-rule='evenodd'>
              <path
                d='M7.3 4.403l-2.789 2.98a.7.7 0 0 1-1.022-.956L7.45 2.194a.698.698 0 0 1 1.085-.067l3.97 4.323a.7.7 0 1 1-1.031.947L8.7 4.375v8.892c0 .456-.309.833-.7.833-.392 0-.7-.377-.7-.833V4.403z'
                transform='rotate(90 7.995 8)'
              ></path>
            </g>
          </svg>
        </div>
      );
    };

    /**
     * 绘制右侧to数据
     */
    const renderRight = (toValue: IData): JSX.Element => {
      const text = toValue ? toValue[c.textName] : '';
      const isExceed = text.length > 9;
      return (
        <div class={ns.be('content', 'right')}>
          {renderSpanItem(text, isExceed)}
        </div>
      );
    };

    /**
     * 绘制内容
     */
    const renderContent = (): JSX.Element => {
      const from = columnValue.value[fromIndex.value];
      const to = columnValue.value[toIndex.value];
      return (
        <div
          class={[
            ns.b('content'),
            c.editorReadonly ? ns.bm('content', 'editor-readonly') : '',
          ]}
          onClick={onContentClick}
        >
          {from && renderLeft(from)}
          {from && to && renderCenter()}
          {to && renderRight(to)}
        </div>
      );
    };

    return {
      ns,
      c,
      componentRef,
      tooltip,
      rowDataChange,
      onInfoTextChange,
      gridEditItemProps,
      renderContent,
    };
  },
  render() {
    return (
      <iBizGridEditItem
        {...{
          ref: 'componentRef',
          required: !this.c.editItem.allowEmpty,
          error: this.row.errors[this.c.fieldName],
          overflowMode: this.controller.grid.overflowMode,
          class: [
            this.ns,
            this.ns.m(this.c.grid.overflowMode),
            this.controller.model.cellSysCss?.cssName,
          ],
          ...this.gridEditItemProps,
          showEditMask: false,
        }}
      >
        {this.renderContent()}
      </iBizGridEditItem>
    );
  },
});
export default GridChangeVersionColumn;
