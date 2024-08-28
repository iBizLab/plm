import { ref, Ref, defineComponent, computed, watch, onUnmounted } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import './follow.scss';
import { OnClickOutsideResult } from '@ibiz-template/core';
import { AttentionController } from '../attention-controller';

export const Follow = defineComponent({
  name: 'IBizFollow',
  props: {
    readonly: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    value: {
      type: String,
    },
    codeListId: {
      type: String,
    },
    codeListMap: {
      type: Object,
    },
    controller: {
      type: AttentionController,
      required: true,
    },
    defaultSelected: {
      type: String,
    },
  },
  emits: {
    /** 值变更事件 */
    change: (_value: string, _name?: string) => true,
    /** 失焦事件 */
    blur: (_event?: IData) => true,
    /** 聚焦事件 */
    focus: (_event?: IData) => true,
    /** 回车事件 */
    enter: (_event?: IData) => true,
    /** 信息文本变更事件 */
    infoTextChange: (_text: string) => true,
  },
  setup(props, { emit }) {
    const ns = useNamespace('follow');
    const c = props.controller;

    // 下拉菜单Ref
    const dropdownRef = ref();

    // 是否已加载代码表
    const isLoadedCodeList = ref(false);

    // 是否编辑态
    const isEditable = ref(false);

    // 编辑器Ref
    const editorRef = ref();

    // 是否正在加载
    const isLoading = ref(false);

    // 点击外部
    let funcs: OnClickOutsideResult;

    // 关注状态
    const followState = ref(false);

    // 选中内容
    const selectd = ref<null | number | string>(null);

    // 显示状态
    const showState = ref(false);

    const items: Ref<readonly IData[]> = ref([]);

    // 映射关系
    const codeListMap = computed(() => {
      return props.codeListMap || {};
    });

    // 样式变量
    const cssVars = computed(() => {
      return {};
    });

    // 加载代码表数据与后续操作
    const loadCodeList = async (): Promise<void> => {
      isLoading.value = true;

      if (props.codeListId) {
        const app = ibiz.hub.getApp(c.context.srfappid);
        const codeListItmes = await app.codeList.get(
          props.codeListId,
          c.context,
          c.params,
        );
        if (codeListItmes && codeListItmes.length > 0) {
          items.value = codeListItmes;
        }
        isLoadedCodeList.value = true;
      }
      isLoading.value = false;
    };

    // 处理关注
    const handleFollow = (val?: string | number): void => {
      selectd.value = val as string;
      const itemVal = codeListMap.value?.FOLLOWED?.find(
        (item: number | string) => String(item) === String(val),
      );
      if (itemVal) {
        followState.value = true;
      } else {
        followState.value = false;
      }
    };

    watch(
      () => props.value,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async (newVal, oldVal) => {
        let tempVal = newVal;
        if (!newVal && props.codeListMap) {
          tempVal = codeListMap.value?.NOTFOLLOWING[0] || '';
        }
        handleFollow(tempVal as string);
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

    // 当前值
    const curValue = computed({
      get() {
        return props.value?.toString();
      },
      set(select: string | Array<string> | undefined) {
        emit('change', select as string);
        setEditable(false);
      },
    });

    const valueText = computed(() => {
      const valueArr = Array.isArray(curValue.value)
        ? curValue.value
        : [curValue.value];

      const list = items.value;
      const textArr: string[] = [];
      valueArr.forEach(item => {
        list.forEach(codeItem => {
          if (codeItem.value === item) {
            textArr.push(codeItem.text);
          }
        });
      });
      return textArr.join(',');
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

    // 根据text获取对应代码表项
    const getCodeListItem = (text: string): IData | undefined => {
      const list = items.value;
      return list.find(item => item.text === text);
    };

    // 气泡框出现/隐藏时触发
    const onShowChange = async (visible: boolean): Promise<void> => {
      showState.value = visible;
      if (visible && !isLoadedCodeList.value) {
        // 下拉框出现时如果没有加载过代码表去加载
        await loadCodeList();
      }
    };

    // 项点击
    const onItemClick = (item: IParams): void => {
      selectd.value = item.value;
      handleFollow(item.value as string);
      emit('change', item.value);
    };

    /**
     * 处理按键事件
     * @author ljx
     * @date 2024-02-29 02:42:45
     * @param {KeyboardEvent} e
     * @return {*}
     */
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'Escape' || e.keyCode === 27) {
        e.stopPropagation();
        // 关闭下拉菜单
        dropdownRef.value?.handleClose();
      }
    };

    onUnmounted(() => {
      if (funcs && funcs.stop) {
        funcs.stop();
      }
    });

    return {
      ns,
      curValue,
      items,
      valueText,
      editorRef,
      cssVars,
      isEditable,
      isLoading,
      followState,
      selectd,
      showState,
      dropdownRef,
      setEditable,
      getCodeListItem,
      onShowChange,
      onItemClick,
      handleKeyDown,
    };
  },

  render() {
    // 只读态内容
    const readonlyContent = (
      <div class={[this.ns.e('showcase'), this.showState ? 'is-active' : '']}>
        <span class={this.ns.em('showcase', 'icon')}>
          <svg
            viewBox='0 0 16 16'
            xmlns='http://www.w3.org/2000/svg'
            height='1em'
            width='1em'
            focusable='false'
          >
            <g id='follow/with/interest' stroke-width='1' fill-rule='evenodd'>
              <path
                d='M8 3.4c2.823 0 5.04 1.367 7.38 3.637a2.037 2.037 0 0 1 0 2.925C13.04 12.232 10.824 13.6 8 13.6c-2.823 0-5.032-1.364-7.376-3.637a2.037 2.037 0 0 1 0-2.925C2.967 4.764 5.176 3.4 8 3.4zm0 1.2c-2.417 0-4.405 1.228-6.542 3.3a.837.837 0 0 0 0 1.2C3.596 11.173 5.584 12.4 8 12.4s4.413-1.231 6.546-3.3a.837.837 0 0 0 0-1.2C12.412 5.83 10.415 4.6 8 4.6zM8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-1.2a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6z'
                id='attention'
              ></path>
            </g>
          </svg>
        </span>
        <span class={this.ns.em('showcase', 'text')}>
          {this.followState ? '已关注' : '未关注'}
        </span>
      </div>
    );
    // 编辑态内容
    const editContent = (
      <el-dropdown
        popper-class={this.ns.b('popover')}
        ref={(e: IParams) => {
          this.dropdownRef = e;
        }}
        trigger='click'
        placement='top-start'
        onVisibleChange={this.onShowChange}
        onKeydown={(e: KeyboardEvent) => {
          this.handleKeyDown(e);
        }}
      >
        {{
          default: () => {
            return readonlyContent;
          },
          dropdown: () => {
            return (
              <el-dropdown-menu class={this.ns.be('popper', 'dropdown-menu')}>
                {{
                  default: () =>
                    this.items.map((item: IParams, index: number) => {
                      return (
                        <el-dropdown-item
                          onClick={() => this.onItemClick(item)}
                        >
                          <div
                            class={[
                              this.ns.b('content'),
                              String(this.selectd) === String(item.value)
                                ? 'is-active'
                                : '',
                            ]}
                          >
                            <div class={this.ns.em('item', 'text')}>
                              {item.text}
                            </div>
                            <div class={this.ns.em('item', 'tooltip')}>
                              {item.tooltip}
                            </div>
                          </div>
                          {index === this.items.length - 1 ? null : (
                            <div class={this.ns.em('item', 'divider')}>
                              <el-divider />
                            </div>
                          )}
                        </el-dropdown-item>
                      );
                    }),
                }}
              </el-dropdown-menu>
            );
          },
        }}
      </el-dropdown>
    );

    return (
      <div
        class={[
          this.ns.b(),
          this.disabled ? this.ns.m('disabled') : '',
          this.readonly ? this.ns.m('readonly') : '',
          this.ns.is('editable', this.isEditable),
        ]}
        style={this.cssVars}
      >
        {this.readonly ? readonlyContent : editContent}
      </div>
    );
  },
});
