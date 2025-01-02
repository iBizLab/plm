import { registerGridColumnProvider } from '@ibiz-template/runtime';
import { App } from 'vue';
import GridPersonalInfoColumn from './grid-personal-info-column';
import { GridPersonalInfoColumnProvider } from './grid-personal-info-column.provider';

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(v: App) {
    v.component(GridPersonalInfoColumn.name!, GridPersonalInfoColumn);
    registerGridColumnProvider(
      'GRID_COLRENDER_PERSONAL_INFO_COLUMN',
      () => new GridPersonalInfoColumnProvider(),
    );
  },
};
