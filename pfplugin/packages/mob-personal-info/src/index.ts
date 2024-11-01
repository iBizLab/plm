import { registerEditorProvider } from '@ibiz-template/runtime';
import { withInstall } from '@ibiz-template/vue3-util';
import { App } from 'vue';
import { MobPersonalInfo } from './mob-personal-info';
import { MobPersonalInfoEditorProvider } from './mob-personal-info.provider';

export const IBizMobPersonalInfo = withInstall(MobPersonalInfo, (v: App) => {
  v.component(MobPersonalInfo.name as string, MobPersonalInfo);
  registerEditorProvider(
    'EDITOR_CUSTOMSTYLE_MOB_PERSONNEL_INFO',
    () => new MobPersonalInfoEditorProvider(),
  );
});

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizMobPersonalInfo);
  },
};
