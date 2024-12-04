import { App } from 'vue';
import { registerControlProvider } from '@ibiz-template/runtime';
import { DefaultExpandTreeExpBarProvider } from './default-expand-tree-exp-bar.provider';

export const register = (): void => {
  registerControlProvider(
    'CUSTOM_TREEEXPBAR_DEFAULT_EXPAND',
    () => new DefaultExpandTreeExpBarProvider(),
  );
};

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unused-vars
  install(app: App) {
    register();
  },
};
