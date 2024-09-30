import { App } from 'vue';
import { withInstall } from '@ibiz-template/vue3-util';
import {
  IEditorProvider,
  IGridColumnProvider,
  registerEditorProvider,
  registerGridColumnProvider,
} from '@ibiz-template/runtime';
import { FastCopySpan } from './clip-board-span/clip-board-span';
import { FastCopyFieldColumn } from './clip-board-field-column/clip-board-field-column';
import { FastCopyProvider } from './provider';

export const IBizClipBoard = withInstall(FastCopySpan, function (v: App) {
  v.component(FastCopySpan.name, FastCopySpan);
  v.component(FastCopyFieldColumn.name, FastCopyFieldColumn);
  registerEditorProvider(
    'EDITOR_CUSTOMSTYLE_CLIP_BOARD_SPAN',
    () => new FastCopyProvider() as IEditorProvider,
  );
  registerGridColumnProvider(
    'GRID_COLRENDER_CLIP_BOARD_FIELDCOLUMN',
    () => new FastCopyProvider('GRIDCOLUMN') as IGridColumnProvider,
  );
});

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizClipBoard);
  },
};
