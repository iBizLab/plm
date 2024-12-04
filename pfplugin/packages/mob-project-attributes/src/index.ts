import { withInstall } from '@ibiz-template/vue3-util';
import { App } from 'vue';
import { registerControlProvider } from '@ibiz-template/runtime';
import { MobProjectAttributesProvider } from './provider';
import MobProjectAttributes from './mob-project-attributes';

export const IBizMobProjectAttributes = withInstall(
  MobProjectAttributes,
  // eslint-disable-next-line func-names
  function (v: App) {
    v.component(MobProjectAttributes.name as string, MobProjectAttributes);
    registerControlProvider(
      'EDITFORM_RENDER_MOB_PROJECT_ATTRIBUTES',
      () => new MobProjectAttributesProvider(),
    );
  },
);

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    app.use(IBizMobProjectAttributes as any);
  },
};
