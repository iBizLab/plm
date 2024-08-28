import { registerDEMethodProvider } from '@ibiz-template/runtime';
import { DeActionMethodPluginProvider } from './review-content-sort.provider';

export function registerReviewContentSortProvider(): void {
  registerDEMethodProvider(
    'DEMETHOD_REVIEW_CONTENT_SORT',
    () => new DeActionMethodPluginProvider(),
  );
}

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install() {
    registerReviewContentSortProvider();
  },
};
