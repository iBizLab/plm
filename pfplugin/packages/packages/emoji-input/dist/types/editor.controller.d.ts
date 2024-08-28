import { IHttpResponse } from '@ibiz-template/core';
import { EditorController, IViewConfig, IAcItemProvider } from '@ibiz-template/runtime';
import { IAppDEACMode, IDEACModeDataItem, IPicker } from '@ibiz/model-core';
/**
 * 数据选择编辑器控制器
 * @return {*}
 */
export declare class EmojiInputEditorController extends EditorController<IPicker> {
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
    /**
     * 自填列表项适配器
     *
     * @author zhanghengfeng
     * @date 2024-05-21 17:05:50
     * @type {IAcItemProvider}
     */
    acItemProvider?: IAcItemProvider;
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
     * @memberof EmojiInputEditorController
     */
    getServiceData(query: string, data: IData): Promise<IHttpResponse<IData[]>>;
    /**
     * 打开数据选择视图
     *
     * @param {IData} data 数据对象
     * @param {IData[]} selectedData 选中项集合
     * @returns {*}  {(Promise<IData[] | undefined>)}
     * @memberof EmojiInputEditorController
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
}
