import { IAppDEACMode, IDEACModeDataItem, IPicker } from '@ibiz/model-core';
import { EditorController } from '@ibiz-template/runtime';
import { IHttpResponse } from '@ibiz-template/core';
export declare class TeamPickerController extends EditorController<IPicker> {
    /**
     * 当前应用是否拥有ORG_M统一资源权限,有则数据集添加组织，没有则不添加
     *
     * @memberof TeamPickerController
     */
    hasORG_M: boolean;
    /**
     * 是否显示个人
     *
     * @type {boolean}
     * @memberof TeamPickerController
     */
    showPerson: boolean;
    /**
     * 所属类型代码表映射
     *
     * @type {IData}
     * @memberof TeamPickerController
     */
    fillMap: IData;
    /**
     *自填模式sort排序
     *
     * @type {(string | undefined)}
     * @memberof TeamPickerController
     */
    sort: string | undefined;
    /**
     * 数据集codeName
     */
    interfaceName: string;
    /**
     *值项
     */
    valueItem: string;
    deACMode: IAppDEACMode | undefined;
    /**
     * 主键属性名称
     */
    keyName: string;
    /**
     * 主文本属性名称
     */
    textName: string;
    /**
     * 自填数据项集合（已排除了value和text)
     */
    dataItems: IDEACModeDataItem[];
    objectIdField: string | undefined;
    objectNameField: string | undefined;
    objectValueField: string | undefined;
    operatorMap: Map<any, any>;
    protected onInit(): Promise<void>;
    /**
     * 加载实体数据集数据
     *
     * @param {string} query 模糊匹配字符串
     * @param {IData} data 表单数据
     * @returns {*}  {Promise<IHttpResponse<IData[]>>}
     * @memberof TeamPickerController
     */
    getServiceData(query: string, data: IData, reader: string | null): Promise<IHttpResponse<IData[]>>;
    /**
     * 获取操作用户列表
     *
     * @memberof PersonelSelectController
     */
    getOperatorUserList(): Promise<void>;
}
