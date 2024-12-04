import { IControlProvider } from '@ibiz-template/runtime';

/**
 * 数据关系栏适配器
 *
 * @export
 * @class DRBarProvider
 * @implements {IControlProvider}
 */
export class DRBarProvider implements IControlProvider {
  component: string = 'IBizRouteDrBarControl';
}
