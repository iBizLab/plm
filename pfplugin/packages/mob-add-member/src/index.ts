/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { registerUIActionProvider } from '@ibiz-template/runtime';
import { AddTestMemberProvider } from './add-test-member.provider';

export default {
  install() {
    registerUIActionProvider(
      'DEUIACTION_ADD_TEST_MEMBER',
      () => new AddTestMemberProvider(),
    );
  },
};
