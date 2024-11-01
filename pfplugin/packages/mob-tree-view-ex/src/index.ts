import { registerControlProvider } from '@ibiz-template/runtime';
import { App, defineAsyncComponent } from 'vue';
import { ControlLoadingPlaceholder } from '@ibiz-template/vue3-util';
import { MobTreeViewExProvider } from './mob-tree-view-ex.provider';

export const IBizMobTreeViewEx = {
  install: (v: App): void => {
    v.component(
      'IBizMobTreeViewEx',
      defineAsyncComponent({
        loader: () => import('./mob-tree-view-ex'),
        loadingComponent: ControlLoadingPlaceholder,
        delay: 0,
      }),
    );
    registerControlProvider(
      'TREE_RENDER_MOB_TREE_VIEW_EX',
      () => new MobTreeViewExProvider(),
    );
  },
};

export default IBizMobTreeViewEx;
