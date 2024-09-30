/* eslint-disable no-useless-return */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  PropType,
  defineComponent,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
  watch,
} from 'vue';
import { useClickOutside, useNamespace } from '@ibiz-template/vue3-util';
import './auto-input.scss';
import { OnClickOutsideResult } from '@ibiz-template/core';

export const AutoInput = defineComponent({
  name: 'AutoInput',
  props: {
    controller: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      type: Object as PropType<any>,
      required: true,
    },
    item: {
      type: Object as PropType<IData>,
      required: true,
    },
    emit: {
      // eslint-disable-next-line @typescript-eslint/ban-types
      type: Object as PropType<Function>,
      required: true,
    },
  },
  setup(props) {
    const ns = useNamespace('project-attributes-input');
    const c = props.controller;
    const text = ref('');
    const isEditing = ref(false);
    const inputRef = ref();

    watch(
      () => c.state.data,
      newVal => {
        if (newVal) {
          // eslint-disable-next-line guard-for-in
          for (const key in newVal) {
            const item = c.addAttributes.find((i: IData) => i.key === key);
            if (item) {
              text.value = newVal[key];
            }
          }
        }
      },
      { immediate: true },
    );

    const componentRef = ref();

    const startEdit = (e: Event) => {
      e.stopPropagation();
      isEditing.value = true;
      nextTick(() => {
        if (inputRef.value) {
          inputRef.value.focus();
        }
      });
    };

    const stopEdit = (e: Event) => {
      e.stopPropagation();
      isEditing.value = false;
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const change = (event: any) => {
      text.value = event.target!.value;
      const controller = c.formItems.find(
        (item: IData) => item.name === props.item.key,
      );
      if (controller) {
        if (event.target!.value) {
          controller.setDataValue(event.target!.value, props.item.key);
        } else {
          controller.setDataValue(null, props.item.key);
        }
      }
    };

    // 点击外部
    let funcs: OnClickOutsideResult;

    onMounted(() => {
      if (componentRef.value) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        funcs = useClickOutside(componentRef as any, async _e => {
          if (!componentRef.value) {
            return;
          }
          isEditing.value = false;
        });
      }
    });

    onUnmounted(() => {
      if (funcs && funcs.stop) {
        funcs.stop();
      }
    });

    return {
      ns,
      c,
      startEdit,
      stopEdit,
      text,
      isEditing,
      change,
      componentRef,
      editSvg,
      inputRef,
    };
  },
  render() {
    return (
      <div
        ref='componentRef'
        class={[this.ns.b(), this.isEditing ? 'edit' : '']}
      >
        {!this.isEditing ? (
          <div
            class={this.ns.e('text')}
            onClick={(e: Event) => this.startEdit(e)}
          >
            {this.text}
          </div>
        ) : (
          <input
            ref='inputRef'
            type='text'
            value={this.text}
            autofocus={true}
            tabindex='0'
            onChange={this.change}
            onBlur={(e: Event) => this.stopEdit(e)}
          />
        )}
        <div
          class={this.ns.e('item-edit-svg')}
          onClick={(e: Event) => this.startEdit(e)}
        >
          {this.editSvg()}
        </div>
      </div>
    );
  },
});
