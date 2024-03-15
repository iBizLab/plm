import {
  getNestedRoutePath,
  route2routePath,
  useControlController,
  useNamespace,
} from '@ibiz-template/vue3-util';
import {
  defineComponent,
  onBeforeMount,
  onMounted,
  PropType,
  reactive,
  watch,
} from 'vue';
import { IDEDRTab } from '@ibiz/model-core';
import { useRoute, useRouter } from 'vue-router';
import { IControlProvider, hasSubRoute } from '@ibiz-template/runtime';
import { DRTabController } from './controller';
import './tab-exp-select.scss';

export const TabExpSelect = defineComponent({
  name: 'TabExpSelect',
  props: {
    modelData: { type: Object as PropType<IDEDRTab>, required: true },
    context: { type: Object as PropType<IContext>, required: true },
    params: { type: Object as PropType<IParams>, default: () => ({}) },
    provider: { type: Object as PropType<IControlProvider> },
  },
  setup() {
    const c = useControlController((...args) => new DRTabController(...args));
    const ns = useNamespace('tab-exp-select');
    const router = useRouter();

    const counterData = reactive<IData>({});
    c.evt.on('onCreated', () => {
      if (c.counter) {
        c.counter.onChange((counter: IData) => {
          Object.assign(counterData, counter);
        }, true);
      }
    });

    c.setRouter(router);

    const handleTabChange = (): void => {
      c.handleTabChange();
    };

    const route = useRoute();

    let expViewRoutePath = '';
    if (c.routeDepth) {
      expViewRoutePath = getNestedRoutePath(route, c.routeDepth);
    }

    const valueChange = (): void => {
      // 分页项值改变时先获取当前搜索表单的值放在params里
      const data = (
        c.view.layoutPanel?.panelItems.searchform as IParams
      )?.control.getFilterParams();
      c.params = data;

      c.handleTabChange();
    };

    // 搜索表单值变化
    const formChange = (): void => {
      const drBarItem = c.model.dedrtabPages?.find(
        (item: IData) => item.id === c.state.activeName,
      );
      if (drBarItem) {
        const viewId = drBarItem.appViewId || '';
        const targetId = viewId.split('.').pop();
        const viewParam = (
          c.view.layoutPanel?.panelItems.searchform as IParams
        )?.control.getFilterParams();

        // eslint-disable-next-line prefer-const
        for (let index of (c.view as IParams).ctx.controllersMap.keys()) {
          if (index.toLowerCase() === targetId) {
            const targetView = (c.view as IParams).ctx.controllersMap.get(
              index,
            );

            if (targetView) {
              targetView.params = viewParam;
              if (targetView.engines[0].grid) {
                targetView.engines[0].grid.load({ isInitialLoad: true });
              }
              if (
                targetView.ctx?.controllersMap &&
                targetView.ctx?.controllersMap.get('chart')
              ) {
                targetView.ctx?.controllersMap
                  .get('chart')
                  .load({ isInitialLoad: true });
              }
            }
          }
        }
      }
    };

    onMounted(() => {
      (c.view.layoutPanel?.panelItems.searchform as IParams)?.control?.evt?.on(
        'onFormDataChange',
        formChange,
      );
    });

    onBeforeMount(() => {
      (c.view.layoutPanel?.panelItems.searchform as IParams)?.evt?.off(
        'onFormDataChange',
        formChange,
      );
    });

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
              if (
                srfnav &&
                c.state.activeName &&
                c.state.activeName !== srfnav
              ) {
                c.state.activeName = srfnav;
                // 路由模式下，且有子路由的时候不需要navpos跳转路由，只要做呈现
                const isRoutePushed =
                  !!c.routeDepth && hasSubRoute(c.routeDepth);
                c.handleTabChange(isRoutePushed);
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
      valueChange,
      counterData,
      handleTabChange,
    };
  },
  render() {
    const { isCreated, drTabPages } = this.c.state;
    return (
      <iBizControlBase controller={this.c} class={this.ns.b()}>
        {isCreated && (
          <div class={this.ns.e('tabexp')}>
            <div class={this.ns.em('tabexp', 'caption')}>
              {this.c.view.layoutPanel?.panelItems.tabexppanel?.model.caption}
            </div>
            <el-select
              v-model={this.c.state.activeName}
              onChange={this.valueChange}
            >
              {drTabPages.map((page: IData) => {
                return (
                  <el-option
                    key={page.tag}
                    label={page.caption}
                    value={page.tag}
                  />
                );
              })}
            </el-select>
          </div>
        )}
      </iBizControlBase>
    );
  },
});
