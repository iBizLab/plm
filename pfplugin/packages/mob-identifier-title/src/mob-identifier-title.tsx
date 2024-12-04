import { useNamespace } from '@ibiz-template/vue3-util';
import { defineComponent, PropType } from 'vue';
import { ICaptionBar } from '@ibiz/model-core';
import { MobIdentifierTitleController } from './mob-identifier-title.controller';
import './mob-identifier-title.scss';

export const MobIdentifierTitle = defineComponent({
  name: 'MobIdentifierTitle',
  props: {
    modelData: {
      type: Object as PropType<ICaptionBar>,
      required: true,
    },
    controller: {
      type: MobIdentifierTitleController,
      required: true,
    },
  },
  setup() {
    const ns = useNamespace('mob-identifier-title');

    return { ns };
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
          <span>{this.$props.controller.caption}</span>
        </div>
      </div>
    );
  },
});
