import { App } from 'vue';
import { withInstall } from '@ibiz-template/vue3-util';
import { registerGridColumnProvider } from '@ibiz-template/runtime';
import { GridJsCodeColumn } from './grid-jscode-column';
import { GridJsCodeColumnProvider } from './grid-jscode-column.provider';

export const IBizGridJsCodeColumn = withInstall(
  GridJsCodeColumn,
  function (v: App) {
    v.component(GridJsCodeColumn.name, GridJsCodeColumn);
    registerGridColumnProvider(
      'GRID_COLRENDER_JSCODE_GRID_COLUMN',
      () => new GridJsCodeColumnProvider(),
    );
  },
);

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizGridJsCodeColumn);
  },
};
