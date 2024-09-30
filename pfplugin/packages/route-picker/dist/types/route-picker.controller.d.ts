import { IHttpResponse } from '@ibiz-template/core';
import { EditorController, IButtonContainerState } from '@ibiz-template/runtime';
import { IAppDEACMode, IDEACModeDataItem, ILayoutPanel, IPicker, IUIActionGroupDetail } from '@ibiz/model-core';
import { RouteLocationNormalizedLoaded } from 'vue-router';
/**
 * 数据选择编辑器控制器
 * @return {*}
 * @author: zhujiamin
 * @Date: 2022-08-25 10:57:58
 */
export declare class RoutePickerController extends EditorController<IPicker> {
    /**
     * 主键属性名称
     */
    keyName: string;
    /**
     * 主文本属性名称
     */
    textName: string;
    /**
     * 数据集codeName
     */
    interfaceName: string;
    /**
     * 自填模式sort排序
     */
    sort: string | undefined;
    /**
     * 实体自填模式模型
     */
    deACMode: IAppDEACMode | undefined;
    /**
     * 自填数据项集合（已排除了value和text)
     */
    dataItems: IDEACModeDataItem[];
    /**
     * 分组行为状态
     *
     * @type {IButtonContainerState}
     * @memberof RoutePickerController
     */
    groupActionState: IButtonContainerState;
    /**
     * 后缀图标
     *
     * @type {string}
     * @memberof RoutePickerController
     */
    suffix: string;
    /**
     * 允许搜索
     *
     * @type {boolean}
     * @memberof RoutePickerController
     */
    enablesearch: boolean;
    /**
     * 允许缓存
     *
     * @type {boolean}
     * @memberof RoutePickerController
     */
    enableCache: boolean;
    /**
     * 路由属性标识
     *
     * @type {string}
     * @memberof RoutePickerController
     */
    routeKey: string;
    /**
     * 值变更模式
     *
     * @type {'ROUTECHANGE' | 'CONTEXTCHANGE'}
     * @memberof RoutePickerController
     */
    valueMode: 'ROUTECHANGE' | 'CONTEXTCHANGE';
    itemLayoutPanel: ILayoutPanel | undefined;
    /**
     * 当前视图
     *
     * @readonly
     * @type {(number)}
     * @memberof RoutePickerController
     */
    get currentView(): IData;
    /**
     * 当前路由视图的层级
     *
     * @readonly
     * @type {(number)}
     * @memberof RoutePickerController
     */
    get routeDepth(): number;
    /**
     * 当前视图重定向引用
     * @readonly
     * @type {(IData | undefined)}
     * @memberof RoutePickerController
     */
    get RedirectViewModel(): IData | undefined;
    protected onInit(): Promise<void>;
    /**
     * 加载实体数据集数据
     *
     * @param {string} query 模糊匹配字符串
     * @param {IData} data 表单数据
     * @returns {*}  {Promise<IHttpResponse<IData[]>>}
     * @memberof RoutePickerController
     */
    getServiceData(query: string, data: IData): Promise<IHttpResponse<IData[]>>;
    /**
     * 计算回填数据
     *
     * @author lxm
     * @date 2022-10-24 16:10:24
     * @param {IData} data 选中数据
     * @returns {*}  {Promise<Array<{ id: string; value: any }>>}
     */
    calcFillDataItems(data: IData): Promise<Array<{
        id: string;
        value: any;
    }>>;
    /**
     * 分组行为项点击
     *
     * @param {IUIActionGroupDetail} detail
     * @param {MouseEvent} event
     * @return {*}  {Promise<void>}
     * @memberof RoutePickerController
     */
    onActionClick(detail: IUIActionGroupDetail, event: MouseEvent): Promise<void>;
    /**
     * 获取路由主信息
     *
     * @param {RouteLocationNormalizedLoaded} route
     * @return {*}
     * @memberof RoutePickerController
     */
    getRouteKey(route: RouteLocationNormalizedLoaded, items: IData[], isinit?: boolean): Promise<string>;
}
