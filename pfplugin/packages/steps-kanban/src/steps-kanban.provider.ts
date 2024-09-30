import { IControlProvider } from '@ibiz-template/runtime';
/**
 * 看板（kanban）部件适配器
 *
 * @export
 * @class StepsKanbanProvider
 * @implements {IControlProvider}
 */
export class StepsKanbanProvider implements IControlProvider {
  component: string = 'IBizStepsKanbanControl';
}
