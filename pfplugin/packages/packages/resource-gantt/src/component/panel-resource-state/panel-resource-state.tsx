import { IPanelRawItem } from '@ibiz/model-core';
import { computed, defineComponent, PropType, ref } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import { Controller } from './controller';
import './panel-resource-state.scss';

export const PanelResourceState = defineComponent({
  name: 'IBizPanelResourceState',
  props: {
    modelData: {
      type: Object as PropType<IPanelRawItem>,
      required: true,
    },
    controller: {
      type: Controller,
      required: true,
    },
  },
  setup(props) {
    const ns = useNamespace('panel-rawitem');
    const ns2 = useNamespace('panel-resource-state');

    const tempStyle = ref('');

    const resourceState = [
      {
        tag: 'standard',
        name: '标准',
      },
      {
        tag: 'saturation',
        name: '饱和',
      },
      {
        tag: 'exceed',
        name: '超出',
      },
    ];

    const { rawItem } = props.modelData;

    if (rawItem && rawItem.cssStyle) {
      tempStyle.value = rawItem.cssStyle;
    }

    // 类名控制
    const classArr = computed(() => {
      const { id } = props.modelData;
      const result: Array<string | false> = [ns.b(), ns2.b(), ns.m(id)];
      result.push(...props.controller.containerClass);
      return result;
    });

    const renderContent = (): JSX.Element[] => {
      return resourceState.map((item: IData) => {
        return (
          <div class={[ns2.e('content'), ns2.e(item.tag)]}>
            <div class={[ns2.em('content', 'star')]}></div>
            <div class={ns2.em('content', 'caption')}>{item.name}</div>
          </div>
        );
      });
    };

    return {
      ns,
      classArr,
      tempStyle,
      renderContent,
    };
  },
  render() {
    // 动态控制显示
    if (!this.controller.state.visible) {
      return;
    }
    return (
      <div
        class={this.classArr}
        style={this.tempStyle}
        onClick={() => {
          this.controller.onClick();
        }}
      >
        {this.renderContent()}
      </div>
    );
  },
});
