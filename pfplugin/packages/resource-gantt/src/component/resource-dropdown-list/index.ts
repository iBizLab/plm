import { registerPanelItemProvider } from '@ibiz-template/runtime';
import { App } from 'vue';
import { withInstall } from '@ibiz-template/vue3-util';
import { ResourceDropdownList } from './resource-dropdown-list';
import { Provider } from './provider';

export const IBizResourceDropdownList = withInstall(
  ResourceDropdownList,
  function (v: App) {
    v.component(ResourceDropdownList.name!, ResourceDropdownList);
    registerPanelItemProvider(
      'CUSTOM_RESOURCE_DROPDOWN_LIST',
      () => new Provider(),
    );
  },
);

export default IBizResourceDropdownList;
