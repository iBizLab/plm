import { App } from 'vue';
import { withInstall } from '@ibiz-template/vue3-util';
import { registerControlProvider } from '@ibiz-template/runtime';
import { NumberGridProvider } from './grid.provider';
import { NumberGridControl } from './grid';

export const IBizNumberGridControl = withInstall(
  NumberGridControl,
  (v: App) => {
    v.component(NumberGridControl.name, NumberGridControl);
    registerControlProvider(
      'GRID_RENDER_NUMBER_GRID',
      () => new NumberGridProvider(),
    );
  },
);

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizNumberGridControl);
  },
};
