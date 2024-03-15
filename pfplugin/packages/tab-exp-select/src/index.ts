import { registerControlProvider } from '@ibiz-template/runtime';
import { App } from 'vue';
import { TabExpSelectProvider } from './provider';
import { TabExpSelect } from './tab-exp-select';

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(v: App) {
    v.component(TabExpSelect.name, TabExpSelect);
    registerControlProvider(
      'CUSTOM_TAB_EXP_SELECT',
      () => new TabExpSelectProvider(),
    );
  },
};
