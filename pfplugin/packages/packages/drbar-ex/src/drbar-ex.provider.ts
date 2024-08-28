import { IControlProvider } from '@ibiz-template/runtime';

/**
 * 数据关系栏适配器
 *
 * @export
 * @class DRBarExProvider
 * @implements {IControlProvider}
 */
export class DRBarExProvider implements IControlProvider {
  component: string = 'IBizDRBarExControl';
}
