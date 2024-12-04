import { App } from 'vue';
import { withInstall } from '@ibiz-template/vue3-util';
import { registerEditorProvider } from '@ibiz-template/runtime';
import { MobCommentProvider } from './mob-comment.provider';
import IBizMobComment from './mob-comment';
import IBizMobReplyComment from './reply-comment/mob-reply-comment';
import { MobMenTionItem } from './components/mention-item/mention-item';
import { MobMarkerItem } from './components/marker-item/marker-item';

export const IBizMobHtmlComment = withInstall(
  IBizMobComment,
  function (v: App) {
    v.component(IBizMobComment.name, IBizMobComment);
    v.component(IBizMobReplyComment.name, IBizMobReplyComment);
    v.component(MobMenTionItem.name, MobMenTionItem);
    v.component(MobMarkerItem.name, MobMarkerItem);
    registerEditorProvider(
      `MOBHTMLTEXT_COMMENT`,
      () => new MobCommentProvider(),
    );
    registerEditorProvider(
      `MOBHTMLTEXT_REPLY_COMMENT`,
      () => new MobCommentProvider('REPLY'),
    );
  },
);

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizMobHtmlComment);
  },
};
