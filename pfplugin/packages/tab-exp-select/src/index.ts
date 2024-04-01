import { registerControlProvider } from '@ibiz-template/runtime';
import { App } from 'vue';
import { withInstall } from '@ibiz-template/vue3-util';
import { TabExpSelectProvider } from './tab-exp-select.provider';
import { TabExpSelect } from './tab-exp-select';

export const IBizTabExpSelectControl = withInstall(
  TabExpSelect,
  function (v: App) {
    v.component(TabExpSelect.name, TabExpSelect);
    registerControlProvider(
      'CUSTOM_TAB_EXP_SELECT',
      () => new TabExpSelectProvider(),
    );
  },
);

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizTabExpSelectControl);
  },
};
