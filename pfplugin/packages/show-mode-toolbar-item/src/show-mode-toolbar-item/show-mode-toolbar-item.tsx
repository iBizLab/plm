import { PropType, defineComponent, ref } from 'vue';
import { IDEToolbarItem } from '@ibiz/model-core';
import { ToolbarController } from '@ibiz-template/runtime';
import { useNamespace } from '@ibiz-template/vue3-util';
import './show-mode-toolbar-item.scss';

export const ShowModeToolbarItem = defineComponent({
  name: 'IBizShowModeToolbarItem',
  props: {
    item: {
      type: Object as PropType<IDEToolbarItem>,
      required: true,
    },
    controller: {
      type: ToolbarController,
      required: true,
    },
  },
  setup(props) {
    const ns = useNamespace('show-mode-toolbar-item');

    const c = props.controller;

    // 显示模式列表
    const items = [
      {
        icon: {
          htmlStr: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" preserveAspectRatio="xMidYMid meet" focusable="false" style="fill: currentcolor;"><g stroke-width="1" fill-rule="evenodd"><path d="M7.353 6.926V4.992H5.937V1h4.158v3.992H8.553v1.934H14.395v4.153h1.479v3.993h-4.158V11.08h1.479V8.125H8.553v2.933h1.542v3.993H5.937v-3.993h1.416V8.126H2.679v2.933h1.479v3.993H0v-3.993h1.479V6.926H7.353zm-.216-4.727v1.594h1.758V2.199H7.137zM1.2 12.26v1.592h1.758v-1.593H1.2zm11.716.02v1.594h1.758V12.28h-1.758zm-5.779-.02v1.592h1.758v-1.593H7.137z"></path></g></svg>`,
        },
        text: '树状',
        value: 'tree',
      },
      {
        icon: {
          cssClass: 'fa fa-reorder',
        },
        text: '平铺',
        value: 'grid',
      },
    ];

    // 显示模式key
    const key = `SHOW_MODE_${c.context.project}_${c.view.model.codeName}`;

    // 当前激活项
    const activeItem = ref(items[0].value);

    // 设置默认激活项
    const showMode = localStorage.getItem(key);
    if (showMode === 'tree' || showMode === 'grid') {
      activeItem.value = showMode;
    }

    const onClick = async (e: MouseEvent, item: (typeof items)[0]) => {
      e.stopPropagation();
      if (item.value === activeItem.value) {
        return;
      }
      activeItem.value = item.value;
      localStorage.setItem(key, item.value);
      await c.onItemClick(props.item, e, {
        showMode: item.value,
      });
    };

    return { ns, items, activeItem, onClick };
  },
  render() {
    return (
      <div class={this.ns.b()}>
        <div class={this.ns.b('content')}>
          {this.items.map(item => {
            return (
              <div
                class={[
                  this.ns.b('item'),
                  this.ns.is('active', this.activeItem === item.value),
                ]}
                title={item.text}
                onClick={(e: MouseEvent) => this.onClick(e, item)}
              >
                <iBizIcon class={this.ns.be('item', 'icon')} icon={item.icon} />
              </div>
            );
          })}
        </div>
      </div>
    );
  },
});
