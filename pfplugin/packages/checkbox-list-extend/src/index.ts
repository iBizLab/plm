import { App } from 'vue';
import { registerEditorProvider } from '@ibiz-template/runtime';
import { withInstall } from '@ibiz-template/vue3-util';
import CheckboxListExtend from './checkbox-list-extend';
import { CheckboxListExtendProvider } from './provider';

export const IBizCheckboxListExtend = withInstall(
  CheckboxListExtend,
  function (v: App) {
    v.component(CheckboxListExtend.name, CheckboxListExtend);
    registerEditorProvider(
      'CHECKBOXLIST_EXTEND',
      () => new CheckboxListExtendProvider(),
    );
  },
);

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizCheckboxListExtend);
  },
};
