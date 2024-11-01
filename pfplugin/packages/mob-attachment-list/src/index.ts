import { registerControlProvider } from '@ibiz-template/runtime';
import { AttachmentListProvider } from './mob-attachment-list.provider';

export function registerAttachmentProvider(): void {
  registerControlProvider(
    'CUSTOM_MOB_ATTACHMENT_LIST',
    () => new AttachmentListProvider(),
  );
}

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install() {
    registerAttachmentProvider();
  },
};
