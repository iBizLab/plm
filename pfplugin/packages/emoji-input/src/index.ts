import { App } from 'vue';
import { withInstall } from '@ibiz-template/vue3-util';
import { registerEditorProvider } from '@ibiz-template/runtime';
import { EmojiInputEditorProvider } from './editor.provider';
import { EmojiInput } from './emoji-input';

export const IBizEmojiInput = withInstall(EmojiInput, function (v: App) {
  v.component(EmojiInput.name!, EmojiInput);

  registerEditorProvider(
    'EDITOR_CUSTOMSTYLE_EMOJI_INPUT',
    () => new EmojiInputEditorProvider(),
  );
});

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizEmojiInput);
  },
};
