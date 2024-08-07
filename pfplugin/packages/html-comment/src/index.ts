import { App, defineAsyncComponent } from 'vue';
import { registerEditorProvider } from '@ibiz-template/runtime';
import { withInstall } from '@ibiz-template/vue3-util';
import { HtmlComment } from './html-comment';
import { HtmlCommentProvider } from './html-comment.provider';
import IBizHtmlCollapse from './wang-editor/wang-editor-collapse';
import IBizHtmlContent from './wang-editor/wang-editor-comment';

export const IBizHtmlComment = withInstall(HtmlComment, function (v: App) {
  v.component(IBizHtmlCollapse.name, IBizHtmlCollapse);
  v.component(IBizHtmlContent.name, IBizHtmlContent);
  v.component(HtmlComment.name, HtmlComment);
  registerEditorProvider(
    'EDITOR_CUSTOMSTYLE_COMMENT',
    () => new HtmlCommentProvider(),
  );
});

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizHtmlComment);
    app.component(
      'IBizHtmlContent',
      defineAsyncComponent(() => import('./wang-editor/wang-editor-comment')),
    );
  },
};
