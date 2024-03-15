import { registerEditorProvider } from '@ibiz-template/runtime';
import { withInstall } from '@ibiz-template/vue3-util';
import { App } from 'vue';
import { PersonnelInfo } from './personnel-info';
import { PersonnelInfoEditorProvider } from './editor.provider';

export const IBizPersonnelInfo = withInstall(PersonnelInfo, (v: App) => {
  v.component(PersonnelInfo.name, PersonnelInfo);
  registerEditorProvider(
    'EDITOR_CUSTOMSTYLE_PERSONNEL_INFO',
    () => new PersonnelInfoEditorProvider(),
  );
});

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizPersonnelInfo);
  },
};
