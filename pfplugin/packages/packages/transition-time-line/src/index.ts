import { registerControlProvider } from '@ibiz-template/runtime';
import { withInstall } from '@ibiz-template/vue3-util';
import { App } from 'vue';
import { TransitionTimeLine } from './transition-time-line';
import { TransitionTimeLineProvider } from './provider';

export const IBizTransitionTimeLine = withInstall(
  TransitionTimeLine,
  (v: App) => {
    v.component(TransitionTimeLine.name, TransitionTimeLine);
    registerControlProvider(
      'CUSTOM_TRANSITION_TIME_LINE',
      () => new TransitionTimeLineProvider(),
    );
  },
);

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizTransitionTimeLine);
  },
};
