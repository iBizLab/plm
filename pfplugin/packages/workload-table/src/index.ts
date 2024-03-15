import { App } from 'vue';
import { withInstall } from '@ibiz-template/vue3-util';
import { registerControlProvider } from '@ibiz-template/runtime';
import { WorkloadTableControl } from './workload-table';
import { WorkloadTableProvider } from './workload-table.provider';

export const IBizWorkloadTableControl = withInstall(
  WorkloadTableControl,
  (v: App) => {
    v.component(WorkloadTableControl.name, WorkloadTableControl);
    registerControlProvider(
      'GRID_RENDER_WORKLOAD_TABLE',
      () => new WorkloadTableProvider(),
    );
  },
);

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizWorkloadTableControl);
  },
};
