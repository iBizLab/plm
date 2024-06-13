import { registerPanelItemProvider } from '@ibiz-template/runtime';
import { App } from 'vue';
import { withInstall } from '@ibiz-template/vue3-util';
import { PanelResourceState } from './panel-resource-state';
import { Provider } from './provider';

export const IBizPanelResourceState = withInstall(
  PanelResourceState,
  function (v: App) {
    v.component(PanelResourceState.name!, PanelResourceState);
    registerPanelItemProvider('CUSTOM_RESOURCE_STATE', () => new Provider());
  },
);

export default IBizPanelResourceState;
