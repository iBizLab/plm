import { App } from 'vue';
import { registerEditorProvider } from '@ibiz-template/runtime';
import { DropdownSelectDateRange } from './mob-dropdown-select-daterange';
import { DropdownSelectDateRangeProvider } from './mob-dropdown-select-daterange.provider';

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(v: App) {
    v.component(DropdownSelectDateRange.name!, DropdownSelectDateRange);
    registerEditorProvider(
      'EDITOR_CUSTOMSTYLE_DROPDOWN_SELECT_DATERANGE',
      () => new DropdownSelectDateRangeProvider(),
    );
  },
};
