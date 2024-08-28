import { registerControlProvider, ControlType } from '@ibiz-template/runtime';
import { withInstall } from '@ibiz-template/vue3-util';
import { App } from 'vue';
import { ReviewListControl } from './review-list';
import { ReviewListProvider } from './review-list.provider';

export const IBizReviewListControl = withInstall(
  ReviewListControl,
  function (v: App) {
    v.component(ReviewListControl.name, ReviewListControl);
    registerControlProvider(
      `${ControlType.LIST}_RENDER_REVIEW_LIST`,
      () => new ReviewListProvider(),
    );
  },
);

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizReviewListControl);
  },
};
