import { App } from 'vue';
import { withInstall } from '@ibiz-template/vue3-util';
import {
  registerGridColumnProvider,
  registerTreeGridExColumnProvider,
} from '@ibiz-template/runtime';
import { GridEditColumn } from './grid-field-clolumn/grid-edit-column';
import { GridEditColumnProvider } from './grid-field-clolumn/provider';
import { TreeGridExFieldColumn } from './tree-grid-ex-field-column/tree-grid-ex-field-column';
import { TreeGridExFieldEditColumnProvider } from './tree-grid-ex-field-column/tree-grid-ex-field-column.provider';

export const IBizGridEditColumn = withInstall(
  GridEditColumn,
  function (v: App) {
    v.component(GridEditColumn.name, GridEditColumn);
    registerGridColumnProvider(
      'GRID_COLRENDER_COLUMN_ACTION_EDIT',
      () => new GridEditColumnProvider(),
    );
  },
);

export const IBizTreeGridExFieldColumn = withInstall(
  TreeGridExFieldColumn,
  function (v: App) {
    v.component(TreeGridExFieldColumn.name, TreeGridExFieldColumn);
    registerTreeGridExColumnProvider(
      'GRID_COLRENDER_COLUMN_ACTION_EDIT',
      () => new TreeGridExFieldEditColumnProvider(),
    );
  },
);

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizGridEditColumn);
    app.use(IBizTreeGridExFieldColumn);
  },
};
