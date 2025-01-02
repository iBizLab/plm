import { defineComponent, PropType } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import { IBreadcrumb } from '../interface';
import './breadcrumb.scss';

export const Breadcrumb = defineComponent({
  name: 'IBizBreadcrumb',
  props: {
    items: {
      type: Array as PropType<IBreadcrumb[]>,
      required: true,
    },
  },
  emits: {
    click: (_item: IBreadcrumb) => true,
  },
  setup(props, { emit }) {
    const ns = useNamespace('breadcrumb');

    // 处理节点点击
    const handleClick = (e: MouseEvent, index: number): void => {
      e.stopPropagation();
      if (index !== props.items.length - 1) {
        emit('click', props.items[index]);
      }
    };

    return {
      ns,
      handleClick,
    };
  },
  render() {
    return (
      <div class={this.ns.b()}>
        {this.items.map((item, i) => {
          return (
            <div
              class={[
                this.ns.e('item'),
                this.ns.is('active', i === this.items.length - 1),
              ]}
            >
              <div
                class={this.ns.e('item-content')}
                onClick={(e: MouseEvent) => {
                  this.handleClick(e, i);
                }}
              >
                <div class={this.ns.em('item', 'text')}>
                  {item.caption || ''}
                </div>
              </div>

              {i !== this.items.length - 1 && (
                <div class={this.ns.em('item', 'separator')}>/</div>
              )}
            </div>
          );
        })}
      </div>
    );
  },
});
