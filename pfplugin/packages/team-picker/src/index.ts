import { App } from 'vue';
import { registerEditorProvider } from '@ibiz-template/runtime';
import { TeamPicker } from './team-picker';
import { TeamPickerProvider } from './team-picker.provider';

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(v: App) {
    v.component(TeamPicker.name, TeamPicker);
    registerEditorProvider(
      'EDITOR_CUSTOMSTYLE_TEAM_PICKER',
      () => new TeamPickerProvider(),
    );
  },
};
