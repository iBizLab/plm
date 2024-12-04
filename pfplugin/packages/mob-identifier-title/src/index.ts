import { registerPanelItemProvider } from '@ibiz-template/runtime';
import { App } from 'vue';
import { withInstall } from '@ibiz-template/vue3-util';
import { MobIdentifierTitleProvider } from './provider';
import { MobIdentifierTitle } from './mob-identifier-title';

export const IBizMobIdentifierTitle = withInstall(
  MobIdentifierTitle,
  // eslint-disable-next-line func-names
  function (v: App) {
    v.component(MobIdentifierTitle.name!, MobIdentifierTitle);
    registerPanelItemProvider(
      'CUSTOM_MOB_IDENTIFIER_TITLE',
      () => new MobIdentifierTitleProvider(),
    );
  },
);

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizMobIdentifierTitle);
  },
};
