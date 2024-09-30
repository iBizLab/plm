import {
  getNestedRoutePath,
  route2routePath,
  useControlController,
  useNamespace,
} from '@ibiz-template/vue3-util';
import { defineComponent, onUnmounted, PropType, reactive, watch } from 'vue';
import { IDEDRTab } from '@ibiz/model-core';
import { useRoute, useRouter } from 'vue-router';
import { IControlProvider, hasSubRoute } from '@ibiz-template/runtime';
import { isNil } from 'ramda';
import { DRTabController } from './drtab.controller';
import './drtab.scss';

export const DRTabControl = defineComponent({
  name: 'IBizRouteDrTabControl',
  props: {
    modelData: { type: Object as PropType<IDEDRTab>, required: true },
    context: { type: Object as PropType<IContext>, required: true },
    params: { type: Object as PropType<IParams>, default: () => ({}) },
    provider: { type: Object as PropType<IControlProvider> },
  },
  setup() {
    const c = useControlController((...args) => new DRTabController(...args));
    const ns = useNamespace(`route-drtab-control`);
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

    const handleTabChange = (): void => {
      c.handleTabChange();
    };

    const handleTabClick = (pane: { paneName: string }): void => {
      const drBarItem = c.model.dedrtabPages?.find(
        item => item.id === pane.paneName,
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
      c.state.activeName = pane.paneName;
      c.handleTabChange();
    };

    const route = useRoute();

    let expViewRoutePath = '';
    if (c.routeDepth) {
      expViewRoutePath = getNestedRoutePath(route, c.routeDepth);
    }

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
              isRoutePushed: true,
              context: c.context.clone(),
              params: { ...c.params },
            });
          }
        }
      },
    );

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
              // 路由模式下，且有子路由的时候不需要navpos跳转路由，只要做呈现
              const isRoutePushed = !!c.routeDepth && hasSubRoute(c.routeDepth);
              if (
                srfnav &&
                c.state.activeName &&
                c.state.activeName !== srfnav
              ) {
                c.state.activeName = srfnav;

                c.handleTabChange(isRoutePushed);
              } else if (!srfnav) {
                // 路由模式下，且没有子路由的时候，需要触发tab变更还原分页
                const routeNoSub = !!c.routeDepth && !hasSubRoute(c.routeDepth);
                // 空的时候跳转默认分页
                const doTabChange =
                  c.state.activeName !== c.state.defaultName || routeNoSub;
                if (doTabChange) {
                  c.state.activeName = c.state.defaultName;
                  c.handleTabChange(isRoutePushed);
                }
              }
            }
          }
        }
      },
      { immediate: true },
    );

    return {
      c,
      ns,
      counterData,
      handleTabChange,
      handleTabClick,
    };
  },
  render() {
    const { isCreated, drTabPages, isCalculatedPermission } = this.c.state;
    return (
      <iBizControlBase controller={this.c} class={this.ns.b()}>
        {isCreated && isCalculatedPermission && (
          <el-tabs
            modelValue={this.c.state.activeName}
            // onTabChange={this.handleTabChange}
            onTabClick={this.handleTabClick}
          >
            {drTabPages.map(tab => {
              const counterNum = tab.counterId
                ? this.counterData[tab.counterId]
                : undefined;
              if (!tab.hidden) {
                return (
                  <el-tab-pane
                    class={this.ns.e('tab-item')}
                    label={tab.caption + counterNum}
                    disabled={tab.disabled}
                    name={tab.tag}
                  >
                    {{
                      label: (): JSX.Element => {
                        return (
                          <span class={this.ns.b('label')}>
                            <span class={this.ns.be('label', 'text')}>
                              {tab.caption}
                            </span>
                            {!isNil(counterNum) && (
                              <iBizBadge
                                class={this.ns.e('counter')}
                                value={counterNum}
                                counterMode={tab.counterMode}
                              />
                            )}
                          </span>
                        );
                      },
                    }}
                  </el-tab-pane>
                );
              }
              return null;
            })}
          </el-tabs>
        )}
      </iBizControlBase>
    );
  },
});
