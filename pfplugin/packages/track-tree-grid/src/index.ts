import { registerControlProvider } from '@ibiz-template/runtime';
import { withInstall } from '@ibiz-template/vue3-util';
import { App } from 'vue';
import { TrackTreeGrid } from './track-tree-grid';
import { TrackTreeGridProvider } from './track-tree-grid.provider';

export const IBizTrackTreeGridControl = withInstall(
  TrackTreeGrid,
  function (v: App) {
    v.component(TrackTreeGrid.name!, TrackTreeGrid);
    registerControlProvider(
      'TREE_RENDER_TRACK_TREE_GRID',
      () => new TrackTreeGridProvider(),
    );
  },
);

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizTrackTreeGridControl);
  },
};
