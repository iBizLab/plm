/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { App } from 'vue';
import { registerEditorProvider } from '@ibiz-template/runtime';
import { withInstall } from '@ibiz-template/vue3-util';
import { MobCommentItemRawItem } from './mob-comment-item-rawitem';
import { MobCommentItemRawItemEditorProvider } from './mob-comment-item-rawitem.provider';

export const IBizMobCommentItemRawItem = withInstall(
  MobCommentItemRawItem,
  function (v: App) {
    v.component(MobCommentItemRawItem.name!, MobCommentItemRawItem);
    registerEditorProvider(
      'RAW_MOB_COMMENT_ITEM',
      () => new MobCommentItemRawItemEditorProvider(),
    );
    registerEditorProvider(
      'EDITOR_CUSTOMSTYLE_MOB_COMMENT_ITEM',
      () => new MobCommentItemRawItemEditorProvider(),
    );
  },
);

export default {
  install(app: App) {
    app.use(IBizMobCommentItemRawItem);
  },
};
