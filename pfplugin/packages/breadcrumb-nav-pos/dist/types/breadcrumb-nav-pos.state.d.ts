import { NavPosState } from '@ibiz-template/vue3-util';
import { IBreadcrumb } from './interface';
/**
 * 面包屑导航占位状态
 *
 * @export
 * @class NavPosState
 * @extends {PanelItemState}
 */
export declare class BreadcrumbNavPosState extends NavPosState {
    /**
     * 面包屑数据
     *
     * @type {IBreadcrumb[]}
     * @memberof BreadcrumbNavPosState
     */
    breadcrumb: IBreadcrumb[];
    /**
     * 显示面包屑
     *
     * @type {boolean}
     * @memberof BreadcrumbNavPosState
     */
    showBreadcrumd: boolean;
}
