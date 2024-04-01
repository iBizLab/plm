/* eslint-disable prefer-destructuring */
import {
  getNestedRoutePath,
  route2routePath,
  useControlController,
  useNamespace,
} from '@ibiz-template/vue3-util';
import { defineComponent, PropType, watch } from 'vue';
import { IAppDETabExplorerView, ITabExpPanel } from '@ibiz/model-core';
import { IControlProvider } from '@ibiz-template/runtime';
import { useRoute } from 'vue-router';
import { TabExpSelectController } from './tab-exp-select.controller';
import './tab-exp-select.scss';

export const TabExpSelect = defineComponent({
  name: 'TabExpSelect',
  props: {
    modelData: { type: Object as PropType<ITabExpPanel>, required: true },
    context: { type: Object as PropType<IContext>, required: true },
    params: { type: Object as PropType<IParams>, default: () => ({}) },
    provider: { type: Object as PropType<IControlProvider> },
    defaultTabName: { type: String, required: false },
  },
  setup() {
    const c = useControlController(
      (...args) => new TabExpSelectController(...args),
    );
    const ns = useNamespace(`tab-exp-select`);

    const handleTabChange = (names: string[]): void => {
      c.state.activeName = names[0];
      c.handleTabChange();
    };

    const tabPosition =
      (c.view.model as IAppDETabExplorerView).tabLayout?.toLowerCase() || 'top';

    const route = useRoute();

    const cascaderProps = {
      expandTrigger: 'hover',
      label: 'caption',
      value: 'tabTag',
    };

    let expViewRoutePath = '';
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
              if (
                srfnav &&
                c.state.activeName &&
                c.state.activeName !== srfnav
              ) {
                c.state.activeName = srfnav;
                c.handleTabChange();
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
      tabPosition,
      cascaderProps,
      handleTabChange,
    };
  },
  render() {
    const { isCreated, tabPages } = this.c.state;
    let content = null;
    if (isCreated) {
      content = (
        <el-cascader
          model-value={[this.c.state.activeName]}
          options={tabPages}
          props={this.cascaderProps}
          popper-class={this.ns.b('popper')}
          onChange={this.handleTabChange}
        >
          {{
            default: (item: IData) => {
              const { data } = item;
              return (
                <span class={[...data.class, this.ns.be('popper', 'item')]}>
                  {this.c.isShowIcon && <iBizIcon icon={data.sysImage} />}
                  {this.c.isShowCaption && data.caption}
                </span>
              );
            },
          }}
        </el-cascader>
      );
    }

    return (
      <iBizControlBase class={this.ns.b()} controller={this.c}>
        {content}
        <span class={this.ns.b('caption')}>
          <span class={this.ns.be('caption', 'hashtag')}>#</span>
          <span>维度</span>
        </span>
      </iBizControlBase>
    );
  },
});
