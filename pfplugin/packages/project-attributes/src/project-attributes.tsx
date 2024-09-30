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
  onMounted,
  reactive,
  ref,
  resolveComponent,
  watch,
} from 'vue';
import {
  useClickOutside,
  useControlController,
  useNamespace,
} from '@ibiz-template/vue3-util';
import { IDEEditForm, IDEFormItem } from '@ibiz/model-core';
import { FormItemController, IControlProvider } from '@ibiz-template/runtime';
import './project-attributes.scss';
import { OnClickOutsideResult } from '@ibiz-template/core';
import { ProjectAttributesController } from './project-attributes-controller';
import { AutoInput } from './auto-input/auto-input';

export const ProjectAttributes = defineComponent({
  name: 'IBizProjectAttributes',
  component: [AutoInput],
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
    const ns = useNamespace('project-attributes');
    const formItems: IDEFormItem[] = [];
    const c = useControlController(
      (...args) => new ProjectAttributesController(...args),
      { excludePropsKeys: ['data'] },
    );

    // 点击外部
    let funcs: OnClickOutsideResult;

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
      // item.ref.isFocus
      return editor;
    };

    const editSvg = () => {
      return (
        <svg
          viewBox='0 0 16 16'
          xmlns='http://www.w3.org/2000/svg'
          height='1em'
          width='1em'
          preserveAspectRatio='xMidYMid meet'
          focusable='false'
        >
          <g id='aizaction/edit' stroke-width='1' fill-rule='evenodd'>
            <path
              d='M2 8.34L10.71 0 15 4.17 6.538 13H2V8.34zm1.2.512V11.8h2.826l7.283-7.6-2.606-2.533L3.2 8.852zM0 16v-1.2h16V16H0z'
              id='aiz编辑'
            ></path>
          </g>
        </svg>
      );
    };

    const pxx = ref();

    onMounted(() => {
      funcs = useClickOutside(pxx as any, async e => {
        if (e && e.target) {
          if (
            (e.target as any).tagName.toLowerCase() === 'input' ||
            (e.target as any).tagName.toLowerCase() === 'svg'
          ) {
            return;
          }
          if (
            (e.target as any).className ===
              'ibiz-dropdown-select-option-content' ||
            (e.target as any).className === 'el-date-table-cell__text'
          ) {
            return;
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any

          let { id } = (e.target as any).parentElement;
          let findId = c.addAttributes.value.find(item => item.key === id);

          if (
            (e.target as any).className === 'ibiz-project-attributes__item-edit'
          ) {
            id = (e.target as any).id;
            findId = c.addAttributes.value.find(item => item.key === id);
          }

          if (findId) {
            c.addAttributes.value.forEach(i => {
              i.ref.isFocus = true;
            });
            findId.ref.isFocus = false;
          } else if (pxx.value.contains(e.target)) {
            //
          } else {
            c.addAttributes.value.forEach(i => {
              i.ref.isFocus = true;
            });
          }
        }
      });
    });

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
      window.open(url);
    };

    return {
      c,
      ns,
      formItems,
      emit,
      renderEditor,
      editSvg,
      pxx,
      findController,
      startsWithHttpProtocol,
      linkSvg,
      linkOpen,
    };
  },
  render() {
    return (
      <div class={this.ns.b()}>
        {this.c.addAttributes.value.length > 0 &&
          this.c.addAttributes.value.map((item: IData) => {
            const controller = this.findController(item);
            let isLink = false;
            if (controller && controller.value && item.type === 'string') {
              isLink = this.startsWithHttpProtocol(controller.value as string);
            }
            return (
              <div class={[this.ns.e('item'), isLink ? 'link' : '']}>
                <div class={this.ns.e('item-text')}>{item.description}</div>
                <div
                  class={[
                    this.ns.e('item-edit'),
                    item.ref.isFocus ? '' : 'edit',
                  ]}
                  id={item.key}
                >
                  {this.renderEditor(item, controller)}
                  <div class={this.ns.e('item-edit-svg')}>{this.editSvg()}</div>
                </div>
                {isLink && item.ref.isFocus ? (
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
        <div ref='pxx'></div>
      </div>
    );
  },
});

export default ProjectAttributes;
