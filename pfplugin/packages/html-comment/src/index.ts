import { App, defineAsyncComponent } from 'vue';
import { registerEditorProvider } from '@ibiz-template/runtime';
import { withInstall } from '@ibiz-template/vue3-util';
import { HtmlComment } from './html-comment';
import { HtmlCommentProvider } from './html-comment.provider';
import IBizHtmlCollapse from './wang-editor/wang-editor-collapse';
import IBizHtmlContent from './wang-editor/wang-editor-comment';
import {
  DateElem,
  LabelElem,
  PromptBoxElem,
  MindMapElem,
  AudioElem,
  FilesElem,
  FormulaElem,
  LayoutElem,
  LayoutColumnElem,
} from './component';

export const IBizHtmlComment = withInstall(HtmlComment, function (v: App) {
  if (!window.customElements.get('layout-elem')) {
    window.customElements.define('layout-elem', LayoutElem);
  }
  if (!window.customElements.get('layout-column-elem')) {
    window.customElements.define('layout-column-elem', LayoutColumnElem);
  }
  if (!window.customElements.get('date-elem')) {
    window.customElements.define('date-elem', DateElem);
  }
  if (!window.customElements.get('label-elem')) {
    window.customElements.define('label-elem', LabelElem);
  }
  if (!window.customElements.get('prompt-box-elem')) {
    window.customElements.define('prompt-box-elem', PromptBoxElem);
  }
  if (!window.customElements.get('mind-map-elem')) {
    window.customElements.define('mind-map-elem', MindMapElem);
  }
  if (!window.customElements.get('audio-elem')) {
    window.customElements.define('audio-elem', AudioElem);
  }
  if (!window.customElements.get('files-elem')) {
    window.customElements.define('files-elem', FilesElem);
  }
  if (!window.customElements.get('formula-elem')) {
    window.customElements.define('formula-elem', FormulaElem);
  }
  v.component(IBizHtmlCollapse.name!, IBizHtmlCollapse);
  v.component(IBizHtmlContent.name!, IBizHtmlContent);
  v.component(HtmlComment.name!, HtmlComment);
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
