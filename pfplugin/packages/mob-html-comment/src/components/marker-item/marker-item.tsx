/* eslint-disable prefer-destructuring */
/* eslint-disable default-case */
/* eslint-disable no-plusplus */
/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { PropType, defineComponent } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import { CommentMarkerController } from '../../controller/mob-marker.controller';
import './marker-item.scss';

export const MobMarkerItem = defineComponent({
  name: 'MobMarkerItem',
  props: {
    controller: {
      type: Object as PropType<CommentMarkerController>,
      required: true,
    },
    item: {
      type: Object as PropType<IData>,
      required: true,
    },
  },
  setup(props) {
    const ns = useNamespace('mob-marker-item');
    const c = props.controller;

    const renderContent = (type: string, value: string) => {
      if (c.quoteCodelistMap.has(type)) {
        const item = c.quoteCodelistMap.get(type)!;
        return (
          <iBizCodeList
            codeListItems={item.codeListItems}
            codeList={item.codeList}
            value={value}
          ></iBizCodeList>
        );
      }
      return value;
    };

    return { ns, renderContent };
  },
  render() {
    return (
      <div class={this.ns.b()}>
        <div class={this.ns.e('type')}>
          {this.renderContent('type', this.item.type)}
        </div>
        <div class={this.ns.e('identifier')}>
          {this.renderContent('identifier', this.item.identifier)}
        </div>
        <div class={this.ns.e('name')} title={this.item.name}>
          {this.renderContent('name', this.item.name)}
        </div>
      </div>
    );
  },
});
