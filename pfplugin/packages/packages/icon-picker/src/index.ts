import { App } from 'vue';
import { registerEditorProvider } from '@ibiz-template/runtime';
import { IconPicker } from './icon-picker';
import { IconPickerProvider } from './icon-picker-provider';

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(v: App) {
    v.component(IconPicker.name, IconPicker);
    registerEditorProvider(
      'EDITOR_CUSTOMSTYLE_ICONPICKER',
      () => new IconPickerProvider(),
    );
  },
};
