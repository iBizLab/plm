import { useControlController, useNamespace } from '@ibiz-template/vue3-util';
import { defineComponent, PropType, VNode } from 'vue';
import { IDEList } from '@ibiz/model-core';
import { IControlProvider } from '@ibiz-template/runtime';
import { MobSimpleListController } from './mob-simple-list.controller';
import './mob-simple-list.scss';

export const MobSimpleList = defineComponent({
  name: 'MobSimpleList',
  props: {
    modelData: { type: Object as PropType<IDEList>, required: true },
    context: { type: Object as PropType<IContext>, required: true },
    params: { type: Object as PropType<IParams>, default: () => ({}) },
    provider: { type: Object as PropType<IControlProvider> },
    mdctrlActiveMode: { type: Number, default: 2 },
    singleSelect: { type: Boolean, default: true },
    isSimple: { type: Boolean, required: false },
    loadDefault: { type: Boolean, default: true },
  },
  setup() {
    const c = useControlController(
      (...args) => new MobSimpleListController(...args),
    );
    const ns = useNamespace('mob-simple-list');

    const renderListContent = (): VNode => {
      return (
        <div class={ns.b('content')}>
          {c.state.items.map((item: IData) => {
            return (
              <div class={[ns.b('item')]}>
                <span class={ns.be('item', 'caption')}>
                  {item.srfmajortext}
                </span>
                <ion-icon
                  name='close-outline'
                  class={ns.be('item', 'icon')}
                  onClick={() => c.handleRemove(item)}
                ></ion-icon>
              </div>
            );
          })}
        </div>
      );
    };

    return {
      c,
      ns,
      renderListContent,
    };
  },
  render() {
    return (
      <iBizControlBase class={[this.ns.b()]} controller={this.c}>
        {this.renderListContent()}
      </iBizControlBase>
    );
  },
});
