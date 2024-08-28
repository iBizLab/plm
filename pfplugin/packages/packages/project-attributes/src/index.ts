import { withInstall } from '@ibiz-template/vue3-util';
import { App } from 'vue';
import { registerControlProvider } from '@ibiz-template/runtime';
import { ProjectAttributesProvider } from './provider';
import ProjectAttributes from './project-attributes';

export const IBizProjectAttributes = withInstall(
  ProjectAttributes,
  // eslint-disable-next-line func-names
  function (v: App) {
    v.component(ProjectAttributes.name as string, ProjectAttributes);
    registerControlProvider(
      'EDITFORM_RENDER_PROJECT_ATTRIBUTES',
      () => new ProjectAttributesProvider(),
    );
  },
);

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    app.use(IBizProjectAttributes as any);
  },
};
