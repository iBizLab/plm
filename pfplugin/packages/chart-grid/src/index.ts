import { App } from 'vue';
import { registerControlProvider } from '@ibiz-template/runtime';
import { ChartProvider } from './chart-grid-provider';
import ChartGrid from './chart-grid';

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unused-vars
  install(v: App) {
    v.component(ChartGrid.name, ChartGrid);
    registerControlProvider(
      'CHART_RENDER_CHART_GRID',
      () => new ChartProvider(),
    );
  },
};
