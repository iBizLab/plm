import { IControlProvider } from '@ibiz-template/runtime';

/**
 * 甘特图适配器
 *
 * @export
 * @class GanttProvider
 * @implements {IControlProvider}
 */
export class ResourceGanttProvider implements IControlProvider {
  component: string = 'IBizResourceGanttControl';
}
