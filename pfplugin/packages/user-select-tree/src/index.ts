/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { registerControlProvider } from '@ibiz-template/runtime';
import { App } from 'vue';
import { UserSelectTreeProvider } from './user-select-tree.provider';
import { UserSelectTree } from './user-select-tree';

export default {
  install(v: App) {
    v.component('UserSelectTree', UserSelectTree);
    registerControlProvider(
      'TREEVIEW_USER_SELECT_TREE',
      () => new UserSelectTreeProvider(),
    );
  },
};
