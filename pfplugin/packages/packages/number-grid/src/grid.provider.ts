import { IControlProvider } from '@ibiz-template/runtime';

/**
 * 编号表格适配器
 *
 * @export
 * @class NumberGridProvider
 * @implements {IControlProvider}
 */
export class NumberGridProvider implements IControlProvider {
  component: string = 'IBizNumberGridControl';
}
