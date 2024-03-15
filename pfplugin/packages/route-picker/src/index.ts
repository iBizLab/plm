import { App } from 'vue';
import { registerEditorProvider } from '@ibiz-template/runtime';
import { withInstall } from '@ibiz-template/vue3-util';
import { RoutePickerProvider } from './route-picker.provider';
import { RoutePicker } from './route-picker';

export const IBizRoutePicker = withInstall(RoutePicker, function (v: App) {
  v.component(RoutePicker.name, RoutePicker);
  registerEditorProvider('PICKER_ROUTE', () => new RoutePickerProvider());
});

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizRoutePicker);
  },
};
