/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { registerUIActionProvider } from '@ibiz-template/runtime';
import { AddAttentionProvider } from './add-attention.provider';

export default {
  install() {
    registerUIActionProvider(
      'DEUIACTION_REFRESH_LIST',
      () => new AddAttentionProvider(),
    );
  },
};
