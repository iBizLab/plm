import { App } from 'vue';
import { registerEditorProvider } from '@ibiz-template/runtime';
import { withInstall } from '@ibiz-template/vue3-util';
import { CommentItemRawItem } from './comment-item-rawitem';
import { CommentItemRawItemEditorProvider } from './comment-item-rawitem-editor.provider';

export const IBizCommentItemRawItem = withInstall(
  CommentItemRawItem,
  function (v: App) {
    v.component(CommentItemRawItem.name, CommentItemRawItem);
    registerEditorProvider(
      'RAW_COMMENT_ITEM',
      () => new CommentItemRawItemEditorProvider(),
    );
  },
);

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizCommentItemRawItem);
  },
};
