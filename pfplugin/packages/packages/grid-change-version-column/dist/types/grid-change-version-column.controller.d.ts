import { IHttpResponse } from '@ibiz-template/core';
import { GridFieldEditColumnController, IEditorContainerController } from '@ibiz-template/runtime';
import { IAppDEACMode, IDEACModeDataItem } from '@ibiz/model-core';
/**
 * 表格属性列(开启行编辑)控制器
 * @return {*}
 */
export declare class GridChangeVersionColumnController extends GridFieldEditColumnController implements IEditorContainerController {
    /**
     * 左侧绘制映射属性
     */
    leftMapField: string;
    /**
     * 右侧绘制映射属性
     */
    rightMapField: string;
    /**
     * listMap属性
     */
    listMapField: string;
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
     * 编辑器模型
     */
    editorModel: IParams;
    /**
     * 编辑器只读
     */
    editorReadonly: boolean;
    /**
     * 初始化方法，生成表格编辑项控制器
     *
     * @protected
     * @returns {*}  {Promise<void>}
     */
    protected onInit(): Promise<void>;
    /**
     * 初始化编辑器参数
     *
     * @protected
     * @returns {*}  {void}
     */
    initParams(): void;
    /**
     * 加载实体数据集数据
     *
     * @param {IData} data 表单数据
     * @param {IParams} tempParam 临时视图参数
     * @returns {*}  {Promise<IHttpResponse<IData[]>>}
     */
    getServiceData(data: IData, tempParam: IParams): Promise<IHttpResponse<IData[]>>;
}
