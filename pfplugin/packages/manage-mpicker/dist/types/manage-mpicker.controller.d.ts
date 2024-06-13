import { IHttpResponse } from '@ibiz-template/core';
import { EditorController, IViewConfig, IButtonContainerState, ControllerEvent, EventBase } from '@ibiz-template/runtime';
import { IAppDEACMode, IDEACModeDataItem, ILayoutPanel, IPicker, IUIActionGroupDetail } from '@ibiz/model-core';
import { pickerEvent } from './manage-mpicker.event';
/**
 * 数据选择编辑器控制器
 * @return {*}
 * @author: zhujiamin
 * @Date: 2022-08-25 10:57:58
 */
export declare class ManageMPickerController extends EditorController<IPicker> {
    /**
     * 是否多选
     */
    multiple: boolean;
    /**
     *选择视图相关参数
     */
    pickupView: IViewConfig | null;
    /**
     *链接视图相关参数
     */
    linkView: IViewConfig | null;
    /**
     *值项
     */
    valueItem: string;
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
     * 不支持AC（根据编辑器类型得）
     */
    noAC: boolean;
    /**
     * 不支持按钮（根据编辑器类型得）
     */
    noButton: boolean;
    /**
     * 实体自填模式模型
     */
    deACMode: IAppDEACMode | undefined;
    /**
     * 自填数据项集合（已排除了value和text)
     */
    dataItems: IDEACModeDataItem[];
    objectIdField: string | undefined;
    objectNameField: string | undefined;
    objectValueField: string | undefined;
    itemLayoutPanel: ILayoutPanel | undefined;
    /**
     * 分组行为状态
     */
    groupActionState: IButtonContainerState;
    evt: ControllerEvent<pickerEvent>;
    protected getEventArgs(): Omit<EventBase, 'eventName'>;
    protected onInit(): Promise<void>;
    /**
     * 初始化noAc和noButton
     */
    initParams(): void;
    /**
     * 初始化选择视图相关参数
     */
    initPickupViewParams(): Promise<void>;
    /**
     * 初始化链接视图相关参数
     */
    initLinkViewParams(): Promise<void>;
    /**
     * 加载实体数据集数据
     *
     * @param {string} query 模糊匹配字符串
     * @param {IData} data 表单数据
     * @returns {*}  {Promise<IHttpResponse<IData[]>>}
     * @memberof PickerEditorController
     */
    getServiceData(query: string, data: IData): Promise<IHttpResponse<IData[]>>;
    /**
     * 打开数据选择视图
     *
     * @param {IData} data 数据对象
     * @param {IData[]} selectedData 选中项集合
     * @returns {*}  {(Promise<IData[] | undefined>)}
     * @memberof PickerEditorController
     */
    openPickUpView(data: IData, selectedData?: string): Promise<IData[] | undefined>;
    /**
     * 打开数据链接视图
     */
    openLinkView(data: IData): Promise<IData[] | undefined>;
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
     * 处理对象数据类型抛值
     * @param {IData} select
     * @return {*}
     * @author: zhujiamin
     * @Date: 2023-08-22 15:58:56
     */
    handleObjectParams(select: IData): IData;
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
     * 获取当前视图
     *
     * @return {*}
     * @memberof ManageMPickerController
     */
    getView(): any;
    /**
     * 收缩菜单
     *
     * @param {boolean} visible
     * @memberof ManageMPickerController
     */
    toggleMenu(visible: boolean): void;
}
