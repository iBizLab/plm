import { App } from 'vue';
import { registerEditorProvider } from '@ibiz-template/runtime';
import { AvatarUpload } from './avatar-upload';
import { AvatarUploadProvider } from './avatar-upload-provider';

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
  install(v: App) {
    v.component(AvatarUpload.name, AvatarUpload);
    registerEditorProvider(
      'EDITOR_CUSTOMSTYLE_AVATAR_UPLOAD',
      () => new AvatarUploadProvider(),
    );
  },
};
