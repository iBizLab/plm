import { INavViewMsg } from '@ibiz-template/runtime';
/**
 * 面包屑数据接口
 *
 * @export
 * @interface IBreadcrumb
 * @extends {INavViewMsg}
 */
export interface IBreadcrumb extends INavViewMsg {
    /**
     * 标题
     *
     * @type {string}
     * @memberof IBreadcrumb
     */
    caption?: string;
}
