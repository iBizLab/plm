import { registerEditorProvider } from '@ibiz-template/runtime';
import { App } from 'vue';
import { AutoRules } from './auto-rules';
import { AutoRulesProvider } from './auto-rules.provider';

export default {
  install(v: App): void {
    v.component(AutoRules.name, AutoRules);
    registerEditorProvider(
      'EDITOR_CUSTOMSTYLE_AUTO_RULES',
      () => new AutoRulesProvider(),
    );
  },
};
