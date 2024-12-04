/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { computed, defineComponent, ref, watch } from 'vue';
import {
  getEditorEmits,
  getInputProps,
  useNamespace,
} from '@ibiz-template/vue3-util';
import { IconPickerControlller } from './icon-picker-controller';
import './icon.picker.scss';

export const IconPicker = defineComponent({
  name: 'IconPicker',
  props: getInputProps<IconPickerControlller>(),
  emits: getEditorEmits(),
  setup: (props, { emit }) => {
    const ns = useNamespace('icon-picker');
    const c = props.controller;
    const editorModel = c.model;
    const iconSelectorState = ref(false); // 控制图标选择模态的显示隐藏
    const searchInput = ref(''); // 用于搜索图标
    const curSelectIcon = ref(''); // 当前选中的icon
    const activeIndex = ref(0); // 当前激活的图标分类
    let showMode: 'input' | 'span' = 'input';

    if (editorModel.editorParams) {
      if (editorModel.editorParams.SHOWMODE) {
        showMode = editorModel.editorParams.SHOWMODE;
      }
    }

    // 是否编辑态
    const isEditable = ref(false);

    // 编辑器Ref
    const editorRef = ref();

    // 类型
    const type = computed(() => {
      switch (editorModel.editorType) {
        case 'TEXTBOX':
          return 'text';
        case 'PASSWORD':
          return 'password';
        case 'TEXTAREA':
        case 'TEXTAREA_10':
          return 'textarea';
        default:
          return 'string';
      }
    });

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

    const currentVal = ref<string>('');

    c.initIconList();

    const curSysImage = computed(() => {
      return {
        cssClass: currentVal.value || 'fa fa-plus',
      };
    });

    const onClearIcon = (e: MouseEvent) => {
      e.stopPropagation();
      currentVal.value = '';
      curSelectIcon.value = '';
      emit('change', '');
    };

    watch(
      () => props.value,
      (newVal, oldVal) => {
        if (newVal !== oldVal) {
          if (newVal == null) {
            currentVal.value = '';
            curSelectIcon.value = '';
          } else {
            currentVal.value = newVal.toString();
            curSelectIcon.value = newVal.toString();
          }
        }
      },
      { immediate: true },
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

    let blurCacheValue: string | undefined;
    // 值变更
    const handleChange = (val: string | number) => {
      // 拦截掉blur触发后change
      if (blurCacheValue !== val) {
        emit('change', val);
      }
      blurCacheValue = undefined;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e && e.code === 'Enter') {
        emit('enter', e);
        editorRef.value.$el.dispatchEvent(e);
      }
    };

    /**
     * blur时马上抛值变更
     * @author lxm
     * @date 2023-03-06 06:36:23
     */
    const onBlur = (event: IData) => {
      blurCacheValue = event.target.value;
      // eslint-disable-next-line eqeqeq
      if (blurCacheValue != props.value) {
        emit('change', blurCacheValue);
      }
      emit('blur', event);
      setEditable(false);
    };

    // 自动聚焦
    watch(editorRef, newVal => {
      if (props.autoFocus && newVal) {
        const inputTag = type.value === 'textarea' ? 'textarea' : 'input';
        const input = newVal.$el.getElementsByTagName(inputTag)[0];
        input.focus();
      }
    });

    const curIconList = computed(() => {
      if (c.iconList.length > 0) {
        const index = Number(activeIndex.value) || 0;
        const data = c.iconList[index];
        let result: IData[] = [];
        if (data && data.children) {
          result = data.children;
        }
        if (searchInput.value) {
          result = result.filter(item => {
            const searchId = `fa fa-${item.id}`;
            if (item.id && searchId.includes(searchInput.value)) {
              return true;
            }
            return false;
          });
        }
        return result;
      }
      return [];
    });

    const openDialog = () => {
      iconSelectorState.value = true;
    };

    const onFocus = (e: IData) => {
      emit('focus', e);
      setEditable(true);
    };

    // 只读文本计算和事件抛出
    const readonlyText = computed(() => {
      const { unitName } = props.controller.parent;
      // 只读显示
      let text = `${props.controller.formatValue(currentVal.value)}`;
      // 当有值且单位存在时才显示单位
      if (text && unitName) {
        text += unitName;
      }
      return text;
    });

    // 是否允许自动填充
    const shouldAutoComplete = computed(() => {
      // 根据配置的编辑器参数autocomplete来决定
      return c.model.editorParams &&
        c.model.editorParams.autocomplete &&
        c.toBoolean(c.model.editorParams.autocomplete)
        ? 'on'
        : 'new-password';
    });

    const handleCancel = () => {
      searchInput.value = '';
      activeIndex.value = 0;
      iconSelectorState.value = false;
    };

    const handleConfirm = () => {
      if (curSelectIcon.value) {
        emit('change', curSelectIcon.value);
      }
      searchInput.value = '';
      activeIndex.value = 0;
      iconSelectorState.value = false;
    };

    // 图表分类选中
    const handleSelect = (key: number) => {
      activeIndex.value = key;
    };

    const handleIconChange = (item: IData) => {
      if (item.id) {
        curSelectIcon.value = `fa fa-${item.id}`;
      }
    };

    const renderIconItem = (item: IData) => {
      return (
        <div class={ns.em('modal-box', 'icon-item')}>
          <div
            class={[
              ns.em('modal-box', 'icon-item-box'),
              ns.is('active', curSelectIcon.value === `fa fa-${item.id}`),
            ]}
            title={`fa fa-${item.id}`}
            onClick={() => handleIconChange(item)}
          >
            <p class='item-icon'>
              <i class={`fa fa-${item.id}`}></i>
            </p>
            <p class='icon-tip'>{item.id}</p>
          </div>
        </div>
      );
    };

    const renderIconContainer = () => {
      return (
        <div class={ns.e('modal-box')}>
          <div class={ns.em('modal-box', 'search-input')}>
            <el-input
              v-model={searchInput.value}
              placeholder='请输入图标名称'
            ></el-input>
          </div>
          <div class={ns.em('modal-box', 'icon-menu')}>
            <el-menu
              default-active={String(activeIndex.value)}
              mode='horizontal'
              onSelect={handleSelect}
            >
              {{
                default: () => {
                  return c.iconList.map((item: IData, index: number) => {
                    return (
                      <el-menu-item
                        title={item.label}
                        key={index}
                        index={index.toString()}
                      >
                        {item.type}
                      </el-menu-item>
                    );
                  });
                },
              }}
            </el-menu>
          </div>
          <div class={ns.em('modal-box', 'icon-list')}>
            {curIconList.value.map((item: IData) => {
              return renderIconItem(item);
            })}
          </div>
        </div>
      );
    };

    const renderFooter = () => {
      return (
        <div class={ns.e('footer')}>
          <el-button type='text' onClick={handleCancel}>
            取消
          </el-button>
          <el-button type='primary' onClick={handleConfirm}>
            确认
          </el-button>
        </div>
      );
    };

    const renderIconModal = () => {
      return (
        <el-dialog
          title={'请选择图标'}
          v-model={iconSelectorState.value}
          onBefore-close={handleCancel}
          modal={false}
          width='80%'
        >
          {{
            default: () => {
              return renderIconContainer();
            },
            footer: () => {
              return renderFooter();
            },
          }}
        </el-dialog>
      );
    };

    return {
      c,
      ns,
      type,
      currentVal,
      readonlyText,
      handleChange,
      handleKeyUp,
      onBlur,
      onFocus,
      editorRef,
      shouldAutoComplete,
      isEditable,
      setEditable,
      iconSelectorState,
      renderIconModal,
      openDialog,
      showFormDefaultContent,
      showMode,
      curSysImage,
      onClearIcon,
    };
  },
  render() {
    const { editorWidth, editorHeight } = this.c.model;
    const isSpan = this.showMode === 'span';
    let content = null;
    if (this.readonly) {
      // 只读显示
      content = this.readonlyText;
    } else {
      // 编辑态显示

      content = (
        <el-input
          ref='editorRef'
          clearable={true}
          v-model={this.currentVal}
          placeholder={this.c.placeHolder}
          type={this.type}
          resize='none'
          maxlength={this.c.model.maxLength}
          minlength={this.c.model.minLength}
          onChange={this.handleChange}
          onKeyup={this.handleKeyUp}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          class={this.ns.b('input')}
          disabled={this.disabled}
          autocomplete={this.shouldAutoComplete}
          {...this.$attrs}
        >
          {{
            suffix: () => {
              return (
                <ion-icon onClick={this.openDialog} name='search'></ion-icon>
              );
            },
          }}
        </el-input>
      );
    }

    if (isSpan) {
      content = (
        <div class={this.ns.e('icon')} onClick={this.openDialog}>
          <iBizIcon icon={this.curSysImage} />
          {this.currentVal ? (
            <svg
              class={this.ns.em('icon', 'clear')}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1024 1024'
              width='1em'
              height='1em'
              onClick={this.onClearIcon}
            >
              <path d='M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z'></path>
            </svg>
          ) : (
            ''
          )}
        </div>
      );
    }

    // 表单默认内容
    const formDefaultContent = (
      <div class={this.ns.b('form-default-content')}>
        {this.currentVal
          ? this.type === 'password'
            ? this.currentVal.split('').map(_item => '•')
            : this.currentVal
          : '-'}
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
          this.ns.is('span', isSpan),
        ]}
        style={{
          width: editorWidth ? `${editorWidth}px` : '',
          height: editorHeight ? `${editorHeight}px` : '',
        }}
      >
        {this.showFormDefaultContent && formDefaultContent}
        {content}
        {this.iconSelectorState && this.renderIconModal()}
      </div>
    );
  },
});
