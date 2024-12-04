import { registerPanelItemProvider } from '@ibiz-template/runtime';
import { App } from 'vue';
import { withInstall } from '@ibiz-template/vue3-util';
import { IdentifierTitleProvider } from './provider';
import { IdentifierTitle } from './identifier-title';

export const IBizIdentifierTitle = withInstall(
  IdentifierTitle,
  // eslint-disable-next-line func-names
  function (v: App) {
    v.component(IdentifierTitle.name, IdentifierTitle);
    registerPanelItemProvider(
      'CUSTOM_IDENTIFIER_TITLE',
      () => new IdentifierTitleProvider(),
    );
  },
);

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizIdentifierTitle);
  },
};
