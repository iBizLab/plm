import { App } from 'vue';
import { registerEditorProvider } from '@ibiz-template/runtime';
import { MobPersonelSelect } from './mob-personel-select';
import { MobPersonelSelectProvider } from './mob-personel-select.provider';

export default {
  install(v: App) {
    v.component('MobPersonelSelect', MobPersonelSelect);
    registerEditorProvider(
      'EDITOR_CUSTOMSTYLE_MOB_PERSONEL_SELECT',
      () => new MobPersonelSelectProvider(),
    );
  },
};
