import { withInstall } from '@ibiz-template/vue3-util';
import { App } from 'vue';
import { registerControlProvider } from '@ibiz-template/runtime';
import { StepsKanbanControl } from './steps-kanban';
import { StepsKanbanProvider } from './steps-kanban.provider';

export const IBizStepsKanbanControl = withInstall(
  StepsKanbanControl,
  function (v: App) {
    v.component(StepsKanbanControl.name, StepsKanbanControl);
    registerControlProvider(
      'CUSTOM_STEPS_KANBAN',
      () => new StepsKanbanProvider(),
    );
  },
);

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizStepsKanbanControl);
  },
};
