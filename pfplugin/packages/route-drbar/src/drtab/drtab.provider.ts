import { IControlProvider } from '@ibiz-template/runtime';

/**
 * 数据关系分页适配器
 *
 * @export
 * @class DRTabProvider
 * @implements {IControlProvider}
 */
export class DRTabProvider implements IControlProvider {
  component: string = 'IBizRouteDrTabControl';
}
