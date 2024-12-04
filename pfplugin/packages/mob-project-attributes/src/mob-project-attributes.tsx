/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-param-reassign */
import {
  PropType,
  defineComponent,
  h,
  reactive,
  ref,
  resolveComponent,
  watch,
} from 'vue';
import { useControlController, useNamespace } from '@ibiz-template/vue3-util';
import { clone } from '@ibiz-template/core';
import { IDEEditForm, IDEFormItem } from '@ibiz/model-core';
import { FormItemController, IControlProvider } from '@ibiz-template/runtime';
import { MobProjectAttributesController } from './mob-project-attributes-controller';
import './mob-project-attributes.scss';

export const MobProjectAttributes = defineComponent({
  name: 'IBizMobProjectAttributes',
  props: {
    modelData: {
      type: Object as PropType<IDEEditForm>,
      required: true,
    },
    context: { type: Object as PropType<IContext>, required: true },
    params: { type: Object as PropType<IParams>, default: () => ({}) },
    provider: { type: Object as PropType<IControlProvider> },
    isSimple: { type: Boolean, required: false },
    data: { type: Object as PropType<IData>, required: false },
    loadDefault: { type: Boolean, default: true },
  },
  setup(props, { emit }) {
    const ns = useNamespace('mob-project-attributes');
    const formItems: IDEFormItem[] = [];
    const c = useControlController(
      (...args) => new MobProjectAttributesController(...args),
      { excludePropsKeys: ['data'] },
    );

    if (props.isSimple) {
      c.evt.on('onMounted', () => {
        // 第一次data直接赋值，后面默认加载会走load
        c.setSimpleData(props.data || {});
      });
      watch(
        () => props.data,
        newVal => {
          const changeVal = newVal || {};
          // 找有没有不一致的属性
          const find = Object.keys(c.data).find(key => {
            return changeVal[key] !== c.data[key];
          });
          // 内外部数据不一致时，只能是外部修改了，这是更新数据并重走load
          if (find) {
            c.setSimpleData(changeVal);
          }
        },
        { deep: true },
      );
    }

    c.evt.on('onCreated', () => {
      // 表单成员state响应式
      const keys = Object.keys(c.details);
      keys.forEach(key => {
        const detail = c.details[key];
        detail.state = reactive(detail.state);
      });
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onValueChange = (val: any, key: string, name?: string): void => {
      const n = name || key;
      c.setDataValue(n, val);
    };

    const findController = (item: IData) => {
      return c.formItems.find((i: IData) => i.name === item.key)!;
    };

    const renderEditor = (item: IData, controller: FormItemController) => {
      let editor = null;
      const attrs: IData = {};
      if (item.type === 'string') {
        attrs.autofocus = true;
      } else if (item.type === 'number') {
        attrs.controlsPosition = 'right';
        attrs.controls = true;
      }
      if (!controller) {
        return;
      }
      const editorProps = {
        value: controller.value,
        data: controller.data,
        controller: controller.editor,
        disabled: controller.state.disabled,
        readonly: item.ref.isFocus,
        onChange: (val: never, name: string) =>
          onValueChange(val, item.key, name),
        controlParams: controller.form.controlParams,
        onFocus: (event: MouseEvent) => {
          controller.onFocus(event);
        },
        onBlur: (event: MouseEvent) => {
          controller.onBlur(event);
        },
        onEnter: (event: MouseEvent) => controller.onEnter(event),
        ...attrs,
      };
      let componentName = '';
      if (item.type === 'string') {
        componentName = 'IBizInput';
      } else if (item.type === 'number') {
        componentName = 'IBizInputNumber';
      } else if (item.type === 'picker') {
        componentName = 'IBizDropdown';
      } else if (item.type === 'date') {
        componentName = 'IBizDatePicker';
      }
      const component = resolveComponent(componentName);
      editor = h(component, {
        ...editorProps,
      });
      return editor;
    };

    const linkSvg = () => {
      return (
        <svg
          class='icon'
          viewBox='0 0 1024 1024'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          p-id='4033'
          height='1em'
          width='1em'
        >
          <path
            d='M832 128H640v64h146.752L521.376 457.376l45.248 45.248L832 237.248V384h64V128z'
            fill='#181818'
            p-id='4034'
          ></path>
          <path
            d='M768 832H192V256h352v-64H160a32 32 0 0 0-32 32v640a32 32 0 0 0 32 32h640a32 32 0 0 0 32-32V480h-64v352z'
            fill='#181818'
            p-id='4035'
          ></path>
        </svg>
      );
    };

    const startsWithHttpProtocol = (str: string) => {
      // 使用正则表达式来匹配字符串是否以 http:// 或 https:// 开头
      const pattern = /^(http:\/\/|https:\/\/)/;
      // 测试字符串是否符合模式
      return pattern.test(str);
    };

    const linkOpen = (url: string) => {
      window.location.href = url;
    };

    const dialogShow = ref<boolean>(false);

    const dialogDescription = ref<string>('');

    const dialogValue = ref<string>('');

    const dialogValueKey = ref<string>('');

    const click = (event: MouseEvent, item: IData, controller: any) => {
      event.stopPropagation();
      dialogDescription.value = item.description;
      dialogValueKey.value = item.key;
      const value = clone(controller.data[dialogValueKey.value]);
      dialogValue.value = value;
      dialogShow.value = true;
    };

    const confirm = () => {
      dialogShow.value = false;
      onValueChange(dialogValue.value, dialogValueKey.value);
      dialogDescription.value = '';
      dialogValue.value = '';
      dialogValueKey.value = '';
    };

    const cancel = () => {
      dialogShow.value = false;
      dialogDescription.value = '';
      dialogValue.value = '';
      dialogValueKey.value = '';
    };

    return {
      c,
      ns,
      formItems,
      emit,
      renderEditor,
      findController,
      click,
      dialogShow,
      confirm,
      cancel,
      dialogDescription,
      dialogValue,
      linkSvg,
      startsWithHttpProtocol,
      linkOpen,
    };
  },
  render() {
    if (!this.c.state.isMounted) {
      return null;
    }
    return (
      <div class={this.ns.b()}>
        {this.c.addAttributes.value.length > 0 &&
          this.c.addAttributes.value.map((item: IData) => {
            const controller = this.findController(item);
            let isLink = false;
            if (controller && controller.value && item.type === 'string') {
              isLink = this.startsWithHttpProtocol(controller.value as string);
            }
            if (!controller) {
              return null;
            }
            return (
              <div class={[this.ns.e('item')]}>
                <div class={this.ns.e('item-text')}>{item.description}</div>
                <div
                  class={[this.ns.e('item-edit'), this.ns.is('isLink', isLink)]}
                  id={item.key}
                  onClick={event => this.click(event, item, controller)}
                >
                  {this.renderEditor(item, controller)}
                </div>
                {isLink ? (
                  <div
                    class={this.ns.e('item-link-svg')}
                    onClick={() => this.linkOpen(controller.value as string)}
                    title='打开链接'
                  >
                    {this.linkSvg()}
                  </div>
                ) : null}
              </div>
            );
          })}

        <van-dialog
          class={this.ns.e('dialog')}
          show={this.dialogShow}
          title={this.dialogDescription}
          onConfirm={this.confirm}
          onCancel={this.cancel}
          show-cancel-button
          close-on-click-overlay={true}
        >
          <van-field v-model={this.dialogValue} />
        </van-dialog>
      </div>
    );
  },
});

export default MobProjectAttributes;
