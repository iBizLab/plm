import { registerControlProvider } from '@ibiz-template/runtime';
import { App } from 'vue';
import { CustomLabelProvider } from './provider';

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unused-vars
  install(app: App) {
    registerControlProvider(
      'CHART_RENDER_CUSTOM_LABEL',
      () => new CustomLabelProvider(),
    );
  },
};
