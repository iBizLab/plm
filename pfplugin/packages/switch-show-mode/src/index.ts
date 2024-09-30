import { registerPanelItemProvider } from '@ibiz-template/runtime';
import { withInstall } from '@ibiz-template/vue3-util';
import { App } from 'vue';
import SwitchShowMode from './switch-show-mode';
import { SwitchShowModeProvider } from './switch-show-mode.provider';

export const IBizSwitchShowModeButton = withInstall(
  SwitchShowMode,
  function (v: App) {
    v.component(SwitchShowMode.name, SwitchShowMode);
    registerPanelItemProvider(
      'CUSTOM_SWITCH_SHOW_MODE',
      () => new SwitchShowModeProvider(),
    );
  },
);

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizSwitchShowModeButton);
  },
};
