import { App } from 'vue';
import { registerEditorProvider } from '@ibiz-template/runtime';
import { TeamSelect } from './team-select';
import { TeamSelectProvider } from './team-select.provider';

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(v: App) {
    v.component(TeamSelect.name, TeamSelect);
    registerEditorProvider(
      'EDITOR_CUSTOMSTYLE_TEAM_SELECT',
      () => new TeamSelectProvider(),
    );
  },
};
