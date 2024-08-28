import { App } from 'vue';
import { withInstall } from '@ibiz-template/vue3-util';
import { registerToolbarItemProvider } from '@ibiz-template/runtime';
import { ShowModeToolbarItem } from './show-mode-toolbar-item';
import { ShowModeToolbarItemProvider } from './show-mode-toolbar-item-provider';

export const IBizShowModeToolbarItem = withInstall(
  ShowModeToolbarItem,
  function (v: App) {
    v.component(ShowModeToolbarItem.name, ShowModeToolbarItem);
    registerToolbarItemProvider(
      'TOOLBAR_ITEM_SHOW_MODE_TOOLBAR_ITEM',
      () => new ShowModeToolbarItemProvider(),
    );
  },
);

export default IBizShowModeToolbarItem;
