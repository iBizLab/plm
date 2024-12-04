import { App } from 'vue';
import { registerEditorProvider } from '@ibiz-template/runtime';
import { withInstall } from '@ibiz-template/vue3-util';
import { StageProgressBar } from './stage-progress-bar';
import { EditorProvider } from './editor.provider';

export const IBizStageProgressBar = withInstall(
  StageProgressBar,
  function (v: App) {
    v.component(StageProgressBar.name!, StageProgressBar);
    // 标签
    registerEditorProvider(
      'EDITOR_CUSTOMSTYLE_STAGE_PROGRESS_BAR',
      () => new EditorProvider(),
    );
  },
);

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizStageProgressBar);
  },
};
