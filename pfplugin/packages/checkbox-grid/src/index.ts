import { App } from 'vue';
import { withInstall } from '@ibiz-template/vue3-util';
import { ControlType, registerControlProvider } from '@ibiz-template/runtime';
import { CheckboxGrid } from './checkbox-grid';
import { CheckboxGridProvider } from './provider';

export const IBizCheckboxGrid = withInstall(CheckboxGrid, (v: App) => {
  v.component(CheckboxGrid.name, CheckboxGrid);
  registerControlProvider(
    `${ControlType.GRID}_RENDER_CHECKBOX_GRID`,
    () => new CheckboxGridProvider(),
  );
});

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizCheckboxGrid);
  },
};
