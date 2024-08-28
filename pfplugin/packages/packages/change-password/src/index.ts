import { registerUIActionProvider } from '@ibiz-template/runtime';
import { ChangePasswordUIActionProvider } from './change-password-uiaction-provider';

export function registerChangePasswordProvider(): void {
  registerUIActionProvider(
    'DEUIACTION_CHANGE_PASSWORD',
    () => new ChangePasswordUIActionProvider(),
  );
}

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install() {
    registerChangePasswordProvider();
  },
};
