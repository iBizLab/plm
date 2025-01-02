import {
  h,
  ref,
  watch,
  PropType,
  onUnmounted,
  defineComponent,
  resolveComponent,
} from 'vue';
import { IPanelRawItem } from '@ibiz/model-core';
import { EventBase } from '@ibiz-template/runtime';
import { getNestedRoutePath, useNamespace } from '@ibiz-template/vue3-util';
import { useRoute, useRouter } from 'vue-router';
import { BreadcrumbNavPosController } from '../breadcrumb-nav-pos.controller';
import { Breadcrumb } from '../breadcrumb/breadcrumb';
import { IBreadcrumb } from '../interface';
import './breadcrumb-nav-pos.scss';

export const BreadcrumbNavPos = defineComponent({
  name: 'IBizBreadcrumbNavPos',
  props: {
    modelData: {
      type: Object as PropType<IPanelRawItem>,
      required: true,
    },
    controller: {
      type: Object as PropType<BreadcrumbNavPosController>,
      required: true,
    },
  },
  setup(props) {
    const c = props.controller;
    const ns = useNamespace('breadcrumb-nav-pos');
    const onViewCreated = (event: EventBase): void => {
      c.onViewCreated(event);
    };

    const router = useRouter();
    const route = useRoute();

    const isPresetView = ref(false);

    c.setRouter(router);

    if (c.routeDepth) {
      // 计算当前导航视图对应层级路由的路径，删除了srfnav
      const expViewRoutePath = getNestedRoutePath(route, c.routeDepth!);
      watch(
        () => route.fullPath,
        () => {
          const currentRoutePath = getNestedRoutePath(route, c.routeDepth!);
          // 前面路由不是当前导航视图的不走
          // 路由跳转匹配层级不比导航视图层级高的不走。如分页关系的表单对应的事导航视图的路由。
          if (
            expViewRoutePath === currentRoutePath &&
            route.matched.length > c.routeDepth!
          ) {
            if (route.matched.length === c.routeDepth! + 1) {
              isPresetView.value = !!route.name;
              if (isPresetView.value) {
                return;
              }
            }

            c.onRouteChange(route);
          }
        },
        { immediate: true },
      );
    }

    onUnmounted(() => {
      c.clearBreadcrumb();
    });

    return { ns, c, isPresetView, onViewCreated };
  },
  render() {
    const { state } = this.c;
    const { currentKey, cacheKeys, navViewMsgs, cache, breadcrumb } = state;

    const content =
      currentKey && navViewMsgs[currentKey]
        ? h(resolveComponent('IBizViewShell'), {
            key: currentKey,
            class: this.ns.e('view-pos'),
            context: navViewMsgs[currentKey].context,
            params: navViewMsgs[currentKey].params,
            viewId: navViewMsgs[currentKey].viewId,
            onCreated: this.onViewCreated,
          })
        : null;

    return (
      <div
        class={[
          this.ns.b(),
          this.ns.m(this.modelData.id),
          ...this.controller.containerClass,
          this.ns.is('show-breadcrumb', this.controller.state.showBreadcrumd),
        ]}
      >
        {this.controller.state.showBreadcrumd && (
          <div class={this.ns.e('header')}>
            <div class={this.ns.em('header', 'left')}>
              <Breadcrumb
                items={breadcrumb}
                onClick={(item: IBreadcrumb) =>
                  this.c.handleBreadcrumbSkip(item)
                }
              />
            </div>
            <div class={this.ns.em('header', 'right')}>
              <div id='breadcrumb-nav-pos-searchbar'></div>
              <div id='breadcrumb-nav-pos-toolbar'></div>
            </div>
          </div>
        )}
        {cache ? (
          <keepAlive include={cacheKeys} max={30} isKey>
            {content}
          </keepAlive>
        ) : (
          content
        )}
      </div>
    );
  },
});
