import { withInstall } from '@ibiz-template/vue3-util';
import { App } from 'vue';
import { registerFormDetailProvider } from '@ibiz-template/runtime';
import MobCaseSteps from './mob-case-steps';
import { MobCaseStepsProvider } from './mob-case-steps.provider';

export const IBizMobCaseSteps = withInstall(MobCaseSteps, function (v: App) {
  v.component(MobCaseSteps.name, MobCaseSteps);
  registerFormDetailProvider(
    'FORM_USERCONTROL_MOB_CASE_STEPS',
    () => new MobCaseStepsProvider(),
  );
});

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizMobCaseSteps);
  },
};
