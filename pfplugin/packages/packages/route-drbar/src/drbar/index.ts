import { registerControlProvider, ControlType } from '@ibiz-template/runtime';
import { withInstall } from '@ibiz-template/vue3-util';
import { App } from 'vue';
import { DRBarControl } from './drbar';
import { DRBarProvider } from './drbar.provider';

export * from './drbar.controller';

export const IBizDRBarControl = withInstall(DRBarControl, function (v: App) {
  v.component(DRBarControl.name, DRBarControl);
  registerControlProvider('CUSTOM_ROUTE_DRBAR', () => new DRBarProvider());
});

export default IBizDRBarControl;
