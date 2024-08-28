import { App } from 'vue';
import { registerEditorProvider } from '@ibiz-template/runtime';
import { withInstall } from '@ibiz-template/vue3-util';
import { LuckySheetProvider } from './lucky-sheet';
import LuckySheet from './lucky-sheet/lucky-sheet';

export const IBizLuckySheet = withInstall(LuckySheet, function (v: App) {
  v.component(LuckySheet.name, LuckySheet);
  registerEditorProvider(
    'EDITOR_CUSTOMSTYLE_LUCKYSHEET',
    () => new LuckySheetProvider(),
  );
});

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizLuckySheet);
  },
};
