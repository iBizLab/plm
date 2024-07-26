import { App } from 'vue';
import { IBizTreePicker } from './tree-picker/tree-picker';
import { registerEditorProvider } from '@ibiz-template/runtime';
import { TreePickerProvider } from './tree-picker/tree-picker.provider';

export default {
  install(app: App): void {
    app.component(IBizTreePicker.name, IBizTreePicker);
    registerEditorProvider(
      'EDITOR_CUSTOMSTYLE_TREE_PICKER',
      () => new TreePickerProvider(),
    );
  },
};
