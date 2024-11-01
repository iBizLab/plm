import { App } from 'vue';
import { withInstall } from '@ibiz-template/vue3-util';
import { registerControlProvider } from '@ibiz-template/runtime';
import { MDCtrlTreeControl } from './mob-mdctrl-tree';
import { MDCtrlTreeProvider } from './mob-mdctrl-tree.provider';

export const IBizMDCtrlTreeControl = withInstall(
  MDCtrlTreeControl,
  function (v: App) {
    v.component(MDCtrlTreeControl.name!, MDCtrlTreeControl);
    registerControlProvider(
      'CUSTOM_MOB_MDCTRL_TREE',
      () => new MDCtrlTreeProvider(),
    );
  },
);

export default IBizMDCtrlTreeControl;
