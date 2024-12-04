import { registerGridColumnProvider } from '@ibiz-template/runtime';
import { withInstall } from '@ibiz-template/vue3-util';
import { App } from 'vue';
import GridReviewResultsColumn from './grid-review-results-column';
import { GridReviewResultsColumnProvider } from './grid-review-results-column.provider';

export const IBizGridReviewResultsColumn = withInstall(
  GridReviewResultsColumn,
  function (v: App) {
    v.component(GridReviewResultsColumn.name, GridReviewResultsColumn);
    registerGridColumnProvider(
      'GRID_COLRENDER_COLUMN_REVIEW_RESULTS',
      () => new GridReviewResultsColumnProvider(),
    );
  },
);

export default IBizGridReviewResultsColumn;
