import { registerControlProvider } from '@ibiz-template/runtime';
import { withInstall } from '@ibiz-template/vue3-util';
import { App } from 'vue';
import { GroupTreeControl } from './group-tree';
import { GroupTreeProvider } from './group-tree.provider';

export const IBizGroupTreeControl = withInstall(
  GroupTreeControl,
  function (v: App) {
    v.component(GroupTreeControl.name, GroupTreeControl);
    registerControlProvider(
      'TREE_RENDER_GROUP_TREE',
      () => new GroupTreeProvider(),
    );
  },
);

export default IBizGroupTreeControl;
