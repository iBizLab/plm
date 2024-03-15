import { Ref, defineComponent, ref, computed } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import { CodeListItem } from '@ibiz-template/runtime';
import { isNil } from 'ramda';
import './copy.scss';

export const IBizCopy = defineComponent({
  name: 'IBizCopy',
  props: {
    value: {
      type: String || Number,
      default: null,
    },
    codeListItems: {
      type: Array<CodeListItem>,
    },
  },
  setup(props) {
    const ns = useNamespace('clip-board-button');

    // 可复制文本
    // const text: Ref<string> = ref('');

    // 延迟关闭定时器
    const timer: Ref<unknown> = ref(null);

    const findCodeListItem = (
      codelist: CodeListItem[] | undefined,
      value: string | number,
    ): void | CodeListItem => {
      if (codelist) {
        // eslint-disable-next-line eqeqeq
        const findItem = codelist.find(item => item.value == value);
        if (findItem) {
          return findItem;
        }
        for (let i = 0; i < codelist.length; i++) {
          const childrenItem = findCodeListItem(
            codelist[i].children,
            value,
          ) as CodeListItem;
          if (childrenItem) {
            return childrenItem;
          }
        }
      }
    };

    const text = computed(() => {
      let values: string | number | undefined;
      const tempVal = props?.value;
      if (isNil(tempVal) || tempVal === '') {
        // 空值置空
        values = '';
      } else {
        if (
          typeof tempVal === 'string' &&
          props?.codeListItems &&
          props?.codeListItems?.length > 0
        ) {
          const findItem = findCodeListItem(props.codeListItems, tempVal);
          values = findItem?.text || '';
        } else {
          values = tempVal;
        }
        values = String(values);
      }
      return values;
    });

    // 复制
    const copy = (value: string, event: MouseEvent): void => {
      event.stopPropagation();
      event.preventDefault();
      if (!value) {
        return;
      }
      const result = ibiz.util.text.copy(value);
      if (result) {
        ibiz.message.success('拷贝成功!');
        timer.value = setTimeout(() => {
          timer.value = null;
        }, 3000);
      } else {
        ibiz.message.error('拷贝失败，浏览器copy操作不被支持或未被启用!');
      }
    };

    return {
      ns,
      timer,
      text,
      copy,
    };
  },
  render() {
    return (
      <div class={this.ns.b()} onClick={event => this.copy(this.text, event)}>
        {this.timer ? (
          <div class={this.ns.e('before-copy')} title='复制成功'>
            <svg
              class='icon'
              viewBox='0 0 1024 1024'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              p-id='2455'
              width='1em'
              height='1em'
            >
              <path
                d='M512 0C229.003636 0 0 229.003636 0 512s229.003636 512 512 512 512-229.003636 512-512S794.996364 0 512 0z m260.654545 425.425455l-279.272727 279.272727c-5.585455 5.585455-13.032727 9.309091-21.410909 9.309091-10.24 1.861818-20.48-0.930909-27.927273-8.378182l-175.941818-176.872727a30.906182 30.906182 0 0 1 0-43.752728l14.894546-14.894545c12.101818-12.101818 31.650909-12.101818 43.752727 0l141.498182 141.498182 244.829091-244.829091c12.101818-12.101818 31.650909-12.101818 43.752727 0L772.654545 381.672727c12.101818 12.101818 12.101818 31.650909 0 43.752728z'
                p-id='2456'
              ></path>
            </svg>
          </div>
        ) : (
          <div class={this.ns.e('after-copy')} title='点击复制'>
            <svg
              viewBox='0 0 16 16'
              xmlns='http://www.w3.org/2000/svg'
              height='1em'
              width='1em'
              focusable='false'
            >
              <g id='copy2020/after-copy' stroke-width='1' fill-rule='evenodd'>
                <g
                  id='5666232'
                  transform='translate(2 -.27)'
                  fill-rule='nonzero'
                >
                  <path
                    d='M5.6 8.47v-1.2h4.174v1.2H5.6zm0 3v-1.2h4.174v1.2H5.6zm-4.4-10v10.075H0L.003 2.27c0-1.088.895-2 1.997-2h7.585v1.2H1.2zm1.8.8h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1zm.2 1.2v11.6h8.6V3.47H3.2z'
                    id='copy2020'
                  ></path>
                </g>
              </g>
            </svg>
          </div>
        )}
      </div>
    );
  },
});
