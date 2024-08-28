import { registerGridColumnProvider } from '@ibiz-template/runtime';
import { withInstall } from '@ibiz-template/vue3-util';
import { App } from 'vue';
import IconGridColumn from './icon-grid-column';
import { IconGridColumnProvider } from './icon-grid-column.provider';

export const IBizIconGridColumn = withInstall(
  IconGridColumn,
  function (v: App) {
    v.component(IconGridColumn.name, IconGridColumn);
    registerGridColumnProvider(
      'GRID_COLRENDER_ICON_GRIDCOLUMN',
      () => new IconGridColumnProvider(),
    );
  },
);

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizIconGridColumn);
  },
};
