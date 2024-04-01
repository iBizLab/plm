import { registerControlProvider } from '@ibiz-template/runtime';
import { withInstall } from '@ibiz-template/vue3-util';
import { App } from 'vue';
import { DRBarExControl } from './drbar-ex';
import { DRBarExProvider } from './drbar-ex.provider';

export * from './drbar-ex.controller';

export const IBizDRBarExControl = withInstall(
  DRBarExControl,
  function (v: App) {
    v.component(DRBarExControl.name, DRBarExControl);
    registerControlProvider('CUSTOM_DRBAR_EX', () => new DRBarExProvider());
  },
);

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizDRBarExControl);
  },
};
