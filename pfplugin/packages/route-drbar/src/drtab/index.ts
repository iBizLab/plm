import { registerControlProvider, ControlType } from '@ibiz-template/runtime';
import { withInstall } from '@ibiz-template/vue3-util';
import { App } from 'vue';
import { DRTabControl } from './drtab';
import { DRTabProvider } from './drtab.provider';

export * from './drtab.controller';

export const IBizDRTabControl = withInstall(DRTabControl, function (v: App) {
  v.component(DRTabControl.name, DRTabControl);
  registerControlProvider('CUSTOM_ROUTE_DRTAB', () => new DRTabProvider());
});

export default IBizDRTabControl;
