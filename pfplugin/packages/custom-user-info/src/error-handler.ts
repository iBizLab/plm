import { HttpError } from '@ibiz-template/core';
import { IErrorHandler } from '@ibiz-template/runtime';
import { AppRouter } from '@ibiz-template/vue3-components';

export class ErrorHandler implements IErrorHandler {
  handle(error: unknown): boolean | undefined {
    if (error instanceof HttpError && error.status === 403) {
      AppRouter.getRouter().push({
        name: `errorView2`,
        params: { code: '403' },
      });
      return true;
    }
  }
}
