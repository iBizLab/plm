import { App } from 'vue';
import IBizShowModeGroupItem from './show-mode-toolbar-item';

export default {
  install(app: App): void {
    app.use(IBizShowModeGroupItem);
  },
};
