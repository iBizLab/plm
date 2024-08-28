import { registerControlProvider } from '@ibiz-template/runtime';
import { withInstall } from '@ibiz-template/vue3-util';
import { App } from 'vue';
import { ListTreeControl } from './list-tree';
import { ListTreeProvider } from './list-tree.provider';

export const IBizListTreeControl = withInstall(
  ListTreeControl,
  function (v: App) {
    v.component(ListTreeControl.name, ListTreeControl);
    registerControlProvider(
      'TREE_RENDER_LIST_TREE',
      () => new ListTreeProvider(),
    );
  },
);

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizListTreeControl);
  },
};
