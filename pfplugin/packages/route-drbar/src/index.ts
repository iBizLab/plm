import { App } from 'vue';
import IBizDRBarControl from './drbar';
import IBizDRTabControl from './drtab';

export default {
  install(app: App) {
    app.use(IBizDRBarControl);
    app.use(IBizDRTabControl);
  },
};
