import { registerUIActionProvider } from '@ibiz-template/runtime';
import { FileUploadUIActionProvider } from './file-upload-uiaction-provider';

export function registerFileUploadProvider(): void {
  registerUIActionProvider(
    'DEUIACTION_FILE_UPLOAD',
    () => new FileUploadUIActionProvider(),
  );
}

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install() {
    registerFileUploadProvider();
  },
};
