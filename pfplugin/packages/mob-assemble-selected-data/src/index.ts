/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { registerUIActionProvider } from '@ibiz-template/runtime';
import { AssembleSelectedDataProvider } from './assemble-selected-data.provider';

export default {
  install() {
    registerUIActionProvider(
      'DEUIACTION_ASSEMBLE_SELECTED_DATA',
      () => new AssembleSelectedDataProvider(),
    );
  },
};
