import { IControlProvider } from '@ibiz-template/runtime';

/**
 * 表格适配器
 *
 * @export
 * @class IBizWorkloadTableControl
 * @implements {IControlProvider}
 */
export class WorkloadTableProvider implements IControlProvider {
  component: string = 'IBizWorkloadTableControl';
}
