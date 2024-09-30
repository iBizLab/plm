import { withInstall } from '@ibiz-template/vue3-util';
import { App } from 'vue';
import { registerControlProvider } from '@ibiz-template/runtime';
import { FormDataComparisonProvider } from './provider';
import FormDataComparison from './form-data-comparison';

export const IBizFormDataComparison = withInstall(
  FormDataComparison,
  // eslint-disable-next-line func-names
  function (v: App) {
    v.component(FormDataComparison.name as string, FormDataComparison);
    registerControlProvider(
      'EDITFORM_RENDER_FORM_DATA_COMPARISON',
      () => new FormDataComparisonProvider(),
    );
  },
);

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    app.use(IBizFormDataComparison as any);
  },
};
