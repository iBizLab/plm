/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ref, Ref, watch, defineComponent, computed, onMounted } from 'vue';
import {
  getDataPickerProps,
  getEditorEmits,
  renderString,
  useNamespace,
} from '@ibiz-template/vue3-util';
import { isNil } from 'ramda';
import './emoji-input.scss';
import { EmojiInputEditorController } from './editor.controller';
import { IBizEmojiSelect } from './component';

export const EmojiInput = defineComponent({
  name: 'IBizEmojiInput',
  props: getDataPickerProps<EmojiInputEditorController>(),
  emits: getEditorEmits(),
  setup(props, { emit }) {
    const ns = useNamespace('emoji-input');

    const c = props.controller;

    // 当前值
    const curValue: Ref<string | null> = ref('');

    // 实体数据集
    const items: Ref<IData[]> = ref([]);

    // 是否能请求
    const shouldLoad = ref(false);

    // 获取关联数据项值的表情
    const emoji = ref<string>('');

    // 表情选择弹框
    const visible = ref(false);

    // 是否编辑态
    const isEditable = ref(false);

    // 编辑器Ref
    const editorRef = ref();

    // 加载中
    const loading: Ref<boolean> = ref(false);

    // 在搜索中时，再次触发搜索记录搜索值，等待上次搜索触发完成后再次搜索
    let waitQuery: string | null = null;

    // 是否已加载过
    const isLoaded = ref(false);

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

    watch(
      () => props.value,
      newVal => {
        if (newVal || newVal === null) {
          if (c.model.valueType === 'OBJECT') {
            curValue.value = newVal
              ? (newVal as IData)[c.objectNameField as string]
              : null;
          } else {
            curValue.value = newVal as string;
          }
          if (newVal === null) {
            curValue.value = '';
          }
        }
      },
      { immediate: true },
    );

    // 自动聚焦
    watch(editorRef, newVal => {
      if (props.autoFocus && newVal && newVal.focus) {
        newVal.focus();
      }
    });

    // 搜索
    const onSearch = async (query: string) => {
      // 失焦那次不用发请求
      if (!shouldLoad.value) {
        return;
      }
      if (c.model.appDataEntityId && loading.value === false) {
        loading.value = true;
        try {
          let trimQuery = '';
          if (query !== props.value) {
            trimQuery = query.trim();
          }
          const res = await c.getServiceData(trimQuery, props.data!);
          if (res) {
            items.value = res.data as IData[];
          }
        } finally {
          loading.value = false;
          isLoaded.value = true;
          if (waitQuery != null) {
            const selfQuery = waitQuery;
            waitQuery = null;
            await onSearch(selfQuery);
          }
        }
      } else {
        waitQuery = query;
      }
    };

    onMounted(() => {
      watch(
        () => props.data[c.valueItem],
        async (newVal, oldVal) => {
          // 值项发生变化选中值项对应文本值
          if (newVal !== oldVal) {
            // 没有加载过先加载数据
            if (!isLoaded.value && editorRef.value && isNil(props.value)) {
              shouldLoad.value = true;
              await onSearch('');
            }
            emoji.value = newVal ? decodeURIComponent(atob(newVal)) : '';
            // 如果值项被清空了，主文本也需清空
            if (newVal === null) {
              emit('change', null);
            }
          }
        },
        { immediate: true, deep: true },
      );
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

    // 添加表情
    const onAddEmoji = (e: MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      visible.value = true;
    };

    // 清除表情
    const onClearEmoji = (e: MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      emoji.value = '';
      visible.value = false;
      Object.assign(props.data, { [c.valueItem]: '' });
    };

    // 表情变更
    const onEmojiSelect = (val: IData): void => {
      emit('change', btoa(encodeURIComponent(val.data)), c.valueItem);
      visible.value = false;
    };

    // 输入框值变更
    let blurCacheValue: string | undefined;
    const handleInputChange = (val: string | number) => {
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
     */
    const onBlur = (event: IData) => {
      blurCacheValue = event.target.value;
      if (blurCacheValue !== props.value) {
        emit('change', blurCacheValue);
      }
      emit('blur', event);
      setEditable(false);
    };

    // 下拉打开
    const onOpenChange = (isOpen: boolean) => {
      if (isOpen) {
        items.value = [];
        onSearch('');
      }
    };

    // 清除
    const onClear = () => {
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
      emit('change', null);
    };

    // 聚焦
    const onFocus = (e: IData) => {
      shouldLoad.value = true;
      emit('focus', e);
      setEditable(true);
    };

    // 点击
    const onClick = () => {
      shouldLoad.value = true;
    };

    const valueText = computed(() => {
      return renderString(curValue.value);
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

    // 绘制按钮内容
    const renderButtonContent = () => {
      let content = (
        <span class={[ns.e('button-content')]} onClick={onAddEmoji}>
          <svg
            class={ns.em('button-content', 'icon')}
            viewBox='0 0 1040 1024'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            p-id='1490'
            width='1em'
            height='1em'
          >
            <path
              d='M512.075261 1024A511.774217 511.774217 0 1 1 730.482434 48.769072a37.630457 37.630457 0 1 1-32.061149 68.035867 436.513303 436.513303 0 1 0 250.468323 395.270322 37.630457 37.630457 0 0 1 75.260914 0 512.526826 512.526826 0 0 1-512.075261 511.924739z'
              p-id='1491'
            ></path>
            <path
              d='M333.857416 344.0929a57.348817 57.348817 0 1 0 57.348817 57.348817 57.499339 57.499339 0 0 0-57.348817-57.348817zM686.53006 344.0929a57.348817 57.348817 0 1 0 57.348817 57.348817 57.348817 57.348817 0 0 0-57.348817-57.348817zM515.236219 783.165074c-162.864619 0-262.359547-141.942084-262.359547-219.159782a30.104366 30.104366 0 0 1 60.208731 0c0 48.618551 76.314567 158.951051 202.150816 158.951051s193.571072-134.114949 193.571072-158.951051a30.104366 30.104366 0 0 1 60.208731 0c0 54.488902-90.012054 219.159782-253.779803 219.159782zM1009.549904 207.720123h-67.132735V139.985301a30.104366 30.104366 0 1 0-60.208732 0v67.734822h-67.734822a30.104366 30.104366 0 0 0-30.104366 30.104366 30.104366 30.104366 0 0 0 30.104366 30.104366h67.734822v67.734823a30.104366 30.104366 0 0 0 60.208732 0v-67.734823h67.734823a30.104366 30.104366 0 0 0 30.104365-30.104366 30.104366 30.104366 0 0 0-30.706453-30.104366z'
              p-id='1492'
            ></path>
          </svg>
        </span>
      );
      if (emoji.value) {
        content = (
          <span class={[ns.e('button-content')]}>
            <svg
              class={ns.em('button-content', 'icon')}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1024 1024'
              width='1em'
              height='1em'
              onClick={onClearEmoji}
            >
              <path d='M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z'></path>
            </svg>
            <span v-html={emoji.value} />
          </span>
        );
      }
      return content;
    };

    // 绘制触发 Popover 显示的元素
    const renderReference = () => {
      return (
        <el-button class={[ns.e('button'), ns.is('clear', !!emoji.value)]}>
          {renderButtonContent()}
        </el-button>
      );
    };

    // 绘制图标选择
    const renderEmojiSelect = () => {
      return (
        <el-popover
          trigger='click'
          placement='bottom-start'
          width={'auto'}
          v-model:visible={visible.value}
          hide-after={0}
          popper-class={[ns.b('emoji-popper')]}
        >
          {{
            reference: () => (
              <div
                class={[
                  ns.be('emoji', 'reference'),
                  ns.is('no-emoji', !!emoji.value),
                ]}
              >
                {renderReference()}
              </div>
            ),
            default: () => {
              return (
                <IBizEmojiSelect
                  continuousList={true}
                  dark={true}
                  onSelect={onEmojiSelect}
                />
              );
            },
          }}
        </el-popover>
      );
    };

    return {
      ns,
      c,
      emoji,
      curValue,
      valueText,
      loading,
      items,
      visible,
      onOpenChange,
      onClear,
      onEmojiSelect,
      renderEmojiSelect,
      onSearch,
      onFocus,
      onBlur,
      onClick,
      handleInputChange,
      handleKeyUp,
      editorRef,
      isEditable,
      setEditable,
      renderReference,
      showFormDefaultContent,
    };
  },
  render() {
    // 编辑态内容
    const editContent = this.readonly ? (
      this.value
    ) : (
      <el-input
        ref='editorRef'
        class={this.ns.e('input')}
        v-model={this.curValue}
        placeholder={this.c.placeHolder}
        type={'text'}
        resize='none'
        onChange={this.handleInputChange}
        onKeyup={this.handleKeyUp}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
        disabled={this.disabled}
        {...this.$attrs}
      >
        {{
          prepend: () => this.renderEmojiSelect(),
        }}
      </el-input>
    );

    // 只读态内容
    const readonlyContent = (
      <div class={(this.ns.b(), this.ns.m('readonly'))}>{this.valueText}</div>
    );

    // 表单默认内容
    const formDefaultContent = (
      <div class={this.ns.b('form-default-content')}>
        {this.curValue ? this.valueText : '-'}
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
