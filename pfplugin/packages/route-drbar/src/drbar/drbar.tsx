import {
  getNestedRoutePath,
  route2routePath,
  useControlController,
  useNamespace,
} from '@ibiz-template/vue3-util';
import { defineComponent, onUnmounted, PropType, reactive, watch } from 'vue';
import { IDEDRBar } from '@ibiz/model-core';
import { useRoute, useRouter } from 'vue-router';
import { IControlProvider, IDRBarItemsState } from '@ibiz-template/runtime';
import { DRBarController } from './drbar.controller';
import { backIcon } from '../icon';
import './drbar.scss';

export const DRBarControl = defineComponent({
  name: 'IBizRouteDrBarControl',
  props: {
    modelData: { type: Object as PropType<IDEDRBar>, required: true },
    context: { type: Object as PropType<IContext>, required: true },
    params: { type: Object as PropType<IParams>, default: () => ({}) },
    provider: { type: Object as PropType<IControlProvider> },
    srfnav: { type: String, required: false },
    showMode: { type: String, default: 'vertical' },
    hideEditItem: { type: Boolean, default: undefined },
  },
  setup(props) {
    const c = useControlController((...args) => new DRBarController(...args));
    const ns = useNamespace(`route-drbar-control`);
    const router = useRouter();

    const counterData = reactive<IData>({});
    const fn = (counter: IData) => {
      Object.assign(counterData, counter);
    };
    c.evt.on('onCreated', () => {
      if (c.counter) {
        c.counter.onChange(fn, true);
      }
    });

    onUnmounted(() => {
      c.counter?.offChange(fn);
    });

    c.setRouter(router);

    const handleSelect = (key: string): void => {
      c.handleSelectChange(key);
    };

    const route = useRoute();

    let expViewRoutePath = '';

    const opens: string[] = [];

    watch(
      () => c.state.isCreated,
      (_newVal, _oldVal) => {
        if (props.showMode !== 'horizontal') {
          const { drBarItems } = c.state;
          drBarItems.forEach(item => {
            opens.push(item.tag);
          });
        }
      },
    );

    if (c.routeDepth) {
      expViewRoutePath = getNestedRoutePath(route, c.routeDepth);
    }

    watch(
      () => route.fullPath,
      (newVal, oldVal) => {
        if (newVal !== oldVal) {
          const depth = c.routeDepth;
          if (depth) {
            const currentRoutePath = getNestedRoutePath(route, c.routeDepth);
            if (currentRoutePath === expViewRoutePath) {
              const routePath = route2routePath(route);
              const { srfnav } = routePath.pathNodes[depth! - 1];
              c.handleSelectChange(srfnav);
            }
          }
        }
      },
      { immediate: true },
    );

    const renderMenuItems = (item: IDRBarItemsState) => {
      if (!item.visible) {
        return;
      }
      if (item.children) {
        let subtitle = '';

        // 水平显示的时候，父菜单标题同时显示子菜单选中的子标题
        if (props.showMode === 'horizontal') {
          if (item.tag !== c.state.selectedItem) {
            const find = item.children.find(
              x => x.tag === c.state.selectedItem,
            );
            if (find) {
              subtitle = `-${find.caption}`;
            }
          }
        }
        return (
          <el-sub-menu
            class={ns.b('group')}
            index={item.tag}
            disabled={item.disabled}
          >
            {{
              default: () =>
                item.children!.map(child => {
                  return renderMenuItems(child);
                }),
              title: () => [
                <iBizIcon class={ns.e('icon')} icon={item.sysImage}></iBizIcon>,
                <span>
                  {item.caption}
                  {subtitle}
                </span>,
              ],
            }}
          </el-sub-menu>
        );
      }
      return (
        <el-menu-item
          class={ns.e('item')}
          index={item.tag}
          disabled={item.disabled}
        >
          <iBizIcon class={ns.e('icon')} icon={item.sysImage}></iBizIcon>
          <span>{item.caption}</span>
          {item.counterId && counterData[item.counterId] != null && (
            <iBizBadge
              class={ns.e('counter')}
              value={counterData[item.counterId]}
              counterMode={item.counterMode}
            />
          )}
        </el-menu-item>
      );
    };

    return {
      c,
      ns,
      handleSelect,
      renderMenuItems,
      opens,
    };
  },
  render() {
    const {
      isCreated,
      drBarItems,
      selectedItem,
      defaultItem,
      isCalculatedPermission,
    } = this.c.state;

    return (
      <iBizControlBase controller={this.c} class={this.ns.b()}>
        {isCreated &&
          isCalculatedPermission && [
            this.c.enableBack && this.c.viewId && (
              <div
                class={this.ns.b('back-btn')}
                onClick={this.c.handleBack.bind(this.c)}
              >
                <div class={this.ns.be('back-btn', 'icon')}>{backIcon()}</div>
                <div class={this.ns.be('back-btn', 'text')}>返回</div>
              </div>
            ),
            <el-menu
              class={[
                this.ns.e('menu'),
                !drBarItems[0]?.children?.length &&
                  this.ns.em('menu', 'signal'),
              ]}
              mode={this.showMode}
              default-active={selectedItem || defaultItem}
              onSelect={this.handleSelect}
              default-openeds={this.opens}
            >
              {drBarItems.map(item => {
                return this.renderMenuItems(item);
              })}
            </el-menu>,
          ]}
      </iBizControlBase>
    );
  },
});
