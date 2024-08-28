import { App } from 'vue';
import { registerEditorProvider } from '@ibiz-template/runtime';
import { CommentList } from './comment-list';
import { CommentListProvider } from './comment-list.provider';

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(v: App) {
    v.component(CommentList.name, CommentList);
    registerEditorProvider(
      'EDITOR_CUSTOMSTYLE_COMMENT_LIST',
      () => new CommentListProvider(),
    );
  },
};
