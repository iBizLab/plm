import { App } from 'vue';
import { withInstall } from '@ibiz-template/vue3-util';
import { registerPanelItemProvider } from '@ibiz-template/runtime';
import { BreadcrumbExp } from './breadcrumb-exp';
import { BreadcrumbExpProvider } from './breadcrumb-exp.provider';

export const IBizBreadcrumbExp = withInstall(BreadcrumbExp, function (v: App) {
  v.component(BreadcrumbExp.name, BreadcrumbExp);
  registerPanelItemProvider(
    'CUSTOM_BREADCRUMB_EXP',
    () => new BreadcrumbExpProvider(),
  );
});

export default {
  install(app: App) {
    app.use(IBizBreadcrumbExp);
  },
};
