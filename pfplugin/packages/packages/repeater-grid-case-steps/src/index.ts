import { withInstall } from '@ibiz-template/vue3-util';
import { App } from 'vue';
import { registerFormDetailProvider } from '@ibiz-template/runtime';
import { RepeaterGridCaseStepsProvider } from './provider';
import RepeaterGridCaseSteps from './repeater-grid-case-steps';

export const IBizRepeaterGridCaseSteps = withInstall(
  RepeaterGridCaseSteps,
  function (v: App) {
    v.component(RepeaterGridCaseSteps.name, RepeaterGridCaseSteps);
    registerFormDetailProvider(
      'FORM_USERCONTROL_CASE_STEPS',
      () => new RepeaterGridCaseStepsProvider(),
    );
  },
);

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizRepeaterGridCaseSteps);
  },
};
