import { registerEditorProvider } from '@ibiz-template/runtime';
import { withInstall } from '@ibiz-template/vue3-util';
import { App } from 'vue';
import { PersonalInfo } from './personal-info';
import { PersonalInfoEditorProvider } from './editor.provider';

export const IBizPersonalInfo = withInstall(PersonalInfo, (v: App) => {
  v.component(PersonalInfo.name as string, PersonalInfo);
  registerEditorProvider(
    'EDITOR_CUSTOMSTYLE_PERSONNEL_INFO',
    () => new PersonalInfoEditorProvider(),
  );
});

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizPersonalInfo);
  },
};
