import { App } from 'vue';
import { registerEditorProvider } from '@ibiz-template/runtime';
import { withInstall } from '@ibiz-template/vue3-util';
import { ManageMPickerProvider } from './manage-mpicker.provider';
import { ManageMPicker } from './manage-mpicker';

export const IBizManageMPicker = withInstall(ManageMPicker, function (v: App) {
  v.component(ManageMPicker.name, ManageMPicker);
  registerEditorProvider('PICKER_MANAGE', () => new ManageMPickerProvider());
});

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizManageMPicker);
  },
};
