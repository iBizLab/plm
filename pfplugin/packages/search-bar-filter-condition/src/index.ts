import { App } from 'vue';
import { registerEditorProvider } from '@ibiz-template/runtime';
import { IBizSearchBarFilterCondition } from './search-bar-filter-condition/search-bar-filter-condition';
import { SearchBarFilterConditionProvider } from './search-bar-filter-condition/search-bar-filter-condition.provider';

export default {
  install(app: App): void {
    app.component(
      IBizSearchBarFilterCondition.name,
      IBizSearchBarFilterCondition,
    );
    registerEditorProvider(
      'EDITOR_CUSTOMSTYLE_SEARCH_BAR_FILTER_CONDITION',
      () => new SearchBarFilterConditionProvider(),
    );
  },
};
