/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { App } from 'vue';
import { registerEditorProvider } from '@ibiz-template/runtime';
import { AttentionSelect } from './attention-select';
import { AttentionSelectProvider } from './attention-select.provider';

export default {
  install(v: App) {
    v.component('AttentionSelect', AttentionSelect);
    registerEditorProvider(
      'EDITOR_CUSTOMSTYLE_ATTENTION_SELECT',
      () => new AttentionSelectProvider(),
    );
  },
};
