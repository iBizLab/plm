import { App } from 'vue';
import { registerEditorProvider } from '@ibiz-template/runtime';
import { IBizFilterCondition } from './filter-condition/filter-condition';
import { FilterConditionProvider } from './filter-condition/filter-condition.provider';

export default {
  install(app: App): void {
    app.component(IBizFilterCondition.name, IBizFilterCondition);
    registerEditorProvider(
      'EDITOR_CUSTOMSTYLE_FILTER_CONDITION',
      () => new FilterConditionProvider(),
    );
  },
};
