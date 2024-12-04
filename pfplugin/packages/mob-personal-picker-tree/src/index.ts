import { registerControlProvider } from '@ibiz-template/runtime';
import { App, defineAsyncComponent } from 'vue';
import { ControlLoadingPlaceholder } from '@ibiz-template/vue3-util';
import { MobPersonalPickerTreeProvider } from './mob-personal-picker-tree.provider';

export const IBizMobPersonalPickerTree = {
  install: (v: App): void => {
    v.component(
      'IBizMobPersonalPickerTree',
      defineAsyncComponent({
        loader: () => import('./mob-personal-picker-tree'),
        loadingComponent: ControlLoadingPlaceholder,
        delay: 0,
      }),
    );
    registerControlProvider(
      'TREE_RENDER_MOB_PERSONAL_PICKER_TREE',
      () => new MobPersonalPickerTreeProvider(),
    );
  },
};

export default IBizMobPersonalPickerTree;
