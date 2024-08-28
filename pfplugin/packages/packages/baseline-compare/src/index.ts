import { App } from 'vue';
import { registerControlProvider } from '@ibiz-template/runtime';
import { BaselineCompare } from './baseline-compare';
import { BaselineCompareProvider } from './baseline-compare.provider';

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(v: App) {
    v.component(BaselineCompare.name, BaselineCompare);
    registerControlProvider(
      'GRID_RENDER_BASELINECOMPARE',
      () => new BaselineCompareProvider(),
    );
  },
};
