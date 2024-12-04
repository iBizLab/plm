import { registerPanelItemProvider } from '@ibiz-template/runtime';
import { withInstall } from '@ibiz-template/vue3-util';
import { App } from 'vue';
import KanbanOperate from './kanban-operate';
import { KanbanOperateProvider } from './kanban-operate.provider';

export * from './kanban-operate.controller';

export default {
  install(v: App) {
    v.component(KanbanOperate.name, KanbanOperate);
    registerPanelItemProvider(
      'FORM_USERCONTROL_KANBAN_OPERATE',
      () => new KanbanOperateProvider(),
    );
  },
};
