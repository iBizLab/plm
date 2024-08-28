import { App } from 'vue';
import { withInstall } from '@ibiz-template/vue3-util';
import { registerEditorProvider } from '@ibiz-template/runtime';
import { RawActivity } from './raw-activity';
import { RawActivityEditorProvider } from './raw-activity.provider';

export const IBizRawActivity = withInstall(RawActivity, (v: App) => {
  v.component(RawActivity.name, RawActivity);
  registerEditorProvider(
    'EDITOR_CUSTOMSTYLE_RAW_ACTIVITY',
    () => new RawActivityEditorProvider(),
  );
});

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizRawActivity);
  },
};
