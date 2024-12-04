import { registerUIActionProvider } from '@ibiz-template/runtime';
import { FileDownloadUIActionProvider } from './file-download-uiaction-provider';

export function registerFileDownloadProvider(): void {
  registerUIActionProvider(
    'DEUIACTION_FILE_DOWNLOAD',
    () => new FileDownloadUIActionProvider(),
  );
}

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install() {
    registerFileDownloadProvider();
  },
};
