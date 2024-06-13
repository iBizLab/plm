/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  useControlController,
  useNamespace,
  route2routePath,
  onRouteChange,
  getNestedRoutePath,
} from '@ibiz-template/vue3-util';
import { defineComponent, onUnmounted, PropType, reactive, watch } from 'vue';
import { IDEDRBar } from '@ibiz/model-core';
import { useRoute, useRouter } from 'vue-router';
import { IControlProvider } from '@ibiz-template/runtime';
import { DRBarExController } from './drbar-ex.controller';
import { TabsPaneContext } from 'element-plus';
import './drbar-ex.scss';

export function useWatchRouteChange(c: DRBarExController): void {
  const depth = c.view.modal.routeDepth;
  if (depth) {
    const route = useRoute();
    let selfKey: string | undefined;
    onRouteChange(({ currentKey, fullPath }) => {
      if (!selfKey) {
        selfKey = currentKey;
      } else if (selfKey === currentKey) {
        const routePath = route2routePath(route);
        const { srfnav } = routePath.pathNodes[depth! - 1];
        c.onRouterChange({ srfnav: srfnav || '', path: fullPath });
      }
    }, depth);
  }
}

export const DRBarExControl = defineComponent({
  name: 'IBizDRBarExControl',
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
    const c = useControlController((...args) => new DRBarExController(...args));
    const ns = useNamespace(`control-${c.model.controlType!.toLowerCase()}-ex`);
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

    const route = useRoute();

    // 监听路由变化
    useWatchRouteChange(c);

    // 子路由导航
    watch(
      () => router.currentRoute.value,
      (to, from) => {
        if (c.routeDepth && c.navPos) {
          const { pathNodes: newPathNodes } = route2routePath(to);
          const { pathNodes: oldPathNodes } = route2routePath(from);
          const fromKey = getNestedRoutePath(from, c.routeDepth + 1);
          const currentKey = getNestedRoutePath(route, c.routeDepth + 1);
          if (fromKey === currentKey) {
            return;
          }
          const isRouteModal =
            newPathNodes[c.routeDepth + 1]?.viewName === 'route-modal' ||
            oldPathNodes[c.routeDepth + 1]?.viewName === 'route-modal';
          if (currentKey && !isRouteModal) {
            c.navPos.openView({
              key: currentKey,
              isRoutePushed: false,
              context: c.context.clone(),
              params: { ...c.params },
            });
          }
        }
      },
    );

    const handleSelect = (key: string): void => {
      // 即将导航的视图和当前视图是同一个就不导航
      const drBarGroup = c.state.drBarItems.find(item => item.tag === key);
      if (!drBarGroup) {
        return;
      }
      const drBarItem = c.model.dedrctrlItems?.find(
        item => (item as IData).dedrbarGroupId === key,
      );
      if (drBarItem) {
        const routePath = route2routePath(route);
        const curViewName =
          routePath.pathNodes[c.routeDepth as number]?.viewName;
        const navViewName = drBarItem.appViewId?.split('.')[1];
        if (navViewName && curViewName && navViewName === curViewName) {
          return;
        }
      }
      c.handleSelectChange(key);
    };

    return {
      c,
      ns,
      counterData,
      handleSelect,
    };
  },
  render() {
    const { isCreated, drBarItems, defaultItem, isCalculatedPermission } =
      this.c.state;

    return (
      <iBizControlBase controller={this.c} class={this.ns.b()}>
        {isCreated && isCalculatedPermission && !!defaultItem && (
          <el-tabs
            modelValue={defaultItem}
            onTabClick={(pane: TabsPaneContext, ev: Event) => {
              this.handleSelect(pane.paneName as string);
            }}
          >
            {drBarItems.map(item => {
              if (!item.visible) {
                return;
              }
              return (
                <el-tab-pane label={item.caption} name={item.tag}>
                  {{
                    label: () => {
                      return (
                        <span class={this.ns.b('pane-label')}>
                          <span class={this.ns.be('pane-label', 'text')}>
                            {item.caption || ''}
                          </span>
                          {item.counterId &&
                            this.counterData[item.counterId] != null && (
                              <iBizBadge
                                class={this.ns.be('pane-label', 'counter')}
                                value={this.counterData[item.counterId]}
                                counterMode={item.counterMode}
                              />
                            )}
                        </span>
                      );
                    },
                  }}
                </el-tab-pane>
              );
            })}
          </el-tabs>
        )}
      </iBizControlBase>
    );
  },
});
