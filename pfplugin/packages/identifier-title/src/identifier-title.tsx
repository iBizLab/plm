import { useNamespace } from '@ibiz-template/vue3-util';
import { defineComponent, PropType, ref, Ref } from 'vue';
import { ICaptionBar } from '@ibiz/model-core';
import { IdentifierTitleController } from './identifier-title-controller';
import './identifier-title.scss';

export const IdentifierTitle = defineComponent({
  name: 'IdentifierTitle',
  props: {
    modelData: {
      type: Object as PropType<ICaptionBar>,
      required: true,
    },
    controller: {
      type: IdentifierTitleController,
      required: true,
    },
  },
  setup(props) {
    const ns = useNamespace('identifier-title');
    const copyIdSuccess: Ref<boolean> = ref(false);
    const copyUrlSuccess: Ref<boolean> = ref(false);
    // eslint-disable-next-line no-undef-init, @typescript-eslint/no-explicit-any
    let idTimer: any = undefined;
    // eslint-disable-next-line no-undef-init, @typescript-eslint/no-explicit-any
    let urlTimer: any = undefined;
    const copy = async (value: string, tag: string): Promise<void> => {
      const result =
        tag === 'id'
          ? ibiz.util.text.copy(value)
          : await props.controller.copyPath();
      if (tag === 'id') {
        clearTimeout(idTimer);
      } else {
        clearTimeout(urlTimer);
      }
      if (result) {
        ibiz.message.success('拷贝成功!');
        if (tag === 'id') {
          copyIdSuccess.value = true;
          idTimer = setTimeout(() => {
            copyIdSuccess.value = false;
          }, 3000);
        } else {
          copyUrlSuccess.value = true;
          urlTimer = setTimeout(() => {
            copyUrlSuccess.value = false;
          }, 3000);
        }
      } else {
        ibiz.message.error('拷贝失败，浏览器copy操作不被支持或未被启用!');
      }
    };

    return { ns, copyIdSuccess, copyUrlSuccess, copy };
  },
  render() {
    return (
      <div class={this.ns.b()}>
        <div
          class={[
            this.ns.b('caption'),
            this.ns.is('show-icon', !!this.$props.controller.model.sysImage),
          ]}
        >
          {this.$props.controller.model.sysImage && (
            <iBizIcon
              class={[this.ns.be('caption', 'icon')]}
              icon={this.$props.controller.model.sysImage}
            ></iBizIcon>
          )}
          <span>{this.$props.controller.state.caption}</span>
          <div class={this.ns.b('copy')}>
            <div
              class={this.ns.be('copy', 'copy-id')}
              title={this.copyIdSuccess ? '复制成功' : '复制ID'}
              onClick={() =>
                this.copy(this.$props.controller.titleNumnber, 'id')
              }
            >
              {!this.copyIdSuccess ? (
                <svg
                  viewBox='0 0 16 16'
                  xmlns='http://www.w3.org/2000/svg'
                  height='1em'
                  width='1em'
                  focusable='false'
                  fill='currentColor'
                >
                  <g
                    id='copy2020/after-copy'
                    stroke-width='1'
                    fill-rule='evenodd'
                  >
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
              ) : (
                <svg
                  viewBox='0 0 16 16'
                  xmlns='http://www.w3.org/2000/svg'
                  height='1em'
                  width='1em'
                  preserveAspectRatio='xMidYMid meet'
                  focusable='false'
                  fill='#73D897'
                >
                  <g
                    id='agctips/check-circle-fill'
                    stroke-width='1'
                    fill-rule='evenodd'
                  >
                    <path
                      d='M0 8c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8zm7.097.758L5.199 6.905l-.978 1.001 2.9 2.833 4.563-4.685-1.003-.977-3.584 3.68z'
                      id='agc形状结合'
                    ></path>
                  </g>
                </svg>
              )}
            </div>
            <div
              class={this.ns.be('copy', 'copy-url')}
              title={this.copyUrlSuccess ? '复制成功' : '复制链接'}
              onClick={() => this.copy(window.location.href, 'url')}
            >
              {!this.copyUrlSuccess ? (
                <svg
                  viewBox='0 0 16 16'
                  xmlns='http://www.w3.org/2000/svg'
                  height='1em'
                  width='1em'
                  preserveAspectRatio='xMidYMid meet'
                  focusable='false'
                  fill='currentColor'
                >
                  <g
                    id='aodeditor/link-insert'
                    stroke-width='1'
                    fill-rule='evenodd'
                  >
                    <path
                      d='M12.253 4.13h-1.2v-1a2.8 2.8 0 0 0-5.6 0v4a2.8 2.8 0 0 0 2.8 2.8v1.2a4 4 0 0 1-4-4v-4a4 4 0 0 1 8 0v1zm-8 8h1.2v1a2.8 2.8 0 0 0 5.6 0v-4a2.8 2.8 0 0 0-2.8-2.8v-1.2a4 4 0 0 1 4 4v4a4 4 0 0 1-8 0v-1z'
                      id='aod形状结合'
                      transform='rotate(46 8.253 8.13)'
                    ></path>
                  </g>
                </svg>
              ) : (
                <svg
                  viewBox='0 0 16 16'
                  xmlns='http://www.w3.org/2000/svg'
                  height='1em'
                  width='1em'
                  preserveAspectRatio='xMidYMid meet'
                  focusable='false'
                  fill='#73D897'
                >
                  <g
                    id='agctips/check-circle-fill'
                    stroke-width='1'
                    fill-rule='evenodd'
                  >
                    <path
                      d='M0 8c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8zm7.097.758L5.199 6.905l-.978 1.001 2.9 2.833 4.563-4.685-1.003-.977-3.584 3.68z'
                      id='agc形状结合'
                    ></path>
                  </g>
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  },
});
