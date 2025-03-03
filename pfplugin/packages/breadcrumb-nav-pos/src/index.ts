import { App } from 'vue';
import { registerPanelItemProvider } from '@ibiz-template/runtime';
import { BreadcrumbNavPos } from './nav-pos/breadcrumb-nav-pos';
import { BreadcrumbNavPosProvider } from './breadcrumb-nav-pos.provider';

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(v: App) {
    v.component(BreadcrumbNavPos.name!, BreadcrumbNavPos);
    registerPanelItemProvider(
      'CUSTOM_BREADCRUMB_NAV_POS',
      () => new BreadcrumbNavPosProvider(),
    );
  },
};
