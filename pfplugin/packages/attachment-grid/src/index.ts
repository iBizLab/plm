import { App } from 'vue';
import { withInstall } from '@ibiz-template/vue3-util';
import { ControlType, registerControlProvider } from '@ibiz-template/runtime';
import { AttachmentGridControl } from './attachment-grid';
import { AttachmentGridProvider } from './attachment-grid.provider';

export const IBizAttachmentGridControl = withInstall(
  AttachmentGridControl,
  (v: App) => {
    v.component(AttachmentGridControl.name, AttachmentGridControl);
    registerControlProvider(
      `${ControlType.GRID}_RENDER_ATTACHMENT_GRID`,
      () => new AttachmentGridProvider(),
    );
  },
);

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizAttachmentGridControl);
  },
};
