import { App } from 'vue';
import { registerControlProvider } from '@ibiz-template/runtime';
import { TabGroupSelectTree } from './tab-group-select-tree';
import { TabGroupSelectTreeProvider } from './tab-group-select-tree.provider';

export default {
  install(v: App): void {
    v.component('TabGroupSelectTree', TabGroupSelectTree);
    registerControlProvider(
      'TREE_RENDER_TAB_GROUP_SELECT',
      () => new TabGroupSelectTreeProvider(),
    );
  },
};
