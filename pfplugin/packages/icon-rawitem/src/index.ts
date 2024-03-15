import { App } from 'vue';
import { registerEditorProvider } from '@ibiz-template/runtime';
import { withInstall } from '@ibiz-template/vue3-util';
import { IconRawItem } from './icon-rawitem';
import { IconRawItemEditorProvider } from './icon-rawitem-editor.provider';

export const IBizIconRawItem = withInstall(IconRawItem, function (v: App) {
  v.component(IconRawItem.name, IconRawItem);
  registerEditorProvider(
    'EDITOR_CUSTOMSTYLE_ICON_RAWITEM',
    () => new IconRawItemEditorProvider(),
  );
});

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizIconRawItem);
  },
};
