import { registerControlProvider } from '@ibiz-template/runtime';
import { withInstall } from '@ibiz-template/vue3-util';
import { App } from 'vue';
import { ResourceGanttControl } from './resource-gantt';
import { ResourceGanttProvider } from './resource-gantt.provider';
import { IBizPanelResourceState, IBizResourceDropdownList } from './component';

export const IBizResourceGanttControl = withInstall(
  ResourceGanttControl,
  function (v: App) {
    v.component(ResourceGanttControl.name!, ResourceGanttControl);
    registerControlProvider(
      'TREE_RENDER_RESOURCE_GANTT',
      () => new ResourceGanttProvider(),
    );
  },
);

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizResourceGanttControl);
    app.use(IBizPanelResourceState);
    app.use(IBizResourceDropdownList);
  },
};
