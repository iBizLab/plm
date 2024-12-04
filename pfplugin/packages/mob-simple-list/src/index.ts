/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { App } from 'vue';
import { registerControlProvider } from '@ibiz-template/runtime';
import { MobSimpleList } from './mob-simple-list';
import { MobSimpleListProvider } from './mob-simple-list.provoder';

export default {
  install(v: App) {
    v.component(MobSimpleList.name!, MobSimpleList);
    registerControlProvider(
      'LIST_RENDER_MOB_SIMPLE_LIST',
      () => new MobSimpleListProvider(),
    );
  },
};
