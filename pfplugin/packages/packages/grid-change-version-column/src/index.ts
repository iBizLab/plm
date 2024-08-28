import { registerGridColumnProvider } from '@ibiz-template/runtime';
import { withInstall } from '@ibiz-template/vue3-util';
import { App } from 'vue';
import GridChangeVersionColumn from './grid-change-version-column';
import { GridChangeVersionColumnProvider } from './grid-change-version-column.provider';

export const IBizGridChangeVersionColumn = withInstall(
  GridChangeVersionColumn,
  function (v: App) {
    v.component(GridChangeVersionColumn.name, GridChangeVersionColumn);
    registerGridColumnProvider(
      'GRID_COLRENDER_COLUMN_CHANGE_VERSION',
      () => new GridChangeVersionColumnProvider(),
    );
  },
);

export default IBizGridChangeVersionColumn;
