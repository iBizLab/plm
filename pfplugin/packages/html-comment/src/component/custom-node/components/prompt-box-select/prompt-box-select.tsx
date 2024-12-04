import { defineComponent, ref, watch } from 'vue';
import { base64ToStr, strToBase64 } from '@ibiz-template/core';
import { useNamespace } from '@ibiz-template/vue3-util';
import { IModalData, IOverlayPopoverContainer } from '@ibiz-template/runtime';
import './prompt-box-select.scss';
import { genBgColors, genToolBars } from './config';
import { onCreatePopover, getCustomNodeProps } from '../../utils';
import { IBizEmojiSelect } from '../../../emoji-select/emoji-select';

export const PromptBoxSelect = defineComponent({
  name: 'IBizPromptBoxSelect',
  props: getCustomNodeProps(),
  emits: ['change'],
  setup(props) {
    const ns = useNamespace('prompt-box-select');

    // 当前颜色
    const curColor = ref('');
    // 当前图标
    const curIcon = ref('');
    // 当前文本
    const curText = ref('');
    // 第一层弹框
    const firstOverlay = ref<IOverlayPopoverContainer | null>(null);
    // 表情弹框
    const emojiOverlay = ref<IOverlayPopoverContainer | null>(null);
    // 背景颜色弹框
    const bgColorOverlay = ref<IOverlayPopoverContainer | null>(null);

    // 输入框ref
    const inputRef = ref();
    // 第一层弹框激活元素
    const referenceRef = ref();
    // 用于背景颜色绘制
    const bgColors = ref<string[]>([]);
    // 用于工具栏绘制
    const toolBars = ref<IData[]>([]);
    bgColors.value = genBgColors();
    toolBars.value = genToolBars();

    // 初始化赋值
    curColor.value = toolBars.value[0].color;
    curIcon.value = toolBars.value[0].icon;
    if (props.data) {
      const { color, icon, text } = props.data;
      curColor.value = color;
      curIcon.value = base64ToStr(icon);
      curText.value = text;
    }

    // 创建一个 MutationObserver 实例
    let observer: ResizeObserver | null = new ResizeObserver(() => {
      // 检查是否有子节点变化，通常表明元素已经渲染
      if (referenceRef.value && referenceRef.value.offsetWidth !== 0) {
        referenceRef.value?.click();
        observer = null;
      }
    });

    // 当第一次插入节点时，输入框需要自动聚焦并且弹框需要打开
    if (props.isFocus) {
      watch(referenceRef, newVal => {
        if (newVal && newVal.click) {
          observer!.observe(newVal);
        }
      });
      watch(inputRef, newVal => {
        if (newVal && newVal.focus) {
          newVal.focus();
        }
      });
    }

    // 自定义抛值逻辑
    const customEmit = (): void => {
      const value = {
        color: curColor.value,
        icon: strToBase64(curIcon.value),
        text: curText.value,
      };
      props.change(value);
    };

    // 选择表情
    const onEmojiSelect = (val: IData): void => {
      const modalData: IModalData = {
        ok: true,
        data: [{ emoji: strToBase64(val.data) }],
      };
      emojiOverlay.value?.dismiss(modalData);
    };

    // 处理背景颜色选择
    const handleColorSelect = (val: string): void => {
      bgColorOverlay.value?.dismiss({ ok: true, data: [val] });
    };

    // 处理工具栏默认点击
    const handleDefaultClick = (item: IData): void => {
      if (item.color) {
        curColor.value = item.color;
        curIcon.value = item.icon;
      }
      inputRef.value?.focus();
    };

    // 绘制背景颜色选择列表
    const renderBgColorList = (items: string[]): JSX.Element => {
      return (
        <div class={ns.be('background-popover', 'content')}>
          <ul class={ns.be('background-popover', 'list')}>
            <li
              class={ns.be('background-popover', 'list-item-clear')}
              onClick={() => handleColorSelect('')}
            >
              <svg viewBox='0 0 1024 1024' width='1em' height='1em'>
                <path d='M236.8 128L896 787.2V128H236.8z m614.4 704L192 172.8V832h659.2zM192 64h704c38.4 0 64 25.6 64 64v704c0 38.4-25.6 64-64 64H192c-38.4 0-64-25.6-64-64V128c0-38.4 25.6-64 64-64z'></path>
              </svg>
              清除背景色
            </li>
            {items.map((item: string) => {
              return (
                <li
                  class={ns.be('background-popover', 'list-item')}
                  onClick={() => handleColorSelect(item)}
                >
                  <div
                    class={ns.bem(
                      'background-popover',
                      'list-item',
                      'color-block',
                    )}
                    style={{ backgroundColor: item }}
                  ></div>
                </li>
              );
            })}
          </ul>
        </div>
      );
    };

    // 打开表情图标选择弹框
    const onOpenAddEmojiPopover = async (e: MouseEvent): Promise<void> => {
      if (!emojiOverlay.value) {
        emojiOverlay.value = onCreatePopover(
          IBizEmojiSelect as unknown as JSX.Element,
          {},
          {
            dark: true,
            continuousList: true,
            onSelect: onEmojiSelect,
          },
        );
      }
      await emojiOverlay.value.present(e.target as HTMLElement);
      const result: IModalData = await emojiOverlay.value.onWillDismiss();

      // 弹框销毁后回调赋值
      const item = result.data?.[0];
      if (result.ok && item) {
        curIcon.value = `${base64ToStr(item.emoji)}`;
      }
      emojiOverlay.value = null;
      inputRef.value?.focus();
    };

    // 打开背景颜色选择弹框
    const onOpenBgColorPopover = async (e: MouseEvent): Promise<void> => {
      if (!bgColorOverlay.value) {
        bgColorOverlay.value = onCreatePopover(
          renderBgColorList(bgColors.value),
        );
      }
      await bgColorOverlay.value.present(e.target as HTMLElement);
      const result: IModalData = await bgColorOverlay.value.onWillDismiss();

      // 弹框销毁后回调赋值
      const item = result.data?.[0];
      if (result.ok) {
        curColor.value = `${item}`;
      }
      bgColorOverlay.value = null;
      inputRef.value?.focus();
    };

    // 处理提示弹框的删除
    const handleDelete = async (): Promise<void> => {
      await firstOverlay.value?.dismiss();
      await emojiOverlay.value?.dismiss();
      await bgColorOverlay.value?.dismiss();
      props.change('', { isDelete: true });
    };

    // 处理删除选择的表情
    const handleDeleteEmoji = (): void => {
      curIcon.value = '';
    };

    // 处理工具栏项点击
    const handleToolItemClick = (item: IData, e: MouseEvent): void => {
      if (item.type === 'separator') {
        return;
      }
      inputRef.value?.focus();
      switch (item.type) {
        case 'add-emoji':
          onOpenAddEmojiPopover(e);
          break;
        case 'background-color':
          onOpenBgColorPopover(e);
          break;
        case 'delete':
          handleDelete();
          break;
        case 'delete-emoji':
          handleDeleteEmoji();
          break;
        default:
          handleDefaultClick(item);
          break;
      }
    };

    // 绘制工具栏
    const renderToolBar = (): JSX.Element => {
      return (
        <div class={ns.be('popover', 'content')}>
          {toolBars.value.map((item: IData) => {
            return (
              <div
                class={[
                  ns.be('popover', 'tool-item'),
                  ns.be('popover', `tool-item-${item.type}`),
                  ns.is('activated', curIcon.value === item.icon),
                ]}
                title={item.text}
                onClick={e => handleToolItemClick(item, e)}
              >
                <div
                  class={ns.bem('popover', 'tool-item', 'content')}
                  v-html={item.icon || item.text}
                ></div>
              </div>
            );
          })}
        </div>
      );
    };

    // 打开第一层弹框
    const onOpenTopPopover = async (): Promise<void> => {
      inputRef.value?.focus();
      firstOverlay.value = onCreatePopover(renderToolBar(), {
        placement: 'top-start',
      });
      await firstOverlay.value.present(referenceRef.value as HTMLElement);
      await firstOverlay.value.onWillDismiss();
      customEmit();
      firstOverlay.value = null;
    };

    return {
      ns,
      curColor,
      curIcon,
      curText,
      inputRef,
      referenceRef,
      toolBars,
      handleToolItemClick,
      onOpenTopPopover,
    };
  },
  render() {
    return (
      <div class={[this.ns.b(), this.readonly ? this.ns.m('readonly') : '']}>
        <div
          ref='referenceRef'
          class={this.ns.e('reference')}
          style={{ backgroundColor: this.curColor }}
          onClick={this.onOpenTopPopover}
        >
          {this.curIcon ? (
            <div
              class={[this.ns.em('reference', 'icon')]}
              v-html={this.curIcon}
            ></div>
          ) : (
            ''
          )}
          <el-input
            ref='inputRef'
            v-model={this.curText}
            type='text'
            autofocus={true}
          />
        </div>
      </div>
    );
  },
});
