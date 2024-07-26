import { App } from 'vue';
import { registerViewProvider } from '@ibiz-template/runtime';
import { withInstall } from '@ibiz-template/vue3-util';
import { SharedCheckPage } from './shared-check-page';
import { SharedCheckPageProvider } from './shared-check-page.provider';

export const IBizSharedCheckPage = withInstall(
  SharedCheckPage,
  function (v: App) {
    v.component(SharedCheckPage.name, SharedCheckPage);
    registerViewProvider(
      'VIEW_CUSTOM_SHARED_CHECK_PAGE',
      () => new SharedCheckPageProvider(),
    );
  },
);

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App): void {
    app.use(IBizSharedCheckPage);
  },
};
