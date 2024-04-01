import { App } from 'vue';
import { withInstall } from '@ibiz-template/vue3-util';
import {
  registerPanelItemProvider,
  registerErrorViewProvider,
} from '@ibiz-template/runtime';
import { CustomUserInfo } from './custom-user-info';
import { CustomUserInfoProvider } from './custom-user-info.provider';
import { ErrorHandler } from './error-handler';
import { View403 } from './403-view/403-view';

export const IBizCustomUserInfo = withInstall(
  CustomUserInfo,
  function (v: App) {
    v.component(CustomUserInfo.name, CustomUserInfo);
    registerPanelItemProvider(
      'CUSTOM_CUSTOM_AUTH_USERINFO',
      () => new CustomUserInfoProvider(),
    );
  },
);

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
  install(app: App) {
    app.use(IBizCustomUserInfo);

    // 自定义插件注入
    ibiz.util.error.register(new ErrorHandler());
    // 注册404错误视图
    registerErrorViewProvider('403', () => ({ component: View403 }));
  },
};
