import { App } from 'vue';
import { withInstall } from '@ibiz-template/vue3-util';
import { ControlType, registerControlProvider } from '@ibiz-template/runtime';
import { SampleList } from './sample-list';
import { SampleListProvider } from './provider';

export const IBizSampleList = withInstall(SampleList, function (v: App) {
  v.component(SampleList.name, SampleList);
  registerControlProvider(
    `${ControlType.LIST}_RENDER_SAMPLE_LIST`,
    () => new SampleListProvider(),
  );
});

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizSampleList);
  },
};
