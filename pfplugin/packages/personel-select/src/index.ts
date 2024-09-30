import { withInstall } from '@ibiz-template/vue3-util';
import { App } from 'vue';
import { registerEditorProvider } from '@ibiz-template/runtime';
import { PersonelSelectProvider } from './provider';
import { PersonelSelect } from './personel-select';

export const IBizPersonelSelect = withInstall(
  PersonelSelect,
  function (v: App) {
    v.component(PersonelSelect.name, PersonelSelect);
    registerEditorProvider(
      'EDITOR_CUSTOMSTYLE_PERSON_SELECT',
      () => new PersonelSelectProvider(),
    );
  },
);
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizPersonelSelect);
  },
};
