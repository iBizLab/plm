import { withInstall } from '@ibiz-template/vue3-util';
import { App } from 'vue';
import { registerEditorProvider } from '@ibiz-template/runtime';
import { AttentionProvider } from './provider';
import { Attention } from './attention';

export const IBizAttention = withInstall(Attention, function (v: App) {
  v.component(Attention.name, Attention);
  registerEditorProvider(
    'EDITOR_CUSTOMSTYLE_ATTENTION',
    () => new AttentionProvider(),
  );
});
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizAttention);
  },
};
